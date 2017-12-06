import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

}
