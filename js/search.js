function doAmazonSearch() {
  searchTerm = document.getElementById("textfield1").value;
  //alert(searchTerm);

  searchStem = "https://www.amazon.co.uk/s?ie=UTF8&index=blended&keywords=" + searchTerm;
  document.location.href = searchStem;
}

function doEbaySearch() {
  searchTerm = document.getElementById("textfield2").value;
  searchStem = "https://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=" + searchTerm
  document.location.href = searchStem;

}

function doYouTubeSearch() {
  searchTerm = document.getElementById("textfield5").value;
  searchStem = "https://www.youtube.com/results?search_query=" + searchTerm + "&&search=Search";
  document.location.href = searchStem;
}

function doWikiSearch() {
  searchTerm = document.getElementById("textfield6").value;
  searchStem = "https://en.wikipedia.org/w/index.php?search=" + searchTerm + "&title=Special%3ASearch&go=Go";
  document.location.href = searchStem;

}

function doGmapSearch() {
  searchTerm = document.getElementById("textfield7").value;
  searchStem = "https://maps.google.co.uk/maps?f=q&hl=en&q=" + searchTerm;
  document.location.href = searchStem;

}


function doGoogleSearch() {
  searchTerm = document.getElementById("textfield3").value;
  //alert(searchTerm);

  searchStem = "http://www.google.co.uk/search?q=" + searchTerm + "&ie=ISO-8859-1&hl=en&btnG=Google+Search";
  document.location.href = searchStem;

}


function showCalendar(name) {
  if (name == "Paul") {
    //alert("show paul");
    document.getElementById("calendar_di").style.display = "none";
    document.getElementById("calendar_paul").style.display = "block";
    createCookie("calendar", "paul")
  } else {
    //alert("show di");
    document.getElementById("calendar_di").style.display = "block";
    document.getElementById("calendar_paul").style.display = "none";
    createCookie("calendar", "di")
  }
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

function showSavedCalendar() {
  calVar = readCookie("calendar");
  if (calVar == "di") {
    showCalendar("Di");
  } else {
    showCalendar("Paul");
  }
}
