// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //call render on stored messages
    if (Messages._data.length > 1) {
      render();
    }
  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (let key in Messages._data) {
      if (Rooms._selected) {
        if (Messages._data[key].roomname === Rooms._selected) {
          MessagesView.renderMessage(Messages._data[key]);
        }
      } else {
        MessagesView.renderMessage(Messages._data[key]);
      }
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    MessagesView.$chats.append(MessageView.render(({username: message.username, text: message.text})))
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};

/** render messages that were fetched from server
 *
 * render all messages... look through every message and use rendermessage
 *
 * use render from messageview since it already has template for individual messages
  */