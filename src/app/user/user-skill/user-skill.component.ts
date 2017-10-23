import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-user-skill",
  templateUrl: "./user-skill.component.html",
  styleUrls: ["./user-skill.component.scss"]
})
export class UserSkillComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".collapseMain").collapse("show");
  }
}
