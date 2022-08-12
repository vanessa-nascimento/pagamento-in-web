import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { User } from '../list-users/user/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  @Output() typing = new EventEmitter<string>();
  @Input() value = '';

  @Input() userSearch: User[] = [];

  ngOnInit(): void {
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.typing.emit(filter));
  }
  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }

  constructor() { }


}
