import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer, 
    protected userService: UserService,
     protected http: HttpClient) { }

  public  pageActual: number = 1;
  public url_video;
  public url_geniali;
  public loginForm= new FormGroup({
    //{value: '', disabled: true}
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
    

  });

  public mobile = false;
  public title = 'demo131';
  public users: any[] = [];
  public postId;
  public usuarios_array=[];

  ngOnInit(): void {


    
    if (window.screen.width < 400) { // 768px portrait
      this.mobile = true;
    }
    this.url_video = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + "kLP9ZjuaoPQ");
     let variable= "https://view.genial.ly/5f80bdbbddd5b90cf23a6215";
    this.url_geniali = this._sanitizer.bypassSecurityTrustResourceUrl(variable);


 this.getUsers();

  




}//end init

//get users

public getUsers(){

  
  this.userService.getUsers()
  .subscribe(
    (data:any) => { // Success
      this.usuarios_array = data;
      
      //console.log(data);
    },
    (error) => {
      console.error(error);
    }
  );
}

//login evento


public crear_evt(data:any){

  console.log(data);

 this.userService.createUsers(data).subscribe(
  (data:any) => { // Success
    console.log(data);
    this.loginForm.reset();
    this.getUsers();
    
    //console.log('creado con exito');
   

  },
  (error) => {
    console.log('errrrrrrrrroorrr')
    console.error(error);
    JSON.parse(JSON.stringify(error))
  })

}


public ampliar(id:any) {



}

public borrar (id:any){

  console.log(id);

  this.userService.deleteUsers(id).subscribe(data =>{
    console.log('borrado con exito');
    console.log(data);
    this.getUsers();


    (error) => {
      console.log('errrrrrrrrroorrr')
      console.error(error);
    
    }}
  )

}


}


  


