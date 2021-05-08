# chat
Just a simple chat to play "Who Am I?"

## Install dependencies
```
yarn install
```

## Setup socket.io URL
Edit the _./public/index.html_ file, on line _60_, and change the URL to _http://localhost:3000/_
```javascript
...
59  var author = $('input[name=username]').val();
60  socket = io('http://localhost:3000/', { query: `author=${author}` });
61
62  socket.on('connectedUsers', function (users) {
...
```

## Start the application
```
node backend/index.js
```

## Access the web page on _http://localhost:3000/_
