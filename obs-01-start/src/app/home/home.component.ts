import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })
    const customIntervalObservable = Observable.create(
      ( observer => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000)
      })
    );
    customIntervalObservable.pipe(map((data:number) => {
      return 'Round: '+ (data+1);
    }));
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
