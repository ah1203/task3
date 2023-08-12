function fToc()
{

    var unit=document.getElementById("Unit").value;
    if(unit=='Fahrenheit')
    {
        var temp=document.getElementById("val").value;
        op=parseFloat(temp);
        document.getElementById("op").innerHTML=(op*1.8)+32;
        ans=(op*1.8)+32;
        console.log("Celcius to Fahrenheit:"+ans);
           
    }
    else if(unit=='Celcius')
    {
        var temp=document.getElementById("val").value;
        op=parseFloat(temp);
        document.getElementById("op").innerHTML=(op-32)/1.8;
        ans=(op-32)/1.8;
        console.log("Fahrenheit to Celcius:"+ans);
    } 
}
