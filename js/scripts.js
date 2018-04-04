// scripts.js 
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var liNew = list.getElementsByTagName('li');
    var liItems = document.createElement('li');
    liItems.innerHTML = "item " + liNew.length;
    list.appendChild(liItems);
});