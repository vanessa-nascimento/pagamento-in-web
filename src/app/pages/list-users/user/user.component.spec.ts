import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PaymentModule } from '../../payment/payment.module';
import { SearchModule } from '../../search/search.module';
import { NavModule } from '../../nav/nav.module';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from '../list-users.component';

import { UserComponent } from './user.component';
import { FilterByName } from '../../search/filter-by-name.pipe';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NavModule,
        SearchModule,
        PaymentModule
      ],
      declarations: [ UserComponent, ListUsersComponent, FilterByName ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('listando um usuário', () => {
    component.users = ([
      {
        id: 1001,
        name: 'Eduardo Santos',
        img: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '@eduardo.santos'
      }
    ]);
    expect(component.users.length).toEqual(1);
  });
});
