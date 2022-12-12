const params = new URLSearchParams(window.location.search);
const pageName = params.get("p");

if(!Object.keys(wardata).includes(pageName)) {
    document.title                                 = "Page not found - Geopolitics Wiki"
    document.getElementById("titleicon").src       = "https://static.miraheze.org/polandballwiki/3/30/Template.png";
    document.getElementById("title")    .innerText = "Page not found";
    document.getElementById("navname")  .innerText = "Maintenance pages";
    document.getElementById("navtitle") .innerText = "Page not found";
    document.getElementById("subtitle") .innerText = "";
    document.getElementById("content")  .innerText = "There is no page with this name.";
} else {
    document.title                                 = `${pageName} - Wiki`;
    document.getElementById("titleicon").src       = wardata[pageName].icon;
    document.getElementById("title")    .innerText = pageName;
    document.getElementById("navtitle") .innerText = pageName;
    document.getElementById("navname")  .innerText = wardata[pageName].navName;
    document.getElementById("subtitle") .innerText = wardata[pageName].displayName;
    document.getElementById("content")  .innerHTML = wardata[pageName].content;
}

editingSub = false;
function editSub() {
    if(editingSub == false) {
        document.getElementById("subtitle").setAttribute("contenteditable",true);
        document.getElementById("subtitle").classList.add("top");
        document.getElementById("editsub") .innerText = "Save subtitle edits";
        editingSub = true;
    } else {
        document.getElementById("subtitle").setAttribute("contenteditable",false);
        document.getElementById("subtitle").classList.remove("top");
        document.getElementById("editsub") .innerText = "Edit subtitle";
        editingSub = false;
    }
}
editing = false;
function edit() {
    if(editing == false) {
        document.getElementById("content") .setAttribute("contenteditable",true);
        document.getElementById("content") .classList.add("top");
        document.getElementById("edit")    .innerText     = "Save edits";
        document.getElementById("edittips").style.display = "block";
        editing = true;
    } else {
        document.getElementById("content") .setAttribute("contenteditable",false);
        document.getElementById("content") .classList.remove("top");
        document.getElementById("edit")    .innerText     = "Edit";
        document.getElementById("edittips").style.display = "none";
        editing = false;
    }
}

function discuss() {}
