import React from "react";
import "./Lobby.css";
import Save from "../../assets/svg/Save.svg";
import Back from "../../assets/svg/back.svg";
import purxhase from "../../assets/svg/purchase.svg";
import Character from "../../assets/image/chracter-lobby.png";
import avatar from "../../assets/image/avatar_image.jpeg";
import LobbyCard from "./LobbyCard";
import back_reurn from "../../assets/svg/back-return.svg";
import lobbyitems from "../../assets/image/LOBBYITEMS.jpeg";

const Lobby = () => {
  return (
    <div className="sf-container">
      <div className="lobby-main pb-[20px]">
        <div className="flex gap-[10px] w-[90%] m-auto ">
          <div className="w-[40%]">
            <div className="border-[1px] border-[#696b6d] p-4 mb-[2px]"></div>
            <div className="border-[1px] border-[#696b6d] px-6 py-4 flex gap-[10px] mb-[2px]">
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                <img src={Save} alt="" /> Save
              </div>
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                <img src={Back} alt="" /> Back
              </div>
              <div className="flex items-center bg-[#1d2728] p-2 cursor-pointer gap-[10px] text-[#fff] nunito border-[1px] border-[#383a3c] hover:border-[#36d6f3] hover:text-[#36d6f3]">
                <img src={purxhase} alt="" /> Rebuy
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
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Character
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Weapons
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Game Itmes
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Spray Items
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Transformers
              </button>
              <button className="bg-[#22342f] hover:text-[#dffd73] text-[#fff] px-6 py-2 border-[1px] border-[#374447] text-[12px] font-[600]">
                Gifts
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
                All
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
            <div
              className="lobby-cards border-[1px] border-[#696b6d] mb-[2px] flex w-[100%] flex-wrap gap-[2px] overflow-y-auto"
              style={{ maxHeight: "370px" }}
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
                <div className="flex uppercase gap-[40px]"><p className="text-[#6ba2ba] font-[600]">Sp:</p> <span>2693</span></div>
                <div className="flex uppercase gap-[40px]"><p className="text-[#6ba2ba] font-[600]">Sp:</p> <span>2693</span></div>

                </div>
                <div className="text-[#fff] flex uppercase gap-[40px]">
                <div className="flex uppercase gap-[40px]"><p className="text-[#6ba2ba] font-[600]">Sp:</p> <span>2693</span></div>
                </div>
                <div className="text-[#fff] uppercase">
                  <button className="uppercase bg-[#374244] p-2 cursor-pointer view-button">Recharge</button>
                </div>
              </div>
              <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center ">
                <img src={back_reurn} alt="" sizes="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
