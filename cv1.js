function addNewWEField() {
// console.log("Adding new field");

 let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("wefield");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",2);
 newNode.setAttribute("placeholder","Enter here")

 let weOb=document.getElementById("we");
 let weAddButtonOb=document.getElementById("weAddButton");

 weOb.insertBefore(newNode, weAddButtonOb);


}

function addNewEDField() {

let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("edfield");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",2);
 newNode.setAttribute("placeholder","Enter here")

 let edOb=document.getElementById("ed");
 let edAddButtonOb=document.getElementById("edAddButton");

 edOb.insertBefore(newNode, edAddButtonOb);
        
}

function generateCV() {
    //console.log("heee");
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML = nameField;

    document.getElementById("contactnoT").innerHTML=document.getElementById("contactField").value; 
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emField").value;
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkfield").value;
    document.getElementById("githubT").innerHTML=document.getElementById("gitField").value;

    document.getElementById("objT").innerHTML=document.getElementById("ObjectiveField").value;

    // Work Experience
     
    let wes=document.getElementsByClassName("wefield");
    
    let str="";

    for(let e of wes) {
        str =  str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    // Education

    let ed=document.getElementsByClassName("edfield");

    let str1="";

    for(let e of ed) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("edT").innerHTML=str1;

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

}

function PrintCV() {
    window.print();
}