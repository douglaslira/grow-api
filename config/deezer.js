var http = require('http');
var request = require('request');
var async = require('async');
var deezerUrl = 'http://api.deezer.com/';

module.exports = {

    album: function(albumId, callback) {
        this.requestData('album/' + albumId, callback);
    },

    albumComments: function(albumId, callback) {
        this.requestData('album/' + albumId + "/comments", callback);
    },

    albumFans: function(albumId, callback) {
        this.requestData('album/' + albumId + "/fans", callback);
    },

    albumTracks: function(albumId, callback) {
        this.requestData('album/' + albumId + "/fans", callback);
    },

    artist: function(artistId, callback) {
        this.requestData('artist/' + artistId, callback);
    },

    artistTop: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/top", callback);
    },

    artistAlbums: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/albums", callback);
    },

    artistComments: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/comments", callback);
    },

    artistFans: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/fans", callback);
    },

    artistRelated: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/related", callback);
    },

    artistRadio: function(artistId, callback) {
        this.requestData('artist/' + artistId + "/radio", callback);
    },

    track: function(trackId, callback) {
        this.requestData('track/' + trackId, callback);
    },

    requestData: function(uri, callback) {

        async.waterfall([

            function(callback){

                request(deezerUrl + uri, function(error, response, body) {

                    if (error) {
                        return callback(error);
                    } else {
                        callback(null, JSON.parse(body));
                    }

                });

            }

        ], function (error, result) {
            callback(error, result);
        });


    }

}