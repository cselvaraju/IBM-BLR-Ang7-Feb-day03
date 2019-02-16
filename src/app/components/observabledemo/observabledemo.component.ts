import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  data: any;

  constructor(private dataService: ObservableService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      futureValue => {
        this.data = futureValue;
        console.log(futureValue);
      }
    );
  }

}
