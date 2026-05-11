let map;

const mapCenter = { lat: 34.7465, lng: -92.2896 };

function initLocationProcedure() {
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 14,
    center: mapCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  new google.maps.Marker({
    position: mapCenter,
    map: map,
    title: "Home Chef Recipes"
  });
}