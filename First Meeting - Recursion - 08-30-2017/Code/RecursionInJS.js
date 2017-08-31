var generateSearchImage = function() {
	var query = $("#search-box").val();
 	var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20&offset=0&rating=G&lang=en`

	$.ajax({
	  url: queryUrl,
	  type: "GET",
	  dataType: "json"
	}).done(function(response) {
		for(let i = 0, x = response.data.length; i < x; i++) {
			//do something like fade in, fadeout, etc. for each image in the response data
		}
	})
}

let counter = 0;

function queryImages(response) {
	if(counter!= response.data.length) {
		//do stuff
		counter+=1;
		queryImages(response);
	}
}

var generateSearchImage = function() {
	var query = $("#search-box").val();
 	var queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20&offset=0&rating=G&lang=en`

	$.ajax({
	  url: queryUrl,
	  type: "GET",
	  dataType: "json"
	}).done(function(response) {
		queryImages(response);
	})
}

