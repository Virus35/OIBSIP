const calculateTemp = () => {

    const numberTemp=document.getElementById('temp-main').value;
    const tempSelected=document.getElementById('diff');
    const valueTemp=diff.options[tempSelected.selectedIndex].value;
    
    const celToFah =(cel)=> {
        let fahrenheit =Math.round((cel * 9/5) +32);
        return fahrenheit;
    }

const fehToCel=(fehr)=>{
    let celsius = Math.round((fehr-32) * 5/9);
    return celsius;
}

let result;

if(valueTemp=='cel'){
    result=celToFah(numberTemp);
    document.getElementById('result').innerHTML= `=${result}°Fahrenheit`;
}
else{
    result=fehToCel(numberTemp);
    document.getElementById('result').innerHTML= `=${result}°Celcius`;
}
}