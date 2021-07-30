import React from "react";

function SideBarItems({ text, icon, border }) {
  return (
    <div>
      {border ? (
        <div className="h-10 border-separate border-l-2 border-yellow-500 ">
          <div className="cursor-pointer flex items-center justify-start ml-3 h-10 text-yellow-500  p-3 m-2 bg-gray-700 rounded-md">
            <div className="h-5 text-yellow-500 w-5 mr-2">{"dd" && icon}</div>

            {text}
          </div>
        </div>
      ) : (
        <div className="cursor-pointer flex items-center justify-start ml-3 h-10 text-white   p-2 m-1 ">
          <div className="h-5 text-white w-5 mr-2">{"dd" && icon}</div>

          {text}
        </div>
      )}
    </div>
  );
}

export default SideBarItems;
