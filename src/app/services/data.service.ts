import { Injectable }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataResponse } from '../models/response/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<DataResponse> {
    const url = 'https://api.myjson.com/bins/slvbr';

    return this.http.get(url).pipe(
      map(data => new DataResponse(data)),
    );
  }
}
