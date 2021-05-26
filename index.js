//control variables
const internetConnection = window.navigator.onLine;
const internetStateText = document.querySelector(".connection-check-state"); 
const connectionControl = () =>{
    if(internetConnection == true){
        internetStateText.innerHTML = "Internet var :)";
    }
    else{
        internetStateText.innerHTML = "Internet yok :(";
    }
}
//async function with setinterval
setInterval(() => {
    connectionControl();
}, 1000);