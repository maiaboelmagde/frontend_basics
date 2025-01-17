let childWindow;

function openScrollableChild() {
    childWindow = window.open(
        "page4child.html",  
        "Child Window",
        "width=1000,height=100,top=100,left=100,scrollbars=yes"
    );
}
