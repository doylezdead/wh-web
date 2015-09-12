var SearchView = Backbone.View.extend({	
	
	initialize: function(){
		Handlebars.compile( $("#searchTemplate").html() );
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template);
		$('body').append(this.$el);
        return this;
	}
})