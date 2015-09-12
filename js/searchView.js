var SearchView = Backbone.View.extend({	
	
	initialize: function(){
		this.template = _.template($('#searchTemplate').html());
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template());
        return this;
	}
})