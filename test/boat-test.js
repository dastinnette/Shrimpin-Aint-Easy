const chai = require('chai');
const assert = chai.assert;

const Boat = require('../lib/boat');

describe('Boat', function() {
  var boat = new Boat({});
  context('with default attributes', function() {
    it ('should assign a x default coordinate', function() {
      assert.equal(boat.x, 500);
    });

    it ('should assign a y default coordinate', function() {
      assert.equal(boat.y, 25);
    });

    it ('should assign a default width', function() {
      assert.equal(boat.width, 10);
    });

    it ('should assign a default height', function() {
      assert.equal(boat.height, 10);
    });

    it ('should assign a default velocity', function() {
      assert.equal(boat.velocity, 5);
    });

    it ('should assign custom properties', function() {
      var customBoat = new Boat({x: 1, y: 2, width: 3, height: 4, velocity: 5}, boat)

      assert.equal(customBoat.x, 1);
      assert.equal(customBoat.y, 2);
      assert.equal(customBoat.width, 3);
      assert.equal(customBoat.height, 4);
      assert.equal(customBoat.velocity, 5);
    });
  })

  context('moves horizontally', function() {
    it ('should move boat left', function() {
      var initialPosition = boat.x
      assert.equal(boat.x, boat.x);

      boat.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 5);

      boat.moveBoatLeft(boat);
      assert.equal(boat.x, initialPosition - 10);
    });

    it ('should move boat right', function() {
      var initialPosition = boat.x
      assert.equal(boat.x, boat.x);

      boat.moveBoatRight(boat);
      assert.equal(boat.x, initialPosition + 5);

      boat.moveBoatRight(boat);
      assert.equal(boat.x, initialPosition + 10);
    });
  })
})