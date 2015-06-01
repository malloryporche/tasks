Template.addNewTaskList.events({
	//When form is submitted
	'submit form': function(e, tmpl) {
		
		//Prevent default submission of form
		e.preventDefault();

		//Get access to form itself
		var formElement = tmpl.find('form');
		var taskListTitleElement = tmpl.find('[name=newList]');
		var taskListTitle = taskListTitleElement.value;
	
		//Append board id to taskListId
		TaskLists.insert({
			title: taskListTitle,
			timestamp: new Date,
			boardId: this._id
		});

		//Clear form
		formElement.reset();

	}
});
