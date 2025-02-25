let count = 0;
let acount = 0;

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const addBtn = document.getElementById("addBtn");
const countLabel = document.getElementById("countLabel");



decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

addBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}