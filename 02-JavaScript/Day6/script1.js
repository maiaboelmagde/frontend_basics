let childWindow;

function openWindowChild() {
    childWindow = window.open(
        "page1child.html",  
        "Child Window",
        "width=1000,height=100,top=100,left=100,scrollbars=yes"
    );
}
