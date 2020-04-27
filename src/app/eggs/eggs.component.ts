import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.scss']
})
export class EggsComponent implements OnInit {
  scoreEgg: number;

  constructor() { }

  ngOnInit(): void {
    if (this.counter < 44){
      this.scoreEgg = 1;
    }
    if (this.counter > 45 && this.counter < 65){
      this.scoreEgg = 2;
    }
    if (this.counter >= 65 && this.counter < 75){
      this.scoreEgg = 3;
    }
    if (this.counter >= 75 && this.counter < 85){
      this.scoreEgg = 4;
    }
    if (this.counter >= 85 && this.counter < 120){
      this.scoreEgg = 5;
    }
    if (this.counter > 120){
      this.scoreEgg = 6;
    }
  }

  @Input()
  public counter: number;

}
