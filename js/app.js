/**
 * [基于zepto的移动端弹出窗口插件]
 * @laike
 * @DateTime  2015-03-16T16:39:41+0800
 * @param     {[type]}                 $ [description]
 * @return    {[type]}                   [description]
 */

var custom_tempates_ok =
	"<div class='custom-dialog'><div><img id='custom-dialog-success-logo' src='img/ic_dialog_success.png'/><div class='custom-dialog-item'><p class='custom-dialog-item-sucess'>领取成功</p><p class='custom-dialog-item-prompt01'>当日还可领取4张优惠券</p><p class='custom-dilaog-item-prompt02'>*每天每个业务员最多只能领取5张优惠券<br>每张优惠券有效期为1个月</p></div><div class='custom-dialog-item rDialog-footer' id='custom-dialog-item-bottom-btn'></div></div></div>";

// 判断是否为手机号
function isPhoneAvailable(str) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(str)) {
		return false;
	} else {
		return true;
	}
}

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
})

;(function ($) {
  $.getUrlParam = function (name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return r[2]; return null;
  }
 })(window.Zepto);
