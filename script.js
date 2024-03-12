let $img = document.querySelector('.landBanner');
let $text = document.querySelector('.landSecondary');
var i = 0;
var source = ["https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-1-2.jpg","https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-5-2.jpg","https://www.icandrink.wtf/user/documents/upload/Landing Obsah/v2/ican_parkoviste-2-2.jpg"];
var textContent = ["Taste the freedom.\n\nYou can!", "Can you feel it? That unmistakable ambiance?\nThat singular, defining moment. It's the synergy of elements, a seamless fusion. Here, tradition meets innovation, intertwining two distinct cultures and communities.\nIt's about bringing together cannabis and hops, two kindred plants, to craft a perfect moment, here and now. Cannabis?\nThey told us we cannot. But we believe we can.", "True school craft beer.\n\nIndeed."]
document.onload = $img.attr("src", source[0]),$text.text("Taste the freedom.\n\nYou can!");

function changeContent() {
    let repeat = setInterval(function () {
        let todayDate = new Date().getTime();
        $text.fadeOut(1200);
        $img.fadeOut(1000);
    
        $text.promise().done(function () {
            $text.textContent(textContent[i]);
            $img.src = source[i];
            $img.fadeIn(1000);
            $text.fadeIn(1500);
        
            ++i;
    
            if (i >= 3) {
                i = 0;
            }

            if ($img.attr("src") != source[0] && $img.attr("src") != source[1] && $img.attr("src") != source[2]) {
                $text.text("Vylilo se nám pivko a zamazalo kód.\nOmlouváme se za komplikace.");
            }
        });

    }, 5000);
}

changeContent();