export class FormData {

    firstName: string = '';
    lastName : string = '';
    Nationalid :string = '';
    phonenumber: string = '';
    gender: string='';
    username : string = '';
    email: string = '';
    password: string = '';
    confirmpassword: string = '';
    university : string = '';
    // degree: string = '';
    specilization: string = '';
    jobtitle: string = '';
    register: string = '';
    experience: string = '';
    skills: string = '';
    overview:string='';
    street: string = '';
    city: string = '';
    // state: string = '';
    // zip: string = '';


    clear() {
        this.firstName = '';
        this.lastName = '';
        this.Nationalid = '';
        this.phonenumber= '';
        this.gender = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmpassword= '';
        this.university = '';
        // this.degree= '';
        this.specilization=  '';
        this.jobtitle = '';
        this.register = '';
        this.experience = '';
        this.skills = '';
        this.overview='';
        this.street = '';
        this.city = '';
        // this.state = '';
        // this.zip = '';
    }
  }

  export class Personal {
    firstName: string = '';
    lastName : string = '';
    Nationalid : string = '';
    phonenumber: string = '';
    gender: string='';
    street: string = '';
    city: string = '';
    // username : string = '';
    // email: string = '';
    // password: string = '';
    // confirmpassword: string = '';
  }
  export class Email {
    username : string = '';
    email: string = '';
    password: string = '';
    confirmpassword: string = '';
  }
  export class Address {
    // street: string = '';
    // city: string = '';
    // state: string = '';
    // zip: string = '';
  }
  export class Work {
    university : string = '';
    // degree: string = '';
    specilization: string = '';
    jobtitle: string = '';
    register: string = '';
    experience: string = '';
    skills: string = '';
    overview:string='';
  }
