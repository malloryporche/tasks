Boards = new Mongo.Collection('boards');
TaskLists = new Mongo.Collection('tasklists');


if (Meteor.isClient) {
  
  Template.boardsList.helpers({ 
  boards: function() {
    return Boards.find()
    }
  });

  Template.boardPage.helpers({
  	TaskLists: function() {
  		return TaskLists.find({ boardId: this._id});
  	}
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
