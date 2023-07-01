/*
 * @Date: 2023-06-30 09:37:33
 * @Author: Bruce Hsu
 * @Description: 
 */
import React from "react";

const HomePage = () => {

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">Generate Photorealistic AI Avatars</h1>
        <button className="rounded-full bg-gradient-to-tr from-sky-400 via-lime-300 to-yellow-400 p-1">
          <div className="bg-white rounded-full p-4">
            即刻生成头像
          </div>
        </button>
      </div>
    </div>
  )
}

export default HomePage;