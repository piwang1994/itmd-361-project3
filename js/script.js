// function initMap() {
//     const home = { lat: 10.0452, lng: 105.7469 };
//     const school = { lat: 16.0545, lng: 108.1717 };
//     const work = { lat: 21.0278, lng: 105.8342 };
//     // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 6,
//         center: school,
//     });

//     const home_mark = new google.maps.Marker({
//         position: home,
//         map: map,
//     });

//     const school_mark = new google.maps.Marker({
//         position: school,
//         map: map,
//     });

//     const work_mark = new google.maps.Marker({
//         position: work,
//         // icon: iconBase + 'sunny.png',
//         map: map,
//     });

//     const homeDesc = ''
//     const schoolDesc = ''
//     const workDesc = ''
//     const homeWin = new google.maps.InfoWindow({
//         content: homeDesc,
//     });
//     const schoolWin = new google.maps.InfoWindow({
//         content: schoolDesc,
//     });
//     const workWin = new google.maps.InfoWindow({
//         content: workDesc,
//     });

//     home_mark.addListener("click", () => {
//         homeWin.open({
//             anchor: home_mark,
//             map,
//             shouldFocus: false,
//         });
//     });

//     school_mark.addListener("click", () => {
//         schoolWin.open({
//             anchor: school_mark,
//             map,
//             shouldFocus: false,
//         });
//     });

//     work_mark.addListener("click", () => {
//         workWin.open({
//             anchor: work_mark,
//             map,
//             shouldFocus: false,
//         });
//     });
// }

// window.initMap = initMap;

function init() {
    var mycenter = new google.maps.LatLng(34.183506, 112.142356);

    var mapProp = {
        center: mycenter,
        zoom: 7,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var mycity = new google.maps.Circle({
        center: mycenter,
        radius: 25600,
        strokeColor: "#FF0011",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: "#000055",
        fillOpacity: 0.4
    });
    mycity.setMap(map);
};

google.maps.event.addDomListener(window, 'load', init);