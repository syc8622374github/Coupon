/**
 * [基于zepto的移动端弹出窗口插件]
 * @laike
 * @DateTime  2015-03-16T16:39:41+0800
 * @param     {[type]}                 $ [description]
 * @return    {[type]}                   [description]
 */

var custom_tempates_ok =
	"<div class='custom-dialog'><div><img id='custom-dialog-success-logo' src='img/ic_dialog_success.png'/><div class='custom-dialog-item'><p class='custom-dialog-item-sucess'>领取成功</p><p class='custom-dialog-item-prompt01'>当日还可领取4张优惠券</p><p class='custom-dilaog-item-prompt02'>*每天每个业务员最多只能领取5张优惠券<br>每张优惠券有效期为1个月</p></div><div class='custom-dialog-item rDialog-footer' id='custom-dialog-item-bottom-btn'></div></div></div>";
var http_base = 'http://111.230.148.84/yqxAdmin';

// 判断是否为手机号
function isPhoneAvailable(str) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(str)) {
		return false;
	} else {
		return true;
	}
}

(function ($) {
	check_login_time()
  $.getUrlParam = function (name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return r[2]; return null;
  }
 })(window.Zepto);
Zepto(function ($) {
	$('.bottom-tab button').click(function (e) {
		var select_obj = $(this)
		var goto_url = "";
		var url = "";
		if(select_obj.index()==0){
			goto_url = "collect-coupon.html";
		}else if(select_obj.index()==1){
			goto_url = "my-coupon.html";
		}
		if(url.indexOf(goto_url)==-1){
			window.location.href = goto_url;
		}
		/* $('.bottom-tab button').each(function (index) {
			if (index == select_obj.index()) {
				$(this).removeClass('bottom-tab-item').addClass('bottom-tab-item02')
			} else {
				$(this).removeClass('bottom-tab-item02').addClass('bottom-tab-item')
			}
		}) */
	});
});

Date.prototype.Format = function (fmt) { //author: meizz   
 var o = {  
 	"M+": this.getMonth() + 1, //月份   
 	"d+": this.getDate(), //日   
 	"H+": this.getHours(), //小时   
 	"m+": this.getMinutes(), //分   
 	"s+": this.getSeconds(), //秒   
 	"q+": Math.floor((this.getMonth() + 3) / 3), //季度   
 	"S": this.getMilliseconds() //毫秒   
 };  
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
 for (var k in o)  
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
 return fmt;
 }

function check_login_time(){
	var login_time = window.localStorage.getItem("login_time")
	var login_type = window.localStorage.getItem("login_type",false)
	var now_time = (new Date()).valueOf()
	if(now_time-login_time>900000||!login_type){
		window.localStorage.setItem("login_type",false)
		window.localStorage.setItem("login_time","")
		window.localStorage.setItem("name","")
		window.localStorage.setItem("login_name","")
		window.localStorage.setItem("coupon_num","")
		if(window.location.toString().indexOf('index.html')==-1&&window.location.toString().indexOf('share-coupon.html')==-1){
			window.location.href = 'index.html'
		}
	}else{
		if(window.location.toString().indexOf("index.html")!=-1){
			window.location.href = 'collect-coupon.html'
		}
	}
}