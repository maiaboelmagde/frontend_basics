function showAddr(addrObj) {
    if (!addrObj|| !addrObj.street || !addrObj.buildingNum || !addrObj.city) {
        return "Invalid address object provided.";
    }
    
    var date = new Date();

    return addrObj.buildingNum + addrObj.street + addrObj.city +' city registered in ' + String(date.getDate()).padStart(2, '0') +'/'+ String(date.getMonth() + 1).padStart(2, '0') +'/'+ date.getFullYear();
}


var addrObj = { street: "abc st.", buildingNum: 15, city: "xyz" };
document.write(showAddr(addrObj));
