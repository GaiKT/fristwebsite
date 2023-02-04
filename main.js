function cal(){
    var namber1 = parseInt (document.getElementById('num1').value);
    var number2 = parseInt (document.getElementById('num2').value);
    var operlator = parseInt (document.getElementById('operlator').value);

    if (operlator == "1"){
        document.getElementById('result').innerHTML = namber1+number2 ;
    }
    if (operlator == "2"){
        document.getElementById('result').innerHTML = namber1-number2 ;
    }
    if (operlator == "3"){
        document.getElementById('result').innerHTML = namber1*number2 ;
    }
    if (operlator == "4"){
        document.getElementById('result').innerHTML = namber1/number2 ;
    }

} 

function cal_Percent(){
    var namber11 = parseInt (document.getElementById('num11').value);
    var number12 = parseInt (document.getElementById('num12').value);

    var namber21 = parseInt (document.getElementById('num21').value);
    var number22 = parseInt (document.getElementById('num22').value);

    var namber31 = parseInt (document.getElementById('num31').value);
    var number32 = parseInt (document.getElementById('num32').value);

        document.getElementById('result1').innerHTML = ((namber11*number12)/100) ;
        document.getElementById('result2').innerHTML = ((namber21*(100-number22))/100) ;
        document.getElementById('result3').innerHTML = ((namber31/number32)*100) ;

}

function edit_Area(){

    var tool= parseInt (document.getElementById('tool').value);

    if (tool == "1"){
        document.getElementById('headnum1').innerHTML = "ด้าน: "
        document.getElementById('headnum2').innerHTML = "ด้าน: "
        document.getElementById('anser').innerHTML = (numberi*numberii);   
    }
    if (tool == "2"){
        document.getElementById('headnum1').innerHTML = "กว้าง: "
        document.getElementById('headnum2').innerHTML = "ยาว: "    
    }
    if (tool == "3"){
        document.getElementById('headnum1').innerHTML = "ฐาน: "
        document.getElementById('headnum2').innerHTML = "สูง: "    
    }
    if (tool == "4"){
        document.getElementById('headnum1').innerHTML = "ฐาน: "
        document.getElementById('headnum2').innerHTML = "สูง: "    
    }
    if (tool == "5"){
        document.getElementById('headnum1').innerHTML = "ฐาน: "
        document.getElementById('headnum2').innerHTML = "สูง: "    
    }
    if (tool == "6"){
        document.getElementById('headnum1').innerHTML = "รัศมี: "
        document.getElementById('headnum2').innerHTML = " "    
    }
    
}

function cal_Area(){
    var tool= parseInt (document.getElementById('tool').value);
    var numberi = parseInt (document.getElementById('numberi').value);
    var numberii = parseInt (document.getElementById('numberii').value);
    
    if (tool == "1"){
        document.getElementById('anser').innerHTML = (numberi*numberii);     
    }
    if (tool == "2"){
        document.getElementById('anser').innerHTML = (numberi*numberii);     
    }
    if (tool == "3"){
        document.getElementById('anser').innerHTML = (((1/2)*numberi)*numberii);     
    }
    if (tool == "4"){
        document.getElementById('anser').innerHTML = (numberi*numberii);     
    }
    if (tool == "5"){
        document.getElementById('anser').innerHTML = (numberi*numberii);     
    }
    if (tool == "6"){
        document.getElementById('anser').innerHTML = (3.14*(numberi**2));     
    }
}