
   
export const setCookie = (key,value) => {
    document.cookie = key+"="+value;
}
export const setCookieExpiry = (key,value,expiryTime) => {
    var date = new Date(new Date().getTime()+(expiryTime*60*1000));
    document.cookie = key+"="+value+";expires="+date.toUTCString()+";path=/";
}

export const getCookie = (cname)=>{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}