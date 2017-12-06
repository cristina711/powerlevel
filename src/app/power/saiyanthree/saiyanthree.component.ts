import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyanthree',
  templateUrl: './saiyanthree.component.html',
  styleUrls: ['./saiyanthree.component.css']
})
export class SaiyanthreeComponent implements OnInit,OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power=this.power* 250;
  }
}