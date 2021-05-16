import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
