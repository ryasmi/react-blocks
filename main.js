requirejs.config({
  paths: {
    react: './bower_components/react/react.min',
  }
});

define([
  'react',
  './shuffle',
  './state',
  './bower_components/react-router/dist/react-router.min'
], function (React, shuffle, state, Router) {
  var DOM = React.DOM;
  var order = shuffle();
  var img = 'http://ryansmith94.github.io/SlidingBlocks/images/flower';

  var Game = React.createClass({
    mixins: [Router.State],
    render: function () {
      var order = this.getParams().order;
      return DOM.div(null, [
        DOM.h1(null, 'Sliding Blocks'),
        DOM.p(null, 'Solve the puzzle by pressing on the tiles to recreate the original image'),
        DOM.a({href: '#/' + shuffle(0)}, 'Beginner'),
        DOM.a({href: '#/' + shuffle(5)}, 'Intermediate'),
        DOM.a({href: '#/' + shuffle(10)}, 'Expert'),
        DOM.div(null, [
          DOM.div(null, [
            DOM.a({href: '#/' + state(0, order)}, DOM.img({width: '80px', height: '80px', src: img + order[0] + '.png'})),
            DOM.a({href: '#/' + state(1, order)}, DOM.img({width: '80px', height: '80px', src: img + order[1] + '.png'})),
            DOM.a({href: '#/' + state(2, order)}, DOM.img({width: '80px', height: '80px', src: img + order[2] + '.png'})),
          ]),
          DOM.div(null, [
            DOM.a({href: '#/' + state(3, order)}, DOM.img({width: '80px', height: '80px', src: img + order[3] + '.png'})),
            DOM.a({href: '#/' + state(4, order)}, DOM.img({width: '80px', height: '80px', src: img + order[4] + '.png'})),
            DOM.a({href: '#/' + state(5, order)}, DOM.img({width: '80px', height: '80px', src: img + order[5] + '.png'})),
          ]),
          DOM.div(null, [
            DOM.a({href: '#/' + state(6, order)}, DOM.img({width: '80px', height: '80px', src: img + order[6] + '.png'})),
            DOM.a({href: '#/' + state(7, order)}, DOM.img({width: '80px', height: '80px', src: img + order[7] + '.png'})),
            DOM.a({href: '#/' + state(8, order)}, DOM.img({width: '80px', height: '80px', src: img + order[8] + '.png'})),
          ]),
        ]),
      ]);
    }
  });

  var routes = Router.Route(null, [
    Router.Route({handler: Game, name: 'game', path:':order'}),
    Router.Redirect({from: '/', to: 'game', params: {order: shuffle()}}),
  ]);

  Router.run(routes, function (Handler) {
    React.render(Handler(), document.getElementById('app'));
  });
});
