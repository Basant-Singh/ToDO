let form = document.getElementById("frm");
let list = document.getElementById("list");
let filter = document.getElementById("filter");
form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();

    let inputValue = document.getElementById("txt").value;


    let li = document.createElement("li");

    li.classList = "l";

    li.appendChild(document.createTextNode(inputValue));
    let btn = document.createElement("button");
    btn.classList = "red";
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);

    list.appendChild(li);



}

    //Removing Items

    list.addEventListener("click", remove);

    function remove(e){
        if(e.target.classList.contains("red")){
            if(confirm("Are you Sure, you want to delete this Task?")){
            let rem = e.target.parentElement;
            list.removeChild(rem);}
        }
    }

//Filtering Items

filter.addEventListener("keyup", flt);

function flt(){
    let search = filter.value.toLowerCase();
    let items = list.getElementsByClassName("l");
    
    Array.from(items).forEach( (items)=>{
        let itemName = items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(search) != -1){
            items.style.display = "flex"
        }
        else{
            items.style.display = "none"
            
        }
    })
}