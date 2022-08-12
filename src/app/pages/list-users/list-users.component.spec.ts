import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PaymentModule } from '../payment/payment.module';
import { SearchModule } from '../search/search.module';
import { NavModule } from '../nav/nav.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';

import { FilterByName } from '../search/filter-by-name.pipe';
import { UserComponent } from './user/user.component';
import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NavModule,
        SearchModule,
        PaymentModule
      ],
      declarations: [ ListUsersComponent, UserComponent, FilterByName],
      providers: [ UserService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const userService = TestBed.get(UserService);
    spyOn(userService, 'users').and.returnValue(of([
      {
        id: 1001,
        name: 'Eduardo Santos',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@eduardo.santos'
      },
      {
        id: 1002,
        name: 'Marina Coelho',
        img: 'https://randomuser.me/api/portraits/women/37.jpg',
        username: '@marina.coelho'
      }
    ]));
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    expect(spyOn).toBeDefined();
    expect(component.users.length).toEqual(2);
  });
});
