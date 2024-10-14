const male = document.querySelector('#male');
const female = document.querySelector('#female');
const others = document.querySelector("#others");
const india = document.querySelector('#india');
const other = document.querySelector("#other");
const rural = document.querySelector("#rural");
const urban = document.querySelector('#urban');
const literate = document.querySelector('#Literate');
const illiterate = document.querySelector('#Illiterate');


male.addEventListener('change',() =>{
    if(male.checked){
        female.checked = 0;
        others.checked = 0;
        localStorage.setItem('gender',"Male");
        
    }  
})

female.addEventListener('change',() =>{
    if(female.checked==1){
        male.checked = 0;
        others.checked = 0;
        localStorage.setItem('gender',"Female");

    }
})


india.addEventListener('change',() =>{
    if(india.checked){
        other.checked = 0;
        localStorage.setItem('country',"India");
        
    }  
})

other.addEventListener('change',() =>{
    if(other.checked==1){
        india.checked = 0;
        localStorage.setItem('country',"Other");

    }
})


rural.addEventListener('change',() =>{
    if(rural.checked){
        urban.checked = 0;
        localStorage.setItem('Status',"Rural");
        
    }  
})

urban.addEventListener('change',() =>{
    if(urban.checked==1){
        rural.checked = 0;
        localStorage.setItem('Status',"Urban");

    }
})


literate.addEventListener('change',() =>{
    if(literate.checked){
        illiterate.checked = 0;
  
        localStorage.setItem('Education Status',"Literate");
        
    }  
})

illiterate.addEventListener('change',() =>{
    if(illiterate.checked==1){
        literate.checked = 0;

        localStorage.setItem('Education Status',"Illiterate");

    }
})

others.addEventListener('change',() =>{
    if(others.checked==1){
        male.checked = 0;
        female.checked = 0;
        localStorage.setItem('gender',"Other");
    }
})
// for textinps

const ministry = document.querySelector("#Ministry");
const authority = document.querySelector("#Public");
const name = document.querySelector("#name");
const cno = document.querySelector("#cno");
const eaddress = document.querySelector("#eaddress");
const address = document.querySelector("#address");
const pcode = document.querySelector("#pcode");
const state = document.querySelector("#state");
const povertyline = document.querySelector("#PovertyLine");
const message = document.querySelector("#msg");
const citizenship = document.querySelector("#Citizenship");
const submit = document.querySelector(".submit");
const fdiv = document.querySelector(".formrun");
const namediv = document.querySelector(".name");
const fr = document.querySelector(".fr");
const fl = document.querySelector(".fl");
var mt = document.querySelector("#mt");
var at = document.querySelector("#at");
var cn = document.querySelector("#cn");
var nm = document.querySelector("#nm");
var gn = document.querySelector("#gn");
var ea = document.querySelector("#ea");
var ad = document.querySelector("#ad");
var pc = document.querySelector("#pc");
var ct = document.querySelector("#ct");
var sa = document.querySelector("#sa");
var cr = document.querySelector("#cr");
var es = document.querySelector("#es");
var st = document.querySelector("#st");
var pl = document.querySelector("#pl");
var cz = document.querySelector("#cz");
var ms = document.querySelector("#ms");


submit.addEventListener('click',(e) => {
    e.preventDefault();
    localStorage.setItem("ministry",ministry.value)
    localStorage.setItem("authority",authority.value)
    localStorage.setItem("name",name.value)
    localStorage.setItem("cno",cno.value)
    localStorage.setItem("eaddress",eaddress.value)
    localStorage.setItem("address",address.value)
    localStorage.setItem("pcode",pcode.value)
    localStorage.setItem("state",state.value)
    localStorage.setItem("povertyline",povertyline.value)
    localStorage.setItem("message",message.value)
    localStorage.setItem("citizenship",citizenship.value)

    
if(male.checked == 0 && female.checked==0 && others.checked == 0 ){
    alert("Enter all fields!")
}else if( other.checked==0 && india.checked == 0 ){
    alert("Enter all fields!")
}else if( rural.checked==0 && urban.checked == 0 ){
    alert("Enter all fields!")
}else if( literate.checked==0 && illiterate.checked == 0 ){
    alert("Enter all fields!")
}else{
    fdiv.style.display="None"
    fr.style.display="None"
    fl.style.display="None"
    namediv.style.display="Block"
    
     mt.innerText=localStorage.getItem("ministry")
     at.innerText=localStorage.getItem("authority")
     nm.innerText=localStorage.getItem("name")
     cn.innerText=localStorage.getItem("cno")
     ea.innerText=localStorage.getItem("eaddress")
     ad.innerText=localStorage.getItem("address")
     pc.innerText=localStorage.getItem("pcode")
     sa.innerText=localStorage.getItem("state")
     pl.innerText=localStorage.getItem("povertyline")
     ms.innerText=localStorage.getItem("message")
     cz.innerText=localStorage.getItem("citizenship")
     gn.innerText=localStorage.getItem("gender")
     ct.innerText=localStorage.getItem("country")
     st.innerText=localStorage.getItem("Status")
     es.innerText=localStorage.getItem("Education Status")

} 
})

const back =document.querySelector(".submits")
back.addEventListener('click',()=>{
    fdiv.style.display="Block"
    fr.style.display="Block"
    fl.style.display="Block"
    namediv.style.display="None"  
})