import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParentChildService } from 'src/app/services/parent-child-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() clicked = new EventEmitter<string>();
  textInput: string;

  constructor(protected pcs: ParentChildService) { }

  ngOnInit(): void {
  }

  vclick(name: string) {
    console.log(`From Child: ${name}`);
    
    // How child talks to parent
    this.clicked.emit(name);

    // How child talks to service
    this.pcs.emitButtonClick();
  }

  log(message: string = "Message") {
    console.log(message);
  }

  handleChange(e: any) {
    this.pcs.emitButtonClick(e.target.value);
  }
}
