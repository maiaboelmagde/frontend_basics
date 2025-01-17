window.onload = function() {
    const scrollAmount = 10;  
    const scrollInterval = 50; 
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    let currentScroll = 0;  

   
    function scrollDown() {
        if (currentScroll < maxScroll) {
            window.scrollBy(0, scrollAmount); 
            currentScroll += scrollAmount;  
            setTimeout(scrollDown, scrollInterval); 
        } else {
            window.close(); 
        }
    }

    scrollDown(); 
};