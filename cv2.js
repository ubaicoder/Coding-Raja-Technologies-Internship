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
     newNode.setAttribute("placeholder","Enter here");
    
     let edOb=document.getElementById("ed");
     let edAddButtonOb=document.getElementById("edAddButton");
    
     edOb.insertBefore(newNode, edAddButtonOb);
            
    }

    function addNewSKField() {
        
        let newNode=document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("skfield");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",2);
        newNode.setAttribute("placeholder","Enter here");

        let skOb=document.getElementById("sk");
        let skAddButtonOb=document.getElementById("skAddButton");

        skOb.insertBefore(newNode, skAddButtonOb);
    }

    function addNewOBField() {
        let newNode=document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("obfield");
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",2);
        newNode.setAttribute("placeholder","Enter here");

        let objOb=document.getElementById("ob");
        let objAddButtonOb=document.getElementById("obAddButton");

        objOb.insertBefore(newNode, objAddButtonOb);
    }

    function generateCV() {
        let nameField=document.getElementById("nameField").value;
        let nameT=document.getElementById("nameT");
        nameT.innerHTML = nameField;

        //address

        document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
        //contact
        document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
        //email
        document.getElementById("emailT").innerHTML=document.getElementById("emField").value;
         
        //Work Experience
        let wes=document.getElementsByClassName("wefield");
    
        let str="";

        for(let e of wes) {
         str =  str + `<li> ${e.value} </li>`;
       }

       document.getElementById("weT").innerHTML=str;

       //Education
       let ed=document.getElementsByClassName("edfield");

       let str1="";
   
       for(let e of ed) {
           str1 = str1 + `<li> ${e.value} </li>`;
       }
   
       document.getElementById("edT").innerHTML=str1;

       //Objective
       let obj=document.getElementsByClassName("obfield");

       let str2="";

       for(let e of obj) {
         str2 = str2 + `<li> ${e.value} </li>`;
        }

        document.getElementById("objT").innerHTML=str2;

        //Skills
        let sk=document.getElementsByClassName("skfield");

        let str3="";

        for(let e of sk) {
            str3= str3 + `<li> ${e.value} </li>`;
        }

        document.getElementById("skT").innerHTML=str3;

        document.getElementById("cv-form").style.display='none';
        document.getElementById("cv-template").style.display='block';


    }
    function PrintCV() {
        window.print();
    }