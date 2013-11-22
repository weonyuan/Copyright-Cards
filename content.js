//cards v.0.2
//content.js

//Card prototype
function Card(_id, _name, _description, _status) {
  //Attributes
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.status = _status;
  
  this.toString1 = function() {
    var returnVal = "";
    returnVal = statuses[this.status].name;
    return returnVal;
  }
  
  this.toString = function() {
    var returnVal = "";
    returnVal = this.description;
    return returnVal;
  }
  
  this.iconChange = function() {
    var newIcon = statuses[this.status].icon;
    return newIcon;
  }
  
  this.displayCard = function() {
    var card = '<div id="displayCard" style="width: 400px;height: 200px;border: 1px solid #777;padding: 10px;"><div id="status"><div id="icon"></div><div id="statusTitle"></div></div><div id="message" style="text-align: center;"></div><div id="cardControls" style="text-align: center;"><button id="Yes" onclick="btn_command(yes);">Yes</button><button id="No" onclick="btn_command(no);">No</button><button id="Restart" onclick="init();">Restart</button></div></div>';
    $('body').append(card);
  }
}

function Status(_id, _name, _icon) {
  this.id = _id;
  this.name = _name;
  this.icon = _icon;
}

var statuses_0 = new Status();
statuses_0.id = 0;
statuses_0.name = "Question";
statuses_0.icon = "question.png";

var statuses_1 = new Status();
statuses_1.id = 1;
statuses_1.name = "Great!";
statuses_1.icon = "checkmark.png";

var statuses_2 = new Status();
statuses_2.id = 2;
statuses_2.name = "Good!";
statuses_2.icon = "checkmark.png";

var statuses_3 = new Status();
statuses_3.id = 3;
statuses_3.name = "Caution";
statuses_3.icon = "caution.png";

//Card instances
var cards_0 = new Card();
cards_0.id = 0;
cards_0.name = "Ask about Library Resources";
cards_0.description = "Did you access the Library Resources?";
cards_0.status = 0;

var cards_1 = new Card();
cards_1.id = 1;
cards_1.name = "Library Resources Confirmation";
cards_1.description = "Did you find the resources?";
cards_1.status = 0;

var cards_2 = new Card();
cards_2.id = 2;
cards_2.name = "Fox Hunt and Library Website";
cards_2.description = "Fox Hunt and Library website.";
cards_2.status = 3;

var cards_3 = new Card();
cards_3.id = 3;
cards_3.name = "END - Library Resources Confirmed";
cards_3.description = "Congratulations.";
cards_3.status = 1;

var cards_4 = new Card();
cards_4.id = 4;
cards_4.name = "Ask about Creative Commons";
cards_4.description = "Have you checked out the Creative Commons?";
cards_4.status = 0;

var cards_5 = new Card();
cards_5.id = 5;
cards_5.name = "Creative Commons Confirmation";
cards_5.description = "Did you find what you were looking for in the " +
                      "Creative Commons?";
cards_5.status = 0;

var cards_6 = new Card();
cards_6.id = 6;
cards_6.name = "END - Creative Commons Website";
cards_6.description = "Go to the Creative Commons website.";
cards_6.status = 3;

var cards_7 = new Card();
cards_7.id = 7;
cards_7.name = "END - Creative Commons Confirmed";
cards_7.description = "Congratulations.";
cards_7.status = 2;

var cards_8 = new Card();
cards_8.id = 8;
cards_8.name = "Contact Librarian";
cards_8.description = "Do you want to the contact the librarian?";
cards_8.status = 0;

var cards_9 = new Card();
cards_9.id = 9;
cards_9.name = "END - Ask a Librarian";
cards_9.description = "Ask a Librarian site.";
cards_9.status = 3;

var cards_10 = new Card();
cards_10.id = 10;
cards_10.name = "Ask about Copyright Clearance Form";
cards_10.description = "Get Copyright Clearance form (explain why and how)?";
cards_10.status = 0;

var cards_11 = new Card();
cards_11.id = 11;
cards_11.name = "END - Provide Copyright Clearance Form";
cards_11.description = "Marist Copyright Clearance Request Form site.";
cards_11.status = 3;

var cards_12 = new Card();
cards_12.id = 12;
cards_12.name = "Ask about Fair Use Checklist";
cards_12.description = "Have you checked the Fair Use checklist?";
cards_12.status = 0;

var cards_13 = new Card();
cards_13.id = 13;
cards_13.name = "END - Provide Checklist Pay";
cards_13.description = "Checklist pay (with warning).";
cards_13.status = 3;

var cards_14 = new Card();
cards_14.id = 14;
cards_14.name = "END - Check the copyright";
cards_14.description = "Nope.";
cards_14.status = 3;