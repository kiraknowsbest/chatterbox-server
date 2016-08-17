/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var utils = require('./utils');

var objectId = 0;
var messages = [];

var actions = {
  'GET': function ( request, response ) {
    utils.sendResponse(response, {results: messages});
  },
  'POST': function ( request, response ) {
    utils.collectData( request, function ( message ) {
      message.objectId = ++objectId;
      messages.push( message );
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  'OPTIONS': function ( request, response ) {
    utils.sendResponse(response, null);
  }
};

exports.requestHandler = utils.makeActionHandler( actions );



// Fred deleted this code from his solution and altered by calling utils.makeActionHandler
// module.exports = function(request, response) {
  
//   var action = actions[request.method];
//     if ( action ) {
//       action( request, response );
//     } else {
//       utils.sendResponse( response, 'Not Found', 404);
//     }

// };

  // Request and Response come from node's http module.

/*



REQUEST:  { url: '/classes/messages',
  method: 'POST',
  _postData: { username: 'Jono', message: 'Do my bidding!' },
  setEncoding: [Function],
  on: [Function: bound ],
  addListener: [Function: bound ] }

RESPONSE:  { _ended: false,
  _responseCode: null,
  _headers: null,
  _data: null,
  writeHead: [Function: bound ],
  end: [Function: bound ] }



*/
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.

//   var storage = [];
//   var headers = defaultCorsHeaders;
//   var method = request.method;
//   var url = request.url;
//   var body = [];
  
//   // var requestParams = {method: 'POST',
//   //   url: 'http://127.0.0.1:3000/classes/messages',
//   //   json: {
//   //     username: 'Jono',
//   //     message: 'Do my bidding!'}
//   // };

//   //the outgoing status
//   // The outgoing status.

//   // See the note below about CORS headers.

//   // Tell the client we are sending them plain text.
//   //
//   // You will need to change this if you are sending something
//   // other than plain text, like JSON or HTML.
//   // .writeHead() writes to the request line and headers of the response,
//   // which includes the status and all headers.


//   var createResponse = function (request, response) {
//     var statusCode = 200;
//     headers['Content-Type'] = 'application/json';
//     response.statusCode = statusCode;

//     if ( method === 'POST' && url === '/classes/messages' ) {
//       statusCode = 201;
//       storage.push({
//         username: request.json.username,
//         message: request.json.message
//       });
      
//     } else if ( method === 'GET' && url === '/classes/messages' ) {
    
//     }
//     body = storage;

//     var responseBody = {
//       headers: headers,
//       method: method,
//       url: url,
//       results: body
//     };

//     sendResponse( responseBody );

//   };

//   var sendResponse = function ( resBody ) {
//     response.end(JSON.stringify( resBody ));
//   };
//   // body of response is stringified to JSON
//   // Make sure to always call response.end() - Node may not send
//   // anything back to the client until you do. The string you pass to
//   // response.end() will be the body of the response - i.e. what shows
//   // up in the browser.
//   //
//   // Calling .end "flushes" the response's internal buffer, forcing
//   // node to actually send all the data over to the client.


//   request.on('error', function (error) {
//     statusCode = 404;
//     console.error(error);
//   }).on('data', function (data) {
//     body.push(data);
//   }).on('end', function() {
//     body = Buffer.concat(body).toString();
//     createResponse( request, response );
//   });

//   response.on('error', function (error) {
//     statusCode = 404;
//     console.error(error);
//   });


// };

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.