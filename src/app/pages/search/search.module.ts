import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SearchComponent } from '../search/search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule { }
