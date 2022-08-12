import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ UserService ]
        });

        service = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    });


    it('deve ser criado', () => {
        expect(service).toBeTruthy();
    });

    it('deve listar usuários', fakeAsync(() => {
        const listUsers = [
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
        ];

        service.users().subscribe(response => {
            expect(response).toEqual(listUsers);
            expect(response[0].name).toEqual('Eduardo Santos');
            expect(response[1].name).toEqual('Marina Coelho');
        });

        const requestMock = httpMock.expectOne(request => {
            return request.method === 'GET';
        });

        requestMock.flush(listUsers);
        tick();
    }));
});
