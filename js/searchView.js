var SearchView = Backbone.View.extend({	
	template: Handlebars.compile( $("#searchTemplate").html()),

	initialize: function(){
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
        return this;
	}
});