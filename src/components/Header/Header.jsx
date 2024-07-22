import React, { useState } from "react";
import logo from "../../assets/image/special-logo.png";
import bagPack from "../../assets/svg/bag-Pack.svg";
import Sheriff from "../../assets/svg/Sheriff.svg";
import settings from "../../assets/svg/settings.svg";
import help from "../../assets/svg/help.svg";
import agreements from "../../assets/svg/agreement.svg";
import wings from "../../assets/svg/wings.svg";
import box from "../../assets/svg/box.svg";
import person from "../../assets/svg/person.svg";
import gernade from "../../assets/svg/gernade.svg";
import achievement from "../../assets/svg/medal.svg";
import { Link, useLocation } from "react-router-dom";
import { Modal } from "antd";
import Settings from "../Settings/Settings";

const Header = () => {
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
  const location = useLocation();

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={700}
        footer={null}
        className="mt-[-85px]"
      >
        <p className="border-[1px] border-[#696b6d] bg-[#1b2f2f] text-[#fff] nunito p-2 text-[15px]">
          Preferences
        </p>
        <div className="">
          <Settings />
        </div>
        <div className="bg-[#1d1d1d] w-[100%] text-[#fff] flex  py-2 px-2 items-center justify-center gap-[20px]">
          <div className="">
            <button
              className="bg-[#1e2728] border-[1px] border-[#696b6d] px-4 py-2 text-[#fff]"
              onClick={handleOk}
            >
              Default
            </button>
          </div>
          <div className="">
            <button
              className="bg-[#1e2728] border-[1px] border-[#696b6d] px-4 py-2 text-[#fff]"
              onClick={handleOk}
            >
              Confirm
            </button>
          </div>
          <div className="">
            <button
              className="bg-[#1e2728] border-[1px] border-[#696b6d] px-4 py-2 text-[#fff]"
              onClick={handleOk}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
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
      <div className="flex gap-[10px] w-[100%] items-center p-2 bg-[#000] pb-[20px]">
        <div className="w-[20%]">
          <Link to="/">
            <img src={logo} alt="" srcset="" />
          </Link>
        </div>
        <div className="w-[70%] border-[1px] border-[#696b6d] p-[5px] flex gap-[10px] rounded-md">
          <div
            className={
              location.pathname === "/gunselection"
                ? "border-[1px] lobby-head border-[#36d6f3] w-[10%]  p-[8px] cursor-pointer flex justify-center rounded-md"
                : "w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md lobby-head "
            }
          >
            <Link to="/gunselection">
              <img
                src={Sheriff}
                alt=""
                srcset=""
                className="hover:fill-[#000]"
              />
            </Link>
          </div>
          <div className="w-[10%] header-lobby flex justify-center rounded-md">
            <img src={person} alt="" srcset="" />
          </div>
          <div
            className={
              location.pathname === "/weapon-shop"
                ? "border-[1px] header-lobby-active border-[#36d6f3] w-[10%]  p-[8px] cursor-pointer flex justify-center rounded-md"
                : "w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md header-lobby"
            }
          >
            <Link to="/weapon-shop">
              <img
                src={gernade}
                alt=""
                srcset=""
                className="hover:fill-[#000]"
              />
            </Link>
          </div>
          <div
            className={
              location.pathname === "/weapon-select"
                ? "border-[1px] header-lobby-active border-[#36d6f3] w-[10%]  p-[8px] cursor-pointer flex justify-center rounded-md"
                : "w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md header-lobby"
            }
          >
            <Link to="/weapon-select">
              <img src={bagPack} alt="" srcset="" />
            </Link>
          </div>
          <div
            className={
              location.pathname === "/character-select"
                ? "border-[1px] header-lobby-active border-[#36d6f3] w-[10%]  p-[8px] cursor-pointer flex justify-center rounded-md"
                : "w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md header-lobby"
            }
          >
            <Link to="/character-select">
              <img src={achievement} alt="" srcset="" />
            </Link>
          </div>
          <div className="w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md lobby-head">
            <img src={box} alt="" srcset="" />
          </div>
          <div className="w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md lobby-head">
            <img src={wings} alt="" srcset="" style={{ fill: "#fff" }} />
          </div>
          <div className="w-[10%] bg-[#252834] p-[8px] cursor-pointer border-[1px] border-[#696b6d] flex justify-center rounded-md lobby-head">
            <img src={agreements} alt="" srcset="" />
          </div>
        </div>
        <div className="w-[10%] flex">
          <div
            className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[50%] justify-center"
            onClick={showModal}
          >
            <img src={settings} alt="" sizes="" srcset="" />
          </div>
          <div className="flex text-[#ffff] items-center border-[1px] border-[#4b6984] p-2 cursor-pointer text-[15px] m-2 button-reset w-[50%] justify-center">
            <img src={help} alt="" sizes="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
