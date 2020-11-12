// AJAX!  --  Boilerplate AJAX code --

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