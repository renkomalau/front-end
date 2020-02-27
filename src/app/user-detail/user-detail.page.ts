import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { mainUrl } from "../services/config";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  user : any ={};
  userId ="";

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  getData(){
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.getUser(this.userId).subscribe(response =>{
      this.user = response;
      this.user.images = mainUrl + "/img/" + this.user.images;
      console.log(this.user);
      
    });
  }
  goEdit() {
    this.router.navigate(["/user-edit/" + this.userId]);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getData();
  }

}