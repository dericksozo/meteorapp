Meteor.subscribe("emoji");

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
