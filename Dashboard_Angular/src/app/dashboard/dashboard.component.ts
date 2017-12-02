import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
// import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';
import 'moment/locale/en-gb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() mdDatepicker: any;
  value:any="month";
  lobview:number= 1;
  days=new Date();
  months=new Date();
  minDate = new Date(2016, 0, 1);
  maxDate = new Date(2018, 0, 1);
  typeView: boolean = false;
  public selectedDate: any= moment();
  startDate = new Date(2012, 0, 1);
  lobName: string= 'Line Of Business';
  lob: any[] = [
    {id: 1, name: 'All LOB\'s'},
    {id: 2, name: 'Large Group'},
    {id: 3, name: 'Small Group'},
    {id: 3, name: 'MedSupp'},
    {id: 4, name: 'Individual Off Exchange'},
    {id: 5, name: 'Individual On Exchange'}
  ];
  // constructor(private datePicker: MdlDatePickerService) { }
  constructor() {}

  ngOnInit() {
    console.log("test");
  }

 
   public monthView($event: MouseEvent)
   {
     
     console.log(moment(this.months).month());
   }


  // public pickADate($event: MouseEvent) {
  //   this.datePicker.selectDate(this.selectedDate, {openFrom: $event}).subscribe( (selectedDate: Date) => {
  //     this.selectedDate = selectedDate ? moment(selectedDate) : null;
  //   });
  // }


  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
}

