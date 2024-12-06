<template>
	<view class="content">
		<form class="app-update-pv">
			
									<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">订单号</view>
				<view :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' class="right-input">
					{{ruleForm.dingdanhao}}
				</view>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">商品名称</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.shangpinmingcheng" v-model="ruleForm.shangpinmingcheng" placeholder="商品名称"></input>
			</view>
												<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="shangpintupianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(1, 1, 1, 1)","textAlign":"left"}' class="title">商品图片</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"2%","textAlign":"left","height":"100rpx"}' class="avator" v-if="ruleForm.shangpintupian" :src="ruleForm.shangpintupian" mode="aspectFill"></image>
					<image :style='{"width":"100rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"2%","textAlign":"left","height":"100rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">商品现价</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.shangpinxianjia" v-model="ruleForm.shangpinxianjia" placeholder="商品现价"></input>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">购买时间</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' v-model="ruleForm.goumaishijian" placeholder="购买时间" @tap="toggleTab('goumaishijian')"></input>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">会员账号</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.huiyuanzhanghao" v-model="ruleForm.huiyuanzhanghao" placeholder="会员账号"></input>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">会员姓名</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.huiyuanxingming" v-model="ruleForm.huiyuanxingming" placeholder="会员姓名"></input>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">手机</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.shouji" v-model="ruleForm.shouji" placeholder="手机"></input>
			</view>
												<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">自取时间</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' v-model="ruleForm.ziqushijian" placeholder="自取时间" @tap="toggleTab('ziqushijian')"></input>
			</view>
																																																															
			<!-- 是 -->
 
						<view :style='{"boxShadow":"0 0 2rpx rgba(0,0,0,.8)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0","borderWidth":"0","borderStyle":"solid","height":"88rpx"}' class="cu-form-group">
				<view :style='{"width":"22%","fontSize":"24rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left"}' class="title">地址</view>
				<input :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(205, 205, 205, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"2rpx","fontSize":"26rpx","borderStyle":"solid","height":"60rpx"}' readonly @tap="fulladdressTap" v-model="ruleForm.fulladdress" placeholder="请选择地址"></input>
			</view>
			
			          				          				          				          				          				          				          				          				          				          				          				          				          				          				          							
			          				          				          				          				          				          				          				          				          				          				          				          				          				          				          							
			<view class="btn">
				<button :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","backgroundColor":"rgba(242, 199, 68, 1)","borderColor":"rgba(57, 78, 99, 1)","borderRadius":"40rpx","color":"rgba(0, 0, 0, 1)","borderWidth":"0","width":"40%","fontSize":"28rpx","borderStyle":"solid","height":"76rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

																						<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="goumaishijianConfirm" ref="goumaishijian" themeColor="#333333"></w-picker>
																				<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="ziqushijianConfirm" ref="ziqushijian" themeColor="#333333"></w-picker>
																															
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				ruleForm: {
												dingdanhao: this.getUUID(),
																shangpinmingcheng: '',
																shangpintupian: '',
																shangpinxianjia: '',
																goumaishijian: '',
																huiyuanzhanghao: '',
																huiyuanxingming: '',
																shouji: '',
																ziqushijian: '',
																ispay: '',
																clicknum: '',
																userid: '',
																longitude: '',
																latitude: '',
																fulladdress: '',
												},
																																																																																																																																// 登陆用户信息
				user: {},
                                ro:{
                                   dingdanhao : false,
                                   shangpinmingcheng : false,
                                   shangpintupian : false,
                                   shangpinxianjia : false,
                                   goumaishijian : false,
                                   huiyuanzhanghao : false,
                                   huiyuanxingming : false,
                                   shouji : false,
                                   ziqushijian : false,
                                   ispay : false,
                                   clicknum : false,
                                   userid : false,
                                   longitude : false,
                                   latitude : false,
                                   fulladdress : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					},
		async onLoad(options) {
        		this.ruleForm.goumaishijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
						// ss读取
																																							this.ruleForm.huiyuanzhanghao = this.user.huiyuanzhanghao
												this.ruleForm.huiyuanxingming = this.user.huiyuanxingming
												this.ruleForm.shouji = this.user.shouji
																																																			
																																																																																																			
			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`goumaidingdan`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='dingdanhao'){
					this.ruleForm.dingdanhao = obj[o];
					this.ro.dingdanhao = true;
					continue;
					}
					if(o=='shangpinmingcheng'){
					this.ruleForm.shangpinmingcheng = obj[o];
					this.ro.shangpinmingcheng = true;
					continue;
					}
					if(o=='shangpintupian'){
					this.ruleForm.shangpintupian = obj[o];
					this.ro.shangpintupian = true;
					continue;
					}
					if(o=='shangpinxianjia'){
					this.ruleForm.shangpinxianjia = obj[o];
					this.ro.shangpinxianjia = true;
					continue;
					}
					if(o=='goumaishijian'){
					this.ruleForm.goumaishijian = obj[o];
					this.ro.goumaishijian = true;
					continue;
					}
					if(o=='huiyuanzhanghao'){
					this.ruleForm.huiyuanzhanghao = obj[o];
					this.ro.huiyuanzhanghao = true;
					continue;
					}
					if(o=='huiyuanxingming'){
					this.ruleForm.huiyuanxingming = obj[o];
					this.ro.huiyuanxingming = true;
					continue;
					}
					if(o=='shouji'){
					this.ruleForm.shouji = obj[o];
					this.ro.shouji = true;
					continue;
					}
					if(o=='ziqushijian'){
					this.ruleForm.ziqushijian = obj[o];
					this.ro.ziqushijian = true;
					continue;
					}
					if(o=='clicknum'){
					this.ruleForm.clicknum = obj[o];
					this.ro.clicknum = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
					if(o=='longitude'){
					this.ruleForm.longitude = obj[o];
					this.ro.longitude = true;
					continue;
					}
					if(o=='latitude'){
					this.ruleForm.latitude = obj[o];
					this.ro.latitude = true;
					continue;
					}
					if(o=='fulladdress'){
					this.ruleForm.fulladdress = obj[o];
					this.ro.fulladdress = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},
						fulladdressTap () {
				uni.chooseLocation({
					success: (data) => {
						console.log(data);
						this.ruleForm.fulladdress = data.address;
						this.ruleForm.longitude = data.longitude;
						this.ruleForm.latitude = data.latitude;
					}
				})
			},
																																																																																																
			// 多级联动参数
																																																																																																
																																																																																													
																																	// 日长控件选择日期时间
			goumaishijianConfirm(val) {
				console.log(val)
				this.ruleForm.goumaishijian = val.result;
				this.$forceUpdate();
			},
																														// 日长控件选择日期时间
			ziqushijianConfirm(val) {
				console.log(val)
				this.ruleForm.ziqushijian = val.result;
				this.$forceUpdate();
			},
																																										
																																																																																													
																											shangpintupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shangpintupian = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
																																																																																																																					
			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																				if(this.ruleForm.clicknum&&(!this.$validate.isIntNumer(this.ruleForm.clicknum))){
					this.$utils.msg(`点击次数应输入整数`);
					return
				}
																																																																																				if(this.ruleForm.longitude&&(!this.$validate.isNumber(this.ruleForm.longitude))){
					this.$utils.msg(`经度应输入数字`);
					return
				}
																																												if(this.ruleForm.latitude&&(!this.$validate.isNumber(this.ruleForm.latitude))){
					this.$utils.msg(`纬度应输入数字`);
					return
				}
																																																																				if(this.ruleForm.id){
					await this.$api.update(`goumaidingdan`, this.ruleForm);
				}else{
					await this.$api.add(`goumaidingdan`, this.ruleForm);
				}
				this.$utils.msgBack('提交成功');
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 88rpx;
	}
	
	.select .uni-input {
		line-height: 88rpx;
	}
	
	.input .right-input {
		line-height: 60rpx;
	}
</style>
