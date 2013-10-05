(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      // console.log('Updating', this.get('name'), 'price to:', newPrice);
      this.set({ price: newPrice });
    }
  });

})();