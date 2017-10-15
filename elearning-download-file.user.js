// ==UserScript==
// @name        elearning-download-file
// @namespace   njmu
// @description break elearning download file restriction
// @include     http://elearning.njmu.edu.cn/*
// @version     1.0
// @grant       none
// ==/UserScript==
//
// 说明：破解南京医科大学elearning平台几乎所有下载权限问题
// 作者：南京医科大学2016级五年临床三班谢祯晖 <xiezh0831@yahoo.co.jp>
// Github: https://github.com/heyrict
//

window.DownFile = function() {
  var data = File_Portal_Get(FileID);
  //for (d in data) {alert(d+" : "+data[d]);}
  if (data.DownURL != null) {
    downBox(data.DownURL, "");
  }
};
