$(document).ready(function(){
	
	var searchModel = new searchModel();
	var searchView = new SearchView({ model: searchModel});
	$("#searchContainer").html(searchView.render().el);
	
});