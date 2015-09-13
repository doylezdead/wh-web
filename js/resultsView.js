var ResultsView = Backbone.View.extend({
	template: Handlebars.compile( $("#resultsTemplate").html()),
	
	events: {
		'click .upArrow' : 'toggleArrow',
		'click .downArrow' : 'toggleArrow'
	},	
	
	initialize: function(options){
		this.response = options.response;
	},
	
	render: function(){
		this.$el.html(this.template({response: this.response}));
        return this;
        
	},
	
	toggleArrow: function(event){
		target = $(event.target);
		if(target.hasClass('upArrow')){
			target.toggleClass('orange');
			var parentID = target.parent().attr('id');
			$(parentID + ' .downArrow').toggleClass('purple');
		}
		else if(target.hasClass('downArrow')){
			target.toggleClass('purple');
			var parentID = target.parent().attr('id');
			$(parentID + ' .upArrow').toggleClass('orange');
		}
	}
});