show_photo=document.querySelector(".photo img")
select_photo=document.querySelectorAll("footer img")
text=document.querySelector(".content .text p")
pragraphs=['Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum, a fuga veniam commodi illo voluptate itaque nulla possimus, excepturi maxime vitae rerum voluptates quo aspernatur atque dolore, non facere','Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum commodi illo voluptate itaquella possimus, excepturi maxime vitae rerum voluptates quo aspernatur atque dolore, non facere,','Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum, a fuga veniam commodi illo voluptate itaque nulla possimus, excepturi maxime vitae rerum','Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum, a fuga veniam commodi illo voluptate itaque nulla possimus, exce aspernatur atque dolore, non facere']
container=document.querySelector(".container")
colors=['black','#24415c','#55606a','#031d35']
text.innerHTML=pragraphs[0]
for(let i=0;i<select_photo.length;i++){
    select_photo[i].onclick=function(){
        show_photo.src=select_photo[i].src
        text.innerHTML=pragraphs[i]
        container.style.background=colors[i]
    }
}
