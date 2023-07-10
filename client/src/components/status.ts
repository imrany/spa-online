// @flow strict
import { useEffect, useState } from "react";

function status() {
    const [status,setStatus]=useState({})
    useEffect(()=>{
        if (navigator.onLine) {
            setStatus({
                value:navigator.onLine,
                text:"Back online"
            })
        } else {
            setStatus({
                value:navigator.onLine,
                text:"No internet connection"
            })
        }
    },[])
  
    return status
};

export {
    status
};