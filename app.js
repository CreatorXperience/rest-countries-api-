const input = document.querySelector("#search")
const region = document.querySelector("#region-type")
const flag = document.querySelector("#countryflag")
const  newCont = document.querySelector("#new-cont")
const cont = document.querySelector("#cont")
const dropbtn = document.querySelector("#dropdownbtn")
const dropcontent = document.querySelector("#dropdown-content")
let reg = document.querySelectorAll("#reg")
const africa = document.querySelector("#african-cont")
const americas = document.querySelector("#americas-cont")
const textcont = document.querySelector("#text-cont")
let timer;
let newElement;
// adds input event listener to input
input.addEventListener("input" ,(e) => {
  
  
clearTimeout(timer)
 timer = setTimeout(()=> {
  //set a condition 
  if(e.target.value.length > 0){
    fetch('./data.json')
    .then(response => response.json()) 
    .then(data => {
      data.map((eachData,index)=> {
        if(e.target.value.toLowerCase() == data[index].name.toLowerCase() || e.target.value.toLowerCase() == data[index].name.toUpperCase()){
            // console.log(data[index]) for debbugging
            let countryName = data[index].name;
        let countryFlag = data[index].flag;
        console.log(countryFlag)
        let Population = data[index].population;
        let Region = data[index].region;
        let Capital = data[index].capital;

        let freshElement = document.createElement("div")
        freshElement.setAttribute("id", cont)
        let markup = `
        <div id="img-cont"> 
        <img src="${countryFlag}" alt="country" id="countryflag" width="50px">
        </div>
        
        <div id="text-cont"> 
        <h2> ${countryName} </h2>
        <p>Population: <span id="pop"> ${Population}</span></p>
        <p>Region: <span id="reg">${Region}</span></p>
        <p>Capital: <span id="pop"> ${Capital} </span></p>
    </div>`;

      freshElement.innerHTML = markup;
      newCont.replaceChildren(freshElement)
   
           }
      }) 
        
    } )
  }
  //if the condition is not met
    else if(e.target.value==""){
      //run the function below
      loadCountry()
    }

    }, 1000);
})
function loadCountry(){
    fetch('./data.json')
    .then(response => response.json()) 
    .then(data => {
      data.map((eachData,index)=> {
        if(index < 25){
          // console.log(data[index]) for debugging
          let countryName = data[index].name;
      let countryFlag = data[index].flag;
      console.log(countryFlag)
      let Population = data[index].population;
      let Region = data[index].region;
      let Capital = data[index].capital;
    
      newElement = document.createElement("div")
      newElement.setAttribute("id", cont)
      let markup = `
      <div id="img-cont"> 
      <img src="${countryFlag}" alt="country" id="countryflag" width="50px">
      </div>
      
      <div id="text-cont"> 
      <h2> ${countryName} </h2>
      <p>Population: <span id="pop"> ${Population}</span></p>
      <p>Region: <span id="reg">${Region}</span></p>
      <p>Capital: <span id="pop"> ${Capital} </span></p>
    </div>`;
    
    newElement.innerHTML = markup;
    newCont.appendChild(newElement);
        }
            
    
           
      }) 
    } )
  }

  loadCountry();

  

