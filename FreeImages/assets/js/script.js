function xmlRequest(method='GET',url='https://api.ipify.org?format=json',asyncCallback=true,callback=false){
  this.method = method;
  this.url = url;
  this.asyncCallback = asyncCallback;
  this.callback = callback;
  this.return = (callback)=>{
      /**
        * ! Check if the callback is being called!
        * ? ajax.return(?);
      **/
      const xml = new XMLHttpRequest();
      xml.open(this.method,this.url,this.asyncCallback);
      xml.send();
      xml.onreadystatechange = ()=>{
        if(xml.readyState == 4){
          callback(xml);
      }
    }
  }
}
function api(){
  this.create = (getAPI)=>{
    let getMain = [...document.getElementsByClassName("main")];
    let createDiv = document.createElement("div");
    createDiv.classList.add("div_test");
    let createImg = document.createElement("img");
    createImg.classList.add("photo");
    let createDivSam = document.createElement("div");
    createDivSam.classList.add("info-photo");
    let createDivH1 = document.createElement("h1");
    createDivH1.classList.add("smu-h1");
    createDivSam.appendChild(createDivH1);
    createDivH1.innerText = getAPI.responseURL;
    createDiv.appendChild(createImg);
    createDiv.appendChild(createDivSam);
    getMain[0].appendChild(createDiv);
    createImg.src = getAPI.responseURL;
  };
}

const btn = document.querySelector(".onclickapi").addEventListener("click",()=>{
  let apis = new api();
  const randomNumber = Math.random()*115;
  const number = parseInt(randomNumber);
  const ajax = new xmlRequest("GET",`https://randomfox.ca/images/${number}.jpg`);
  ajax.return(apis.create); //? Create callback for data processing: [ ajax.return(a); ] 
})
