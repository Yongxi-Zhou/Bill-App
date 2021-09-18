import {React,Component} from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'
import "./detailed.css"
import iconpng from "../../imgs/item_icon.png"
import Nav from "../Nav/Nav"
import store from "../../store"

//支出图标
import { SkinOutlined, ShoppingCartOutlined, HomeOutlined, ForkOutlined, CarOutlined ,
  DesktopOutlined, GlobalOutlined, CoffeeOutlined} from '@ant-design/icons';
//收入图标
import { RiseOutlined, StockOutlined, LineChartOutlined, DollarCircleOutlined, EuroCircleOutlined ,
  GiftOutlined, TransactionOutlined} from '@ant-design/icons';

const monthFormat = 'YYYY-MM';


class DetailedUi extends Component {
  constructor(props) {
    super(props);

    this.datePickerChange=this.datePickerChange.bind(this)
  }

  //当日期改变时
  datePickerChange(date,dateString){
    //将日期转化为数字
    let year=parseInt(dateString.split('').splice(0,4).join(''))
    let month=parseInt(dateString.split('').splice(5,2).join(''))
    let date1={
      year,
      month
    }
    //调用父组件的changeDate
    this.props.changeDate(date1)
  }
  render() { 
    return ( 
      <div className="detailed-wrapper">
        <div className="header">
            <h1 style={{textAlign:"center",fontWeight:"bolder"}}>明细</h1>
            <DatePicker 
                defaultValue={moment('2021-08', monthFormat)} 
                format={monthFormat} 
                picker="month" 
                className="datePicker"
                onChange={this.datePickerChange}
            />
        </div> 
        
        <div className="chart">
          <div id="myechart" style={{width:"800px",height:"400px"}}></div>
        </div>
        <div className="list-wrapper">
          
            {
              this.props.itemList.map((item,index)=>
                (
                  
                  <div className="item-wrapper" key={index}>
                    <span className="icon_wrapper">
                      <img 
                        src={iconpng} 
                        style={{width:"80px",height:"80px"}}
                        alt="省略图"
                      ></img>
                    </span>
                    <div className="font_wrapper">
                      <h1>{item.name}</h1>
                      <div className="money">{item.value+"元"}</div>
                    </div>
                  </div>
                  
                )
              )
            }
              
            
          </div>
          <div style={{width:'1px',height:'1px'}}></div>     
        <Nav></Nav>
      </div>

     );
  }

}

export default DetailedUi;



