AnswerHistory = new Mongo.Collection("answerhistory");
AnswerHistory.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
