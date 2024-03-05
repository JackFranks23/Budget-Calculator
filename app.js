document.addEventListener("DOMContentLoaded", function () {
    addEventListener('change', function (eventData){
        document.getElementById("fedTaxes").innerText = (growthMonthly*.07);
        document.getElementById("stateTaxes").innerText = (growthMonthly*.062);
        document.getElementById("socialSec").innerText = (growthMonthly*.0145);
        document.getElementById("mediCare").innerText = (growthMonthly*.01);
        document.getElementById("fedTaxes").innerText = (growthMonthly*.07);
        document.getElementById("fedTaxes").innerText = (growthMonthly*.07);
        document.getElementById("fedTaxes").innerText = (growthMonthly*.07);
        document.getElementById("fedTaxes").innerText = (growthMonthly*.07);

    })
});