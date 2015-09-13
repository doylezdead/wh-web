var ResultsView = Backbone.View.extend({
	template: Handlebars.compile( $("#resultsTemplate").html()),

	initialize: function(options){
		this.results = options.results;
		this.render();		
	},
	
	render: function(options){
		this.$el.html(this.template(this.model.toJSON()));
        return this;
        
	}
});