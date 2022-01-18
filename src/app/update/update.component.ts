import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../services/division.service';
import { Division } from '../model/division.model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  division: Division = {
    _id:'',
    name:'',
    description:''
  };
  submitted= false;
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
  }
  editDivision(): void {
    const id = {
      id : this.division._id
    };
    const data = {
      name: this.division.name,
      description: this.division.description
    };
  
    this.divisionService.update(id,data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  
}
