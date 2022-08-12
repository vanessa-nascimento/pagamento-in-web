import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../list-users/user/user.model';

@Pipe({name: 'filterByName'})
export class FilterByName implements PipeTransform {

    transform(typedUsers: User[], nameQuery: string) {
        nameQuery = nameQuery.trim().toLowerCase();

        if (nameQuery) {
            return typedUsers.filter(users => users.name.toLowerCase().includes(nameQuery));
        } else {
            return typedUsers;
        }
    }

}
