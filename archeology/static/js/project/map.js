var maps = (function ($) {

    return {

        createMap: function () {
            this.map = L.map('mapid', {
                center: [40.1, -4.2],
                zoom: 6
            });

            that = {};
            that.map = this.map;

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

        },

        setIcon: function () {
            that.greenIcon = L.icon({
                iconUrl: '/static/image/bluemapicon2.png',
                iconSize: [25, 42],
                iconAnchor: [22, 42],
                popupAnchor: [-5, -45]
            });
        },

        getData: function () {
            this.places_data = $.get("/api/places").promise();
        },

        drawMarks: function () {
            this.places_data.then(function (data) {
                for (var i = 0, len = data.length; i < len; i++){
                    L.marker([data[i].latitude, data[i].longitude], {icon: that.greenIcon}).bindPopup(data[i].name).addTo(that.map);
                }
            });
        }

    };

})(jQuery);
