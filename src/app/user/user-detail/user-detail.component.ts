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
    // $('#reservation').daterangepicker(null, function(start, end, label) {

    // console.log(start.toISOString(), end.toISOString(), label);

    // });
    $("#table-transform").bootstrapTable();
  }
}
