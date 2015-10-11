Emoji = new Mongo.Collection("emoji");
Emoji.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});
