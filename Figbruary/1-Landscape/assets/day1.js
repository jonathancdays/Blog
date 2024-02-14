import anime from 'animejs';

  window.addEventListener('load', function() {
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
      translateY: 125,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 3000,
    });

    anime({
      targets: '.stars > circle',
      scale: 1.1,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 10000,
    });

    anime({
      targets: ['.yellow-star', '.blue-star'],
      scale: 1.1,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 10000,
    });
  });
