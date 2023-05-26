function operaciones(){
    let nume1,nume2,sum,resta,multiplicacion,division;

    nume1=parseInt(document.getElementById('num1').value);
    nume2=parseInt(document.getElementById('num2').value);
    sum=nume1+nume2
    resta=nume1-nume2
    multiplicacion=nume1*nume2
    division=nume1/nume2

    alert("La Suma Es: " +sum +"\n La Resta Es: " +resta +"\n La Multiplicacion Es: "
    +multiplicacion+"\n La Division Es: "+division);


    /*
    alert("La suma es: "+sum )
    alert("La resta es: "+resta )
    alert("La multiplicacion es: "+multiplicacion )
    alert("La division es: "+division )
    //alert(nume1+ "-"+nume2);
    */
}