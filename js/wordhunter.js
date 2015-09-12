$(document).ready(function(){
	//var router = new Router();
	//Backbone.history.start();
	
	var model = new searchModel();
	var searchView = new SearchView({ model: model});
	$("#mainContainer").html(searchView.render().el);
	
});