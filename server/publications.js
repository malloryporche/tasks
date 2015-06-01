Meteor.publishComposite('allLists', {
    find: function() {
        // Find all Boards
        return Boards.find({});
    },
    find: function() {
        //Find all Task Lists
        return TaskLists.find({});
    },
    children: [
    /* return all related Cards */
        {
            find: function(tasklists) {
                console.log('tasklists._id');
                // Find all Cards associated with each Tasklist
                return Cards.find({ 
                    id: this._id});
            }
        }
    ]
}
)

Meteor.publish('boards', function() {
    return Boards.find({});
});
Meteor.publish('tasklists', function() {
    return TaskLists.find({});
});
Meteor.publish('cards', function() {
    return Cards.find({});
});