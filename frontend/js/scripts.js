function myValidation(){
    let x = document.getElementById("newTask").value;
    if (x.includes("<") || x.includes(">")) {
        document.getElementById("newTaskError").style.display = "block";
    }
    var emptyListTag = document.createElement("li");
    emptyListTag.innerText = x;
    document.getElementById("myNewTaskList").appendChild(emptyListTag);
}