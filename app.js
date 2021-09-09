let inpTxt = document.querySelector("#input");
let btnClick = document.querySelector("#btn");
let outTxt = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/sith.json";


function translate(){
  console.log(inpTxt.value)

  fetch(`${url}?text=${inpTxt.value}`)
    .then((responce) => responce.json())
    .then((data) => {
      outTxt.innerHTML = data.contents.translated
    })
    .catch(err=>console.log(err.message))
}

btnClick.addEventListener("click", translate);