import { DownOutlined, UpOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const Dropdown = ({ options }) => {
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
    <div className="dropdown text-[#818181] border-[1px] border-[#818181] px-2 cursor-pointer rounded-sm">
      <div className="dropdown-toggle flex items-center justify-between" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select o'}
        {isOpen ? <UpOutlined /> : <DownOutlined />}
      </div>
      {isOpen && (
        <div className="dropdown-menu absolute bg-[#28281e] text-[#fff] w-[160px] px-2 left-[45%] border-[1px] border-[#818181] py-2 leading-[30px]">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown