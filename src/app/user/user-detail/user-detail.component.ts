import {Component, OnInit }from '@angular/core'; 

@Component( {
selector:'app-user-detail', 
templateUrl:'./user-detail.component.html', 
styleUrls:['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
private title:String = "张三"; 
constructor() {}

ngOnInit() {
}

}
