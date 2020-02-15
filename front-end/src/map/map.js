import  React,{Component} from 'react';

 class AddressUi extends Component{ 
    render() {
        return(
                <div className="address" id="address" style={{height:'550px'}}>
                dsdsds
                </div>
        )
    }
    componentDidMount(){
        const { BMap,  } = window
        var map = new BMap.Map("address"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(114.316200103,30.5810841269), 13); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("武汉"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom();
}
}
export default AddressUi