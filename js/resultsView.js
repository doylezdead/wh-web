var ResultsView = Backbone.View.extend({
	template: Handlebars.compile( $("#resultsTemplate").html()),

	initialize: function(options){
		this.response = options.response;
	},
	
	render: function(options){
		this.$el.html(this.template({response: this.response}));
        return this;
        
	}
});