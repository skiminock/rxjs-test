import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(public http: Http) {
  }

  public getData() {
    const urls = [
      'https://dev.curogram.com/v1/specialty', // good
      'https://dev.curogram.com/v1/insurance', // bad
    ];

    Observable.interval(10000)
        .switchMap(() => {
            const index = Math.floor(Math.random() * 3);
            // mocked
            if (index > 1) {
                return Observable.create( observer => {
                    observer.next(['mocked1', 'mocked2', 'mocked3']);
                    observer.complete();
                });
            }
            // real API call
            const url = urls[index];
            return this.http.get(url).catch(err => {
                // prevent stop interval, observable becomes completed
                return Observable.empty();
            });
        })
        .catch (err => Observable.empty())
        .subscribe(data => {
            // here will get only success result
            console.log(data);
        });
  }
}
