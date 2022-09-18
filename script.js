let slide = document.getElementById("slide");
let nota = document.getElementById("nota");
nota.innerHTML = slide.value;

slide.oninput = function() {   
    if(this.value < 6){
        nota.innerHTML = this.value;
        nota.style.color = "#ff3535";
    }
    else if(this.value > 5 &&this.value < 8){
        nota.innerHTML = this.value;
        nota.style.color = "#c2cf00";
    }
    else if(this.value > 7 && this.value < 10){
        nota.innerHTML = this.value;
        nota.style.color = "#43c700";
    }
    if(this.value == 10){
        nota.innerHTML = this.value;
        nota.style.color = "#914EFF";
    }
}