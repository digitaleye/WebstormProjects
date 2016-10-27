/**
 * Created by fjatori on 9/28/2016.
 */
var io = require('socket.io-client');
var ss = require('socket.io-stream');

var socket = io.connect('http://example.com/user');
var stream = ss.createStream();
var filename = 'profile.jpg';

ss(socket).emit('profile-image', stream, {name: filename});
fs.createReadStream(filename).pipe(stream);