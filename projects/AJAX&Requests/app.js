// AJAX!  --  Boilerplate GET AJAX code --

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

// annonymous arrow function
xhr.onreadystatechange = () => {
  // check first to see if the http request has finished before we return the HTTP response
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

// Open an HTTP request, and use the GET method to fetch the url associated with the 'url' variable set earlier
xhr.open('GET',url);

xhr.send();

// -----------------------------------------------------------------------

// XML -----  POST Boilerplate code...
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

// This will take a JSON object and convert it to a string so we can send it as the payload
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);