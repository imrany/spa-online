
const parseRes=JSON.parse(localStorage.getItem('data'))
if(!parseRes.token){
    window.location.href="/"
}