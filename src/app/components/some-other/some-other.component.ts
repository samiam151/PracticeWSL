import { Component, OnInit } from '@angular/core';
import { ParentChildService } from 'src/app/services/parent-child-service.service';

@Component({
  selector: 'app-some-other',
  templateUrl: './some-other.component.html',
  styleUrls: ['./some-other.component.scss']
})
export class SomeOtherComponent implements OnInit {
  serviceValue: string;

  constructor(
    private pcs: ParentChildService
  ) { }

  ngOnInit(): void {
    this.pcs.buttonClicked$.subscribe(data => {
      this.serviceValue = data;
    })
  }

}
