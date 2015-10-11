Meteor.Meteor.publish("questions", function(){
  return Questions.find();
});
