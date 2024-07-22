import React, { useState } from "react";
import Save from "../../assets/svg/enter-game.svg";
import Back from "../../assets/svg/sync.svg";
import purxhase from "../../assets/svg/play.svg";
import { Button, Modal } from "antd";

import back_reurn from "../../assets/svg/back-return.svg";
import lobbyitems from "../../assets/image/GunImage.PNG";
import "./GunSelection.css";
import search from "../../assets/svg/search.svg";
import GameSelection from "../../assets/image/gunSelction.PNG";
import SelectionCards from "./SelectionCards";
import Power from "../../assets/svg/power-entry.svg";

const GunSelection = () => {
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

  return (
    <div className="gunSelect-main pb-[20px]">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={700}
        footer={null}
      >
        <p className="border-[1px] border-[#696b6d] bg-[#1b2f2f] text-[#fff] nunito p-2 text-[15px]">
          Notification Window
        </p>
        <img
          src={GameSelection}
          className="w-[100%] border-[1px] border-[#696b6d]"
        />
        <div className="bg-[#1d1d1d] w-[100%] text-[#fff] flex justify-between py-2 px-2 items-center">
          <div className="flex gap-[10px] text-[#a9a9a6]">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-none cursor-pointer"
            />{" "}
            Hide These Message
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
        <div className="w-[50%]">
          <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
          <div className="border-[1px] border-[#696b6d] px-6 py-4 flex gap-[10px] mb-[2px]">
            <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
              <img src={Save} alt="" /> Quick Join
            </div>
            <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
              <img src={Back} alt="" />
            </div>
            <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
              <img src={purxhase} alt="" /> Play
            </div>
            <div className="flex items-center gap-[10px] ml-[10px]">
              <input
                type="text"
                className="border-[1px] border-[#fff] bg-[#000] outline-none text-[#fff] w-[150px] py-1 px-2"
              />
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                <img src={search} alt="" className="w-[20px] h-[20px] nunito" />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] bg-[#21211d] gameselection-table mb-[2px]">
            <table className="w-full text-sm text-left ltr:text-left text-[#ffff] mb-[40px]">
              <thead className="bg-[#28281e] w-[100%] p-2">
                <tr className="p-4 ">
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                  >
                    Channel Name
                  </th>
                  <th
                    scope="col"
                    className="p-2 text-[#fff] nunito text-center"
                  >
                    Players
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
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
                <tr class="hover:bg-[#31482b] mx-3 cursor-pointer">
                  <td scope="\" className=" nunito text-center">
                    Normal
                  </td>
                  <td class=" nunito text-center">White</td>
                  <td class=" nunito text-center">Laptop PC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-[1px] border-[#696b6d]  mb-[2px]  w-[100%]">
            <div className="flex w-[100%]">
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
                <button className="bg-[#374343] hover:text-[#dffd73] text-[#fff] px-2 py-1 border-[2px] border-[#374447] text-[12px] font-[600] mt-[15px] hover:border-y-[#4988bb]">
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
        <div className="w-[50%]">
          <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
          <div className="border-[1px] border-[#696b6d] mb-[2px]">
            <div className="w-[100%] cursor-pointer" onClick={showModal}>
              <img src={GameSelection} alt="" className="w-[100%]" />
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] mb-[2px] flex w-[100%] flex-wrap">
            <SelectionCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              title="New"
              gunName="M416"
            />
            <SelectionCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              title="New"
              gunName="M416"
            />
            <SelectionCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              title="New"
              gunName="M416"
            />
            <SelectionCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              title="New"
              gunName="M416"
            />
          </div>

          <div className="flex w-[100%] mt-[20px] justify-end">
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center ">
              <img src={back_reurn} alt="" sizes="" srcset="" />
            </div>
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center ">
              <img src={Power} alt="" sizes="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GunSelection;
