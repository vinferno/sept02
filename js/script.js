



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
       <li id="hi" onclick="getIndex(this)">Scrabble</li>
    </ul>
*/}.convert_to_multiline_html();

//WHEN THE DOM IS LOADED CREATE THE HTML ELEMENTS
document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = document.body.innerHTML + html_list;
});



 




