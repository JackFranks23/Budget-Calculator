document.addEventListener("DOMContentLoaded", function () {
    addEventListener('change', function (eventData){

        let grossyear = document.getElementById("grossyear").value;
        //grossyear.innertext = FormData.grossyear
        let grossmonthly =grossyear/12;  
        //round to the cent Math.floor(x*100)/100
        document.getElementById("grossmonthly").innerText = (Math.round(grossmonthly*100)/100);
        document.getElementById("fedtaxes").innerText = ((Math.round(grossmonthly*100*.12)/100));
        document.getElementById("statetaxes").innerText = ((Math.round(grossmonthly*100*.07)/100));
        document.getElementById("socialsec").innerText = ((Math.round(grossmonthly*100*.062)/100));
        document.getElementById("medicare").innerText = ((Math.round(grossmonthly*100*.0145)/100));
        document.getElementById("retirement").innerText = ((Math.round(grossmonthly*100*.05)/100));
        document.getElementById("insurance").innerText = (180);
        // document.getElementById("netmonthly").innerText = (grossmonthlygrossmonthly-(Math.round(grossmonthly*100*.12)/100)-(Math.round(grossmonthly*100*.07)/100)-(Math.round(grossmonthly*100*.062)/100)-(Math.round(grossmonthly*100*.0145)/100)-(Math.round(grossmonthly*100*.05)/100)-180); //use the round here
        document.getElementById("netmonthly").innerText = ((Math.round(grossmonthly*100*.3165)/100 + 180))
        let apex = document.getElementById(`netmonthly`)
        console.log(apex)
        localStorage.setItem(netmonthly, apex)
        let storage = localStorage.getItem(netmonthly)
        document.getElementById(`monthlyIncome2`).innertext = storage


    })
});