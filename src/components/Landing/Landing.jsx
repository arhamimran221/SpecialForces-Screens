import React from 'react'
import logo from "../../assets/image/sf_logo.png"
import struck from "../../assets/image/Love-Struck-banner.jpeg"
import power from "../../assets/svg/power-btn.svg"
import myth_Logo from "../../assets/image/myth_logo.png"
import './Landing.css'
import {useNavigate} from "react-router-dom"

const Landing = () => {
const navigate = useNavigate();

const handleNavigation = () =>{
  navigate('/enter-game')
} 

  return (
    <div className='sf-container'>
      <div className="sf-main ">
        <div className="p-5">
          <img src={logo}/>
        </div>
        <div className=" mt-[16.3%] love-struck-ban gap-3 rounded-lg">
          <div className="flex  w-[100%] ">
          <div className="w-[75%] border-[1px] border-gray-300 love-struck-ban p-4">
            <img src={struck} alt="" className='border-2 border-gray-700 w-[1100px]' />
          </div>
          <div className="w-[25%] p-8 border-[1px] border-gray-300 love-struck-ban-form">
            <form action="">
              <div className="">
                <div className="flex text-[#ffff] justify-between ">
                  <label htmlFor="" className='text-[#cfa84b] text-[15px] font-[600] nunito'>Username</label>
                  <span className='text-[15px] nunito'>Save user ID <input type="checkbox" name="" id="" className='cursor-pointer'/></span>
                </div>
                <input type="text" placeholder='Your Name' className='w-[100%] bg-[#000] border-2 border-gray-700 p-1  outline-none text-gray-400' />
              </div>
              <div className="">
                <label htmlFor="" className='text-[#cfa84b] text-[15px] font-[600] nunito'>Password</label>
                <input type="Password" placeholder='*******' className='w-[100%] bg-[#000] border-2 border-gray-700 p-1  outline-none text-gray-400'/>
              </div>
              <div className="mt-[25px]">
                <button type="submit" className='w-[100%] bg-[#FFD700] p-2  cursor-pointer log-in-btn nunito' onClick={handleNavigation}>Login</button>
              </div>
            </form>
            <div className="flex mt-[20px] justify-between">
              <div className="text-[#cfa84b] text-[13px] flex flex-col">
                <a href="/" className='underline nunito'>Register</a>
                <a href="/" className='underline mt-[13px] nunito'>Find your Account/Password</a>
              </div>
              <div className="bg-[#3f3e3b] border-[1px] border-[#686663] p-2 cursor-pointer">
                <img src={power} alt="" srcset="" />
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="bg-[#000] text-[#fff] flex items-center gap-[200px] p-2">
        <img src={myth_Logo} alt="" srcset="" />
        <div className="text-[13px] nunito">COPYRIGHT @ 2023 SPECIAL FORCE:LEGENDS</div>
      </div>
      </div>
    </div>
  )
}

export default Landing
