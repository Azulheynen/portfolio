import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
  export default function Social() {
    return (
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="md" className="rounded-full">
              <PlusIcon className="h-8 w-8 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <HomeIcon className="h-8 w-8" />
            </SpeedDialAction>
            <SpeedDialAction>
              <CogIcon className="h-8 w-8" />
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-8 w-8" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
        </div>
      </div>
    );
  }