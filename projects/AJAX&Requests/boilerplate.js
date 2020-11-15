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


// Fetch boilerplate code...

fetch('https://api-to-call.com/endpoint')
// fetch returns a Promise - our success callback function.  
// If the response is OK, return the JSON that came back
  .then(
    response => {
    if (response.ok) {
      return response.json();
      }
      // if the response is not OK, throw an error and log it to the console
      throw new Error('Request failed!');
      }, 
    networkError => {
      console.log(networkError.message);
      })
  // This callback function will only run after our first callback method has finished
  // It will also not run if we throw an error    
  .then(
    jsonResponse => {
    return jsonResponse;
  })

  // --------------- fetch() Example ----------------
  // AJAX function
  const getSuggestions = () => {
    const wordQuery = inputField.value;
    const endpoint = url + queryParams + wordQuery;
    
    fetch(endpoint, {cache:'no-cache'})
      .then(
        response => {
        if (response.ok){
          // By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.
          return response.json();
          }
          throw new Error('Request failed!');
        }, 
        // The then() declares both a "success" arrow function and a "failure" arrow function
        // So....if the fetch() Promise resolves, the first arrow function will called (the one that takes the response as an argument)
        // If fetch() Promise rejects, the second arrow function will be called (the one that takes the networkError as an argument)
        networkError => {
          console.log(networkError.message);
        })
        .then(jsonResponse => {
          renderResponse(jsonResponse)
        } );

        // So....in the code above we created the query URL, called the fetch() function 
        // and passed it the query URL and a settings object. 
        // Then, we chained a .then() method and passed it two functions as arguments:
        // one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.
        // IMPORTANT NEXT STEP:
        // We know if the first then() resolves, it will pass it's Promise on to the second .then()
        // Since the first then() returns response.json() - our raw JSON object - we can take it in as the argument
        // to our "success" anonymous arrow function, which takes the JSON and passes it to the renderResponse()

        // SO.....
        // We call fetch() with a URL - it creates a Promise
        //    if the Promise resolves, ie the URL call is successful, 
        //    then() we return the JSON response we get back
        //    if it fails, we log a network error
        //    then() also returns a Promise, so we can chain a new then() to the first one
        //    So our second then() is set up to call a second anonymous arrow function when the first then() resolves
        //    We use the second then() to call a second anon arrow function which cleans up the raw JSON object
        //    by calling a custom function
  }
  

  