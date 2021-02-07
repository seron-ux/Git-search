import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GitsearchService } from '../gitsearch.service'
import { Repository } from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // user:User;
  // repo:Repository
  
  // constructor( public service:GitsearchService) {
  //   this.user = new User('','','','',0,0);
  //   this.repo = new Repository('','','','');
  //  }

  // searchUser(term:any){
  //   this.service.searchUsers(term).then(
  //     (success)=>{
  //       this.user=this.service.user;
        
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )
  //   this.service.searchrepo(term).then(
  //     (success)=>{
  //       this.repo=this.service.repo;
  //       console.log(this.repo);   
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )

  // }


  // ngOnInit(): void {
  //   this.searchUser("seron-ux");
  // }


}
