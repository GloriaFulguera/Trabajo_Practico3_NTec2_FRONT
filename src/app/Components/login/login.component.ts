import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private service:LoginService,private router:Router){}
  usuario:any;
  clave:any;
  mensaje:any;
  DataSourceLogin:any;

  ngOnInit(): void {
    localStorage.removeItem("user_state");
  }
  Login(){
    let obj={
      "usuario":this.usuario,
      "clave":btoa(this.clave)
    }
    this.service.Login(obj).subscribe(x=>{
      this.DataSourceLogin=x;
      if(this.DataSourceLogin.result==true){
        localStorage.setItem("user_sate","true");
        this.router.navigate(['home/categorias']);
      }
      else{
        this.mensaje=this.DataSourceLogin.mensaje;
      }
    })
  }
}
