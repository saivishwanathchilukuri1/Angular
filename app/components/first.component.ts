import {Component} from '@angular/core';

@Component({
    selector:'first',
    templateUrl:'./first.component.html',
    styleUrls:['./first.component.css'] 
   /* template:`
    <h1>Example with the Component</h1>
    <div>
        Name is: {{firstname}} {{lastname}},
        Age is: {{age}},
        Status is: {{isActive}}
    </div>
    `,
    styles:['div{border:2px solid red;text-align:center},h1{text-align:center}'] */
})
export class FirstComponent
{
    name:string="Vishwanath";
    age:number=26;
    isActive:boolean=true;

}