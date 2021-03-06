QUnit.module("test", {
    before: function () {
        this.server = sinon.createFakeServer();
        var testData = {name: 'cancho roano', latitude: '43.1', longitude: '-3.1'};
        this.server.respondWith("GET", "/api/places",
                                [200, {"Content-Type": "application/json"},
                                JSON.stringify(testData)]);
    },
    after: function () {
        this.server.restore();
    }
});

QUnit.test("sinon example test", function (assert) {
    maps.getData();
    this.server.respond();
    assert.equal(this.server.requests.length, 1);
    assert.equal(this.server.responses[0].response[0], 200);
});

QUnit.test("sinon mock jQuery object", function (assert) {
    var jQuery = {get: function () {
            console.log("it is a testing function");
        }};
    var mock = sinon.mock(jQuery).expects("get").atLeast(1);
    jQuery.get("testing");
    assert.equal(mock.called, true);
    mock.verify();
});

QUnit.test("fake get ajax method response", function (assert) {
    var jQuery = {get: function () {
            console.log("it is a testing function");
        }};
    sinon.stub(jQuery, "get").yieldsTo("success", {'name': 'test', 'longitude': 1, 'latitude': 1});
    jQuery.get({
        success: function (data) {
            assert.deepEqual(data, {'name': 'test', 'longitude': 1, 'latitude': 1});
        }
    });
});

QUnit.test("test qunit fixtures", function (assert) {
    var $fixture = $('#qunit-fixture');
    $fixture.append('<div id="mapid"></div>');
    maps.createMap();
    assert.equal(maps.map._loaded, true);
});