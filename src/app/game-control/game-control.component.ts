import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
interval;
lastnumber=0;
@Output() intervalfired= new EventEmitter<number>();
  constructor() { }

  onStart(){

this.interval= setInterval(() => {this.intervalfired.emit(this.lastnumber+1);
this.lastnumber++;
  },1000);
  


  }

  onPause(){


    clearInterval(this.interval);
  }

  ngOnInit(): void {
  }
  

}
