let map;
let coords = {lat: 47.2173, lng: -1.5534}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 10,
    });

    new google.maps.Marker({
        position: coords,
        map: map,
        title: "Nantes",
    });
}
