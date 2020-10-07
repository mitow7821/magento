window.addEventListener('DOMContentLoaded', () => {
    mybutton = document.querySelector(".scrollToTop");
    window.onscroll = function () {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "flex";
        } else { mybutton.style.display = "none"; }
    }

});
function topFunction() { window.scroll({ top: 0, behavior: 'smooth' }) }