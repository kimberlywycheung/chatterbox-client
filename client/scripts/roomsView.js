// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $option: $('#rooms select option'),
  current: '',

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //debugger;
    if (Rooms._data.length > 1) {
      render();
    }
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //do something with $select
    //selected = false
    //make an onclick
      //sets selected = true
    var roomSelection = _.template(`
      <option value="<%- roomname%>" selected='false'>
        <%- roomname%>
      </option>
    `);

    // iteraete through rooms array
    for (let i = 0; i < Rooms._data.length; i++) {
      // for each room, append it to $select
      RoomsView.$select.append(roomSelection({roomname: Rooms._data[i]}));
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //do something with $select
    //render out all messages of single room
    RoomsView.current = roomname;
    MessagesView.render();
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // get input vlue from '#rooms select'
    // run renderRoom for sleected room


  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // $button
    // room.add

  }

};
