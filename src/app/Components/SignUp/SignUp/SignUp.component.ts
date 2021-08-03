import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormData } from '../data/formData.model';

import { FormDataService } from '../data/formData.service';
@Component({
  selector: 'app-SignUp',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.css']
})
export class SignUpComponent implements OnInit {
  title = 'form';
  @Input()
  formData: FormData = new FormData;


  constructor(private  formDataService: FormDataService ,private router:Router) {


  }


  ngOnInit() {
      this.formData = this.formDataService.getFormData();
      console.log(this.title + ' loaded!');
  }

}
