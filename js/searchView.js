var SearchView = Backbone.View.extend({	
	template: Handlebars.compile( $("#searchTemplate").html()),
	response: [],
	
	events: {
		'click #searchSubmit' : 'submit'
	},
	
	initialize: function(){
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
        return this;
	},
	
	submit: function(){
		var synonym = $('#searchField').val();
		this.model.url = this.model.urlRoot + '?word=' + synonym;
		
		this.model.fetch({
			wait: true,
			success: function(model, response){
				response = $.map(model.toJSON(), function(val, i){
					return val;
				});		
			displayResults();
			}
		});
	},
	
	displayResults: function(){
		var resultsView = new ResultsView({results: results});
	}	
});