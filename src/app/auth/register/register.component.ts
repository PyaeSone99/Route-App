import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user:User={
    name : '',
    username : '',
    password : ''
  }

  errorMessage!:string;
  constructor(private userService:UserService,private router:Router){

  }


  public register():void{
    this.userService.register(this.user)
      .subscribe(
          {
            next : (data) => console.log(data),
            error :() => this.errorMessage = 'User Name already existed!',
            complete : () => this.router.navigateByUrl('/login')
          }
      );

  }

}
