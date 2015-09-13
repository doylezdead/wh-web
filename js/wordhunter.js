$(document).ready(function(){
	
	var searchModel = new SearchModel();
	var searchView = new SearchView({ model: searchModel});
	$("#searchContainer").html(searchView.render().el);
	
});