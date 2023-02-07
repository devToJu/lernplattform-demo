import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  aufgaben = [
      { name: 'Aufgabe 1' },
      {name: 'Aufgabe 2'},
      {name: "Aufgabe 3"},
      {name: "Aufgabe 4"}
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
