import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-mutant',
  templateUrl: './mutant.component.html',
  styleUrls: ['./mutant.component.css']
})
export class MutantComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer, 
    protected userService: UserService,
    protected http: HttpClient) { }


     public stats_array;
     public salida_stats:any = {count_mutant_dna: '', count_human_dna: '', ratio: '1'}
     public salida_mutant : any = {status: '', save:''};


     public form_mutant =  new FormGroup({
      //{value: '', disabled: true}
      dna: new FormControl('',Validators.required),
     
      
      
  
    });

  ngOnInit(): void {
  
    //this.getStats();

  }


  
public getStats(){

  
  this.userService.statsMutant()
  .subscribe(
    (data:any) => { // Success
      this.stats_array = data;
      this.salida_stats=data;
      console.log(data);
    },
    (error) => {
      console.error(error);
    }
  );
}

public check_mutant(data){

  this.userService.testMutant(data.dna).subscribe(
    (data:any) => { // Success
      console.log(data);
      this.salida_mutant=data;
      this.form_mutant.reset();
      
      
      //console.log('creado con exito');
     
  
    },
    (error) => {
      console.log('errrrrrrrrroorrr')
      console.error(error);
      JSON.parse(JSON.stringify(error))
    });
  

}

}
