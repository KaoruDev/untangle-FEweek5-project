(function () {

  window.StockView = Backbone.View.extend({
    className: 'stock',
    initialize: function(attrs){
    	this.template = _.getTemplate("tempStock");
    	// this.model = data.model; // this happens on auto.
    	// this.el = data.el;
    	this.listenTo(this.model, "change:price", this.render);  // comeback to this.
    },

    render: function(){
    	// we want to update el based on model data
    	console.log(this.model.toJSON())
    	$(this.el).html(this.template(this.model.toJSON()));

    }

  });

})();

