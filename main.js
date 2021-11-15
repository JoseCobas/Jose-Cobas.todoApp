'use strict';

var input = document.querySelector("input");
var btn = document.querySelector("#button");

btn.addEventListener('click', addList);
 

function addList(e){
    var todo = document.querySelector("#todo");
    var done = document.querySelector("#done");

    var newLi = document.createElement('li');
    var bytBtn = document.createElement('button');
    bytBtn.style.cursor ="pointer";
    var okBtn = document.createElement('button');
    okBtn.style.cursor = "pointer";
    var delBtn = document.createElement('button');
    delBtn.style.cursor = "pointer";
    var keeper = document.createElement('input');


    bytBtn.innerHTML = 'ändra';
    okBtn.innerHTML = 'färdig';
    delBtn.innerHTML = 'delete';

    if (input.value !== '') {
        
        keeper.setAttribute('value', input.value);
        keeper.setAttribute('disabled',true);
        input.value = '';
        
        todo.appendChild(newLi);
        newLi.appendChild(keeper);
        newLi.appendChild(bytBtn);        
        newLi.appendChild(okBtn);
        newLi.appendChild(delBtn);

    }

    bytBtn.addEventListener('click', function(){
       
        keeper.removeAttribute('disabled',false);
        bytBtn.innerHTML = 'spara';
        bytBtn.addEventListener('click',function(){
            //keeper.toggleAttribute("value");
           keeper.toggleAttribute("disabled");
        })
    });

    okBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        done.appendChild(parent);
        okBtn.remove();
    });

    delBtn.addEventListener('click',function(){
        var parent = this.parentNode;
        parent.remove();

    });
}
