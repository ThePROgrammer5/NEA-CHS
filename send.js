var templateParams = {
    data: 'James',
  };
  
function send() {
      emailjs.send('service_fx6rflw', 'template_rbexvti', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}

function createData() {
  let ip = GeolocationPosition(Kermit);
}

function getIP() {
  $.getJSON("https://api.ipify.org?format=json",
            function (data) {
 
                return data.ip;
            })
}