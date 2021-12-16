let allbutons = document.querySelectorAll('.key')

allbutons.forEach(el=>{
    console.log(el)
    console.log(el.getAttribute('data-key'));
    //set action
    el.addEventListener('click',function(e){
        console.log('click');
        //play audio
    })
})