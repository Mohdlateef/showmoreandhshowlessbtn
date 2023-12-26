let main=document.getElementById("main");
let More=document.getElementById("More");
More.addEventListener("click",()=>{
    main.classList.toggle("main1");
    main.classList.toggle("main2");
    // main.removeclassName("main1");
 
})
let less=document.getElementById("Less")
less.addEventListener("click",()=>{
    main.classList.toggle("main1");
    main.classList.toggle("main2");
    
    
})