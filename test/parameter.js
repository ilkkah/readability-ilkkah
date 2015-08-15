/*eslint handle-callback-err:0*/
'use strict';

var should = require('should');
var read = require('../src/readability');

describe('parameters', function() {

	describe('options', function() {
		it('should pass the options to request lib', function(done) {
			read('http://dribbble.com/', {
				method: 'POST'
			}, function(err, result) {
				should.exists(result);
				done();
			});
		});
	});

	describe('preprocess', function() {
		it('should preprocess document', function(done) {
			read('http://colorlines.com/archives/2011/08/dispatch_from_angola_faith-based_slavery_in_a_louisiana_prison.html', {
					preprocess: function(source, response, contentType, callback) {
						should.exist(source);
						// source.length.should.equal(50734);
						should.exist(response);
						should.exist(response.headers);
						should.exist(contentType);
						should.exist(contentType.charset);
						callback(null, '<html><head><title>some other title</title></head><body></body></html>');
					}
				},
				function(err, result) {
					should.not.exist(err);
					should.exist(result);
					result.title.should.equal('some other title');
					result.content.should.equal(false);
					done();
				});
		});

		it('should stop processing document', function(done) {
			read('http://www.whitehouse.gov/', {
				preprocess: function(source, response, contentType, callback) {
					should.exist(source);
					// source.length.should.equal(71002);
					should.exist(response);
					should.exist(response.headers);
					should.exist(contentType);
					should.exist(contentType.charset);
					callback(new Error('stop'));
				}
			}, function(err, result) {
				should.not.exist(result);
				should.exist(err);
				err.message.should.equal('stop');
				done();
			});
		});

	});
});
