
'use strict'

let all_matches = document.querySelector('.all_matches');
let upcoming_matches = document.querySelector('.upcoming_matches');
let latest_results = document.querySelector('.latest_results')

let nav_1 = document.querySelector('.nav-1')
let nav_2 = document.querySelector('.nav-2')
let nav_3 = document.querySelector('.nav-3')

let background_1 = document.querySelector('.background-1');
let background_2 = document.querySelector('.background-2');
let background_3 = document.querySelector('.background-3');

let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');

let left_icon = document.querySelector('.left_icon');
let right_icon = document.querySelector('.right_icon');
nav_1.addEventListener('click',function(){

    all_matches.classList.remove('hidden');
    upcoming_matches.classList.add('hidden');
    latest_results.classList.add('hidden');
})

nav_2.addEventListener('click',function(){

    all_matches.classList.add('hidden');
    upcoming_matches.classList.remove('hidden');
    latest_results.classList.add('hidden');
})

nav_3.addEventListener('click',function(){

    all_matches.classList.add('hidden');
    upcoming_matches.classList.add('hidden');
    latest_results.classList.remove('hidden');
})

let count = 0;
let count1= 0;

right_icon.addEventListener('click',function()
{

 
    if(count == 0)
    {
        background_1.classList.toggle('hidden');
        background_2.classList.toggle('hidden');
        text2.classList.toggle('animation_text');
        count++;
        
    }

    else if(count == 1)
    {
        background_2.classList.toggle('hidden');
        background_3.classList.toggle('hidden')
        text3.classList.toggle('animation_text');

        count++;
       
    }

    else if(count == 2)
    {
        background_3.classList.toggle('hidden');
        background_1.classList.toggle('hidden');
        text1.classList.toggle('animation_text');
        count=0;
       
    }



})


left_icon.addEventListener('click',function()
{
    console.log(count1)
    if(count == 0)
    {
    
        background_1.classList.toggle('hidden');
        background_3.classList.toggle('hidden');
        text3.classList.toggle('animation_text');
        count = 2;
    
    }

    else if(count == 1)
    {
        background_2.classList.toggle('hidden');
        background_1.classList.toggle('hidden');
        text1.classList.toggle('animation_text');
    

        count--;
    }

    else if(count == 2)
    {
      
        background_2.classList.toggle('hidden');
        text2.classList.toggle('animation_text');
        background_3.classList.toggle('hidden');
        count--;
   } 



})


let close_icon = document.querySelector('.close-icon');
let list_icons = document.querySelector('.list-icons');
let side_list = document.querySelector('.side_list')




close_icon.addEventListener('click',function(){
    side_list.classList.toggle('hidden');
})
list_icons.addEventListener('click',function(){
    
    side_list.classList.toggle('hidden');
})

let active = document.querySelectorAll('.each');

active.forEach(ele => {

    ele.addEventListener('mouseover',function(){

        ele.classList.toggle('active');
    })
    
    ele.addEventListener('mouseout',function(){
        ele.classList.toggle('active');

    }) 
    
})



'use strict'

let cards = document.querySelectorAll('.card');
let allCards = document.querySelector('.cards');
let form = document.querySelectorAll('.form');
let form1 = document.querySelector('.bg1');
let form2 = document.querySelector('.bg2');
let form3 = document.querySelector('.bg3');
let form4 = document.querySelector('.bg4');
let form5 = document.querySelector('.bg5');
let form6 = document.querySelector('.bg6');
let btn_submit = document.querySelectorAll('.btn_submit');

cards.forEach((ele,index) => {

    ele.addEventListener('click',function()
    {
        console.log(ele);
      if(index == 0)
      {
           allCards.classList.add('active1');
           form1.classList.remove('active1');
           form2.classList.add('active1');
           form3.classList.add('active1');
           form4.classList.add('active1');
           form5.classList.add('active1');
           form6.classList.add('active1');
      }

      if(index == 1)
      {
           allCards.classList.add('active1');
           form1.classList.add('active1');
           form2.classList.remove('active1');
           form3.classList.add('active1');
           form4.classList.add('active1');
           form5.classList.add('active1');
           form6.classList.add('active1');
      }

      if(index == 2)
      {
           allCards.classList.add('active1');
           form1.classList.add('active1');
           form2.classList.add('active1');
           form3.classList.remove('active1');
           form4.classList.add('active1');
           form5.classList.add('active1');
           form6.classList.add('active1');
      }

      if(index == 3)
      {
           allCards.classList.add('active1');
           form1.classList.add('active1');
           form2.classList.add('active1');
           form3.classList.add('active1');
           form4.classList.remove('active1');
           form5.classList.add('active1');
           form6.classList.add('active1');
      }

      if(index == 4)
      {
           allCards.classList.add('active1');
           form1.classList.add('active1');
           form2.classList.add('active1');
           form3.classList.add('active1');
           form4.classList.add('active1');
           form5.classList.remove('active1');
           form6.classList.add('active1');
      }

      if(index == 5)
      {
           allCards.classList.add('active1');
           form1.classList.add('active1');
           form2.classList.add('active1');
           form3.classList.add('active1');
           form4.classList.add('active1');
           form5.classList.add('active1');
           form6.classList.remove('active1');
      }
    })
})

btn_submit.forEach(ele => {

    
    ele.addEventListener('click',function(e)
    {
        e.preventDefault();

       
    })

    
})



