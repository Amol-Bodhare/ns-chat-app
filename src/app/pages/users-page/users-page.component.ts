import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemEventData } from '@nativescript/core';
import { UserImage } from '@src/app/core/model/user-image.interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  activeUsers = [];
  idArray = [];
  userImages: Array<UserImage> = [];
  state;
  constructor(
    private readonly router: Router,
  ) {
    this.state = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.state.userList.forEach(user => {
      this.activeUsers.push(user.name);
      this.userImages.push(this.extractInitialAndColor(user.name));
      this.idArray.push(user.id);
    });
    console.log('users', this.activeUsers);
    // this.userImages.forEach(image => {
    //   console.log('colors', image.colorCode);
    // })

  }

  onTap(args: ItemEventData) {
    console.log('selected users', args.index);
    this.router.navigate(['/chat'],{
      state: {
        userName: this.activeUsers[args.index],
        id: this.idArray[args.index]
      }
    });
  }

  extractInitialAndColor(userName: String): UserImage {
    let initial;

    // const colorCode = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
    const rgbIndex = this.randomNumber(0,2);
    const colorCode = this.getColorCode(rgbIndex);
    if(userName.includes(' ')) {
      const secondInitial = userName.indexOf(' ');
      initial = userName.charAt(0).toLocaleUpperCase() + userName.charAt(secondInitial + 1).toLocaleUpperCase();
    } else {
      initial = userName.charAt(0).toLocaleUpperCase() + userName.charAt(1).toLocaleUpperCase();
    }
    return {
      initial: initial,
      colorCode: colorCode
    }
  }

  randomNumber(min, max): number {  
    return Math.floor(Math.random() * (max - min) + min); 
  } 

  getColorCode(rgbIndex: number): string {
    switch(rgbIndex) {
      case 0:
        return `rgb(49,${this.randomNumber(0, 255) + ''},${this.randomNumber(0, 255)} + '')`;
        break;
      case 1:
        return `rgb(${this.randomNumber(0, 255)+ ''},49,${this.randomNumber(0, 255)} + '')`;
        break;
      case 2:
        return `rgb(${this.randomNumber(0, 255)+ ''},${this.randomNumber(0, 255)+ ''},49)`;
        break;
    }
  }
}
