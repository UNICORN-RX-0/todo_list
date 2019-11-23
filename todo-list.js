(function () {
    var i;
    function closeBtn() {
        var myNodelist = document.getElementsByTagName("li");
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("span");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }
    }

    function closeElement() {
        var close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    function ifChecked() {
        var list = document.querySelector('ul');
        list.onclick = function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }
    }

    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("请先输入一个具体任务。");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
    }

    function initList() {
        closeBtn();
        closeElement();
        ifChecked();
    }

    function init() {
        var addButton = document.getElementById("addButton");
        initList();

        addButton.onclick = function () {
            newElement();
            initList();
        }

        document.onkeydown = function (event) {
            if (event.keyCode == 13) {
                newElement();
                initList();
            }
        }
    }

    init();

})();
window.οnlοad=function(){}