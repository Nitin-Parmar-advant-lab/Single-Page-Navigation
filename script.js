let pill = document.querySelectorAll("#nav-pills .nav-pill")
console.log("print pill");

console.log(pill);
let activePill = null;

pill.forEach((node)=>{
    node.addEventListener(("click"), function(e){
        if (activePill) {
            // console.log(activePill);
            activePill.classList.remove('nav-pill-active');
        }
        console.log("print node"); 
        console.log(e.target);
        e.target.classList.add("nav-pill-active")
        activePill = e.target
    } )
})


// ---------------------------

// const nav = document.getElementById('nav-pills');
// console.log(nav);

// nav.addEventListener('click', (e) => {
//   const pill = e.target.closest('.nav-pill');
//   if (!pill) return;

//   nav.querySelector('.nav-pill-active')?.classList.remove('nav-pill-active');
//   pill.classList.add('nav-pill-active');
// });