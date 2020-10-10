import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }



  getUsers() {
    return this.http.get('http://localhost:3000/getUsersList');
  }


  createUsers(data:any){

   let user = data.user;
   let password = data.password;
   let cadena = user+'&&&'+password;

   return this.http.post<any>('http://localhost:3000/create/'+cadena, { title: 'crear usuario', });
  }

  deleteUsers(id:any){
  
    
    return this.http.post('http://localhost:3000/delete/'+id,{ title: 'borrar usuario', }  );
    
  }


  testMutant(dna:any){

     return this.http.post('http://localhost:3000/mutant/'+dna, { title: 'check mutant', });

  }

  statsMutant(){
    
    return this.http.get('http://localhost:3000/stats');
    

  }


}
