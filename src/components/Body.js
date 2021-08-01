import React from "react";
import { DesktopComputerIcon , DeviceMobileIcon, CameraIcon, HomeIcon , GiftIcon , MusicNoteIcon , BookOpenIcon , LightBulbIcon } from '@heroicons/react/outline'
import Category from "./Category";
import Product from "./Product";

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
            <div className='mb-10 flex space-x-12' >
              <Product 
              favorite 
              url='https://www.powerplanetonline.com/cdnassets/nintendo_switch_gris_2019_001_v2_l.jpg'
              name='Nintendo Switch 2019'
              company ='Nintendo'
              ratings = {5}
              reviews = '21002'
              price = '290'
              
              />
              <Product 
               url='https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7sm3_b_alpha_a7s_iii_mirrorless_1577838.jpg'
              name='Sony As7 III'
              company ='Sony'
              ratings = {5}
              reviews = '2865'
              price = '3249'
              
              />
              <Product 
              favorite
               url='https://unicell.pk/wp-content/uploads/2020/11/apple-iphone-12-pro-max.jpg'
              name='Apple Iphone 12 Pro Max'
              company ='Apple'
              ratings = {5}
              reviews = '23865'
              price = '1200'
              
              />
              <Product 
              favorite
               url='https://i5.walmartimages.com/dfw/4ff9c6c9-56cb/k2-_00c20a1f-e6e9-41e2-852e-51f6ce1665d4.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff'
              name='Playstation 5'
              company ='Sony'
              ratings = {5}
              reviews = '50000'
              price = '600'
              
              />
            </div>
        </div>
{/*  */}


    </div>
  );
}

export default Body;
