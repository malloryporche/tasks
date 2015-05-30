Template.addNewTaskList.events({
	'submit form': function(e, tmpl) {
		
		//Prevent default submission of form
		e.preventDefault();

		//Get access to form itself
		var formElement = tmpl.find('form');
		var taskListTitleElement = tmpl.find('[name=newTask]');
		var taskListTitle = taskListTitleElement.value;
		

		function splitURLtoString(stringtoSplit, separator) {
			var boardId = stringtoSplit.split(separator);

			console.log(boardId[2]);

		}
		var stringPathName = window.location.pathname;

		var forwardSlash = "/"; 

		console.log(window.location);
		console.log(stringPathName);

		var boardId = splitURLtoString(stringPathName, forwardSlash)


		TaskLists.insert({
			title: taskListTitle,
			timestamp: new Date,
			boardId: boardId

		});

		formElement.reset();

	}
});