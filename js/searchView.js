var SearchView = Backbone.View.extend({	
	template: Handlebars.compile( $("#searchTemplate").html()),
	
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
		
		this.model.save({
			wait: true,
			success: 
				function(model, response){
					console.log("Success");
				}
		});
	}
});