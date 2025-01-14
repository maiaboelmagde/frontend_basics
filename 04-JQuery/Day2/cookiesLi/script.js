$c.setCookie('cookie','value');
console.log($c.getCookie('cookie'));

var j = $c.prevConflict();
console.log(j.getCookie('cookie'));