import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  term?: string
  @Output() searchProf = new EventEmitter<any>();

  searchUser() {
    this.searchProf.emit(this.term)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
