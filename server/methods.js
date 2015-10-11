Meteor.methods({
  // Create new question
  createQuestion:function(question, answer, hint){
    var lastQuestion = Questions.findOne({},{sort: {lastUsed: 1}});
    var winningAnswer = AnswerHistory.findOne({question: lastQuestion._id, answer: lastQuestion.answer},{sort: {lastUsed: 1}});

    if (winningAnswer.userid)
    {
      Questions.insert({question: question, answer: answer, hint: hint});
    } else {
      console.log('Only the last winner can submit a new challenge');
    }
  },
  // Validates answer
  checkAnswer:function(guess){
    // if correct, notify the user, redirect to question submit, and start 10 min timer, add answer to answer history
    // if incorrect, notify the user, add answer to answer history
    var currentQuestion = Questions.findOne({},{sort: {lastUsed: 1}});
  }
});
