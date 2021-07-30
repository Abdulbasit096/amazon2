import React from "react";
import { DesktopComputerIcon , DeviceMobileIcon, CameraIcon, HomeIcon , GiftIcon , MusicNoteIcon , BookOpenIcon , LightBulbIcon } from '@heroicons/react/outline'
import Category from "./Category";

function Body() {
  return (
    <div>
      <div className='m-8 bg-gradient-to-r from-yellow-500  to-yellow-700 h-42 rounded-2xl p-6'>
        <h2 className='text-4xl mb-2 text-white font-bold' >Free Delivery!</h2>
        <p className='text-white mb-1'>
          Dont miss it out! Only today, get free next day <br/> delivery on all your
          orders
        </p>
        <button className='bg-white rounded-2xl mr-2 text-yellow-600 w-46 font-bold shadow-lg border-2 border-yellow-100 p-2 mt-2'>Browse products</button>
      </div>
{/* Cateories */}
        <div className='pl-16'>
             <h1 className='pb-5 text-4xl font-bold'>Popular categories</h1>
            <div className='flex items-cemter justify-start '>
            <Category icon={<DesktopComputerIcon/> }/>
            <Category icon={<DeviceMobileIcon/> }/>
            <Category icon={<HomeIcon/> }/>
            <Category icon={<CameraIcon/> }/>
            <Category icon={<GiftIcon/> }/>
            <Category icon={<BookOpenIcon/> }/>
            <Category icon={<MusicNoteIcon/> }/>
            <Category icon={<LightBulbIcon/> }/>
            </div>
        </div>

        {/* Products */}
        <div className='pl-16 pt-12'>
            <h1 className='pb-5 text-4xl font-bold'>
                Hot Deals
            </h1>
        </div>



    </div>
  );
}

export default Body;
