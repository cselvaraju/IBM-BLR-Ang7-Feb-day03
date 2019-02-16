import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  today: Date;
  book = {
    title: 'The Brief History of Time',
    author: 'Stephen Hawking'
  };
  price: number;
  myCurrency = 'JPY';
  myText: string;
  html: string;

  constructor() { }

  ngOnInit() {
    this.message = 'HellO worLD';
    this.today = new Date();
    this.price = 45.3;
    this.myText = '';
    this.html = '<h2>This is my HTML</h2>';
  }

}
