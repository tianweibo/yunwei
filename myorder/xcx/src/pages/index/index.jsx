import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button,Image} from '@tarojs/components'
import './index.less'
import sb from '../../assets/images/shibing.jpg'
import config from '../../api/config'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '发送内容'
  }
  componentWillMount () { }
  componentDidMount () { }
  componentWillUnmount () { }
  componentDidShow () {
	this.socketConnect();
	const vm = this;
	wx.onSocketClose(function() {
		vm.socketConnect();
	});
	wx.onSocketError(function() {
		vm.socketConnect();
	})

	//监听websocket接收到服务器的消息事件
	wx.onSocketMessage(function(res) {
		console.log('res',res);

	})
  }
  componentDidHide () { }
  socketConnect() {
	//建立一个socket连接
	wx.connectSocket({
		url: config.websocketServerUrl,
		header:{
		  'content-type': 'application/json'
		},
		protocols: ['protocol1'],
		success: function() {
			console.log('成功创建一个socket连接');
		}
	});
  }
  tobegin = (res) => {
	//console.log(res)avatarUrl   nickName
	console.log(res.detail.userInfo)
		Taro.setStorage({
	      key: "userinfo",
	      data: res.detail.userInfo
	 	});
		Taro.reLaunch({
			url:'../deliver/index'
		}) 
	}
  	render () {
    return (
      <View className='index'>
		<View className='tit'>
			<Image src={sb} className="theimg"></Image>
			<View className="zibox">
				<View className='zi'>欢迎使用弹幕工具</View>
				<View  className='zi'>生如逆旅单行道，哪有岁月可蹉跎</View>
				<View  className='zi'>面对疾风吧</View>
			</View>
		</View>
		<Button type="primary" open-type="getUserInfo" onGetUserInfo={this.tobegin}>授权</Button>
      </View>
    )
  }
}
