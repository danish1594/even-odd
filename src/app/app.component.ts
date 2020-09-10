import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Odd-Even-Project';

  evenNumber:number[]=[];
  oddNumber:number[]=[];
  odd=[];
  onIntervalfired(eventnumbers:number)
  {
if(eventnumbers%2===0){
this.evenNumber.push(eventnumbers);
}
else{
  this.oddNumber.push(eventnumbers);
}


}

  }
  

