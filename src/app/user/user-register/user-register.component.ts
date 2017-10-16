import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('#filephoto').fileinput({
      showUpload: false,
      showCaption: true,
      fileType: 'any',
      previewFileIcon:
        '<i class="fa fa-file-photo-o fa-fw global-font-color"></i>',
      allowedFileExtensions: ['jpg', 'png', 'gif'],
      overwriteInitial: false,
      browseClass: 'btn btn-primary',
      maxFileSize: 10000,
      maxFilesNum: 10,
      slugCallback: function(filename) {
        return filename.replace('(', '_').replace(']', '_');
      }
    });
  }
}
