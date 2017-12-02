import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {IGuageChart} from './guagechart';

@Injectable()
export class GuageChartService {

    apiRoot:string = 'http://localhost:8080/dashboard/';
    results:any[];
    loading:boolean;
    public slaData: any[]; 
    promiseResponse: Promise<IGuageChart[]>
     errorMessage: String;

     constructor(private http:Http) {
         
     }




 getSLA() : any {

       let apiURL = `${this.apiRoot}current_month`;
       return  this.http.get(apiURL).map(response => response.json());
       
                                                                                            // this.promiseResponse = this.http.get(apiURL).toPromise()
                                                                                            // .then(this.extractData).then(data=>{console.log("2");})
                                                                                            // .catch(this.handleErrorPromise);
                                                                                            // this.promiseResponse.then(
                                                                                            //    slaData => {this.slaData = slaData; console.log("in 2")},
                                                                                            //    error =>  this.errorMessage = <any>error);
                                                                                            // console.log(this.slaData);
                                                                                            //return  this.promiseResponse;

                                                                                            // const apiURL = `${this.apiRoot}current_month`;

                                                                                            // return this.http.get(apiURL)
                                                                                            //        .toPromise()
                                                                                            //        .then(response => response.json().data as GuageChart[])
                                                                                            //        .catch(this.handleError);

                                                                                            // return [
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "AAAA", "slaGoal": 85, "slaAchieved": 89.5 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "CFRP", "slaGoal": 98.5, "slaAchieved": 95 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "GFRP", "slaGoal": 98.5, "slaAchieved": 92 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "HENN", "slaGoal": 99.75, "slaAchieved": 100 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "HTMI", "slaGoal": 98.5, "slaAchieved": 100 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "MFRP", "slaGoal": 'N/A', "slaAchieved": 'N/A' },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "NEWN", "slaGoal": 98.5, "slaAchieved": 67 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "UFRP", "slaGoal": 99, "slaAchieved": 26 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "UMAT", "slaGoal": 98.5, "slaAchieved": 75 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "BFCN", "slaGoal": 98.5, "slaAchieved": 'N/A' },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "LMBT", "slaGoal": 100, "slaAchieved": 100 },
                                                                                            //     { "slaDate": "2017-07-18", "slaType": "AFRT", "slaGoal": 82, "slaAchieved": 97.4 },
                                                                                            //     ];

 }

                                                                                            //  private extractData(res: Response) {
                                                                                            //     let body = res.json();
                                                                                            //     console.log(body);
                                                                                            //     return body;
                                                                                            // } 

                                                                                            //  private handleErrorPromise(error: any): Promise<any> {
                                                                                            //     console.error('An error occurred', error); // for demo purposes only
                                                                                            //     return Promise.reject(error.message || error);
                                                                                            //   } 

}