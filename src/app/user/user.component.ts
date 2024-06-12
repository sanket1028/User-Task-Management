import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

/*
type User = {
  id: string;
  name: string;
  avatar: string;
}; */

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  /*
  @Input({required : true}) avator!: string;
  @Input({required : true}) name!: string;
  @Input({required: true}) id! : string;
  */
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();
  // selectedUser = output<string>() // same as above

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onClickUser() {
    this.selectedUser.emit(this.user.id);
  }
}

/*
// with signal inputs
import {input} from '@angular/core';

export class UserComponent {
  avator = input.required<string>();
  name = input.required<string>();

  imagePath = compute(() => assets/users/this.avator())

  onClickUser() {
    console.log('Clicked');
  }
} */

/*
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  /*
  // not recommended when dealing with signals
  get imagePath(): string {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  */
/*
  onClickUser() {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log('Clicked');
  }
}
*/
