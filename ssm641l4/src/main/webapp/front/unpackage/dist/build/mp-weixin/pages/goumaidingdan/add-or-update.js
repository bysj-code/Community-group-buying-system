(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaidingdan/add-or-update"],{"0f73":function(n,e,i){},"343b":function(n,e,i){"use strict";i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"4761"))}},t=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"4e92":function(n,e,i){"use strict";i.r(e);var r=i("343b"),t=i("ba12");for(var u in t)"default"!==u&&function(n){i.d(e,n,(function(){return t[n]}))}(u);i("7950");var a,o=i("f0c5"),s=Object(o["a"])(t["default"],r["b"],r["c"],!1,null,"28876403",null,!1,r["a"],a);e["default"]=s.exports},"6e40":function(n,e,i){"use strict";(function(n){i("0a61");r(i("66fd"));var e=r(i("4e92"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"6f29":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(i("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function u(n,e,i,r,t,u,a){try{var o=n[u](a),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(r,t)}function a(n){return function(){var e=this,i=arguments;return new Promise((function(r,t){var a=n.apply(e,i);function o(n){u(a,r,t,o,s,"next",n)}function s(n){u(a,r,t,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("4761"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{dingdanhao:this.getUUID(),shangpinmingcheng:"",shangpintupian:"",shangpinxianjia:"",goumaishijian:"",huiyuanzhanghao:"",huiyuanxingming:"",shouji:"",ziqushijian:"",ispay:"",clicknum:"",userid:"",longitude:"",latitude:"",fulladdress:""},user:{},ro:{dingdanhao:!1,shangpinmingcheng:!1,shangpintupian:!1,shangpinxianjia:!1,goumaishijian:!1,huiyuanzhanghao:!1,huiyuanxingming:!1,shouji:!1,ziqushijian:!1,ispay:!1,clicknum:!1,userid:!1,longitude:!1,latitude:!1,fulladdress:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return a(r.default.mark((function t(){var u,a,o,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.ruleForm.goumaishijian=i.$utils.getCurDateTime(),u=n.getStorageSync("nowTable"),t.next=4,i.$api.session(u);case 4:if(a=t.sent,i.user=a.data,i.ruleForm.huiyuanzhanghao=i.user.huiyuanzhanghao,i.ruleForm.huiyuanxingming=i.user.huiyuanxingming,i.ruleForm.shouji=i.user.shouji,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=17;break}return i.ruleForm.id=e.id,t.next=15,i.$api.info("goumaidingdan",i.ruleForm.id);case 15:a=t.sent,i.ruleForm=a.data;case 17:if(!e.cross){t.next=80;break}o=n.getStorageSync("crossObj"),t.t0=r.default.keys(o);case 20:if((t.t1=t.t0()).done){t.next=80;break}if(s=t.t1.value,"dingdanhao"!=s){t.next=26;break}return i.ruleForm.dingdanhao=o[s],i.ro.dingdanhao=!0,t.abrupt("continue",20);case 26:if("shangpinmingcheng"!=s){t.next=30;break}return i.ruleForm.shangpinmingcheng=o[s],i.ro.shangpinmingcheng=!0,t.abrupt("continue",20);case 30:if("shangpintupian"!=s){t.next=34;break}return i.ruleForm.shangpintupian=o[s],i.ro.shangpintupian=!0,t.abrupt("continue",20);case 34:if("shangpinxianjia"!=s){t.next=38;break}return i.ruleForm.shangpinxianjia=o[s],i.ro.shangpinxianjia=!0,t.abrupt("continue",20);case 38:if("goumaishijian"!=s){t.next=42;break}return i.ruleForm.goumaishijian=o[s],i.ro.goumaishijian=!0,t.abrupt("continue",20);case 42:if("huiyuanzhanghao"!=s){t.next=46;break}return i.ruleForm.huiyuanzhanghao=o[s],i.ro.huiyuanzhanghao=!0,t.abrupt("continue",20);case 46:if("huiyuanxingming"!=s){t.next=50;break}return i.ruleForm.huiyuanxingming=o[s],i.ro.huiyuanxingming=!0,t.abrupt("continue",20);case 50:if("shouji"!=s){t.next=54;break}return i.ruleForm.shouji=o[s],i.ro.shouji=!0,t.abrupt("continue",20);case 54:if("ziqushijian"!=s){t.next=58;break}return i.ruleForm.ziqushijian=o[s],i.ro.ziqushijian=!0,t.abrupt("continue",20);case 58:if("clicknum"!=s){t.next=62;break}return i.ruleForm.clicknum=o[s],i.ro.clicknum=!0,t.abrupt("continue",20);case 62:if("userid"!=s){t.next=66;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,t.abrupt("continue",20);case 66:if("longitude"!=s){t.next=70;break}return i.ruleForm.longitude=o[s],i.ro.longitude=!0,t.abrupt("continue",20);case 70:if("latitude"!=s){t.next=74;break}return i.ruleForm.latitude=o[s],i.ro.latitude=!0,t.abrupt("continue",20);case 74:if("fulladdress"!=s){t.next=78;break}return i.ruleForm.fulladdress=o[s],i.ro.fulladdress=!0,t.abrupt("continue",20);case 78:t.next=20;break;case 80:i.styleChange();case 81:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fulladdressTap:function(){var e=this;n.chooseLocation({success:function(n){console.log(n),e.ruleForm.fulladdress=n.address,e.ruleForm.longitude=n.longitude,e.ruleForm.latitude=n.latitude}})},goumaishijianConfirm:function(n){console.log(n),this.ruleForm.goumaishijian=n.result,this.$forceUpdate()},ziqushijianConfirm:function(n){console.log(n),this.ruleForm.ziqushijian=n.result,this.$forceUpdate()},shangpintupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shangpintupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){e.next=3;break}return n.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(!n.ruleForm.longitude||n.$validate.isNumber(n.ruleForm.longitude)){e.next=6;break}return n.$utils.msg("经度应输入数字"),e.abrupt("return");case 6:if(!n.ruleForm.latitude||n.$validate.isNumber(n.ruleForm.latitude)){e.next=9;break}return n.$utils.msg("纬度应输入数字"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("goumaidingdan",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.add("goumaidingdan",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),r=e.getMonth()+1,t=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),r=r>9?r:"0"+r,t=t>9?t:"0"+t,"".concat(i,"-").concat(r,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},7950:function(n,e,i){"use strict";var r=i("0f73"),t=i.n(r);t.a},ba12:function(n,e,i){"use strict";i.r(e);var r=i("6f29"),t=i.n(r);for(var u in r)"default"!==u&&function(n){i.d(e,n,(function(){return r[n]}))}(u);e["default"]=t.a}},[["6e40","common/runtime","common/vendor"]]]);