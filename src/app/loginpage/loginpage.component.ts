import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '../models/UserLogin';
import { Router} from '@angular/router';
import { UserStart } from '../models/UserStart'
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  private user:UserStart;
  private loginForm:FormGroup;
  private response:String;
  
  

  constructor(private loginservice:LoginService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }
  disableButton(){
    if(this.loginForm.invalid){
      return true;
    }else{
      return false;
    }
  }
  login(){
    this.user=this.loginForm.value;
    //this.loginservice.login(this.user)
    console.log(this.user.getPassword);
    this.router.navigateByUrl('/home');

    // if(this.user.getPassword=="pass1"){
    //   this.router.navigate(['home']);
    // }
    

  }
  changePassword(){
    this.router.navigateByUrl('/admin');
  }

}
