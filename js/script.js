window.onload = function () {
    /*添加方法*/
    var smb = document.getElementsByClassName('sub-menu-btn');
    var sml= document.getElementsByClassName('sub-menu-list');
    var close = document.getElementsByClassName('close');

    smb[0].onclick = function () {
        sml[0].className = 'sub-menu-list sub-menu-list-popup';
    };

    close[0].onclick = function () {
        sml[0].className = 'sub-menu-list';
    };

//    回到顶部
    var oTop = document.getElementById("to_top");

    oTop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}


