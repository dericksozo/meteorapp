Meteor.subscribe("emoji");

Template.question.helpers({
  question: function() {
    console.log(Questions.findOne({}, {sort: {submittedBy: 1}}));
    return Questions.findOne({}, {sort: {submittedBy: 1}});
  }
});

Template.question.events({
  'click .js-submit-answer': function (e, t) {
    e.preventDefault();
    Meteor.call('checkAnswer', $('.answer-input').val(), function(err, res) {
      if (res == true) {
        sAlert.success("You got the answer!");
      } else {
        sAlert.error("Wrong answer. Try again.");
      }
    });
  }
});

Template.emojiSelector.helpers({
    getEmojiList: function () {
        var category = Session.get('category') || 'places';
        return Emoji.find({category: category});
    },
    selectedEmojis: function () {
        var selectedEmoji = Session.get('selectedEmoji') || '';
        return selectedEmoji;
    }
});

Template.emojiSelector.events({
    'click .js-change-category': function (event) {
        event.preventDefault();
        var category = event.toElement.dataset.category;
        Session.set('category', category);
    },
    'click .emoji': function (event) {
        var selectedEmoji = Session.get('selectedEmoji') || '';
        selectedEmoji = selectedEmoji + this.shortname + ' ';
        Session.set('selectedEmoji', selectedEmoji);
    }
});

Template.form.events({
    'submit': function (event) {
    }
});

Meteor.subscribe('questions');
