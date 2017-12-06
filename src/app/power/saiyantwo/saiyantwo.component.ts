import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyantwo',
  templateUrl: './saiyantwo.component.html',
  styleUrls: ['./saiyantwo.component.css']
})
export class SaiyantwoComponent implements OnInit,OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.power=this.power* 150;
  }

}
