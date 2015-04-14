$(document).ready(function() {
  $("form#shipping").submit(function(event) {
    event.preventDefault();

    var inputWeight = parseInt($("input#weight").val());
    var inputDistance = parseInt($("input#distance").val());
    var inputDepth = parseInt($("input#depth").val());
    var inputPriority = parseInt($("select#priority").val());

    var shipment = {
      weight: inputWeight,
      distance: inputDistance,
      depth: inputDepth,
      priority: inputPriority,
      cost: function() {
        return 2500 + (this.weight * .25) * (5 * this.distance + (3.2 * this.depth)) + (this.priority * 100);
      }
    };

    var result = shipment.cost();

    $(".total").text(result);
    $("#result").show();

  });
});
