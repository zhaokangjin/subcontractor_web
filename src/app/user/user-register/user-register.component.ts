import { Component, OnInit } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";

declare var $: any;
@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"]
})
export class UserRegisterComponent implements OnInit {
  constructor(private http: Http) {}

  ngOnInit() {
    $.backstretch("assets/images/login.jpg");
    $(
      '.login-form input[type="text"], .login-form input[type="password"], .login-form textarea'
    ).on("focus", function() {
      $(this).removeClass("input-error");
    });

    $(".login-form").on("submit", function(e) {
      $(this)
        .find('input[type="text"], input[type="password"], textarea')
        .each(function() {
          if ($(this).val() == "") {
            e.preventDefault();
            $(this).addClass("input-error");
          } else {
            $(this).removeClass("input-error");
          }
        });
    });
  }

  weiXinRegister() {
    $.ajax({
      type: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      url: "http://liveaboard.cn/account/register",
      data: JSON.stringify({
        type: "weixin",
        param: {
          subscribe: "1",
          openid: "H3Vhpjds2BhvzwPj5A-GTYAX4GPG",
          sex: "M",
          nickname: "还没开始?",
          headimgurl:
            "http://wx.qlogo.cn/mmopen/JcDicrZBlREhnNXZRudod9PmibRkIs5K2f1tUQ7lFjC63pYHaXGxNDgMzjGDEuvzYZbFOqtUXaxSdoZG6iane5ko9H30krIbzGv/0",
          language: "CN",
          subscribe_time: "1326160805"
        }
      }),
      success: function(result) {
        console.log(1);
      }
    });
  }
}
