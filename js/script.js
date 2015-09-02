//PROTOTYPE FUNCTION TO HANDLE THE MULTILINE COMMNETS
Function.prototype.convert_to_multiline_html = function() {
   var start_of_multiline = "/*!";
   var end_of_multiline = "*/";
   var str = this.toString();
   var start_of_string = str.indexOf(start_of_multiline);
   var end_of_string = str.lastIndexOf(end_of_multiline);
   return str.slice(start_of_string + start_of_multiline.length, -(str.length - end_of_string));
};



var html_list = function() {/*!
    <ul>
       <li onclick="newGame()">Add A Game +</li>
       <li onclick="getIndex(this)">Chess</li>
       <li onclick="getIndex(this)">Poker</li>
       <li onclick="getIndex(this)">Monopoly</li>
       <li onclick="getIndex(this)">Scrabble</li>
    </ul>
*/}.convert_to_multiline_html();

//WHEN THE DOM IS LOADED CREATE THE HTML ELEMENTS
document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = html_list;
});


function newGame() {
    ngame=prompt("name");
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + '<li onclick="getIndex(this)">'+ngame+"</li>";
    //alert(document.getElementsByTagName('ul')[0].length);
};

function removeGame() {
    ngame=prompt("name");
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML.replace('<li onclick="getIndex(this)">' + ngame+"</li>", '');
};

function delparent(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function getIndex(node) {
    var childs = node.parentNode.childNodes;
    for (i = 0; i < childs.length; i++) {
        if (node == childs[i]) {
            var liList =document.body.getElementsByTagName('ul')[0].children;
            // liList[i].remove(liList[i]);
            if (liList[i].children.length == 0){
                liList[i].innerHTML = liList[i].innerHTML + '<div onclick="delparent(this)"> - </div>';}
        }
    }
    return i;
}
