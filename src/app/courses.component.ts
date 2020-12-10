import { Component } from '@angular/core';

@Component({
    selector:'courses',
    templateUrl: 'courses.component.html',
    //styleUrls: ['./header.component.css']
})


export class CoursesComponent{
    courses : string[]=['java','angular','python','nodejs','reactjs'];
}


