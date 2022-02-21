// Carts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let backgroundColors = Array.of('rgba(238, 184, 104, 1)', 'rgba(75, 166, 223, 1)', 'rgba(239, 118, 122, 1)');

let monthlySales = Array.of(800,950,1080, 1000, 2042, 20394);
let monthlyLabels = Array.of('Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec');
let deptSales = Array.of(12, 19, 3);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;

function addYearlyTotal(value) {
    yearlyTotal = yearlyTotal + value;
}

monthlySales.forEach(addYearlyTotal)

let octNums = Array.of(1304, 2095, 1085);
let novNums = Array.of(3458, 6184, 2588);
let decNums = Array.of(2254, 9146, 3654);

function findOver1000() {
    let firstThousand = monthlySales.findIndex(element => element > 1000);
    alert(firstThousand);
}

function resetNum() {
    monthlySales.fill(0);
    monthlySalesChart.update();
    deptSales.fill(0);
    deptSalesChart.update();
}

yearlyLabel.innerHTML = "$" + yearlyTotal;

// Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: backgroundColors,
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: backgroundColors,
            borderWidth: 0
        }]
    },
    options: {
        
    }
})