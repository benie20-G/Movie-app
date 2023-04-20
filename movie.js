const input=document.querySelector('.movie')
const addBtn=document.querySelector('.add')
const list=document.querySelector('.list')

const li=document.getElementsByTagName('li')
for(let i=0;i<li.length;i++){
    console.log(li[i])
li[i].addEventListener('click',(e)=>{
    if(e.target.getAttribute('class')=='delete'){
    e.target.parentNode.remove()
    }})}

addBtn.addEventListener('click',()=>{
     if(input.value != ''){
        let newItem=document.createElement('li');
        newItem.innerHTML= `
        <span class="movie-name">${input.value}</span>
        <span class="delete">delete</span>`
list.appendChild(newItem);
input.value=" "; 
     }else{
            alert('Please enter the name of the movie ')
     }

const li=document.getElementsByTagName('li')
for(let i=0;i<li.length;i++){
    console.log(li[i])

li[i].addEventListener('click',(e)=>{
    if(e.target.getAttribute('class')=='delete'){
    e.target.parentNode.remove()
    }

})
}
})
