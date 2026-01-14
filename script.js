const back = document.querySelector('body');
const img = document.querySelectorAll('.box img');
let hasClick = false;

img[0].addEventListener('click',function(){
    hasClick=!hasClick;
    if(hasClick){
        back.style.background = 'url(./images/Beliya.jpg) no-repeat';
        hasClick=!hasClick;
    }
});
img[2].addEventListener('click',function(){
    hasClick=!hasClick;
    if(hasClick){
        back.style.background = 'url(./images/离岛组_2.jpg) no-repeat';
        hasClick=!hasClick;
    }
});
img[1].addEventListener('click',function(){
    hasClick=!hasClick;
    if(hasClick){
        back.style.background = 'url(./images/微信图片_20251222094641_33_1.jpg) no-repeat';
        hasClick=!hasClick;
    }
});
img[3].addEventListener('click',function(){
    hasClick=!hasClick;
    if(hasClick){
        back.style.background = 'url(./images/芥川_1.jpg) no-repeat';
        hasClick=!hasClick;
    }
});
img[4].addEventListener('click',function(){
    hasClick=!hasClick;
    if(hasClick){
        back.style.background = 'url(./images/5.jpg) no-repeat';
        hasClick=!hasClick;
    }
});


const likes = document.querySelectorAll('.likes');
const likesNum = document.querySelectorAll('.likes .num');
let hasClicked1 = false;
let hasClicked2 = false;
let hasClicked3 = false;
let hasClicked4 = false;
let hasClicked5 = false;


likes[0].addEventListener('click',function(){
    hasClicked1=!hasClicked1;
    if(hasClicked1){
        likes[0].style.background='orangered';
        likesNum[0].innerHTML=parseInt(likesNum[0].innerText.trim())+1;
    }else{
        likes[0].style.background='bisque';
        likesNum[0].innerHTML=parseInt(likesNum[0].innerText.trim())-1;
    }
});
likes[1].addEventListener('click',function(){
    hasClicked2=!hasClicked2;
    if(hasClicked2){
        likes[1].style.background='orangered';
        likesNum[1].innerHTML=parseInt(likesNum[1].innerText.trim())+1;
    }else{
        likes[1].style.background='bisque';
        likesNum[1].innerHTML=parseInt(likesNum[1].innerText.trim())-1;
    }
});
likes[2].addEventListener('click',function(){
    hasClicked3=!hasClicked3;
    if(hasClicked3){
        likes[2].style.background='orangered';
        likesNum[2].innerHTML=parseInt(likesNum[2].innerText.trim())+1;
    }else{
        likes[2].style.background='bisque';
        likesNum[2].innerHTML=parseInt(likesNum[2].innerText.trim())-1;
    }
});
likes[3].addEventListener('click',function(){
    hasClicked4=!hasClicked4;
    if(hasClicked4){
        likes[3].style.background='orangered';
        likesNum[3].innerHTML=parseInt(likesNum[3].innerText.trim())+1;
    }else{
        likes[3].style.background='bisque';
        likesNum[3].innerHTML=parseInt(likesNum[3].innerText.trim())-1;
    }
});
likes[4].addEventListener('click',function(){
    hasClicked5=!hasClicked5;
    if(hasClicked5){
        likes[4].style.background='orangered';
        likesNum[4].innerHTML=parseInt(likesNum[4].innerText.trim())+1;
    }else{
        likes[4].style.background='bisque';
        likesNum[4].innerHTML=parseInt(likesNum[4].innerText.trim())-1;
    }
});
