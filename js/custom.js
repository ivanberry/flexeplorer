/*点击隐藏菜单栏，实现方法：添加className,属性为margin-left: -21rem;
增添.menu属性opacity: .2;实现箭头按钮转向，实现方法两种，以为移除.left
增添.right，一为增添属性transform: rotate(180deg);
event：click
event listener: aside#sidaBar

 */
var elMinimize = document.getElementById('sideBar');
var toggle = document.getElementById('toggle');
//function1: change the angle direction
//function right(e) {
//    var target = e.target;
//    target.setAttribute('class', ' angle double right icon big ' +
//        'minimized');
//}

//minimize the aside change the angle direction and toggle back with raw javascript
function minimize() {
    elMinimize.className += ' minimized';
    toggle.classList.remove('left');
    toggle.classList.add('right');
    console.log(elMinimize.className);
    console.log(toggle.className);
}
function toggleBack() {
    elMinimize.classList.remove('minimized');
    toggle.classList.remove('right');
    toggle.classList.add('left');
}

function sideBarToggle() {
    if (elMinimize.classList.contains('minimized')){
        toggleBack();
    }
    else {
        minimize();
    }
        }

//function  removeClassName() {
//    elMinimize.setAttribute('class', 'sideBar flex');
//    toggle.setAttribute('class', 'angle left double icon big');
//}


//tranditional DOM event handler
toggle.addEventListener('click', sideBarToggle, false);  //event delegation 默认work flow是冒泡
//toggle.addEventListener('click',minimize, false);

//event delegation

//add new element(divs) to the page with DOM manipulation

var position = document.getElementById('demo');
var spanStrings = 'fsfsjl  fsjfls sfja2fspjfd 23wf jfsjhsF lsfhlqFj';
function addDivs() {
    var newDiv = document.createElement('div');
    newDiv.className = 'flex-item'
    var newSpan = document.createElement('span');
    newSpan.contentEditable = true;
    var spanString = spanStrings.slice(Math.floor(Math.random()*10)+1,40); //需要更好的方法产生随机数字，截取字符
    var newText = document.createTextNode(spanString);
    newSpan.appendChild(newText);
    newDiv.appendChild(newSpan);
    position.appendChild(newDiv);
}

//remove element(divs) from the page
function minusDivs() {
    var removeEl = position.lastElementChild;
    position.removeChild(removeEl);
}

//tranditional event handler
var addEl = document.getElementById('count-plus');
var minusEl = document.getElementById('count-minus');

addEl.addEventListener('click', addDivs, false);
minusEl.addEventListener('click', minusDivs, false);

    //the element which will change
var elDirection = document.getElementById('demo');

//change the attribute 'flex' of the items

    //get the value of input
var flex1Grow = document.getElementById('flex-grow');
function elGrowChange () {
    var usrGrow = flex1Grow.value;
    var el = document.querySelectorAll('div.flex-item');
    var i, len = el.length;
    for ( i = 0; i < len; i++) {
        el[i].style.flexGrow = usrGrow;
    }

}

flex1Grow.oninput = elGrowChange;


//change the attribute 'flex-direciton' of the 'demo' element

    //get the value of selection's option which is selected.
var selectionOption = document.getElementById('flex-direction-control');

//    //the element where will change.
//var elDirection = document.getElementById('demo');

    //the event bind to

function elDirectionChange () {
    var usrOption = selectionOption.options[selectionOption.selectedIndex].value;
    //注：之前将usrOption定义在全局，不能实现预期目标，注意作用域的问题。
    elDirection.style.flexDirection = usrOption;
}

//selectionOption.addEventListener('change', elDirectionChange, false);
selectionOption.onchange = elDirectionChange;

//change the attr 'flex-wrap'

    var selctionWrap = document.getElementById('flex-wrap-control');

function elWrapChange () {
    var usrOption = selctionWrap.options[selctionWrap.selectedIndex].value;
    elDirection.style.flexWrap = usrOption;
}

selctionWrap.onchange = elWrapChange;

//change the attr 'justify-content'

var selectionJustify = document.getElementById('justify-content-control');

function elJustifyChange () {
    var usrOption = selectionJustify.options[selectionJustify.selectedIndex].value;
    elDirection.style.justifyContent = usrOption;
}

selectionJustify.onchange = elJustifyChange;








