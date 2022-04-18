// function initialize() {
//     var mapProp = {
//         center: new google.maps.LatLng(114.508, 32.013),
//         zoom: 7,
//         zoomControl: true,
//         mapTypeControl: true,
//         scaleControl: true,
//         streetViewControl: true,
//         overviewMapControl: true,
//         rotateControl: true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     var map = new google.maps.Map(document.getElementById("map"), mapProp);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

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

// Initialize and add the map
// Initialize and add the map
// function initMap() {
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,
//     });

//     // The location of Uluru
//     const work = { lat: 22.550491, lng: 113.967125 };

//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }

// window.initMap = initMap;

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const uluru = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map,
        title: "Uluru (Ayers Rock)",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });
}

window.initMap = initMap;