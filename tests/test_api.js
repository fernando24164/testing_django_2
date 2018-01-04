QUnit.module("test", {
    before: function () {
        this.server = sinon.createFakeServer();
        var testData = {name: 'cancho roano', latitude: '43.1', longitude: '-3.1'};
        this.server.respondWith("GET", "http://192.168.33.10:8080/api/places",
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

