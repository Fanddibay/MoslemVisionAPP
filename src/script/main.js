function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function toggleButtonShow() {
  var moreTextLess = document.getElementById("moreTextLess");

  var moreShow = document.getElementById("moreTextShow");

  var buttonShow = document.getElementById("btnShowText");

  if (moreTextLess.style.display === "none") {
    moreShow.style.display = "none";

    moreTextLess.style.display = "inline";

    buttonShow.innerHTML = "Show more";
  } else {
    moreTextLess.style.display = "none";

    moreShow.style.display = "inline";

    buttonShow.innerHTML = "Lihat lebih sedikit";
  }
}

// js product landing page
function toggleBtnImg() {
  var moreImg = document.getElementById("moreProduct");

  var buttonImg = document.getElementById("moreBtnImg");

  if (moreImg.style.display === "inline") {
    moreImg.style.display = "none";

    buttonImg.innerHTML = "Show more";
  } else {
    moreImg.style.display = "inline";

    buttonImg.innerHTML = "Show less";
  }
}
