define(['./moves', './state'], function (moves, state) {
  var rand = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return function (level) {
    var repeats = rand(10 + (level * 10), 20 + (level * 15));

    return (function repeat(i, order) {
      var gap = order.indexOf(8);
      var available_moves = moves[gap];
      var index = rand(0, available_moves.length);
      var selected_move = available_moves[index];
      order = state(selected_move, order);

      // Recursive and base case.
      if ((i += 1) <= repeats) {
        return repeat(i, order)
      } else {
        return order;
      }
    })(0, '012345678');
  };
});
