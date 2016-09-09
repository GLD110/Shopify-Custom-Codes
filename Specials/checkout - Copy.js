var pSettings = {
	progressBg: '#7CFC00',
	progressBg2: '#d9e3f7',

	highDemandText: "1 or more items you ordered is in high demand. Your order has been reserved for your convenience.",
	discountText: "Enter your discount code here",

	whyUsImg1: 'https://cdn.shopify.com/s/files/1/0093/3180/2169/t/8/assets/money-back.png?1957196473874696888',
	whyUsTitle1: "30-Day Satisfaction Guaranteed!",
	whyUsText1: "If you're not 100% satisfied with your order we'll refund youre money no questions asked!",

	whyUsImg2: 'https://cdn.shopify.com/s/files/1/0093/3180/2169/t/8/assets/mail-truck.png?3350681994744734736',
	whyUsTitle2: "Over 36,694 orders have been successfully shipped to happy customers like you!",
	whyUsText2: "",
}

function crC(e, t, s) {
	if (s) {
		var n = new Date;
		n.setTime(n.getTime() + 60 * s * 1e3);
		var i = "; expires=" + n.toUTCString()
	} else i = "";
	document.cookie = e + "=" + t + i + "; path=/"
}

function rdC(e) {
	for (var t = e + "=", s = document.cookie.split(";"), n = 0; n < s.length; n++) {
		for (var i = s[n];
			" " == i.charAt(0);) i = i.substring(1, i.length);
		if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
	}
	return null
}

function eSC(e) {
	crC(e, "", -1)
}

function stTM(e, t, s) {
	var n, i, d;

	function a() {
		n = t - ((Date.now() - e) / 1e3 | 0), d = n % 60 | 0, i = (i = n / 60 | 0) < 10 ? "0" + i : i, d = d < 10 ? "0" + d : d, s.textContent = i + ":" + d, n <= 0 && (clearInterval(c), document.getElementById("ct836").innerHTML = "Order reservation ended.", e = Date.now() + 1e3)
	}
	a();
	var c = setInterval(a, 1e3)
}
var wnd = window.location.href,
	chsg = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>';
wnd.indexOf("checkout") > -1 && (window.onload = function () {
	if (wnd.indexOf("checkout") > -1 && (dsXt = document.getElementById("checkout_reduction_code"), document.body.insertAdjacentHTML("afterbegin", '<div class="content prH7"><div class="wrap"><div class="ar64"><div id="sp1" class="s8 s8c"><span id="spn1">1.Customer</span></div><div id="sp2" class="s8"><span id="spn2">2.Shipping</span></div><div id="sp3" class="s8"><span id="spn3">3.Payment</span></div></div></div></div>'), -1 === wnd.indexOf("thank_you"))) {
		document.getElementsByClassName("main__content")[0].insertAdjacentHTML("afterbegin", '<div><div id="ct836" style="display:block;background:#fff5d2;padding:10px 20px;border:1px solid #fac444;font-size:14px;color:#2c2c2c;font-weight:bold;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px; margin:5px 0px 20px 0px">Your order is reserved for <span id="time"></span> minutes!</div></div>');
		var e = 600,
			t = Date.now(),
			s = rdC("pRtC");
		s ? t < s ? e = (s - t) / 1e3 : (eSC("pRtC"), crC("pRtC", Date.now() + 1e3 * e, e + 1)) : crC("pRtC", Date.now() + 1e3 * e, e + 1), display = document.querySelector("#time"), stTM(t, e, display), document.getElementsByClassName("main__content")[0].insertAdjacentHTML("afterbegin", '<div style="width:100%;display:table"><div style="display:table-cell;vertical-align:middle"><img src="https://cdn.shopify.com/s/files/1/0093/3180/2169/t/8/assets/flame_24.png?17805638772151010306"></div><div style="font-weight:bold;padding-left:5px">' + pSettings.highDemandText + "</div></div>"), "" != pSettings.discountText && dsXt && dsXt.setAttribute("placeholder", pSettings.discountText), document.getElementsByClassName("step__footer")[0].insertAdjacentHTML("afterend", '<div style="width:100%;display:block;padding-top:10px"><span style="font-size:11px;line-height:12px;font-style=italic;float:right;width:100%;text-align:right">Guaranteed safe and secure checkout!</span><img src="https://cdn.shopify.com/s/files/1/0093/3180/2169/t/8/assets/paybadges.jpg?17085453120044662988" style="max-width:250px;float: right;margin-top: 5px;"></div>'), document.getElementsByClassName("order-summary__sections")[0].insertAdjacentHTML("beforeend", '<div style="position:relative;padding:10px 0px"><div class="wyustit" style="position:relative;z-index:1;text-align:center"><span style="background:#fafafa;padding:0 15px">Why choose us?</span></div><div style="display:table;vertical-align:middle;width:100%;border-spacing:0px 20px"><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg1 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle1 + "</span><p>" + pSettings.whyUsText1 + '</p></div></div><div class="wyuscs"><div class="wyuscs1"><img src="' + pSettings.whyUsImg2 + '"></div><div class="wyuscs2"><span>' + pSettings.whyUsTitle2 + "</span><p>" + pSettings.whyUsText2 + "</p></div></div></div></div>")
	}
	b1j = document.getElementById("sp1"), b2j = document.getElementById("sp2"), b3j = document.getElementById("sp3"), c1j = document.getElementById("spn1"), c2j = document.getElementById("spn2"), c3j = document.getElementById("spn3"), wnd.indexOf("previous_step=contact_information") > -1 && (b1j.className = "s8 s8c", b2j.className = "s8 s8c", c1j.insertAdjacentHTML("afterbegin", chsg)), wnd.indexOf("previous_step=shipping_method") > -1 && (b1j.className = "s8 s8c", b2j.className = "s8 s8c", b3j.className = "s8 s8c", c1j.insertAdjacentHTML("afterbegin", chsg), c2j.insertAdjacentHTML("afterbegin", chsg)), wnd.indexOf("thank_you") > -1 && (b1j.className = "s8 s8c", b2j.className = "s8 s8c", b3j.className = "s8 s8c", c1j.insertAdjacentHTML("afterbegin", chsg), c2j.insertAdjacentHTML("afterbegin", chsg), c3j.insertAdjacentHTML("afterbegin", chsg))
});
var b7 = document.createElement("style");
b7.type = "text/css";
b7.innerHTML = '.main ul.breadcrumb{display:none!important}.content.prH7{padding:8px 0}.ar64{width:100%}.ar64 .s8{font-size:14px;text-align:center;color:#fff;cursor:default;margin:0 3px;padding:9px 10px 9px 30px;float:left;position:relative;background-color:' + pSettings.progressBg2 + ';-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all 2s ease;width:20%}.ar64 .s8:after,.ar64 .s8:before{content:" ";position:absolute;top:0;right:-17px;width:0;height:0;border-top:19px solid transparent;border-bottom:17px solid transparent;border-left:17px solid ' + pSettings.progressBg2 + ';z-index:2;transition:border-color .2s ease}.ar64 .s8:before{right:auto;left:0;border-left:17px solid #fff;z-index:0}.ar64 .s8:first-child:before{border:none}.ar64 .s8:first-child{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.ar64 .s8 span{position:relative}.ar64 .s8.s8c{color:#000;background-color:' + pSettin