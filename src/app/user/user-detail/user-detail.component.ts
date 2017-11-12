import { Component, OnInit } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  public userId: string;
  public openId: string;
  constructor(public http: Http, public routerInfo: ActivatedRoute) {}

  ngOnInit() {
    this.panelController();
    this.getLocationParam();
    // alert(this.userId + ":" + this.openId);
  }
  panelController() {
    $(".collapseMain").collapse("show");
    $(".collapseBranch").collapse("hide");
  }
  getLocationParam() {
    this.openId = this.routerInfo.snapshot.queryParams["openId"];
    this.userId = this.routerInfo.snapshot.queryParams["userId"];
  }
}
