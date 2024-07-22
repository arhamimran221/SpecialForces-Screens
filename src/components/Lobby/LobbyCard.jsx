import React from 'react'

const LobbyCard = (props) => {
  return (
    <div className='lobbycard border-[2px] border-[#36d6f3] w-[33%]'>
      <div className="text-[#fff] bg-[#121620] py-2 text-center nunito">{props.heading}</div>
      <div className="w-[100%]"><img src={props.image} alt="" srcset="" className='w-[100%]'/></div>
      <div className="flex justify-end w-[100%] bg-[#000]">
      <div className="view-button bg-[#273537] p-2 text-center text-[#fff] border-[1px] border-[#000] w-[50%] cursor-pointer hover:text-[#36d6f3] hover:border-[#36d6f3] hover:bg-none">View</div>
      </div>
    </div>
  )
}

export default LobbyCard
