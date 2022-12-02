import { Component } from '@angular/core';
import {StatsService} from '@app/stats.service';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent {
    data=[];
    error:string;
    

    constructor(
        private stat:StatsService) { 
   
            // this.stat.getData12().subscribe(data12=>{
            //     console.warn(data12);
            //     this.data12 = data12
                
            // })

            this.stat.getData().subscribe(data=>{
                console.warn(data);
                this.data = data
                
            }, (error) => {
                console.log(error)
                this.error = error
            })
        }
 }