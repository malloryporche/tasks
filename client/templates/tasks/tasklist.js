Template.TaskList.events({
	//When form is submitted via Enter
	'keypress input#newCard': function(e, tmpl) {
		 if (e.which === 13) {
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var form = tmpl.find('form');
		var CardValue = tmpl.find('[name=addNewCard]');
		var cardTitle = CardValue.value;
	
		//Append boardId and taskListId
		Cards.insert({
			title: cardTitle,
			timestamp: new Date,
			boardId: board._id,
			tasklistId: this._id
		});

		//Clear form
		form.reset();

	}
}
});