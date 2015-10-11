Meteor.startup(function(){
  if (Emoji.find({}).count() == 0)
  {
    Assets.getText('emoji.json', function(err, data) {
      var content = EJSON.parse(data);

      for (emoji in content) {
        Emoji.insert(content[emoji]);
      }
    });
  }
});
