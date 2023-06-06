let latitude, longitude, destination

$(document).ready(function(){
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function initGeolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude
    console.log("latitude "+ latitude)
    console.log("longitude "+longitude)
    console.log("position "+position.coords)
    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 16
    });

    map.addControl(
        new MapboxGeoCoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl:mapboxgl
        }).on('result', function(e){
            destination = e.result.center
        })
    )
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}

var img1= document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
        element:img1
})
        .setLngLat([75.85045490220904,26.98507536591426])
        .addTo(map);

var img2= document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([72.83465187461178,18.922015153408058])
.addTo(map);

var img3= document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.22950264908854,28.61302709471217])
.addTo(map);

var img4= document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.25886762879152,28.553532273627297])
.addTo(map);

var img5= document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.34255037445729,22.544869615291635])
.addTo(map);