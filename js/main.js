// $(function() {
//     var canvas = document.getElementById("canvas"),
//         ctx = canvas.getContext("2d");
//
//     canvas.width = 934;
//     canvas.height = 622;
//
//
//     var background = new Image();
//     background.src = "../../assets/img/simon-buchou-261855-web.jpg";
//
//     background.onload = function(){
//         ctx.drawImage(background,0,0);
//     }
//
//     console.log(canvas);
// });

$(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        background = new Image();

    background.src = "../../assets/img/simon-buchou-261855-web.jpg";

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        // do your drawing stuff here
        const canvas = document.querySelector('#canvas');
        const context = canvas.getContext('2d');

        background.onload = function(){
            context.drawImage(background,0,0);
        }

        context.fillRect(0, 0, canvas.width, canvas.height);

    }


});
