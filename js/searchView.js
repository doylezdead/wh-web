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
			success: function(){
				response = $.map(this.model.toJSON(), function(val, i){
					return val;
				}, true);		
				console.log(response);
			}
		});
	}
});