import { Component, OnInit } from '@angular/core';
import { Division } from '../model/division.model';
import { DivisionService } from '../services/division.service';
@Component({
  selector: 'app-divisi',
  templateUrl: './divisi.component.html',
  styleUrls: ['./divisi.component.css']
})
export class DivisiComponent implements OnInit {
  divisions?:Division[];
  currentDivision:Division={};
  name='';
  constructor(private divisionService:DivisionService) { }

  ngOnInit(): void {
    this.retriveDivision()
  }
  retriveDivision():void{
    this.divisionService.getAll()
      .subscribe(
        data=>{
          this.divisions=data;
          console.log(data);
        },
        error=>{
          console.log(error)
        }
      )
  }
}
