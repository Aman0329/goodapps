const button1=document.querySelector('#btn1');
const button2=document.querySelector('#btn2');
const socialapp=document.querySelector('.social');
const entertainapp=document.querySelector('.entertain');
const whatsappbtn=document.querySelector('.desc1');
const whatsapp=document.querySelector('.whatsapp');
const instagrambtn=document.querySelector('.desc2');
const instagram=document.querySelector('.instagram');
const facebookbtn=document.querySelector('.desc3');
const facebook=document.querySelector('.facebook');
const hotstarbtn=document.querySelector('.desc4');
const hotstar=document.querySelector('.hotstar');
const amazonbtn=document.querySelector('.desc5');
const amazon=document.querySelector('.amazon');
const netflixbtn=document.querySelector('.desc6');
const netflix=document.querySelector('.netflix');

function display1(){
socialapp.style.display='block';
entertainapp.style.display='none';
instagram.style.display='none';
whatsapp.style.display='none';
facebook.style.display='none';
hotstar.style.display='none';
amazon.style.display='none';
netflix.style.display='none';


}
function display2(){
    entertainapp.style.display='block';
    socialapp.style.display='none'
    hotstar.style.display='none';
amazon.style.display='none';
netflix.style.display='none';
instagram.style.display='none';
whatsapp.style.display='none';
facebook.style.display='none';

    
    
}
        function desc1(){
            whatsapp.style.display='block';
            socialapp.style.display='none';
            instagram.style.display='none';
            facebook.style.display='none';

        }
        function desc2(){
            instagram.style.display='block';
            socialapp.style.display='none';
            whatsapp.style.display='none';
            facebook.style.display='none';

        }
        function desc3(){
            facebook.style.display='block';
            socialapp.style.display='none';
            whatsapp.style.display='none';
            instagram.style.display='none';
        }
        function desc4(){
            hotstar.style.display='block';
            entertainapp.style.display='none';
            amazon.style.display='none';
            netflix.style.display='none';
        }
        function desc5(){
            amazon.style.display='block';
            entertainapp.style.display='none';
            hotstar.style.display='none';
            netflix.style.display='none';
        }
        function desc6(){
            netflix.style.display='block';
            entertainapp.style.display='none';
            hotstar.style.display='none';
            amazon.style.display='none';
        }
button1.addEventListener('click',display1);
button2.addEventListener('click',display2);    
whatsappbtn.addEventListener('click',desc1);
instagrambtn.addEventListener('click',desc2);
facebookbtn.addEventListener('click',desc3);
hotstarbtn.addEventListener('click',desc4);
amazonbtn.addEventListener('click',desc5);
netflixbtn.addEventListener('click',desc6);