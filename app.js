// let a=200;
// let b=400;
// let c=450;
// let d=320;

let cc;

let inp=document.querySelectorAll("input");
inp.forEach(vv=>{
    vv.addEventListener("input",myFunction)
})

function myFunction(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    // dishes
    let st=document.getElementById("start").value;
    let ind=document.getElementById("ifood").value;
    let chi=document.getElementById("cfood").value;
    let dsrt=document.getElementById("dsrt").value;

    // order
    let starter=parseInt(st);
    let indian=parseInt(ind);
    let chinese=parseInt(chi);
    let desert=parseInt(dsrt);

    let Amount=parseInt(starter)+parseInt(indian)+parseInt(chinese)+parseInt(desert);
    let gst=Amount/100*18;
    let tip=0;

    // if(inp==0){
    //     alert("please order first")
    // }

// tip
if(Amount==0){
    tip=0;
}
else if(Amount<5000){
tip=100;
}
else if(Amount>5000){
tip=200;
}

cc=Amount+gst+tip;
    let dname=document.getElementById("dname");
    let demail=document.getElementById("demail");
dname.innerHTML=name;
demail.innerHTML=email;

let amnt=document.getElementById("amnt");
let Gst=document.getElementById("gst");
let Tip=document.getElementById("tip");
let tl=document.getElementById("totl");

amnt.innerHTML=Amount;
Gst.innerHTML=gst;
Tip.innerHTML=tip;
tl.innerHTML=Amount+gst+tip;

// error

}

document.getElementById("btn").addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    // alert("your order is placed with 18% gst and 10% as tip total bill:"+cc)
    alert(name+" your order is placed and your  total bill:"+cc)
})