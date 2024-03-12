let $img = document.querySelector('.landBanner');
    let $text = document.querySelector('.landSecondary');
    var i = 0;
    var source = ["https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-1-2.jpg","https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-5-2.jpg","https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-2-2.jpg"];
    var textContent = ["Taste the freedom.\nYou can!", "Can you feel it? That unmistakable ambiance?\nThat singular, defining moment. It's the synergy of elements, a seamless fusion. Here, tradition meets innovation, intertwining two distinct cultures and communities.\nIt's about bringing together cannabis and hops, two kindred plants, to craft a perfect moment, here and now. Cannabis?\nThey told us we cannot. But we believe we can.", "True school craft beer.\nIndeed."]

    function icanRoll() {
    let repeat = setInterval(function () {
        if (i > 2) {
        i = 0;
        }

        let todayDate = new Date().getTime();
        $(".landSecondary").fadeOut(1200);
        $(".landBanner").fadeOut(1000);

        $(".landBanner").promise().done(function () {
        $text.innerText = textContent[i];
        $img.src = source[i];
        $(".landBanner").fadeIn(1000);
        $(".landSecondary").fadeIn(1500);

        ++i;
    });

    }, 8000);
    }

    document.onload = $img.src = source[1], $text.innerHTML = "Taste the freedom.\nYou can!", icanRoll();