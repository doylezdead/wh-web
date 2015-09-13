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
			$($(parent).find('.downArrow')).removeClass('purple');
			this.updateRating(target, 1);
		}
		else if(target.hasClass('downArrow')){
			target.toggleClass('purple');
			$($(parent).find('.upArrow')).removeClass('orange');
			this.updateRating(target, -1);
		}
		
		
	},
	
	updateRating: function(target, value){
		var articleId = $('li').index(target.closest('li'));
		this.model.url = this.model.urlRoot + '?article=' + articleId + '&value=' + value;
		this.model.fetch({});
	}
});