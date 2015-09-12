var SearchView = Backbone.View.extend({	

	initialize: function(){
		this.render();
	},
	
	render: function(){
		 $.get('templates/searchTemplate.html', function (data) {
            template = Handlebars.compile( $(data).html());
            this.$el.html(template);  
        }, 'html');
        return this;
	}
});