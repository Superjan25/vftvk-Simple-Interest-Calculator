function compute()
{
    //get inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //compute amount which will be received
    var amount = principal * years * rate /100;

    //compute year acording to input
    var year = new Date().getFullYear()+parseInt(years);
    
    //check whether principal is greater than zero
    if (principal<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }

    //return the result in result Element
    document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>"+principal+
        "</span>,<br/>at an interest rate of <span class='highlight'>"+rate+
        "%</span>.<br/>You will receive an amount of <span class='highlight'>"+amount+
        "</span>,<br/>in the year <span class='highlight'>"+year+"</span><br/>";
}

function updateRate()
{
    //show the selected amount of the range input
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}