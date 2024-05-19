function PlusImg(urlIMG=false){
  const GetNumbers = [document.querySelector(".GetNumber")][0].addEventListener("keydown",(event)=>{
    const ajax = new xmlRequest("GET","https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
    ajax.return(PlusImg); 
    let getMain = [document.querySelector(".GetMain")];
    let createDiv = document.createElement("div");
    createDiv.classList.add("GetCards");
    let createImg = document.createElement("img");
    let createH1 = document.createElement("h1");
    createImg.classList.add("GetCardsImg");
    let replaceImg = urlIMG.responseText.replace('["',"")
    replaceImg = replaceImg.replace('"]',"")
    createImg.setAttribute("src",replaceImg);
    createDiv.appendChild(createImg);
    getMain[0].appendChild(createDiv);
  })
}

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
//? Create callback for data processing: [ ajax.return(a); ] 