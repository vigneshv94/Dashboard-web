import {Component, OnInit, ViewEncapsulation,OnChanges, SimpleChanges, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {RoundProgressEase} from 'angular-svg-round-progressbar';

@Component({
        selector: 'chart-bar',
        template:'',
        styleUrls: ['./horizontalbarchart.component.scss'],
        encapsulation: ViewEncapsulation.None
})


export class BarChartsComponent implements OnInit  {

    // current: number = 27;
    // max: number = 100;
    // semicircle: boolean = false;
    // radius: number = 45;
    @Input() id: string;
  //<canvas id="id" width="200" height="120"> {{id}} </canvas>

    


    options: any = {
        legend: {
            display: false
        },
        animation: {
            duration: 5000,
        },
        scales: {

            xAxes: [{
                display: true,
                barPercentage: 0.1,
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }


constructor() { }

ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("horr");
    console.log(this.id);
 
    //CLAIMS
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [89.6, 88.3, 87.5],
            backgroundColor: [
                'rgba(125, 199, 89, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(125, 199, 89, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});

//GROUPS
var ctx1 = document.getElementById("groups");
    var groups = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [93, 99, 95],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(125, 199, 89, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(125, 199, 89, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});

//MEMBERS
 
var ctx2 = document.getElementById("members");
    var members = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
        labels: ["Dec", "Jan", "Feb"],
        datasets: [{
            label: '# of Votes',
            data: [99.5, 99, 92],
            backgroundColor: [
                'rgba(125, 199, 89, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255,99,132, 0.2)'
            ],
            borderColor: [
                'rgba(125, 199, 89,1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});

//PAYMENTS

// var ctx3 = document.getElementById("pay");
//     var pay = new Chart(ctx3, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Feb", "Jan", "Dec"],
//         datasets: [{
//             label: '# of Votes',
//             data: [0, 0, 100],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(125, 199, 89, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(125, 199, 89, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: this.options
// });

//BILLING
// var ctx4 = document.getElementById("bill");
//     var bill = new Chart(ctx4, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Feb", "Jan", "Dec"],
//         datasets: [{
//             label: '# of Votes',
//             data: [99.5, 99, 92],
//             backgroundColor: [
//                 'rgba(125, 199, 89, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(255,99,132, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(125, 199, 89,1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(255,99,132, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: this.options
// });


//LATE FEES

var ctx5 = document.getElementById("late");
    var late = new Chart(ctx5, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: ['N/A','N/A','N/A'],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});

//FIRST PASS RATE

    var ctx6 = document.getElementById("pass");
    var pass = new Chart(ctx6, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [100,100,100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});


//AUTHORIZATION

    var ctx7 = document.getElementById("auth");
    var auth = new Chart(ctx7, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [ 89.9, 84.6, 67],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});


//BENEFIT

// var ctx5 = document.getElementById("benefit");
//     var benefit = new Chart(ctx5, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["Feb", "Jan", "Dec"],
//         datasets: [{
//             label: '# of Votes',
//             data: ['N/A','N/A','N/A'],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: this.options
// });


//LAST
    var ctx = document.getElementById("last");
    var last = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [100, 78.3, 87.5],
            backgroundColor: [
                'rgba(125, 199, 89, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(125, 199, 89, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});


//AUTHORIZATION FIRST PASS RATE
var ctx4 = document.getElementById("authfpr");
    var authfpr = new Chart(ctx4, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [97.4, 69, 72],
            backgroundColor: [
                'rgba(125, 199, 89, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255,99,132, 0.2)'
            ],
            borderColor: [
                'rgba(125, 199, 89,1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,99,132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: this.options
});

    }
}