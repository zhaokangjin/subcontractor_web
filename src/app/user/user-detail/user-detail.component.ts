import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  private title: String = "张三";
  constructor() {}

  ngOnInit() {
    $(".collapseMain").collapse("show");
    $(".collapseBranch").collapse("hide");
  }
}
