const converteCelsius = (temperaturaCelsius, grandeza) => {
    if(typeof temperaturaCelsius !== 'number'){
        return `Erro. Parâmetro inválido ${temperaturaCelsius}.`
    }else if (grandeza === "K") {
        return `${temperaturaCelsius}° Celsius é equivalente a ${temperaturaCelsius + 273} Kelvin` 
    } else if (grandeza === "F") {
        return `${temperaturaCelsius}° Celsius é equivalente a ${temperaturaCelsius*1.8 + 32} Farenheit`
    }  else {
        return `Erro. Parâmetro inválido ${grandeza}.`
    }
}


console.log(converteCelsius(30,"K"));
console.log(converteCelsius(30,"F"));
console.log(converteCelsius(30,"G"));
console.log(converteCelsius("trinta","k"));
