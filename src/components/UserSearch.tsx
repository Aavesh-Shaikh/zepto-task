import React, { useState } from "react";
import "./UserSearch.css";
interface Chip {
  id: number;
  label: string;
}

const UserSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [items, setItems] = useState<string[]>([
    "Aavesh",
    "Aadil",
    "Naved",
    "Rahil",
    "Arshad",
    "Maaz",
    "Tausif",
    "Shakir",
    "Aakib",
    "Tahir"
  ]);
  const [chips, setChips] = useState<Chip[]>([]);

  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter items
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()) 
    );
    setItems(filteredItems);
  };

  const handleItemClick = (item: string) => {
    // Add selected item as a chip and remove it from the list
    const newChips = [...chips, { id: chips.length + 1, label: item }];
    const newItems = items.filter((existingItem) => existingItem !== item);

    setChips(newChips);
    setItems(newItems);
    setInputValue("");
  };

  const handleChipRemove = (chipId: number) => {
    // Remove chip and add the item back to the list
    const updatedChips = chips.filter((chip) => chip.id !== chipId);
    const updatedItems = [
      ...items,
      chips.find((chip) => chip.id === chipId)?.label || "",
    ];

    setChips(updatedChips);
    setItems(updatedItems);
  };

  return (
    <div>
        <div ><h1 style={{textAlign:"center" ,color:"#0275d8" , fontSize:"3rem"}}>Choose User</h1></div>
      <div className="search_bar_main_div">
        <div className="search_bar_wrapper">
          <div className="chips_wrapper">
            {chips.map((chip) => (
              <div key={chip.id} className="chip">
                {chip.label}
                <span onClick={() => handleChipRemove(chip.id)}>x</span>
              </div>
            ))}
          </div>
          <input
            autoFocus={false}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search User"
            onClick={() => {
              setIsShowList(true);
            }}
          />
        </div>
      </div>
      {isShowList && (
        <div className="user_list_wrapper">
          <ul>
            {items.map((item) => (
              <li key={item} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
