function initMap() {
    const home = { lat: 10.0452, lng: 105.7469 };
    const school = { lat: 16.0545, lng: 108.1717 };
    const work = { lat: 21.0278, lng: 105.8342 };
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: school,
    });

    const home_mark = new google.maps.Marker({
        position: home,
        map: map,
    });

    const school_mark = new google.maps.Marker({
        position: school,
        map: map,
    });

    const work_mark = new google.maps.Marker({
        position: work,
        // icon: iconBase + 'sunny.png',
        map: map,
    });

    const homeDesc = ''
    const schoolDesc = ''
    const workDesc = ''
    const homeWin = new google.maps.InfoWindow({
        content: homeDesc,
    });
    const schoolWin = new google.maps.InfoWindow({
        content: schoolDesc,
    });
    const workWin = new google.maps.InfoWindow({
        content: workDesc,
    });

    home_mark.addListener("click", () => {
        homeWin.open({
            anchor: home_mark,
            map,
            shouldFocus: false,
        });
    });

    school_mark.addListener("click", () => {
        schoolWin.open({
            anchor: school_mark,
            map,
            shouldFocus: false,
        });
    });

    work_mark.addListener("click", () => {
        workWin.open({
            anchor: work_mark,
            map,
            shouldFocus: false,
        });
    });
}

window.initMap = initMap;