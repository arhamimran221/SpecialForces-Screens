import React from "react";
import logo from "../../assets/image/special-logo.png";
import "./Entergame.css";
import enterGame from "../../assets/image/Enter-game-img.jpeg";
import enter from "../../assets/svg/next.svg"
import reset from "../../assets/svg/reset-entry.svg"
import Power from "../../assets/svg/power-entry.svg"
import { useNavigate } from "react-router-dom";

const Entergame = () => {
   const navigate = useNavigate();

   const handleNavigation = () =>{
    navigate('/lobby')
   }

  return (
    <div className="sf-container">
        <div className="bg-[#474a4b] flex gap-[10px] w-[100%] m-auto text-center justify-center">
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
            <div className="border-[1px] border-[#696b6b] p-[4px] w-[5px] h-[15px] bg-[#696b6b]"></div>
        </div>
      <div className="enter-game-main">
        <div className="pl-[60px] pt-[10px]">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="flex w-[90%] gap-[20px] m-auto mt-[20px]">
          <div className="w-[50%] ">
            <div className=" border-[1px] border-[#525051] bg-[#000] p-4 h-[775px]">
              <table className="w-full text-sm text-left ltr:text-left text-[#ffff] mb-[40px]">
                <thead className="bg-[#081e24] ">
                  <tr className="p-4">
                    <th scope="col" className="p-2 text-[#6e714d] nunito">

                    </th>
                    <th scope="col" className="p-2 text-[#6e714d] nunito">
                      Color
                    </th>
                    <th scope="col" className="p-2 text-[#6e714d] nunito">
                      Category
                    </th>
                    <th scope="col" className="p-2 text-[#6e714d] nunito">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="mt-[50px]">
                    <th
                      scope="\"
                      className="font-[400] pt-5 nunito"
                    >
                      Normal
                    </th>
                    <td class="pt-5 nunito">White</td>
                    <td class="pt-5 nunito">Laptop PC</td>
                    <td class="pt-5 nunito">$1999</td>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class=""
                    >
                    </th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class=""
                    >
                    </th>
                    <td class="nunito">Black</td>
                    <td class="nunito">Accessories</td>
                    <td class="nunito">$99</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-[#ffff]  clan nunito">
                Clan
              </div>
              <div className="text-[#ffff] py-[20px] nunito">
                Competetive
              </div>
            </div>
            <div className="flex justify-end">
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset nunito" onClick={handleNavigation}>
               Enter <img src={enter} alt="" />
            </div>
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset">
               <img src={reset} alt="" />
            </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <img src={enterGame} alt="" className="w-[100%] border-[1px] border-[#525051]" />
            <div className="flex justify-end">
                <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset">
                    <img src={Power} alt="" sizes="" srcset="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entergame;
