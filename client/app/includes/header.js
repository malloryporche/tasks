Template.Header.events({
	//When form is submitted via Enter
	'keypress input.newBoard': function(e, tmpl) {
		 if (e.which === 13) {
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var formEl = tmpl.find('form');
		var boardTitleElement = tmpl.find('[name=addNewBoard]');
		var boardTitle = boardTitleElement.value;
	
		//Append board id to taskListId
		Boards.insert({
			title: boardTitle,
			timestamp: new Date,
			boardId: this._id
		});

		//Clear form
		formEl.reset();

	}
}
});
