//cards v.0.2
//game.js
//controls the game's logic, inventory, and global variables

//initialize - current location is 0
function init() {
  goTo(0);
  $('#Yes, #No').show();
  $('#Restart').hide();
}

//this is when user reaches end of tree
function end() {
  $('#Yes, #No').hide();
  $('#Restart').show();
}

function goTo(nextLocation) {
  updateStatus(cards[nextLocation].status);
  updateMessage(cards[nextLocation]);
  currentLocation = nextLocation;
}

//prints message onto the message div
function updateMessage(message) {
  var message = message;
  $('#message').empty();
  $('#message').append('<p>' + message + '</p>');
}

function updateStatus(status) {
  var status = status;
  $('#statusTitle').empty();
  $('#statusTitle').append(status);
}