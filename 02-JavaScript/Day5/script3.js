let childWindow;
let intervalId;

function openFlyingChild() {
    childWindow = window.open(
        "page3child.html", 
        "Flying Child", 
        "width=200,height=200,top=100,left=100,resizable=no" 
    );

    if (intervalId) {
        clearInterval(intervalId);
    }

    let direction = 1; 
    let Yposition = 100; 
    let Xposition = 100;

    intervalId = setInterval(() => {
        if (childWindow && !childWindow.closed) {
            Yposition += direction * 10;
            Xposition += direction * 10;

            if (Yposition <= 0 || Yposition >= screen.availHeight - 200) {
                direction *= -1;
            }

            childWindow.moveTo(Xposition, Yposition);
            childWindow.resizeTo(200, 200);
        } else {
            clearInterval(intervalId); 
        }
    }, 50);
}

function stopChildMovement() {
    if (intervalId) {
        clearInterval(intervalId);
        childWindow.focus();
        intervalId = null;
    }
}
