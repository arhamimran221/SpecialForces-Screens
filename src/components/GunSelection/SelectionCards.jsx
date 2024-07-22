import React from 'react'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const SelectionCards = (props) => {
  return (
    <div className='selectionCard w-[50%] '>
       <div className="flex items-center bg-[#333331] border-[1px] border-[#696b6d] h-[180px]">
        <div className="text-[#354f6f] text-[30px] cursor-pointer"><CaretLeftOutlined/></div>
        <div className="img">
            <div className="titl bg-[red] w-fit text-[#f4e403] nunito mt-[16px] font-[600] px-1">{props.title}</div>
            <img src={props.image} alt="" srcset="" className='' />
            <div className='text-center text-[#fff] text-[18px] nunito mb-[10px]'>{props.gunName}</div>
        </div>
        <div className="text-[#354f6f] text-[30px] cursor-pointer"><CaretRightOutlined/></div>
       </div>
    </div>
  )
}

export default SelectionCards
