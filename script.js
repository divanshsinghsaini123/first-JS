
// how to refer a attriute form the html 
// -> use query selector 
const count = document.querySelector('#val');


const increment =()=>{
    let value = parseInt(count.innerText);
    value = value+1 ;
    count.innerText = value ;
    var audio = document.getElementById("audio1");
    audio.play();

}

const decrement =()=>{
    let value = parseInt(count.innerText);
    value = value - 1 ;
    count.innerText = value ;
    var audio = document.getElementById("audio2");
    audio.play();
}