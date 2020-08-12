// https://www.geeksforgeeks.org/how-to-add-input-fields-dynamically-on-button-click-in-angularjs/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss']
})
export class AddInputComponent implements OnInit {

  choices = [{id: 'choice1'}, {id: 'choice2'}];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <br>
      <input type="text">`;
    document.querySelector('.showInputField').appendChild(row);
  }

  addChoice() {
    let newItem = this.choices.length + 1;
    this.choices.push({'id':'choice' + newItem});
  }

  removeChoice() {
    let lastItem = this.choices.length - 1;
    console.log('Last iitem', lastItem)
    this.choices.splice(lastItem);
  }

}
