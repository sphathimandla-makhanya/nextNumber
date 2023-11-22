let numbersArray = [5, 3, 8, 6, 7, 10, 2]
let v=0;

function numbers() {
    if (v<numbersArray.length) {
        let nextValue = numbersArray[v];
        v++
        console.log(nextValue);
        view.value=nextValue
    } 
    else{
        v = 0;
    }
}

let btn= document.querySelector('[data-btn]')
btn.addEventListener('click', numbers)
let view= document.querySelector('[data-value]')

let btn1= document.querySelector('[data-btn1]')
btn1.addEventListener('click', function () {
    view.value="";
})



