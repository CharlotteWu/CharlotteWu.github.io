window.onload = function () {
    /*移动端菜单*/
    var smb = document.getElementsByClassName('sub-menu-btn');
    var sml= document.getElementsByClassName('sub-menu-list');
    var close = document.getElementsByClassName('close');

    smb[0].onclick = function () {
        sml[0].className = 'sub-menu-list sub-menu-list-popup';
    };

    close[0].onclick = function () {
        sml[0].className = 'sub-menu-list';
    };


    //指定位置高亮
    var highlights = document.getElementsByClassName('highlight');

    //获取当前元素位置距离顶端的高度
    function toTop (target, parent) {
        var top = 0;

        while (target && target != parent) {
            top += target.offsetTop;
            target = target.offsetParent
        }

        return top;
    }

    console.log(document.documentElement.clientHeight);
    console.log(toTop(highlights[0]));
    var hightlightHeight = [];
    for(var i=0,height;height = highlights[i++];){
        hightlightHeight[i] = toTop(height);
    }
    //删除第一个空元素
    hightlightHeight.shift();

    // //滑动到当前元素显示动效 移动端
    //添加方法
    function hasClass(ele, cls) {
        return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    function addClass(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    }
    function removeClass(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    //为指定的dom元素添加样式
    function checkCurrent(el,elHeight,styleClassName) {
        for(var i=0;i<el.length;i++){
            if( document.documentElement.scrollTop + document.documentElement.clientHeight >= elHeight[i] &&  document.documentElement.scrollTop <= elHeight[i]){
                addClass(el[i],styleClassName);
            }else{
                removeClass(el[i],styleClassName);
            }
        }
    }

    //初始化
    checkCurrent(highlights,hightlightHeight,'highlight-show');

    window.onscroll = function () {

        console.log(document.documentElement.scrollTop);

        checkCurrent(highlights,hightlightHeight,'highlight-show');

    }


};


