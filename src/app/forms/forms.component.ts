import { Component, OnInit } from "@angular/core";
import { Iuser } from "./forms.model";
import {NgForm} from '@angular/forms';
import {FormPosterService} from './formPoster.service';

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.sass"]
})
export class FormsComponent implements OnInit {
  myUser = new Iuser("Rajeev", "Ranjan", "a@a.com", "12345", true, "", "node");
  languages: any[] = ['Node', 'Angular', 'Express', 'Go lang'];
  titleCaseValue: string;
  hasCodeLangError: boolean = false;

  constructor(private formService: FormPosterService) {}

  toUperCase(value): void {
    if (value.length) {
      this.myUser.firstname = value.toUpperCase();
    } else {
      this.myUser.firstname = value;
    }
  }

  toTitleCase(value): void{
    if(value.length){
      //value.toLowerCase().split(' ').map((data) => {alert(data.charAt(0).toUpperCase())});
      // this.myUser.lastname = value.toLowerCase().split(' ').map((data) => {
      //   data.charAt(0).toUpperCase() + data.slice(1)
      // }).join(' ');
    }else{
      this.myUser.lastname = value;
    }
  }

  validateCodeLang(event): void{
    if(this.myUser.codelang == "default"){
      this.hasCodeLangError = true;
    }else{
      this.hasCodeLangError = false;
    }
  }

  submitForm(form:NgForm): void{
    console.log(form.value);  //here we can call api to submit the data to API
    this.formService.saveFormData(form.value)
      .subscribe((res)=>{
        console.log("Data Posted")
      });
  }
  ngOnInit() {}
}
