import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Chart} from 'chart.js';

@Component({
  selector: 'dashboard-popup',
  templateUrl: 'popupmodal.component.html',
   styleUrls: ['popupmodal.component.scss'],
})
export class PopupModalComponent implements OnInit {

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


  constructor(
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
     //CLAIMS
    var ctx = document.getElementById("mChart");
    var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [84.6, 81.3, 89.5],
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


    var ptx = document.getElementById("pChart");
    var pChart = new Chart(ptx, {
    type: 'horizontalBar',
    data: {
        labels: ["Feb", "Jan", "Dec"],
        datasets: [{
            label: '# of Votes',
            data: [49.6, 58.3, 77.5],
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


  }

}