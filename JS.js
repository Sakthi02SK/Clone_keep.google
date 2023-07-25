var notes = []
if (localStorage.getItem("notes")) {
    notes = JSON.parse(localStorage.getItem("notes"));
}
function displayNotes(){
    if (notes.length == 0){
        var temp = document.getElementById("temp");
        temp.style.display = "flex";
    }
    else{
        var temp = document.getElementById("temp");
        temp.style.display = "none";
    }
}
displayNotes();
function shownote(notes){
    var show = "";
    for(var i = 0; i < notes.length;i++){
        show += `<div>
                <h3>${notes[i][0]}</h3>
                <label>${notes[i][1]}</label>
                <button onclick = "deleteNote(${i})">Delete</button>
                </div>`;
    }
    return show;
}
try{
    document.getElementById("shownote").innerHTML = shownote(notes);
}
catch{
    console.log();
}
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    document.getElementById("shownote").innerHTML = shownote(notes);
}
function hideinput() {
    var hide = document.getElementById("hide");
    var view = document.getElementById("view");
    var view1 = document.getElementById("view1");
    var view2 = document.getElementById("view2");
  
    hide.style.display = "none";
    view.style.display = "flex";
    view1.style.display = "flex";
    view2.style.display = "flex";
    document.getElementById("view").value =  ""; 
    document.getElementById("view1").value = "";
}
function getnotes(){
    let hide = document.getElementById("hide");
    let title = document.getElementById("view").value;
    let note = document.getElementById("view1").value;
    let view2 = document.getElementById("view2");
    if(title != "" && note != ""){
        notes.push([title, note]);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
        document.getElementById("shownote").innerHTML = shownote(notes);
        hide.style.display = "flex";
        view.style.display = "none";
        view1.style.display = "none";
        view2.style.display = "none";
    }
    else{
        hide.style.display = "flex";
        view.style.display = "none";
        view1.style.display = "none";
        view2.style.display = "none";
    }
}
