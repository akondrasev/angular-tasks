import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Options {
  dateFormat: string;
  capitalize: boolean;
}

/**
 * TODO:
 * Implement app.component to use dateFormat from this options to render the date
 */
const options: Options = {
  dateFormat: "",
  capitalize: false,
};

@Injectable({
  providedIn: "root"
})
class BackendService {
  /**
   * Imagine it is API call to a backend
   */
  fetchData(): Observable<any> {
    return new Observable(function (_) {
      console.log('fetching data');

      let t = setTimeout(function () {
        _.next([
          {
            taskName: 'Clean the kitchen',
            time: '2022-10-20T13:09:40.000Z',
          },
          {
            taskName: 'Pay the bills',
            time: '2022-10-20T17:19:51.000Z',
          },
        ]);
        _.complete();

        clearTimeout(t);
      }, 250);
    });
  }

  /**
   * TODO:
   * A requirement for this implementation has to be
   * strict type checking of returned value type depending on a
   * input name
   *
   * Example:
   * getOption('dateFormat') should return a string
   * getOption('capitalize') should return a boolean
   * getOption('notExistingName') should raise a compile error because this name does not exist in interface Options
   *
   * Since currently it may return 'any' - the end user will not know
   * at compile time which type is returned by which option:
   * const format = getOption('dateFormat'); //format variable is resolved as 'any' instead of 'string'
   */
  getOption(name: string): any {
    return (options as any)[name] as any;
  }
}

export { BackendService };
