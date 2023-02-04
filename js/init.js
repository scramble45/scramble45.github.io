(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({ scrollOffset: 55 });

    var options = [
      {
        selector: '.full-stack', offset: 0, callback: function (el) {
          setTimeout(function () {
            Materialize.showStaggeredList($(el));
          }, 250);
        }
      },
      {
        selector: '.personal', offset: 0, callback: function (el) {
          setTimeout(function () {
            Materialize.showStaggeredList($(el));
          }, 500);
        }
      },
      {
        selector: '#particle-list', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#particle-pic', offset: 200, callback: function (el) {
          Materialize.fadeInImage($(el));

          let index = 0;
          const link = $('#particle-image-link');
          const image = $('#particle-image-link img');
          const imgSrcs = [
            'images/particle1.png',
            'images/particle2.png',
            'images/particle3.png',
          ];

          // Loop through images
          setInterval(() => {
            const src = imgSrcs[index];
            link.attr('href', `/${src}`);
            image.attr('src', src);
            index = index === 4 ? 0 : index + 1;
          }, 3500);
        }
      },
      {
        selector: '#fv-list', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#fv-pic', offset: 200, callback: function (el) {
          Materialize.fadeInImage($(el));

          let index = 0;
          const link = $('#fv-image-link');
          const image = $('#fv-image-link img');
          const imgSrcs = [
            'images/fv1.png',
            'images/fv2.png',
          ];

          // Loop through images
          setInterval(() => {
            const src = imgSrcs[index];
            link.attr('href', `/${src}`);
            image.attr('src', src);
            index = index === 2 ? 0 : index + 1;
          }, 3500);
        }
      },
      {
        selector: '#tapes-pic', offset: 200, callback: function (el) {
          Materialize.fadeInImage($(el));

          let index = 0;
          const link = $('#tapes-image-link');
          const image = $('#tapes-image-link img');
          const imgSrcs = [
            'images/tapes1.png',
            'images/tapes2.png',
          ];

          // Loop through images
          setInterval(() => {
            const src = imgSrcs[index];
            link.attr('href', `/${src}`);
            image.attr('src', src);
            index = index === 2 ? 0 : index + 1;
          }, 3500);
        }
      },
      {
        selector: '#tapes-list', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#tapes-pic', offset: 200, callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '#doom-list', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
      {
        selector: '#doom-pic', offset: 200, callback: function (el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '.resume-links', offset: 150, callback: function (el) {
          Materialize.showStaggeredList($(el));
        }
      },
    ];

    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
