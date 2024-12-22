document.querySelector("button").addEventListener("click", () => {
    const name = document.getElementById("text1").value.trim();
    const age = document.getElementById("text2").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const favColor = document.getElementById("color").value;

    
    if (!name || !age || !gender) {
        alert("Please fill out all fields!");
        return;
    }

    
    setCookie("name", name);
    setCookie("age", age);
    setCookie("gender", gender.value);
    setCookie("favColor", favColor);

    
    const visits = hasCookie("visits") ? parseInt(getCookie("visits")) + 1 : 1;
    setCookie("visits", visits);

    
    location.href = "page5Profile.html";
});
