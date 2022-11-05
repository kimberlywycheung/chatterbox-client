// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  _data: {}, // should house all messages by all users
  //{key: the text in the message}

  initialize: (data) => { // should fill messages obj with API data
    for (var i = 0; i < data.length; i++) {
      Messages._data[i] = data[i];
    }
  },

  createMessage: (message) => {
    var obj = {
      username: App.username,
      text: message,
      roomname: 'testRoomname'
    };

    Parse.create(obj, () => {console.log('we posted to api!');});

    return;
  },

  retrieve: (username) => {
  },

  update: () => {
    //look through messages
    //if

  },

  // may not need
  // delete = () => {

  // };

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
};

/**
  store the _data in some kind of data structure
  add functions to messages to
    retrieve the data
    add to the data
    however we generally interact

    maybe we include some way to look thru the message and make sure it doesn't contain an XSS attack...?
      for an XSS attack to be successful, attacker has to insert and execute their code into the webpage
        -CHECK VARIABLES
          -ESCAPE or SANITIZE them
        check the framework of the entire code or something like that
      an example -
      <div> <script>console.log('hahahaha')</script></div>

  WE WANT TO PROTECT OUR MESSAGES or like protect the website from messages that people could send in

  man this is nothing like twiddler
*/