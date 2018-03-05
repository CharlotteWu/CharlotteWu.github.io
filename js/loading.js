//loading加载动画

var loading = '<div id="loading" style="position: fixed;width: 100%;height: 100%;background: #ffffff;z-index: 999;transition: 2s ;">'+
    '<div style="width: 140px;position: absolute;left: 50%;top: 50%;transform: translate3d(-50%,-50%,0);">'+
    '<img src="../img/icon/loading.gif">'+
    '</div>'+
    '</div>';

document.write(loading);

document.onreadystatechange = function () {

    var load = document.getElementById('loading');
    if(document.readyState == 'complete'){
        load.style.display = 'none';
    }
};
