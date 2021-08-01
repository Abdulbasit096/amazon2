import React from "react";
import SideBarItems from "./SideBarItems";
import {
  ViewGridIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

function SideBar() {
  return (
    <div className="h-full bg-primary border-t-2 border-gray-800">
      <SideBarItems text="Categories" icon={<ViewGridIcon />} border />
      <SideBarItems text="Echo and Alexa" />
      <SideBarItems text="Kindle" />
      <SideBarItems text="Books" />
      <SideBarItems text="Home and Garden" />
      <SideBarItems text="Fashion" />
      <SideBarItems text="Health and Beauty" />
      <SideBarItems text="Automative" />
      <SideBarItems text="Sports and Tourist" />
      <SideBarItems text="Games" />
      <SideBarItems text="Music" />

      <SideBarItems text="Sell on Amazon" icon="%" />
      <SideBarItems text="Help" icon={<QuestionMarkCircleIcon />} />
      <SideBarItems text="Log out" icon={<LogoutIcon />} />
    </div>
  );
}

export default SideBar;
