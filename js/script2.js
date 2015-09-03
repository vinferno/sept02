str1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis vel, veniam optio soluta, magni quidem quaerat mollitia aperiam, atque cumque minima dolores ducimus voluptatem autem!";


// Function if they click new game
function newGame() {

    ngame=prompt("name");// ask for name of game

    if (ngame===null || ngame===''){ // if name of game is blank or canceled
    	return;// exit code
    }
    //else
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + '<li onclick="getIndex(this)">'+ngame+"</li>";
    
};

// Function if 
function delparent(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function getIndex(node) {

    var childs = node.parentNode.children;
   
    for (i = 0; i < childs.length; i++) {

        if (node == childs[i]) {
            var liList =document.body.getElementsByTagName('ul')[0].children;
            
            if (liList[i].children.length == 0){
               
                    for (j = 0; j < childs.length; j++) {
                        liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                        liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
                        liList[j].style.maxHeight = "52px";
                        liList[j].style.overflow = "hidden";
                    }

                        liList[i].innerHTML = liList[i].innerHTML + '<div onclick="delparent(this)"> - </div>';
                
            }
            else{
                    if (liList[i].children.length > 1){
                   
                        for (j = 0; j < childs.length; j++) {
                            liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                            liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
                            liList[j].style.maxHeight = "52px";
                            liList[j].style.overflow = "hidden";
                        }

                    }
                    else{

                        liList[i].innerHTML = liList[i].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                        liList[i].style.maxHeight = "400px";
                        liList[i].style.overflow = "scroll";
                        liList[i].style.overflowX = "hidden";
                        liList[i].innerHTML = liList[i].innerHTML + "<br><hr>" + "<p>" + str1 + "</p>";
                    }
                }
        }

    }

}

