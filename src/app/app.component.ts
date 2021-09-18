import {Component, OnInit} from '@angular/core';
import {interval, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-observable-observer';

  ngOnInit(): void {

    /////////////////////
    // create simple data
    const observable = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    /////////////////////
    // create simple data
    const observable2 = interval(1000);

    //////////////////
    // Observer object
    const observer = {
      next: x => console.log('Data: ', x),
      error: error => console.log('Error ', error),
      complete: () => console.log('Finish')
    };

    ////////////
    // first use
    console.log('First use');
    const object1 = observable.subscribe(observer);

    ////////////
    // second use
    console.log('Second use');
    const object2 = observable.subscribe(x => {
      console.log('Data: ', x);
    }, error => {
      console.log('Error ', error);
    }, () => {
      console.log('Finish');
    });

    //////////////
    // modify data
    console.log('Modify data');
    const object3 = observable.pipe(
      map((x) => x = x + 40)).subscribe(observer);

    //////////////
    // unsubscribe
    const object4 = observable2.subscribe(observer);
    console.log('Unsubscribe');
    setTimeout(() => {
      object4.unsubscribe();
    }, 4000);

  }

}
