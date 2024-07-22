import React, { useState } from "react";
import Save from "../../assets/svg/create.svg";
import Back from "../../assets/svg/sync.svg";
import purxhase from "../../assets/svg/play.svg";
import "./WeaponShop.css";
import back_reurn from "../../assets/svg/back-return.svg";
import lobbyitems from "../../assets/image/GunImage.PNG";
import search from "../../assets/svg/search.svg";

import Dropdown from "./DropDown";
import addpeople from "../../assets/svg/add-people.svg";
import hear from "../../assets/svg/hear.svg";
import speaker from "../../assets/svg/speaker.svg";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const WeaponShop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
    
  ];
  return (
    <div className="weapon-shop">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={null}
      >
        <p className="border-[1px] border-[#696b6d] bg-[#1b2f2f] text-[#fff] nunito p-2 text-[15px]">
       Create
        </p>
         <div className="modal-bg nunito">
          <div className="">
            <div className="flex justify-center gap-[10px] my-[10px] items-center "><label htmlFor="" className="">Name</label><input type="text" placeholder="Get in here already!" className="w-[70%] bg-[#000] border-[1px] border-[#696b6d] px-2 py-1"/></div>
            <div className="border-[1px] border-[#000] border-t-[#696b6d] flex w-[100%] ">
              <div className="w-[50%]   ">
                <div className="flex gap-[50px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="">Type</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Public</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Private</button>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="" >Mode</label>
                  <div className="w-[64%]">
                    <Dropdown options={options}/>
                  </div>
                </div>
                <div className="flex gap-[10px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="" >Switch Sides</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Use</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Off</button>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="">Observer</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Use</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Off</button>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="">3rd POV</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Use</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Off</button>
                  </div>
                </div>
                <div className="flex gap-[10px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="">Weapon Picking</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Use</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Off</button>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 pl-[80px] py-2 items-center justify-between">
                  <label htmlFor="">Throwing</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Use</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Off</button>
                  </div>
                </div>
              </div>
              <div className="w-[50%] ">
              <div className="flex gap-[50px] border-b px-4  py-[8px] items-center justify-between">
                  <label htmlFor="">PW</label>
                  <div className="">
                    <input type="text" className="w-[100%] bg-[#000] border-[1px] border-[#696b6d] px-2 "/>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 py-[8px] items-center justify-between">
                  <label htmlFor="">Players</label>
                  <div className="w-[55%]">
                    <Dropdown options={options}/>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 py-[8px] items-center justify-between">
                  <label htmlFor="">Observer PW</label>
                  <div className="">
                    <input type="text" className="w-[100%] bg-[#000] border-[1px] border-[#696b6d] px-2 "/>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 py-[8px] items-center justify-between">
                  <label htmlFor="">Spectate</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Our Side</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">All</button>
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 py-[8px] items-center justify-between">
                  <label htmlFor="">Free Join</label>
                  <div className="py-[1px]">
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
                <div className="flex gap-[50px] border-b px-4 py-[8px] items-center justify-between">
                  <label htmlFor="">Bomb Effect</label>
                  <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">Our Side</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc]">All</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        <div className="bg-[#1d1d1d] w-[100%] text-[#fff] flex justify-center gap-[20px] py-2 px-2 items-center">
          <div className=" text-[#a9a9a6]">
          <button
              className="bg-[#1e2728] border-[1px] border-[#696b6d] px-4 py-2 text-[#fff]"
              onClick={handleCancel}
            >
              Confirm
            </button>
          </div>
          <div className="">
            <button
              className="bg-[#1e2728] border-[1px] border-[#696b6d] px-4 py-2 text-[#fff]"
              onClick={handleOk}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex gap-[10px] w-[90%] m-auto ">
        <div className="w-[70%]">
          <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
          <div className="border-[1px] border-[#696b6d] px-4 py-2 flex mb-[2px] justify-between items-center">
            <div className="flex gap-[5px]">
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3] h-fit" 
             onClick={showModal}>
                <img src={Save} alt="" /> Create
              </div>
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3] h-fit">
                <img src={Back} alt="" />
              </div>
            </div>
            <div className="text-[#fff]">
              <div className="flex gap-[5px]">
                <button className="border-[2px] border-[#f3d035] bg-[#814517] text-[#f3d035] px-6 py-1 cursor-pointer">
                  EVENT
                </button>
                <button className="border-[2px] border-[#f3d035] bg-[#814517] text-[#f3d035] px-6 py-1 cursor-pointer">
                  PC 안녕 거기야
                </button>
              </div>
              <div className="flex gap-[5px] items-center">
                <Dropdown options={options} />
                <div className="flex gap-[2px] items-center">
                  <button className="bg-[#32393a] px-[14.5px] cursor-pointer py-1">
                    <img src={addpeople} alt="" srcset="" />
                  </button>
                  <button className="bg-[#32393a] px-[14.5px] cursor-pointer py-1">
                    <img src={hear} alt="" srcset="" />
                  </button>
                  <button className="bg-[#32393a] px-[14.5px] cursor-pointer py-1">
                    <img src={speaker} alt="" srcset="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] bg-[#21211d] gameselection-table mb-[2px] h-[300px]">
            <table className="w-full text-sm text-left ltr:text-left text-[#ffff] mb-[40px] ">
              <thead className="bg-[#28281e] w-[100%] p-2">
                <tr className="p-4 ">
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center"
                  >
                    Room
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                  >
                    Mode
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                  >
                    Grenade
                  </th>

                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                  >
                    Host
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                  >
                    Players
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="px-3">
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center mt-[20.5%] justify-center gap-[10px] bg-[#28281e] border-[1px] border-[#696b6d] py-1">
              <div className="text-[#354f6f] text-[30px] cursor-pointer flex items-center">
                <CaretLeftOutlined />
              </div>
              <div className="flex  gap-[10px] text-[16px] text-[#696b6d] ">
                <span className="text-[#ffcc01]">1</span>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
              </div>
              <div className="text-[#354f6f] text-[30px] cursor-pointer flex items-center">
                <CaretRightOutlined />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d]  mb-[2px]  w-[100%] ">
            <div className="flex w-[100%] h-[300px]">
              <div className="flex flex-col w-[15%] gap-[2px] bg-[#000] border-[1px] border-[#000] border-r-[#696b6d]">
                <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-1 border-[2px]  border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                  All
                </button>
                <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-4 py-1 border-[2px] border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                  User 1
                </button>
                <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-4 py-1 border-[2px] border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                  User 2
                </button>
                <button className="bg-[#374343] hover:text-[#dffd73] text-[#fff] px-2 py-1 border-[2px] border-[#374447] text-[12px] font-[600] mt-[173px] hover:border-y-[#4988bb]">
                  Messanger
                </button>
              </div>
              <div
                className=" gap-[2px] overflow-y-scroll text-[#fff] px-3 py-1 text-[#e1e20f] w-[85%]"
                style={{ maxHeight: "145px", overflowY: "scroll" }}
              >
                Lorem ipsum
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] px-2 bg-[#000] text-[#fff]">
              All:
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
          <div className="border-[1px] border-[#696b6d] mb-[2px]">
            <div className="flex items-center gap-[10px] my-[10px] px-3">
              <input
                type="text"
                className="border-[1px] border-[#fff] bg-[#000] outline-none text-[#fff] w-[100%] py-1 px-2"
              />
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                <img src={search} alt="" className="w-[20px] h-[20px] nunito" />
              </div>
            </div>
            <div className="flex px-3 w-[15%] gap-[2px] bg-[#000] border-[1px] border-[#000] border-r-[#696b6d]">
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-1 border-[2px]  border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                All
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-4 py-1 border-[2px] border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                Lobby
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-4 py-1 border-[2px] border-[#374447] text-[12px] font-[600] hover:border-y-[#4988bb]">
                Info
              </button>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] mb-[2px] bg-[#21211d] gameselection-table">
            <div className="flex bg-[#10191b] h-[200px] px-4 gap-[20px]">
              <div className="bg-[#21211d] gameselection-table p-8 my-4 w-[140px]"></div>
              <div className=" my-4">
                <div className="bg-[#040707] p-4 mb-[10px] w-[150px] rounded-md "></div>
                <div className="bg-[#040707] p-4 mb-[10px] w-[150px] rounded-md"></div>
                <div className="bg-[#040707] p-4 mb-[10px] w-[150px] rounded-md"></div>
                <div className="bg-[#040707] p-4 mb-[10px] w-[150px] rounded-md"></div>
              </div>
            </div>
            <table className="w-full text-sm text-left ltr:text-left text-[#ffff] mb-[40px]  ">
              <thead className="bg-[#28281e] w-[100%] p-2">
                <tr className="p-4 ">
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center"
                  >
                    Room
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                  >
                    Mode
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                  >
                    Mode
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                  >
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody className="h-[300px]">

              </tbody>
            </table>
          </div>

          <div className="flex w-[100%]  justify-end">
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center ">
              <img src={back_reurn} alt="" sizes="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponShop;
