import React from 'react'

function Category({icon}) {
    return (
        <div style={
            {
                boxShadow:'1px 1px 3px 3px'
            }
        } className='h-12 p-2 rounded-md w-12 mr-20 text-gray-400 hover:opacity-80 cursor-pointer'>
            <div>
            {icon}
            </div>
        </div>
    )
}

export default Category
