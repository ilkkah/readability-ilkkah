/*eslint handle-callback-err:0*/
'use strict';

var should = require('should');
var read = require('../src/readability');

describe('result', function() {
	it('should get document', function(done) {
		read('http://www.whitehouse.gov/', function(err, result) {
			result.title.should.equal('The White House');
			done();
		});
	});

	it('should not read style:none blocks', function(done) {
		read('http://zaol.hu/kulfold/megrongaltak-petofi-sandor-szobrat-ungvaron-1720762', function(err, result) {
			result.content.text().length.should.be.aboveOrEqual(1240);
			// console.log(result.content.text());
			done();
		});
	});

	it('should NOT work for text nodes', function(done) {
		read('http://www.blikk.hu/blikk_sztarvilag/noknek-tervezett-sikositojat-reklamozza-carmen-electra-2391519', {
			onlyArticleBody: true
		}, function(err, result) {
			// console.log(result.title);
			// console.log('------------------');
			// console.log(result.content.text());
			result.content.text().length.should.equal(0);
			done();
		});
	});

	it('should work onlyArticleBody', function(done) {
		read('http://www.wprost.pl/ar/516408/w-polsce-najwiecej-wydaja-turysci-amerykanscy-ale-najwiecej-jest-niemieckich/', {
			onlyArticleBody: true
		}, function(err, result) {
			// console.log(result.title);
			// console.log('------------------');
			// console.log(result.content.text());
			result.content.text().trim().should.startWith('W zeszłym roku Polskę');
			done();
		});
	});
});
