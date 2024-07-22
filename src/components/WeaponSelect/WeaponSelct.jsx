import React from "react";
import Save from "../../assets/svg/Save.svg";
import Back from "../../assets/svg/back.svg";
import gunImage from "../../assets/image/Gun_Image.png";
import avatar from "../../assets/image/avatar_image.jpeg";
import back_reurn from "../../assets/svg/back-return.svg";
import lobbyitems from "../../assets/image/LOBBYITEMS.jpeg";
import gunsitems from "../../assets/image/GunSelected.PNG";
import Gun from "../../assets/svg/Gun.svg";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import WeaponCards from "./WeaponCards";

const WeaponSelct = () => {
  return (
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
              <img src={Gun} alt="" /> 재구매
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] ">
            <div className="flex items-center bg-[#152424] justify-center justify-between">
              <div className="text-[#354f6f] text-[30px] cursor-pointer">
                <CaretLeftOutlined />
              </div>
              <div className="text-[#fff] nunito">Type A</div>
              <div className="text-[#354f6f] text-[30px] cursor-pointer">
                <CaretRightOutlined />
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] ">
            <div className="flex flex-col justify-center w-[100%]">
              <img src={gunImage} alt="" srcset="" />
              <div className="flex items-center gap-[4px] justify-center mb-[20px]">
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] ">
            <div className="flex flex-col justify-center w-[100%]">
              <img src={gunImage} alt="" srcset="" />
              <div className="flex items-center gap-[4px] justify-center mb-[20px]">
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
                <div className="bg-[#f1a27b] p-2 w-[10px]"></div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#696b6d] ">
            <div className="flex flex-col justify-center w-[100%]">
              <img src={gunImage} alt="" srcset="" />
            </div>
          </div>
          <div className="flex">
            <div className="border-[1px] border-[#696b6d] py-[20px] ">
              <div className="flex flex-col justify-center w-[100%]">
                <img src={gunImage} alt="" srcset="" />
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] py-[20px]">
              <div className="flex flex-col justify-center w-[100%]">
                <img src={gunImage} alt="" srcset="" />
              </div>
            </div>
            <div className="border-[1px] border-[#696b6d] py-[20px]">
              <div className="flex flex-col justify-center w-[100%]">
                <img src={gunImage} alt="" srcset="" />
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
            style={{ maxHeight: "700px" }}
          >
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[35.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[35.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[35.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[35.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[35.33%]"
            />

            <WeaponCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={lobbyitems}
              className="w-[33.33%]"
            />
            <WeaponCards
              heading="WINTER EARPLUG"
              image={gunsitems}
              className="w-[33.33%]"
            />
            <WeaponCards
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
            <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[20%] justify-center ">
              <img src={back_reurn} alt="" sizes="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponSelct;
