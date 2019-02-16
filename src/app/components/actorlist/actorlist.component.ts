import { Component, OnInit } from '@angular/core';
import { ActordataService } from '../../services/actordata.service';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  newName: string;
  newCity: string;
  tblFlag: boolean;
  btnText: string;
  rowsPerPage: number;
  currentPage: number;

  selectedIndex: number;
  tmpActor: Actor;

  constructor(private actorService: ActordataService) { }

  ngOnInit() {
    this.actorList = this.actorService.getActorList();
    this.newName = this.newCity = '';
    this.tblFlag = true;
    this.btnText = 'Hide Table';
    this.rowsPerPage = 5;
    this.currentPage = 1;

    this.selectedIndex = -1;
    this.tmpActor = null;
  }

  btnClicked() {
    alert('OUCH!! That Hurt!!\n Pleas be gentle....');
  }

  deleteActor(index) {
    this.actorService.deleteActor(index);
  }

  addActor() {
    // this.actorList.push({
    //   name: this.newName,
    //   city: this.newCity
    // });
    this.actorService.addActor({
      name: this.newName,
      city: this.newCity
    });
    this.newName = this.newCity = '';
  }

  editActor(index: number) {
    this.selectedIndex = index;

    // Don't do this!!!
    // SHALLOW COPY!!!

    // this.tmpActor = this.actorList[index];

    // Go for DEEP COPY

    // Approach - 1 (Not recommended)
    // this.tmpActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city
    // };

    // Approacxh - 2 (Recommended)
    this.tmpActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index: number) {
    this.actorService.updateActor(index, this.actorList[index]);
    this.selectedIndex = -1;
  }

  cancelEdit(index: number) {
    this.actorService.updateActor(index, this.tmpActor);
    this.selectedIndex = -1;
  }

  handleKey(index, event) {
    console.log(event);
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
    if (event.key === 'Enter') {
      this.saveActor(index);
    }
  }

  toggleTable() {
    this.tblFlag = !this.tblFlag;
    this.btnText = (this.tblFlag) ? 'Hide Table' : 'Show Table';
  }

}
