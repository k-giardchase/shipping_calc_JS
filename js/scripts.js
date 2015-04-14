var cost = function(weight, distance, depth, priority) {
  
};


$(document).ready(function() {
  $("form#shipping").submit(function(event) {
    event.preventDefault();

    var weight = $("input#weight").val();
    var distance = $("input#distance").val();
    var depth = $("input#depth").val();
    var priority = $("input#priority").val();

    var package = {
      weight: weight,
      distance: distance,
      depth: depth,
      priority: priority,
      cost: cost(this.weight, this.distance, this.depth, this.priority)
    };


  });
});
