
const paranum = document.getElementById("para-num")
const numofparas = document.getElementById("numofparas")
let btn = document.querySelector("#btn")
let para = document.getElementById("para")

function sameRangeValue(e){
const value = e.target.value;
console.log(value);
paranum.value=value;
numofparas.value=value;
}

paranum.addEventListener('input',sameRangeValue);
numofparas.addEventListener('input',sameRangeValue);


let options={
    method:"GET",
    headers: { "x-api-key":apiKey},
};
let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";


let generateParas= ()=> {
    let finalURL= url + paranum
    fetch(finalURL,options)
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    para.innerText = data.text;
    })
};
btn.addEventListener("click",generateParas);
// window.addEventListener("load",generateParas)




