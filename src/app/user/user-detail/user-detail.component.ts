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
  public skillList: any;
  public othserSkillList: any;
  public skillTall: number;
  public skillChildrenList:any;
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
    this.getSkillByUserId(this.userId);
  }
  getSkillByUserId(userId) {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http
      .post(
        "http://liveaboard.cn/skillType/querySkillRootList",
        JSON.stringify({
          skillType: {},
          page: { pageNum: 1, pageSize: 4 },
          fieldName: "sort",
          sort: "ASC"
        }),
        options
      )
      .map(res => res.json())
      .subscribe(data => {
        this.skillList = data.list;
        this.skillTall = data.total;
        console.log(this.skillList); // this.skillTypeArr = data.list;
        // this.user.skillTypeArr = data.list;
      });
  }
  allSkillType() {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http
      .post(
        "http://liveaboard.cn/skillType/querySkillRootList",
        JSON.stringify({
          skillType: {},
          page: { pageNum: 1, pageSize: this.skillTall },
          fieldName: "sort",
          sort: "ASC"
        }),
        options
      )
      .map(res => res.json())
      .subscribe(data => {
        if (data.list.length > 4) {
          this.othserSkillList = data.list.slice(4);
        } else {
          this.othserSkillList = [];
        }

        console.log(this.othserSkillList); // this.skillTypeArr = data.list;
        // this.user.skillTypeArr = data.list;
      });
  }
  getSkillChildren(id) {
    let headers = new Headers({
      "Content-Type": "application/json;charset=utf-8"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http
      .post(
      "http://liveaboard.cn/skillType/listChildSkill",
      JSON.stringify(
          {skillId:id}
        ),
        options
      )
      .map(res => res.json())
      .subscribe(data => {
        $("#SkillCHildrenListDom").empty();

        let array = [];
       

        for (let i = 0; i < data.length;i++){ 
         let item= `<div class="col-xs-3">
          <div class="row">
            <div class="col-xs-11 label label-danger" >`+data[i].skillName+`</div>
              <div class="col-xs-1"></div>
            </div>
      </div>`
      array.push(item);
        } ;

        $("#SkillCHildrenListDom").append(array.join(""));
        
      });
  }
}
