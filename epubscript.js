const bookRed = document.querySelector("#book1");
const bookGreen = document.querySelector("#book2");
const redcircle = document.querySelector("#redcircle");
const greencircle = document.querySelector("#greencircle");

const formats = document.querySelector("#formats");
const relie = document.querySelector("#option1");
const broche = document.querySelector("#option2");
const epub = document.querySelector("#option3");

const priceRelie = document.querySelector("#price1");
const priceBroche = document.querySelector("#price2");
const priceEpub =document.querySelector("#price3");


greencircle.addEventListener("click",()=>{
    if(bookGreen.classList.contains("hidden")){
        bookGreen.classList.remove('hidden')
        bookGreen.classList.add('block')
        
        bookRed.classList.remove('block')
        bookRed.classList.add('hidden')}
        else{
            bookGreen.classList.add('hidden')
    }
    });
    
    redcircle.addEventListener("click", ()=>{
        if (bookRed.classList.contains("hidden")){
            bookRed.classList.remove("hidden")
            bookRed.classList.add('block')
    
    
            bookGreen.classList.remove('block')
            bookGreen.classList.add('hidden')}
                else{
                    bookRed.classList.add('hidden')
            }
            });
    
    
        relie.addEventListener('click',()=>{
            if(priceRelie.classList.contains("hidden")){
            priceRelie.classList.remove("hidden")
            priceEpub.classList.add("hidden")
            priceBroche.classList.add("hidden")
        }
        else {
            priceRelie.classList.add("hidden")
            
        }});
    
        broche.addEventListener('click',()=>{
            if(priceBroche.classList.contains("hidden")){
               priceBroche.classList.remove("hidden")
               priceRelie.classList.add("hidden")
               priceEpub.classList.add("hidden")}
                  else {
                    priceBroche.classList.add("hidden")
            }});
    
        epub.addEventListener('click',()=>{
            if(priceEpub.classList.contains("hidden")){
                priceEpub.classList.remove("hidden")
                priceRelie.classList.add("hidden")
                priceBroche.classList.add("hidden")}
            else {
                priceEpub.classList.add("hidden")
        }});    