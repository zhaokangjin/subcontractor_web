import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Headers, Http, RequestOptions } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";
import { Account } from "../Account";
import { SkillType } from "../domain/SkillType";
import { User } from "../domain/User";
declare var $: any;
@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  private userId: String;
  private type: String;
  private openId: String;
  public account: Account;
  public skillTypeArr: SkillType[];
  public user: User;
  constructor(public routerInfo: ActivatedRoute, public http: Http) {}
  weiXinRegister() {}
  ngOnInit() {
    $(".collapseMain").collapse("show");
    $(".collapseBranch").collapse("hide");
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.userId = this.routerInfo.queryParams["openId"];
    this.type = this.routerInfo.queryParams["type"];
    let skillParam = { page: { pageNum: 1, pageSize: 4 } };
    this.getSkillType(
      "http://liveaboard.cn/skillType/queryList",
      skillParam,
      options
    );
    let accountParam = { openId: this.userId, type: this.type };
    this.getAccount(
      "http://liveaboard.cn/account/getUser",
      accountParam,
      options
    );
  }
  register() {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http
      .post("http://liveaboard.cn/user/save", this.user, options)
      .map(res => res.json())
      .subscribe(data => {
        this.skillTypeArr = data.list;
        this.user.skillTypeArr = data.list;
        console.log(JSON.stringify(data));
      });
  }
  getSkillType(url, data, ops) {
    this.http
      .post(url, data, ops)
      .map(res => res.json())
      .subscribe(data => {
        this.skillTypeArr = data.list;
        this.user.skillTypeArr = data.list;
        console.log(JSON.stringify(data));
      });
  }
  getAccount(url, data, ops) {
    this.http
      .post(url, data, ops)
      .map(res => res.json())
      .subscribe(data => {
        this.user.userId = this.account = JSON.parse(data.descr);
        if (this.account.sex && this.account.sex == "1") {
          this.account.sex = "男";
        } else if (this.account.sex && this.account.sex == "0") {
          this.account.sex = "女";
        } else {
          this.account.sex = "";
        }
        this.user.userId = data.userId;
        console.log(this.account);
      });
  }
  fileinput(divDom) {
    $("#" + divDom).fileinput({
      showUpload: false,
      showCaption: true,
      fileType: "any",
      previewFileIcon:
        '<i class="fa fa-file-photo-o fa-fw global-font-color"></i>',
      allowedFileExtensions: ["jpg", "png", "gif"],
      overwriteInitial: false,
      browseClass: "btn btn-primary",
      maxFileSize: 10000,
      maxFilesNum: 10,
      slugCallback: function(filename) {
        return filename.replace("(", "_").replace("]", "_");
      }
    });
  }
}
