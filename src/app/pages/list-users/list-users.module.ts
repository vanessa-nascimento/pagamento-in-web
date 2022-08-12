import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';

import { NavModule } from '../nav/nav.module';
import { PaymentModule } from '../payment/payment.module';
import { SearchModule } from '../search/search.module';
import { UserComponent } from './user/user.component';
import { ListUsersComponent } from './list-users.component';
import { FilterByName } from '../search/filter-by-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NavModule,
    SearchModule,
    PaymentModule,
  ],
  declarations: [
    ListUsersComponent,
    FilterByName,
    UserComponent
  ]
})
export class ListUsersModule { }
