var SearchView = Backbone.View.extend({	

	initialize: function(){
		this.render();
	},
	
	render: function(){
		 var that = this;
		 $.get('templates/searchTemplate.html', function (data) {
            template = Handlebars.compile( $(data).html());
            that.$el.html(template);  
        }, 'html');
        return that;
	}
});