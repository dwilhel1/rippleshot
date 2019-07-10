import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataResponse } from './models/response/data.model';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getData(): void {
    this.dataService.getData().pipe(
      takeUntil(this.unsubscribe),
    ).subscribe((response: DataResponse) => {
      console.log(response);
    }, error => {
      console.error(`Error requesting data: ${error}`);
    });
  }
}
