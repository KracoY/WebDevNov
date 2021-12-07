let control = document.getElementById('control')
let light_control = false;
let lamp = document.getElementById('lamp')
let jumbo = document.getElementById('jumbo')

function lightswitch(){
    if(light_control){
        light_control= true
        console.log('The lamp is on')
        control.src='control_on.png'
        lamp.src='on.png'
        jumbo.style
    }else{
        light_control=false
        console.log('The lamp is off')
    }
      
}

