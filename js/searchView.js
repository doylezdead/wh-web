var SearchView = Backbone.View.extend({	
	template: Handlebars.compile( $("#searchTemplate").html()),
	
	events: {
		'click #searchSubmit' : 'submit'
	},
	
	initialize: function(){},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
        return this;
	},
	
	submit: function(){
		var word = $('#searchField').val();
		this.model.url = this.model.urlRoot + '?word=' + word;
		
		var that = this;
		this.model.fetch({
			wait: true,
			success: function(model, response){
				var response = model.toJSON();
				console.log(response);	
				that.displayResults(response);
			}
		});
	},
	
	displayResults: function(response){
		var resultsModel = new ResultsModel();
		var resultsView = new ResultsView({model: resultsModel, response: response});
		$('#resultsContainer').html(resultsView.render().el);
	}	
});