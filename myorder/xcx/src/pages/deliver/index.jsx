import Taro, { Component } from '@tarojs/taro'
import { View, Image,Input} from '@tarojs/components'
import './index.less'
import dantou from '../../assets/images/dantou.png'
import qiang from '../../assets/images/timg.gif'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '发送内容'
  }
  constructor () {
    super(...arguments)
    this.state = {
      imageurl: '',
	  username: "",
	  content:'',
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
	Taro.getStorage({ key: 'userinfo' })
	.then(res =>{
		this.setState({
			imageurl:res.data.avatarUrl,
			username:res.data.nickName
		})
	})
   }
   submitInfo(){
	   var data={
		   username:this.state.username,
		   imgurl:this.state.imageurl,
		   content:this.state.content
	   }
	   const vm = this;
	   wx.sendSocketMessage({
		data: JSON.stringify(data),
		success: function() {
			console.log('弹幕消息发送成功');
			wx.showToast({
				title: '发送成功'
			})
			vm.setState({
				content: ''
			})
		},
		fail: function() {
			console.log('弹幕消息发送失败');
			wx.showToast({
				title: '发送失败',
				icon: 'none'
			})
		}
	})

   }
   formchange(e){
    let {content}  = this.state;
    content =e.target.value;
    this.setState({
	    content
    })
  }
  componentDidHide () { }
 
  render () {
    return (
	  <View className='index'>
		<View className='imgbox'>
			<Image className="theimg" src={this.state.imageurl}></Image>
		</View>
		<View className='username'>{this.state.username}</View>
		<View class="inputBox">
			<Image className='qiang' src={qiang}></Image>
			<Input className='theinput' onInput={this.formchange.bind(this)} value={this.state.content} ></Input>
			<Image className='dantou' src={dantou} onClick={this.submitInfo}></Image>
		</View>
      </View>
    )
  }
}
