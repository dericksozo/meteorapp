Meteor.startup(function(){
  if (Emoji.find({}).count() == 0)
  {
    console.log('loading emojis');
    Assets.getText('emoji.json', function(err, data) {
      var content = EJSON.parse(data);

      for (emoji in content) {
        Emoji.insert(content[emoji]);
      }
    });
    console.log('loading emojis complete');
  }

  if (Questions.find({}).count() == 0)
  {
    console.log('loading questions');
    Questions.insert({question: ':sunglasses::cop:', answer: 'cool cop', hint: 'aflac', submittedBy: 'Memoji Team', lastseen: new Date().valueOf()});
    console.log('loading questions complete');
  }
});
