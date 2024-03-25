let posY = 0;

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Get the vertical scroll position

    if (this.window.scrollY === 0) {
        console.log("back to zero!");
        this.window.scrollTo(0,posY);
    }
    else {
        posY = scrollPosition; 

    }

    console.log(scrollPosition);
});