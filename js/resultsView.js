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
		var articleInd = $('li').index(target.closest('li'));
		var articleId = this.response[articleInd]._id;
		this.model.url = this.model.urlRoot + '?article=' + articleId + '&value=' + value;
		var that = this;
		this.model.fetch({
			success: function(model, response){
				that.response[articleInd].rating = model.toJSON().star;
				$($(target.closest('.listItem')).find('span')).html("Rating: " + 
					model.toJSON().star + " out of 5"); 
			}
		});
	}
});