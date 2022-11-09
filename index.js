
const link =document.querySelectorAll('a')
const btn =document.querySelector('.re')
link.forEach((curEle)=>{
   curEle.addEventListener("click",()=>{
    let pass =window.prompt('Enter Your Password')
    let dpass =10105
    if(pass!=dpass){
        curEle.href='Wrong Password'
    }else{
        curEle.href=curEle
    }
   })

})

btn.addEventListener('click',()=>{
    location.reload();
})
