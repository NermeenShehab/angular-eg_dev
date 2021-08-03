
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


    title = 'Thanks for staying tuned!';
    @Input()
    formData: FormData = new FormData ;
    isFormValid: boolean = false;

    constructor(private router: Router ,private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        // alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = true;
        this.router.navigate(['/home']);
    }
  }
