import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address, Email, Work }       from './formData.model'
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private isEmailFormValid: boolean = false;


    constructor(private workflowService: WorkflowService) {
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            Nationalid: this.formData.Nationalid,
            phonenumber: this.formData.phonenumber,
           gender :this.formData.gender,
           street: this.formData.street,
           city: this.formData.city,
            // username :  this.formData.username,
            // email: this.formData.email,
            // password:this.formData.password,
            // confirmpassword: this.formData.confirmpassword
        };
        return personal;

    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
         this.formData.Nationalid=data.Nationalid;
         this.formData.phonenumber=data.phonenumber;
         this.formData.gender=data.gender;
         this.formData.street = data.street;
         this.formData.city = data.city;
        // this.formData.username=data.username;
        // this.formData.email = data.email;
        // this.formData.password = data.password;
        // this.formData.confirmpassword=data.confirmpassword
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getEmail(): Email {
      // Return the email data
      var email: Email = {

          username :  this.formData.username,
          email: this.formData.email,
          password:this.formData.password,
          confirmpassword: this.formData.confirmpassword
      };
      return email;

  }

  setEmail(data: Email) {
      // Update the email data only when the email Form had been validated successfully

      this.formData.username=data.username;
      this.formData.email = data.email;
      this.formData.password = data.password;
      this.formData.confirmpassword=data.confirmpassword
      // Validate email Step in Workflow
      this.workflowService.validateStep(STEPS.email);
  }

    getWork():Work {
      // Return the work data
      var work:   Work = {
        university : this.formData.university,
        // degree: this.formData.degree,
         specilization : this.formData.specilization,
        jobtitle : this.formData.jobtitle,
        register : this.formData.register,
         experience : this.formData.experience,
        skills : this.formData.skills,
        overview : this.formData.overview
      };
      return work;
    }

    setWork(data: Work) {
        // Update the work type only when the Work Form had been validated successfully
         this.formData.university =data.university,
        // this.formData.degree = data.degree,
        this.formData.specilization=data.specilization,
        this.formData.jobtitle =data.jobtitle,
        this.formData.register =data.register,
       this.formData.experience =data.experience,
        this.formData.skills =data.skills,
      this.formData.overview =data.overview
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    // getAddress() : Address {
    //     // Return the Address data
    //     var address: Address = {
    //         street: this.formData.street,
    //         city: this.formData.city,
    //         state: this.formData.state,
    //         zip: this.formData.zip
    //     };
    //     return address;
    // }

    // setAddress(data: Address) {
    //     // Update the Address data only when the Address Form had been validated successfully
    //     this.isAddressFormValid = true;
    //     this.formData.street = data.street;
    //     this.formData.city = data.city;
    //     this.formData.state = data.state;
    //     this.formData.zip = data.zip;
    //     // Validate Address Step in Workflow
    //     this.workflowService.validateStep(STEPS.address);
    // }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
               this.isEmailFormValid &&
                this.isWorkFormValid &&
                this.isAddressFormValid;
    }
}
