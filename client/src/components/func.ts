class $Dialog {
    element:HTMLDialogElement
    constructor(element:HTMLDialogElement) {
        this.element=element
    }
    open(){
        this.element.showModal()
    }
    close(){
        this.element.close()
    }
}

const operations={
    reload:()=>{
        window.location.reload()
    },
    scrollDown:()=>{
        const window_bottom=document.getElementById("bottom") as HTMLDivElement
        window_bottom.scrollTo() 
    },
    scrollUp:()=>{
        const window_bottom=document.getElementById("top") as HTMLDivElement
        window_bottom.scrollTo()
    }
}

const loader={
    on:()=>{
        const loader=document.querySelector('.preload') as HTMLDivElement
        loader.style.display='block';
    },
    off:()=>{
        const loader=document.querySelector('.preload') as HTMLDivElement
        loader.style.display='none';
    }
}


export{
    loader,
    $Dialog,
    operations
}