var ResultsView = Backbone.View.extend({
	template: Handlebars.compile( $("#resultsTemplate").html()),

	initialize: function(options){
		this.response = options.response;
		this.render();		
	},
	
	render: function(options){
		this.$el.html(this.template(this.response));
        return this;
        
	}
});