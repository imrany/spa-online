const route=window.location.pathname
const parseRes=JSON.parse(localStorage.getItem('data'))

switch (route) {
    case "/":
        if(parseRes.token){
            window.location.href="/admin"
        }
        break;
    case "/admin":
        if(!parseRes){
            window.location.href="/"
        }
        break;
    default:
        window.location.href="/"
        break;
}