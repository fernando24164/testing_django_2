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

QUnit.test("sinon mock leafleft object", function (assert) {
    var jQuery = {get: function () {
            console.log("hola mundo");
        }};
    var mock = sinon.mock(jQuery).expects("get").atLeast(1);
    jQuery.get("testing");
    assert.equal(mock.called, true);
    mock.verify();
});