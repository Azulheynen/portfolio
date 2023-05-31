import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { InboxIcon } from "@heroicons/react/24/outline";



 
const menuItems = [
  {
    title: "Instagram",
    description:
      "@azulheynen",
  },
  {
    title: "Mail",
    description:
      "azulheynen@gmail.com",
  },
  {
    title: "Telegram",
    description:
      "channel: @azulheynenCH",
  },
];
 
export default function Contact() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };
 
  return (
    <Menu open={openMenu} handler={setOpenMenu} >
      <MenuHandler>
      <Button  {...triggers}
          variant="text" 
          className=" flex items-center gap-3 text-base fonst-normal capitalize tracking-normal px-5 py-2.5 transition-all ease-in duration-75  group-hover:bg-opacity-0 shadow-lg shadow-purple-500/50 ">
            <HeartIcon strokeWidth={3.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`} />
            Contact Me!
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid  z-50"
      >
        <Card
          color="white"
          shadow={false}
          variant="gradient"
          className="relative col-span-3 grid h-full w-full place-items-center rounded-md bg-wheat "
        >
          <SparklesIcon strokeWidth={1} className="h-20 w-20" />
          <InboxIcon strokeWidth={2} className="h-28 w-28" />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}