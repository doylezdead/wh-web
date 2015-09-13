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
		parent = target.closest('.arrows');

		if(target.hasClass('upArrow')){
			target.toggleClass('orange');
			$($(parent).find('downArrow')).removeClass('purple');
		}
		else if(target.hasClass('downArrow')){
			target.toggleClass('purple');
			parentID = target.parent().attr('id');
			$($(parent).find('upArrow')).removeClass('orange');
		}
	}
});