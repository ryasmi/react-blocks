define(['./moves'], function (moves) {
  var GAP_ID = 8;

  return function (pos, order) {
    var gap = order.indexOf(GAP_ID);
    var new_order = order;

    if (moves[pos].indexOf(gap) >= 0) {
      new_order = new_order.split('');
      new_order[gap] = order[pos];
      new_order[pos] = GAP_ID;
      new_order = new_order.join('');
    }

    return new_order;
  };
});
