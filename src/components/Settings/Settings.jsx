import React from "react";
import "./Settings.css";
import { CaretRightOutlined } from "@ant-design/icons";
import image from "../../assets/image/scale.PNG";
import Sensitivity from "../../assets/image/sensitivity.PNG";
import DropdownSettings from "./DropDown";
const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
  
];

const Settings = () => {
  return (
    <div className="bg-settings px-2">
      <div className="flex gap-[5px] py-2">
        <button className="bg-[#2d4144] p-2 hover:text-[#e5fc6e] text-[#fff] border-[1px] border-[#000] hover:border-y-[#437fb1]">
          Control (A)
        </button>
        <button className="bg-[#2d4144] p-2 hover:text-[#e5fc6e] text-[#fff] border-[1px] border-[#000] hover:border-y-[#437fb1]">
          Control (B)
        </button>
        <button className="bg-[#2d4144] p-2 hover:text-[#e5fc6e] text-[#fff] border-[1px] border-[#000] hover:border-y-[#437fb1]">
          System
        </button>
        <button className="bg-[#2d4144] p-2 hover:text-[#e5fc6e] text-[#fff] border-[1px] border-[#000] hover:border-y-[#437fb1]">
          Macro
        </button>
        <button className="bg-[#2d4144] p-2 hover:text-[#e5fc6e] text-[#fff] border-[1px] border-[#000] hover:border-y-[#437fb1]">
          Capture
        </button>
      </div>
      <div className="">
        <div className="flex w-[100%] gap-[10px]">
          <div className="w-[50%] ">
            <div className="border-[1px] border-[#696b6d] mb-[5px]">
              <div className="flex bg-[#323232] items-center gap-[20px] border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#f5931e] font-[700] uppercase py-1 nunito px-1">
                  ✨&nbsp;Graphics
                </div>
                <div className="text-[#fff] nunito">Graphics Settings</div>
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Resolution</div>
                  <DropdownSettings options={options} lable="1024x390"/> 
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Aspect Ratio</div>
                <DropdownSettings options={options} lable="Default (4.3)"/> 
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Window Mode
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Color Quality</div>
                <DropdownSettings options={options} lable="32 bit"/> 
              </div>
              <div className="flex justify-between px-[28px] gap-[40px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">
                  Texture Quality
                </div>
                <DropdownSettings options={options} lable="Default"/> 
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Filter</div>
                <DropdownSettings options={options} lable="Highiest"/> 

              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Brightness</div>
                <div className="flex gap-[10px] items-center text-[#fff]  bg-[#000] w-[120px] justify-center text-[12px] cursor-pointer">
                  <img src={image} />
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] mb-[5px]">
              <div className="flex bg-[#323232] items-center gap-[20px] border-[1px] border-[#000] border-b-[#696b6d] py-[2px]">
                <div className="text-[#f5931e] font-[700] uppercase py-1 nunito px-1">
                  ✨&nbsp;Sound
                </div>
                <div className="text-[#fff] nunito">Sound Settings</div>
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] py-[5.3px]">
                <div className="text-[#b7b72b] text-[14px]">Game Sound</div>
                <div className="flex gap-[10px] items-center text-[#fff]  bg-[#000] w-[120px] justify-center text-[12px] cursor-pointer">
                  <img src={image} />
                </div>
              </div>{" "}
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] py-[5.3px]">
                <div className="text-[#b7b72b] text-[14px]">Lobby Sound</div>
                <div className="flex gap-[10px] items-center text-[#fff]  bg-[#000] w-[120px] justify-center text-[12px] cursor-pointer">
                  <img src={image} />
                </div>
              </div>{" "}
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] py-[5.3px]">
                <div className="text-[#b7b72b] text-[14px]">Radio</div>
                <div className="flex gap-[10px] items-center text-[#fff]  bg-[#000] w-[120px] justify-center text-[12px] cursor-pointer">
                  <img src={image} />
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d]">
              <div className="flex bg-[#323232] items-center gap-[20px] border-[1px] border-[#000] border-b-[#696b6d] py-[2px]">
                <div className="text-[#f5931e] font-[700] uppercase py-1 nunito px-1">
                  ✨&nbsp;Lobby
                </div>
                <div className="text-[#fff] nunito">Lobby Settings</div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Block Notifications
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className="border-[1px] border-[#696b6d] mb-[5px]">
              <div className="flex bg-[#323232] items-center gap-[20px] border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#f5931e] font-[700] uppercase py-1 nunito px-1">
                  ✨&nbsp;Advanced
                </div>
                <div className="text-[#fff] nunito">Details Settings</div>
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Radio</div>
                <DropdownSettings options={options} lable="Korean"/> 

              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Shadow Effect</div>
                <DropdownSettings options={options} lable="Off"/> 

              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Smoke Effect
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Always Running
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Unknown Option
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Blood Effect
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Invert Mouse
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Light Map
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Kill Effect
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Hit Sound
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  FPP effect
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
                <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                  Bullet Image Effect
                </label>
                <div className="flex gap-[10px]">
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    Off
                  </button>
                  <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                    On
                  </button>
                </div>
              </div>
              <div className="flex justify-between px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d]">
                <div className="text-[#b7b72b] text-[14px]">Blood Color </div>
                <DropdownSettings options={options} lable="Default"/> 

              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-[1px] border-[#696b6d] mb-[5px]">
            <div className="flex bg-[#323232] items-center gap-[20px] border-[1px] border-[#000] border-b-[#696b6d]">
              <div className="text-[#f5931e] font-[700] uppercase py-1 nunito px-1">
                ✨&nbsp;Sensitivity
              </div>
              <div className="text-[#fff] nunito">Sensitivity Settings</div>
            </div>
            <div className="flex gap-[70px] px-[28px]  py-2 items-center border-[1px] border-[#000] border-b-[#696b6d] ">
              <label htmlFor="" className="text-[#b7b72b] text-[14px]">
                Enable Mouse Sensitivity
              </label>
              <div className="flex gap-[10px]">
                <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                  Off
                </button>
                <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-[17px] hover:text-[#aebd56] hover:border-y-[#4d92cc] cursor-pointer">
                  On
                </button>
              </div>
            </div>
            <div className="flex  px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] w-[100%]">
              <div className="text-[#b7b72b] text-[14px] w-[30%]">
                2x zoom sensitivity
              </div>
              <div className="flex gap-[10px] items-center text-[#fff]  text-[12px] cursor-pointer w-[70%]">
                <img src={Sensitivity} alt="" />
              </div>
            </div>
            <div className="flex  px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] w-[100%]">
              <div className="text-[#b7b72b] text-[14px] w-[30%]">
                {" "}
                Zoom Sensitivity
              </div>
              <div className="flex gap-[10px] items-center text-[#fff]  text-[12px] cursor-pointer w-[70%]">
                <img src={Sensitivity} alt="" />
              </div>
            </div>
            <div className="flex  px-[28px] gap-[60px] py-1 items-center border-[1px] border-[#000] border-b-[#696b6d] w-[100%]">
              <div className="text-[#b7b72b] text-[14px] w-[30%]">
                Double Sensitivity
              </div>
              <div className="flex gap-[10px] items-center text-[#fff]  text-[12px] cursor-pointer w-[70%]">
                <img src={Sensitivity} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
