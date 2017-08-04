
var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync('./gulp').forEach(function (file) {
    if((/\.(js|coffee)$/i).test(file)){
        require('./gulp/' + file);
    }
});

