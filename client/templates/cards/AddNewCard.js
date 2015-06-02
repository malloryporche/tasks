Template.AddNewCard.events({
	//When form is submitted via Enter
	'keypress input.AddNewCard': function(e, tmpl) {
		 if (e.which === 13) {
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var form = tmpl.find('form');
		var CardValue = tmpl.find('.AddNewCard');
		var cardTitle = CardValue.value;
	
		debugger 

		//Append boardId and taskListId
		Cards.insert({
			title: cardTitle,
			timestamp: new Date,
			boardId: this.boardId,
			tasklistId: this._id,
			boardTitle: this.title
		});

		//Clear form
		form.reset();

	}
}
});