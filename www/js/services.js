angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory("Videos", function () {
  var videos = [
    {"title":"movie1","url":"img/poster001.jpg","id":"1"},
    {"title":"movie2","url":"img/poster002.jpg","id":"2"},
    {"title":"movie3","url":"img/poster003.jpg","id":"3"},
    {"title":"movie4","url":"img/poster004.jpg","id":"4"},
    {"title":"movie5","url":"img/poster005.jpg","id":"5"},
    {"title":"movie6","url":"img/poster006.jpg","id":"6"},
  ];
  return {
    all: function() {
      return videos;
    },
    get: function(vid) {
      //console.log(vdata);
      for (var i = 0; i < videos.length; i++) {
        if (videos[i].id === vid) {
          return videos[i];
        }
      }
      return null;
    }
  };
})



;
