import React from 'react'

function Card({username,btnTxt="visit me"}) {
    
    
    return (
    <>
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">  
      <div>    
        <img className="size-48 rounded-md" alt="" src="https://plus.unsplash.com/premium_photo-1672329278706-35c6005ffb0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  
      </div>  
      <div className="flex flex-col md:items-start">    
        <span className="text-2xl font-medium">{username}</span>    
        <span className="font-medium text-sky-500">{btnTxt}</span>    
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">      
              <span>No. 4</span>      
              <span>·</span>      
              <span>2025</span>    
        </span>  
      </div>
    </div>
    </>
    )
}

export default Card
