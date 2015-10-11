Meteor.subscribe("emoji");

Template.emojiSelector.helpers({
    getEmojiList: function () {
        return Emoji.find({category: 'places'});
    }
});
