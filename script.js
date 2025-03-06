//your JS code here. If required.

 let paragraphs = document.getElementById('counter')

 let btn= document.getElementById('incrementBtn')

btn.addEventListener('click' ,  ()=>{
	  let count = parseInt(paragraphs.innerHTML) 
	 alert(count)  
	paragraphs.innerHTML= count +1
})