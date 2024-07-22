import React, { useState } from "react";
import Save from "../../assets/svg/Save.svg";
import Back from "../../assets/svg/back.svg";
import purxhase from "../../assets/svg/purchase.svg";
import Character from "../../assets/image/chracter-lobby.png";
import avatar from "../../assets/image/avatar_image.jpeg";
import LobbyCard from "../Lobby/LobbyCard";
import back_reurn from "../../assets/svg/back-return.svg";
import lobbyitems from "../../assets/image/LOBBYITEMS.jpeg";
import { Modal } from "antd";
import gunImage from "../../assets/image/Gun_Image.png";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import play from "../../assets/svg/play.svg";
import Love from "../../assets/image/Love-Struck-banner.jpeg";
import desert from "../../assets/image/desert.jpeg";

const CharacterSelect = () => {
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
    <div className="sf-container">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={1280}
        className="mt-[-100px]"
        footer={null}
      >
        <div className="flex gap-[10px] w-[100%] m-auto bg-[#000]">
          <div className="w-[40%]">
            <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
            <div className="border-[1px] border-[#696b6d] p-2">
              <div className="flex items-center bg-[#152424] justify-center justify-between mb-[10px] h-[30px]">
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretLeftOutlined />
                </div>
                <div className="text-[#fff] nunito">Type A</div>
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretRightOutlined />
                </div>
              </div>
              <div className="flex w-[100%] gap-[10px]">
                <div className="flex items-center bg-[#152424] justify-center justify-between w-[50%] h-[30px]">
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretLeftOutlined />
                  </div>
                  <div className="text-[#fff] nunito">Type A</div>
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretRightOutlined />
                  </div>
                </div>
                <div className="flex items-center bg-[#152424] justify-center justify-between w-[50%] h-[30px]">
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretLeftOutlined />
                  </div>
                  <div className="text-[#fff] nunito">Type A</div>
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretRightOutlined />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] p-2">
              <div className="flex  w-[100%] justify-between">
                <img src={Character} alt="w-[60%]" />
                <div className="">
                  <img src={gunImage} alt="" className="w-[200px] mt-[40px]" />
                  <button className="border-[1px] border-[#696b6d] p-2 text-[#fff] w-[40%] rounded-md bg-[#000] mt-[10px] bg-[#242624] m-auto flex justify-center">
                    Repair
                  </button>
                  <img src={gunImage} alt="" className="w-[200px] mt-[40px]" />
                  <button className="border-[1px] border-[#696b6d] p-2 text-[#fff] w-[40%] rounded-md bg-[#000] mt-[10px] bg-[#242624] m-auto flex justify-center">
                    Repair
                  </button>
                  <div>
                    <button className="border-[1px] border-[#696b6d] p-2 text-[#fff] w-[70%] rounded-md bg-[#000] mt-[160px] bg-[#242624]">
                      캐릭터 변경
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] p-2">
              <div className="text-[#fff] flex px-[97px] gap-[10px]">
                <p>Code Name:</p>
                <p>Arham</p>
              </div>
              <div className="text-[#fff] flex px-[97px] gap-[10px]">
                <p>Code Name:</p>
                <p>Arham</p>
              </div>
              <div className="text-[#fff] flex px-[97px] gap-[10px]">
                <p>Code Name:</p>
                <p>Arham</p>
              </div>
              <div className="text-[#fff] flex px-[97px] gap-[10px]">
                <p>Code Name:</p>
                <p>Arham</p>
              </div>
              <div className="flex gap-[20px] justify-center">
                <div className="">
                  <div className="text-[#fff] flex justify-center gap-[10px]">
                    <p>Code Name:</p>
                    <p>Arham</p>
                  </div>{" "}
                  <div className="text-[#fff] flex justify-center gap-[10px]">
                    <p>Code Name:</p>
                    <p>Arham</p>
                  </div>
                </div>
                <div className="">
                  <div className="text-[#fff] flex justify-center gap-[10px]">
                    <p>Code Name:</p>
                    <p>Arham</p>
                  </div>
                  <div className="text-[#fff] flex justify-center gap-[10px]">
                    <p>Code Name:</p>
                    <p>Arham</p>
                  </div>
                </div>
              </div>
              <div className="text-[#fff] flex justify-center gap-[10px]">
                <p>Sp Recharge:</p>
                <div className="flex gap-[3px] items-center">
                  <div className="p-2 w-[10px] h-[10px] bg-[#d1fd95] rounded-sm"></div>
                  <div className="p-2 w-[10px] h-[10px] bg-[#d1fd95] rounded-sm"></div>
                  <div className="p-2 w-[10px] h-[10px] bg-[#d1fd95] rounded-sm"></div>
                  <div className="p-2 w-[10px] h-[10px] bg-[#d1fd95] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
            <div className="border-[1px] border-[#696b6d] mb-[2px] flex px-3 items-center gap-[5px]">
              <div className="flex bg-[#161a1a] border-[1px] border-[#202022] text-[#fff] items-center text-[15px] gap-[10px] px-2 h-fit py-2 cursor-pointer">
                <img src={play} alt="" srcset="" /> Play
              </div>
              <div className="flex bg-[#161a1a] border-[1px] border-[#202022] text-[#fff] items-center text-[15px] gap-[10px] px-2 h-fit py-2 cursor-pointer">
                <img src={play} alt="" srcset="" /> Play
              </div>
              <div className="flex bg-[#161a1a] border-[1px] border-[#202022] text-[#fff] items-center text-[15px] gap-[10px] px-2 h-fit py-2 cursor-pointer">
                <img src={play} alt="" srcset="" /> Play
              </div>
              <div className="flex bg-[#161a1a] border-[1px] border-[#202022] text-[#fff] items-center text-[15px] gap-[10px] px-2 h-fit py-2 cursor-pointer">
                <img src={play} alt="" srcset="" /> Play
              </div>
              <div className="flex bg-[#161a1a] border-[1px] border-[#202022] text-[#fff] items-center text-[15px] gap-[10px] px-2 h-fit py-2 cursor-pointer">
                <img src={play} alt="" srcset="" /> Play
              </div>
              <div className="">
                <img src={Love} alt="" className="w-[300px] " />
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] mb-[2px]  bg-[#242321] h-[342px]">
              <table className="w-full text-sm text-left ltr:text-left text-[#ffff] mb-[40px] ">
                <thead className="bg-[#28281e] w-[100%] p-2">
                  <tr className="p-4 ">
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff] my-[20px]"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      EM
                    </th>

                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      CodeName
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      Clan
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      EM
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      CodeName
                    </th>
                    <th
                      scope="col"
                      className="p-2 text-[#fff] nunito text-center border-[1px] border-[#000] border-x-[#fff]"
                    >
                      Clan
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
            </div>

            <div className="border-[1px] border-[#696b6d] mb-[2px] flex gap-[10px] justify-between items-center text-[#fff] w-[100%] bg-[#242321] py-2">
              <div className="flex  w-[70%] items-center border-[1px] border-[#696b6d] ml-[10px]">
                <div className="flex items-center bg-[#152424] justify-center justify-between w-[60%] h-[170px]">
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretLeftOutlined />
                  </div>
                  <div className="text-[#fff] nunito">
                    <img src={desert} alt="" srcset="" />
                  </div>
                  <div className="text-[#354f6f] text-[30px] cursor-pointer">
                    <CaretRightOutlined />
                  </div>
                </div>
                <div className="w-[40%] bg-[#000] pl-[10px] h-[170px] py-[30px]">
                  <div className="text-[18px] font-[600] nunito">Desert Camp</div>
                  <div className="nunito font-[400]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
              </div>
              <div className="w-[10%] bg-[#000] h-[170px] border-[1px] border-[#696b6d] ">
                <button className="px-2 py-2 border-[1px] border-[#000] border-b-[#696b6d]">Gernade</button>
                <div className="p-2">
                <button className="px-1 py-1 border-[1px] border-[#4a88bb] bg-[#1e2728] text-[#4a88bb] text-[12px] w-[60px] mb-[10px]">Gernade</button>
                <button className="px-1 py-1 border-[1px] border-[#4a88bb] bg-[#1e2728] text-[#4a88bb] text-[10px] w-[60px] mb-[10px]">FlashBang</button>
                <button className="px-1 py-1 border-[1px] border-[#4a88bb] bg-[#1e2728] text-[#4a88bb] text-[12px] w-[60px] mb-[10px]">Smoke</button>
                </div>
              </div>
              <div className="w-[20%] ">
              <div className="flex items-center  justify-center justify-between mb-[10px] h-[30px]">
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretLeftOutlined />
                </div>
                <div className="text-[#fff] nunito">Single Battle</div>
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretRightOutlined />
                </div>
              </div>
              <div className="flex items-center  justify-center justify-between mb-[10px] h-[30px]">
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretLeftOutlined />
                </div>
                <div className="text-[#fff] nunito">30 Kills</div>
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretRightOutlined />
                </div>
              </div>
              <div className="flex items-center  justify-center justify-between mb-[10px] h-[30px]">
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretLeftOutlined />
                </div>
                <div className="text-[#fff] nunito">Type A</div>
                <div className="text-[#354f6f] text-[30px] cursor-pointer">
                  <CaretRightOutlined />
                </div>
              </div>
              <div className="flex gap-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc] text-[11px]">PV on </button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc] text-[11px]">PV off</button>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc] text-[12px]">FJ on</button>
                    <button className="bg-[#181818] text-[#707070] border-[1px] border-[#707070] px-4 hover:text-[#aebd56] hover:border-y-[#4d92cc] text-[12px]">FJ off</button>
                  </div>
              </div>
            </div>


            <div className="flex w-[100%] gap-[20px] mt-[20px]">
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
              <div
                className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center h-fit"
                onClick={showModal}
              >
                <img src={back_reurn} alt="" sizes="" srcset="" />
              </div>
            </div>
          </div>
        </div>

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
      <div className="lobby-main pb-[20px]">
        <div className="flex gap-[10px] w-[90%] m-auto ">
          <div className="w-[40%]">
            <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
            <div className="border-[1px] border-[#696b6d] px-6 py-4 flex gap-[10px] mb-[2px] justify-between items-center">
              <div className="text-[#fff] w-[80%]">
                <div className="border-[1px] border-[#696b6d] flex w-[100%] mb-[10px] justify-evenly py-1">
                  <span className="text-[#67a0c1] font-[600] text-[16px]">
                    SP:
                  </span>
                  <p>0</p>
                </div>
                <div className="border-[1px] border-[#696b6d] flex w-[100%]  mb-[10px] justify-evenly py-1">
                  <span className="text-[#67a0c1] font-[600] text-[16px]">
                    CASH:
                  </span>
                  <p>0</p>
                </div>
                <div className="border-[1px] border-[#696b6d] flex w-[100%]  mb-[10px] justify-evenly py-1">
                  <span className="text-[#67a0c1] font-[600] text-[16px]">
                    CLAN COIN:
                  </span>
                  <p>0</p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                  <img src={purxhase} alt="" /> Buy
                </div>
                <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                  <img src={Back} alt="" /> Back
                </div>
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] p-2">
              <div className="text-[#fff] nunito font-[600]">
                Number of equipment installed: 9/20{" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />{" "}
                <span className="font-[300]">Hide</span>
              </div>
              <div className="flex items-end w-[100%] justify-between">
                <img src={Character} alt="w-[60%]" />
                <div className="border-[1px] border-[#696b6d] p-2 text-[#fff] w-[40%] bg-[#000]">
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                  <div className="flex items-center justify-between nunito ">
                    <div className="">Speed</div>
                    <div className="text-[#39903a]">2.0%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
            <div className="border-[1px] border-[#696b6d] mb-[2px]">
              <button className="bg-[#272519] hover:text-[#e6fd6e] text-[#fff] px-8 py-1 border-[1px] border-[#374447] text-[16px] font-[600] hover:border-y-[#e6fd6e]">
                성격
              </button>
              <button className="bg-[#272519] hover:text-[#e6fd6e] text-[#fff] px-8 py-1 border-[1px] border-[#374447] text-[16px] font-[600] hover:border-y-[#e6fd6e]">
                무기
              </button>
            </div>
            <div className="w-[100%] border-[1px] border-[#696b6d] mb-[2px] p-2 flex gap-[20px] bg-[#000]">
              <img
                src={avatar}
                alt=""
                srcset=""
                className="w-[15%] border-[1px] border-[#0000] hover:border-[#969b4f] cursor-pointer"
              />
              <img
                src={avatar}
                alt=""
                srcset=""
                className="w-[15%] border-[1px] border-[#0000] hover:border-[#969b4f] cursor-pointer"
              />
            </div>

            <div className="border-[1px] border-[#696b6d] mb-[2px]">
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Character
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Head
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Face
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Chest
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Arms
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Legs
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Feet
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Accessory
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Outer
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-3 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Puppets
              </button>
            </div>
            <div className="border-[1px] border-[#696b6d] mb-[2px] flex">
              <label htmlFor="character" className="radio-label">
                <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                  <input
                    type="radio"
                    name="radioGroup"
                    className="cursor-pointer"
                    id="character"
                  />
                  Character
                </button>
              </label>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="all"
                />
                All
              </button>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="packages"
                />
                Packages
              </button>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="cash"
                />
                CASH
              </button>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="sp"
                />
                SP
              </button>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="other"
                />
                Other
              </button>
              <button className="hover:text-[#dffd73] text-[#7c9844] px-3 py-2 text-[12px] font-[600] flex items-center gap-[5px]">
                <input
                  type="radio"
                  name="radioGroup"
                  className="cursor-pointer"
                  id="search"
                />
                Search
              </button>
            </div>

            <div
              className="lobby-cards border-[1px] border-[#696b6d] mb-[2px] flex w-[100%] flex-wrap gap-[2px] overflow-y-auto"
              style={{ maxHeight: "413px" }}
            >
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[35.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
              <LobbyCard
                heading="WINTER EARPLUG"
                image={lobbyitems}
                className="w-[33.33%]"
              />
            </div>

            <div className="flex w-[100%] gap-[50px] mt-[20px]">
              <div className="border-[1px] border-[#696b6d] w-[80%] flex justify-between items-center bg-[#000] p-4">
                <div className="text-[#fff] ">
                  <div className="flex uppercase gap-[40px]">
                    <p className="text-[#6ba2ba] font-[600]">Sp:</p>{" "}
                    <span>2693</span>
                  </div>
                  <div className="flex uppercase gap-[40px]">
                    <p className="text-[#6ba2ba] font-[600]">Sp:</p>{" "}
                    <span>2693</span>
                  </div>
                </div>
                <div className="text-[#fff] flex uppercase gap-[40px]">
                  <div className="flex uppercase gap-[40px]">
                    <p className="text-[#6ba2ba] font-[600]">Sp:</p>{" "}
                    <span>2693</span>
                  </div>
                </div>
                <div className="text-[#fff] uppercase">
                  <button className="uppercase bg-[#374244] p-2 cursor-pointer view-button">
                    Recharge
                  </button>
                </div>
              </div>
              <div
                className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center "
                onClick={showModal}
              >
                <img src={back_reurn} alt="" sizes="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
