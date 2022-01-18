import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  division: Division = {
    name: '',
    description: '',
  };
  submitted= false;
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
  }
  saveDivision(): void {
    const data = {
      name: this.division.name,
      description: this.division.description
    };
  
    this.divisionService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  newDivision(): void {
    this.submitted = false;
    this.division = {
      name: '',
      description: ''
    };
  }

}
