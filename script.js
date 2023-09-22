const con= document.querySelector('#Counter');

let decrement= function fun(){
    let val=parseInt(con.innerText);
    val-=1;
    con.textContent=val;
};

let increment= ()=>{
    let val=parseInt(con.innerText );
    val+=1;

    con.textContent=val;
}