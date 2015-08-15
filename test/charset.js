/*eslint handle-callback-err:0*/
'use strict';

var fs = require('fs');
var path = require('path');
var read = require('../src/readability');

var filePath = path.join(__dirname, 'test.html');

describe('charset', function() {
	describe('setted in the html', function() {
		it('should convert the page to utf-8', function(done) {
			fs.readFile(filePath, {
				encoding: 'utf-8'
			}, function(err, html) {
				read(html, function(readError, result) {
					result.content.text().should.include('谷歌');
					result.title.should.include('谷歌');
					done();
				});
			});
		});
	});
});
