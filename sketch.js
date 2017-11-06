
          var capture;

          function setup() {
          createCanvas(390, 240);
          capture = createCapture(VIDEO);
          capture.size(320, 240);
          capture.hide();
          centerCanvas();
         }

          function draw() {
          background(255);
          image(capture, 0, 0, 320, 240);
          filter('INVERT');
     }
