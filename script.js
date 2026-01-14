const box = document.querySelector('.box');
const imgArr = box.children;

for (let i = 0; i < imgArr.length; i++) {
  imgArr[i].addEventListener('click', function() {
    document.body.style.backgroundImage = `url(${imgArr[i].src})`;
  });//反引号的作用``
}
const likes = document.querySelectorAll('.likes');
const likesNum = document.querySelectorAll('.likes .num');
let arrClick = [false,false,false,false,false];

for(let j = 0;j<likes.length;j++){
    likes[j].addEventListener('click',function(){
        arrClick[j]=!arrClick[j];
        if(arrClick[j]){
            likes[j].style.background='orangered';
            likesNum[j].innerHTML=parseInt(likesNum[j].innerText.trim())+1;

        }else{
            likes[j].style.background='bisque';
            likesNum[j].innerHTML=parseInt(likesNum[j].innerText.trim())-1;
        }
    });
}