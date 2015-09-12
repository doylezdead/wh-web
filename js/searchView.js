var SearchView = Backbone.View.extend({
	el: '#mainContainer',
	template: _.template($('#searchTemplate').html()),
	
	initialize: function(){
	this.render();
	},
	
	render: function(){
		this.$el.html(this.template());
        return this;
	}
})