var Router = Backbone.Router.extend({
	routes: {
		'': 'searchRoute'
	},
	
	searchRoute: function(){
		var searchView = new SearchView();
		$("#mainContainer").html(searchView.el);
	}
});