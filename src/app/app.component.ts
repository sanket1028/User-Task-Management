import { Component, signal } from '@angular/core';
import  {NgFor, NgIf} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { from } from 'rxjs';

type UserObj = {
    name: string,
    id: string,
    avatar: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
})
export class AppComponent {
  users = DUMMY_USERS;
  // clickedUser = signal(DUMMY_USERS[0]); // using signals
  clickedUser?: UserObj ;
  onSelectUser(id: string) {
    console.log(`user with id = ${id} is clicked`);
    this.clickedUser = DUMMY_USERS.find((user) => user.id === id);
    // this.clickedUser.set( DUMMY_USERS.find((user) => user.id === id)!); // Using signals
  }
}
