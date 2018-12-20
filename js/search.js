
    function doAmazonSearch()
    {
    searchTerm = document.getElementById("textfield1").value;
    //alert(searchTerm);

    searchStem = "http://www.amazon.co.uk/exec/obidos/external-search/202-1958194-9555020?tag=opera-20&index=blended&keyword=" + searchTerm
    document.location.href = searchStem;

    }

    function doEbaySearch()
    {
    searchTerm = document.getElementById("textfield2").value;
    searchStem = "http://search.ebay.co.uk/search/search.dll?MfcISAPICommand=GetResult&ht=1&SortProperty=MetaEndSort&cgiurl=http%3A%2F%2Fcgi.ebay.co.uk%2Fws%2F&query=" + searchTerm
    document.location.href = searchStem;

    }

    function doYouTubeSearch()
    {
    searchTerm = document.getElementById("textfield5").value;
    searchStem = "http://www.youtube.com/results?search_query=" + searchTerm + "&&search=Search";
    document.location.href = searchStem;

    }
    function doWikiSearch()
    {
    searchTerm = document.getElementById("textfield6").value;
    searchStem = "http://en.wikipedia.org/wiki/Special:Search/" + searchTerm;
    document.location.href = searchStem;

    }
    function doGmapSearch()
    {
    searchTerm = document.getElementById("textfield7").value;
    searchStem = "http://maps.google.co.uk/maps?f=q&hl=en&q=" + searchTerm;
    document.location.href = searchStem;

    }



    function doGoogleSearch()
    {
    searchTerm = document.getElementById("textfield3").value;
    //alert(searchTerm);

    searchStem = "http://www.google.co.uk/search?q=" + searchTerm + "&ie=ISO-8859-1&hl=en&btnG=Google+Search";
    document.location.href = searchStem;

    }

    function doBinarySearch()
    {
    searchTerm = document.getElementById("textfield4").value;
    //alert(searchTerm);

    searchStem = "http://alt.binaries.nl/search/?q=" + searchTerm
    document.location.href = searchStem;

    }

    function showCalendar(name){
        if (name == "Paul"){
                //alert("show paul");
                document.getElementById("calendar_di").style.display = "none";
                document.getElementById("calendar_paul").style.display = "block";
                createCookie("calendar","paul")
        } else {
                //alert("show di");
                document.getElementById("calendar_di").style.display = "block";
                document.getElementById("calendar_paul").style.display = "none";
                createCookie("calendar","di")
        }
    }

    function createCookie(name,value,days) {
        if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name,"",-1);
    }

    function showSavedCalendar(){
        calVar = readCookie("calendar");
        if (calVar == "di"){
                showCalendar("Di");
        } else {
                showCalendar("Paul");
        }
    }
