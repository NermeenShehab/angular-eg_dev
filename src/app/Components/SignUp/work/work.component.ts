import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Work } from '../data/formData.model';

import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {


  title = 'What do you do?';
  work: Work = new Work;


  form: any;
  values: string[] = [];
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {

    this.work = this.formDataService.getWork();
    console.log('work feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setWork(this.work);
    return true;
  }


  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/SignUp', 'result']);
    }
  }



  private selectedLink: string = "Developer";

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown
      return false;

    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }
}



