import { Component, OnInit } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
declare var $: any;
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  private title: String = "张三";
  constructor(private http: Http) {}

  ngOnInit() {
    $(".collapseMain").collapse("show");
    $(".collapseBranch").collapse("hide");

    $.ajax({
      type: "GET",

      url: "http://liveaboard.cn/account/getWeixinAcount",

      success: function(result) {
        console.log(JSON.stringify(result));
      }
    });
  }
}
