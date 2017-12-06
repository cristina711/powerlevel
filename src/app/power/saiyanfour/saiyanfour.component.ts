import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyanfour',
  templateUrl: './saiyanfour.component.html',
  styleUrls: ['./saiyanfour.component.css']
})
export class SaiyanfourComponent implements OnInit,OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }


ngOnChanges() {
  this.power = this.power * 500;


}
}
