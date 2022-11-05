// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class ="username"><%- username %></div>
        <div class ="text"><%- text %></div>
        <div></div>
      </div>
    `)

};
//<div class = <%= roomname %>><%= roomname %></div>

/*
  render single messages
  I think it's commented out right now because of the <!-- -->

  FROM THE underscore website
  TEMPLATE

  Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>.

  so template kind of turns it into something that can be rendered
  we put our data objects in the <%- ... %>

  render what the exact message is <%- "messageText" %>
  username (very likely) different for each person <%- username %>
*/