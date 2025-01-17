function getQueryParam() {
    let urlParams = window.location.search.split('?')[1].split('&');
    let Params={};
    for(let i in urlParams){
        var ele = urlParams[i].split('=');
        Params[ele[0]] = ele[1];
    }
    
    console.log(Params);
    return Params;
  }
  
  const myValues = getQueryParam();
  document.getElementById('userName').innerText = myValues['name'].replace("+"," ");
  document.getElementById('jobTitle').innerText = myValues['job'];
  document.getElementById('email').innerText = myValues['email'].replace("%40","@");
  document.getElementById('mobile').innerText = myValues['mobile'];
  document.getElementById('gender').innerText = myValues['gender'];
  document.getElementById('address').innerText = myValues['address'];
  
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !/Edg/.test(navigator.userAgent);

// Display the browser recommendation only if not using Chrome
if (!isChrome) {
  document.getElementById('browserRecommendation').innerHTML = 'We recommend using <strong>Google Chrome</strong> for the best experience.';
} 
  