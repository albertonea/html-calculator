const addButton = document.getElementById("addButton")

addButton.onclick = function(event){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const output = parseInt(a) + parseInt(b);
    document.getElementById("result").innerText = output;
}
