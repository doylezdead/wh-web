var SearchView = Backbone.View.extend({	
	
	initialize: function(){
		this.template = _.template($('#searchTemplate').html());
		this.setElement($('#mainContainer'));
		this.render();
	},
	
	render: function(){
		this.$el.append(this.template);
        return this;
	}
})