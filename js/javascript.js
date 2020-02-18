'use strict';

console.log('TODO version 1.0.0.2');

// вывод данных при нажатии enter

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        submitButton();
      }
    });
})();


// событие при нажатии кнопки submit

function submitButton() {
    let point = document.getElementById("content-input");
    console.log(point);


    if (point.value !== '') {
        addTodo(point);
        point.value = '';
    } else {
        error();
    }
 
    console.log(point.value);
}

// функция выведения пунктов TODO

function addTodo(point) {

    var textArea = document.querySelector('.todo');


    var elem = {
        li: document.createElement('li'),
        p: document.createElement('p'),
        input: document.createElement('input'),
        label: document.createElement('label'),
        h4: document.createElement('h1'),
        span: document.createElement('span'),
        up: document.createElement('i'),
        down: document.createElement('i'),
        trash: document.createElement('i'),
    };

    elem.li.classList.add('num');
    elem.input.classList.add('custom-control-input');
    elem.label.classList.add('custom-control-label');
    elem.span.classList.add('icon-block');
    elem.up.classList.add('fa', 'fa-thumbs-up');
    elem.down.classList.add('fa', 'fa-thumbs-down');
    elem.trash.classList.add('fa', 'fa-trash');


    document.getElementById('content-input').style.border = '0.5px solid grey';

    elem.down.style.display = 'none';

    elem.li.appendChild(elem.p);
    elem.p.innerHTML = elem.p.innerHTML + point.value;
    elem.p.appendChild(elem.span);
    elem.span.appendChild(elem.up);
    elem.span.appendChild(elem.down);
    elem.span.appendChild(elem.trash);

    textArea.insertBefore(elem.li, textArea.firstChild);


    elem.trash.addEventListener('click', resetPoint);
    elem.up.addEventListener('click', doIt);
    elem.down.addEventListener('click', didNot);

    

}
// подсмотрел
function resetPoint() {
    this.closest('li').remove(); 
}

function doIt() {
    this.closest('li').classList.remove('didnt');
    this.closest('li').classList.add('done');
    this.style.display = 'none';
    this.nextSibling.style.display = 'block';
}

function didNot() {
    this.closest('li').classList.toggle('done');
    this.closest('li').classList.toggle('didnt');
    this.previousSibling.style.display = 'block';
    this.style.display = 'none';    
}

// функция изменения цвета ошибки

function error() {
    document.getElementById('error').style.display = 'block';
    document.getElementById('content-input').style.border = '0.5px solid red';
}

document.getElementById("enter__button").addEventListener('click', submitButton);

console.log('hello');

function resetButton() {
    let point = document.getElementById("content-input").value;
    document.getElementById("content-input").value = null;
    document.getElementById("todo-list").innerHTML = null;
}

document.getElementById("reset__button").addEventListener('click', resetButton);

function hideDone() {
    let elements = document.getElementsByClassName('done');
    for (let i = 0; i < elements.length; i++) {
    
           console.log(elements);
        elements[i].style.display = 'none';
    }
}  

document.getElementById("hide__button").addEventListener('click', hideDone);

function showDone() {
    let elements = document.getElementsByClassName('done');
    for (let i = 0; i < elements.length; i++) {
    
           console.log(elements);
        elements[i].style.display = 'block';
    }
}

document.getElementById("show__button").addEventListener('click', showDone);
