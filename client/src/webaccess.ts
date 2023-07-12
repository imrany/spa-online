const successCallback=(position:any)=>{
    const {latitude, longitude}= position.coords;
    localStorage.setItem("location",`${latitude},${longitude}`)
    console.log(latitude,longitude)
}
const errorCallback=(error:any)=>{
    localStorage.setItem("location",error.message);
    console.log(error.message);
}

window.onload=()=>{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
