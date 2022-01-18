import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../services/division.service';
import { Division } from '../model/division.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  division: Division = {
    _id:'',
  };
  submitted= false;
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
  }
  deleteDivision(): void {
    const id = {
      id : this.division._id
    };
  
    this.divisionService.delete(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  }


