import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public arrayUsers : any = "";

  constructor(private _UsersService: UsersService) { }

  ngOnInit(): void {

    this.getobjUsers();
  }

  getobjUsers (){

    this._UsersService.getUsers()
    .subscribe
    (
      response =>{
          var data = Object.values(response.data);
          if( data != undefined){
            this.arrayUsers = data;
          }
      },
      error =>{
        console.log(<any>error);
      }
    );

  }

}
