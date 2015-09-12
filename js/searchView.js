var SearchView = Backbone.View.extend({
	el: '#mainContainer',
	
	
	initialize: function(){
		this.template = _.template($('#searchTemplate').html()),
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template());
        return this;
	}
})