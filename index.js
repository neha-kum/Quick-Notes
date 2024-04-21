let notes = [];
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const listEl = document.getElementById('list-el');
const notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"))

if(notesFromLocalStorage){
    notes = notesFromLocalStorage
    display(notes);
}

saveBtn.addEventListener("click", function(){
    notes.push(inputEl.value)
    // console.log(notes)
    inputEl.value = ""

    localStorage.setItem("notes", JSON.stringify(notes))

     display(notes)  
})

function display(notes){
    let listItems = " "
    for(let i = 0; i<notes.length; i++){
    
    listItems = listItems  + `<li> ${notes[i]} </li>`
    }
    listEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    notes=[]
    display(notes)
})


