import anime from 'animejs';

anime({
  targets: '.back-wave',
  translateY: 100,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 3000,
});

anime({
  targets: '.front-wave',
  translateY: 150,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 3100,
});

anime({
  targets: '.stars > circle',
  scale: .9,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 10000,
});

anime({
  targets: ['.yellow-star', '.blue-star'],
  scale: .7,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  duration: 6000,
});
