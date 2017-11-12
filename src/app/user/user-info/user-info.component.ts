import { Component, OnInit } from "@angular/core";
import { NgModel,FormsModule } from "@angular/forms";
import { Headers, Http, RequestOptions } from "@angular/http";
import {Router, ActivatedRoute ,Params} from  "@angular/router";
import "rxjs/add/operator/map";
import { Account } from "../Account";
import { SkillType } from "../domain/SkillType";
import { User } from "../domain/User";
import { Location } from "@angular/common";
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
  constructor(public routerInfo: ActivatedRoute, public http: Http,public location:Location,public router:Router) {}
  weiXinRegister() {
    console.log(JSON.stringify(this.user));
  }
  ngOnInit() {
    this.user = new User();
    $(".collapseMain").collapse("show");
    $(".collapseBranch").collapse("hide");
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.openId = this.routerInfo.snapshot.queryParams['openId'];
    this.type = this.routerInfo.snapshot.queryParams["type"];
    // alert(this.openId+""+this.type)
    console.log(this.openId+":"+this.type)
    let accountParam = { openId: this.userId, type: this.type };
    this.getAccount(
      "http://liveaboard.cn/account/getUser",
      accountParam,
      options
    );
  }
  addSkill(id, name) {

    if (id && name) {
      this.user.skillTypeArr.push(id);
     }
  }
  register() {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    console.log(this.user)

    this.http
      .post("http://liveaboard.cn/user/save",JSON.stringify(this.user), options)
      // .map(res => res.json())
      .subscribe(data => {
        console.log(data)
        // this.skillTypeArr = data.list;
        // this.user.skillTypeArr = data.list;

      });
  }
  getAccount(url, data, ops) {
    this.http
      .post(url, data, ops)
      .map(res => res.json())
      .subscribe(data => {
        this.getUser(JSON.stringify({"userId":data.userId}));
        this.user.userId = data.userId;
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


  getUser(data) {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http
    .post("http://liveaboard.cn/user/getUserById", data, options)
    .map(res => res.json())
    .subscribe(data => {
      this.user =data;
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
  routerLinkUserDetail() {
    // this.openId = '123'
    this.router.navigateByUrl('user/detail?userId='+ this.user.userId+'&openId='+this.openId)
  }
}
