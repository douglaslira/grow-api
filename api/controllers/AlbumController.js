'use strict';

var util = require('util');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const deezer = require('../../config/deezer');

module.exports = {
    getListOfAlbum: getListOfAlbum,
    getListOfAlbumMusic: getListOfAlbumMusic
};

const loadAlbumMucis = (id, callback) => {
    return deezer.album(id, function(error, musics){
        callback(musics);
    })
};

function getListOfAlbumMusic(req, res){
    let id = parseInt(req.swagger.params.id.value);
    loadAlbumMucis(id, function(musics){
        res.json(musics.tracks);
    });
}

const loadAlbuns = (id, callback) => {
    return deezer.artistAlbums(id, function(error, albums) {
       callback(albums);
    });
};

function getListOfAlbum(req, res) {
    loadAlbuns(16124, function(albums){
        res.json({"list": albums.data});
    });
}
