function updateBMI() {
    // Get weigh and heigh value when field change
    let weigh = document.querySelector('#weight').value;
    let heigh = document.querySelector('#height-up').value;

    //Calculate BMI
    let bmi = Math.round(weigh / (Math.pow((heigh / 100), 2)) * 100) / 100;
    
    // if BMI is not infity (invalid value for height or weight) show it
    if(bmi != Infinity && !Number.isNaN(bmi)) {
        document.querySelector('#result').innerHTML = 'BMI: ' + bmi + '<br>';
        document.querySelector('#result').innerHTML += 'پیشنهاد: شما کمبود وزن دارید. بیشتر غذا بخورین'
        document.querySelector('#result').className = 'bmi-grade-1';
    }
    // log final result 
    console.log(bmi);
}