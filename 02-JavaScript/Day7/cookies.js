function getCookie(cookieName){
    
    var cookiesObject=allCookieList();
    console.log(cookiesObject);
    for(let i in cookiesObject){
        if(i === cookieName){
            return cookiesObject[i];
        }
    }
    return '';
}

function setCookie(cookieName,cookieValue,expiryDate=0){
    if(expiryDate !== 0){
        document.cookie=cookieName+'='+cookieValue+';expire='+expiryDate;
    }else{
        document.cookie=cookieName+'='+cookieValue;
    }
}

function deleteCookie(cookieName){
    document.cookie = cookieName+'=;expire=9-9-2000';
}

function allCookieList(){
    let cookies = document.cookie;
    cookies = cookies.split(';');
    var cookiesObject={};
    var pair;
    for(let i in cookies){
        pair = cookies[i].split('=');
        cookiesObject[pair[0].trim()] = pair[1];
    }

    return cookiesObject;
}

function hasCookie(cookieName){
    var cookiesObject=allCookieList();

    for(let i in cookiesObject){
        if(i === cookieName){
            return true;
        }
    }
    return false;
}