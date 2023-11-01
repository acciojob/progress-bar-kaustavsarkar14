//your JS code here. If required.
const circles = document.querySelectorAll('.circle')
let activeIndex = 0
let activeCircle = circles[0]

next.addEventListener('click', ()=>{ 
	console.log(activeIndex, activeCircle)
	activeIndex++
	activeCircle = circles[activeIndex] 
	if(activeCircle==null) return 
	activeCircle.classList.add('active')
})
prev.addEventListener('click', ()=>{
	if(activeCircle==null) return
	activeCircle.classList.remove('active')
	activeIndex--
	activeCircle = circles[activeIndex] 
	console.log(activeIndex, activeCircle)
})
