function getContent(contentID) {

	var header;
	var content;

	switch (contentID) {
	case 0:// home
		header = "<h1>Welcome</h1>";
		content = "<p>Home page content</p> <a href='/AdrecenAppTest.html'><img src='images/request_quote.gif' alt='' title='' border='0' class='request_quote' /></a>";
		break;
	case 1:// What is AdRecEn
		header = "<h1>Say Hi! to AdRecEn</h1>";
		content = "<p>What is AdRecEn page content</p>";
		break;
	case 2:// About us
		header = "<h1>Who are we ?</h1>";
		content = "<p>About us page content</p>";
		break;
	case 3:// Owners and Developers
		header = "<h1>Watch us on the work!</h1>";
		content = "<p>Owners and Developers page content</p>";
		break;
	}

	for ( var i = 0; i < 4; i++) {
		if (i != contentID) {
			var itemID = "#listItem" + i;
			$(itemID).attr("class", "");
			$(itemID).attr("background", "none");
		}
	}

	$("#listItem" + contentID).attr("class", "selected");
	document.getElementById("content-area").innerHTML = header + content;

}