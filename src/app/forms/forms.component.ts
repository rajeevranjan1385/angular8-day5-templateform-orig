import { Component, OnInit } from "@angular/core";
import { Iuser } from "./forms.model";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.sass"]
})
export class FormsComponent implements OnInit {
  myUser = new Iuser("", "", "", "");
  constructor() {}

  toUperCase(value): void {
    if (value.length) {
      this.myUser.firstname = value.toUpperCase();
    } else {
      this.myUser.firstname = value;
    }
  }

  ngOnInit() {}
}
