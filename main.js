let textConfig = {
    text1: "Welcome, Ladies And Gentlemen",
    text2: "Are you ready???",
};
window.onload = function () {
    if (window.jQuery) {
        jQuery(document).ready(function () {
            // process barR
            setTimeout(function () {
                firstQuestion();
                jQuery(".spinner").fadeOut();
                jQuery("#preloader").delay(350).fadeOut("slow");
            }, 600);

            jQuery("#text3").html(textConfig.text3);
            jQuery("#text4").html(textConfig.text4);
            jQuery("#no").html(textConfig.text5);
            jQuery("#yes").html(textConfig.text6);

            function firstQuestion() {
                if (
                    !(Math.min(window.screen.width, window.screen.height) < 768)
                ) {
                    jQuery(".container").hide();
                    Swal.fire({
                        title: textConfig.text1,
                        text: textConfig.text2,
                        imageUrl: "img/cuteCat.jpg",
                        imageWidth: 300,
                        imageHeight: 300,
                        background: '#fff url("img/iput-bg.jpg")',
                        imageAlt: "Custom image",
                    }).then(function () {
                        jQuery(".container").show(200);
                    });
                }
            }

            // show popup
        });
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
};
