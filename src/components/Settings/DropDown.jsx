import {
  CaretRightOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

const DropdownSettings = ({ options, lable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown ">
      <div
        className="flex gap-[10px] items-center text-[#fff] border-[1px] bg-[#000] w-[120px] justify-center text-[12px] cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : lable}
        <div className="text-[#0cd0dc] text-[20px] cursor-pointer 	">
          <CaretRightOutlined className={isOpen ? "rotate-360" : "rotate-90"} />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-menu absolute bg-[#28281e] text-[#fff] w-[150px] px-2  border-[1px] border-[#818181] py-2 leading-[30px] z-[999]">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option "
              onClick={() => handleOptionClick(option)}
            >
              <div className="cursor-pointer">{option.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownSettings;
