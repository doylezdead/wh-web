var SearchView = Backbone.View.extend({	
	template: Handlebars.compile( $("#searchTemplate").html()),

	initialize: function(){
		this.render();
	},
	
	render: function(){
		 $.get('/templates/searchTemplate', function (data) {
            template = Handlebars.compile( $(data).html());
            this.$el.html(template);  
        }, 'html');
        return this;
	}
});