Meteor.subscribe("emoji");

Template.emojiSelector.helpers({
    getEmojiList: function () {
        return Emoji.find({category: 'places'});
    }
});

Template.emojiSelector.events({
  'click .emoji': function(e, t) {
    console.log(this.shortname);
  }
})
