import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {
  private buttonClickedSource = new Subject<string>();

  buttonClicked$: Observable<string> = this.buttonClickedSource.asObservable();

  emitButtonClick(name: string = "Default Name") {
    console.log(`From Service: ${name}`);
    this.buttonClickedSource.next(name);
  }
}
