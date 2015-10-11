Meteor.methods({
  // Create new question
  createQuestion:function(question, answer, hint){
    var lastQuestion = Questions.findOne({},{sort: {lastUsed: 1}});
    var winningAnswer = AnswerHistory.findOne({question: lastQuestion._id, answer: lastQuestion.answer},{sort: {lastUsed: 1}});

    if (winningAnswer.userid)
    {
      Questions.insert({question: question, answer: answer, hint: hint});
    } else {
      // Use s-alert
      console.log('Only the last winner can submit a new challenge');
    }
  },
  // Validates answer
  checkAnswer:function(guess){
    var currentQuestion = Questions.findOne({},{sort: {lastUsed: 1}});
    var result = guess == currentQuestion.answer;

    Questions.update({_id: currentQuestion._id}, {$addToSet: {answers: guess}});

    if (result) {
      // start 10 min timer
      Meteor.users.update({_id: Meteor.userId()}, {$inc: {points: 5}});
      Questions.update({_id: currentQuestion._id}, {answers: []});
    }

    return result;
  }
});
