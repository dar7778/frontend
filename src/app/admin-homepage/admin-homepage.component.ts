import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/UserLogin';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  private changePasswordForm:FormGroup;

  
  constructor(private formBuilder: FormBuilder,private router:Router) { }
  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required,Validators.pattern("")]]
    });

  }

}
