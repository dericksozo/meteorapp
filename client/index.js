Template.emojiSelector.helpers({
    getEmojiList: function () {
        var emojis = [];
        for (var emoji in emojione.emojioneList) {
            if (emojione.emojioneList.hasOwnProperty(emoji)) {
                emojis.push(emoji);
            }
        }
        return emojis;
    }
});