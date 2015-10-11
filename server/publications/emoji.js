Meteor.publish("emoji", function(){
  return Emoji.find({});
});
