import { Component, Input, OnInit } from '@angular/core';
import { Description } from '../description.interface';


@Component({
  selector: 'app-my-description',
  templateUrl: './my-description.component.html',
  styleUrls: ['./my-description.component.css']
})

export class MyDescriptionComponent implements OnInit {


  @Input() description: Description;


  constructor() {
  }

  ngOnInit() {
  }

}
