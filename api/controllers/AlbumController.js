'use strict';

var util = require('util');

module.exports = {
    getListOfAlbum: getListOfAlbum,
    getListOfAlbumMusic: getListOfAlbumMusic
};

function getListOfAlbumMusic(req, res){
    let id = parseInt(req.swagger.params.id.value);
    let tempList = [];
    switch (id) {
        case 0:
          tempList = ['A', 'B', 'C'];
          break;
        case 1:
          tempList = ['D', 'E', 'F'];
          break;
        case 2:
          tempList = ['G', 'H', 'I'];
          break;
    }
    res.json({"list": tempList});
}

function getListOfAlbum(req, res) {
  res.json({"list": [
      {id: 0, title: "Album 01"},
      {id: 1, title: "Album 02"},
      {id: 2, title: "Album 01"},
  ]});
}
