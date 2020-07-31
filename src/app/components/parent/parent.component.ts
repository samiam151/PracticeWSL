import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ParentChildService } from 'src/app/services/parent-child-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy, AfterViewInit {
  
  // How parent talks to child
  @ViewChild(ChildComponent)
  child: ChildComponent;
  childValue: string = "None";
  subscription: Subscription;

  constructor(protected pcs: ParentChildService) { }

  ngOnInit(): void { 
    this.subscription = this.pcs.buttonClicked$.subscribe(name => {
      console.log(`From Observable: ${name}`);
      this.childValue = name;
    })
  }

  ngAfterViewInit(): void {
    // When the ViewChild is rendered and becomes available
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleClickVC() {
    this.child.log('From template...');
  }
}
