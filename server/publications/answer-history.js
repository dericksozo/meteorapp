Meteor.publish("answerhistory", function(){
  return AnswerHistory.find();
});
