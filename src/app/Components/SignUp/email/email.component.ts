import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {


  title = 'Please tell us about yourself.';

    email: Email = new Email;

    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {

        this.email = this.formDataService.getEmail();
        console.log('Email feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setEmail(this.email);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/SignUp' ,'work']);
        }
    }



}

