/* Author:

*/

function populateData(){

	categoryDivs = ["Popular","Work","News","Weather","Travel","Sheffield","Entertainment","Tickets","Social","Shopping","techy","misc"];

	for (var i in categoryDivs)
	{
		getCategory(categoryDivs[i]);

		if(categoryList.length > 0){
			var results_list = "";
			results_list += '<div class="cat_heading">' + categoryDivs[i] + '</div>';
			for (var j = 1; j<= categoryList.length; j++)
			{
				var display_name = (categoryList[j-1])["display_name"];
				var link_url = (categoryList[j-1])["url"];
				results_list += '<div data-link_url="'+link_url+'"><span><a href="' + link_url + '">' + display_name + "</a></span></div>";
			}

			$('article').append(results_list);
		}

	}

}

function testData(){
	console.log("AllLinks",currentBookmarks);
	//alert(JSON.stringify(currentBookmarks));

	//var search = currentBookmarks.get(1);
	//alert(JSON.stringify(search));

	//var search = currentBookmarks.pluck("display_name");
	//alert(JSON.stringify(search));

	//var search = _.filter(currentBookmarks.toJSON(), function(item){ return item["display_name"].indexOf("Google mail") != -1; });
	//console.log(search);
	getCategory("popular");
	console.log(categoryList);
//	alert(categoryList);

	//var search = getAllWords(currentBookmarks);
	//console.log(search);

	//var search = getcurrentBookmarks(currentBookmarks);
	//console.log(search);

	//var search = searchWords(currentBookmarks,"under");
	//console.log(search);
}


// pull out all the items in this category and put in window.categoryList
function getCategory(category)
{
	var list = window.currentBookmarks;
	category = category.toLowerCase();
	//alert("searching for " + category);

	// get all database items with this category
	var search = _.filter(list.toJSON(), function(item){
		var cats = (item["categories"]).toString();
		//alert(cats);
		cats = cats.toLowerCase();
		//alert(cats);
		//alert(cats.indexOf(category));

		if (cats.indexOf(category) != -1)
		{
			//alert("found one!");
			return item;
		}
	});

	console.log("Found " + search.length + " items for category " + category);
	window.categoryList = search;
}


$(document).ready(function () {
    console.log('document ready');
//    Backbone.history.start();

	Bookmark = Backbone.Model.extend({
		defaults: {
			display_name: "BBC News",
			url: "http://www.bbc.co.uk",
			categories: ["News"]
		}
	});

	BookmarksList = Backbone.Collection.extend({
		model:Bookmark
	});

	BookmarksList.comparator = function(item) {
		return item.get("display_name");
	};

	window.currentBookmarks = new BookmarksList;

	window.currentBookmarks.comparator = function(item) {
		return item.get("display_name");
	};

	bookmark_data_string = JSON.stringify(bookmark_data);
	currentBookmarks.add(eval(bookmark_data_string));

	//testData();

	populateData();

});
