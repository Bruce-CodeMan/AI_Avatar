/*
 * @Date: 2023-06-30 09:37:33
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";


// Custom Imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";


const HomePage = () => {

  const [ email, setEmail ] = useState('');
  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <div className="fixed bg-gradient-to-br from-pink-100 via-white to-sky-200 inset-0 -z-10"></div>
      <div className="container mx-auto">
        <header className="flex w-full justify-between py-4 px-10 bg-transparen mx-auto max-w-screen-xl">
          <div>
            {/* logo */}
            AI AVATAR
          </div>
          <div>
            {/* this is for menu */}
            <Button>Logout</Button>
          </div>
        </header>
        <div className="flex flex-col space-y-6 m-10 justify-center items-center">
          <div className="bg-gradient-to-br from-black to-slate-600 text-transparent bg-clip-text text-6xl font-semibold text-center leading-snug">
            <p>Generate you own</p>{" "}
            <p>
              Generate Photorealistic <span className="text-[#3290EE]">AI</span> Avatars
            </p>
            
          </div>
          <div className="my-12 w-full max-w-2xl">
            {!isLogin && (
              <Dialog>
              <DialogTrigger asChild>
              <button className="w-full rounded-full bg-gradient-to-tr from-sky-400 duration-200 via-lime-300 to-yellow-400 p-1 transition transform active:scale-95"
                onClick={()=> { console.log("click!") }}
              >
                <div className="bg-white rounded-full py-2 tracking-widest">
                  即刻生成头像
                </div>
              </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Complete authentication</DialogTitle>
                </DialogHeader>
                <form 
                  onSubmit={(e)=> {
                    setIsLogin(true);
                    e.preventDefault();
                    console.log(email, "signing")
                  }} 
                  className="flex flex-col space-y-4"
                >
                  <Input 
                    type={"email"} 
                    required 
                    placeholder="BruceHsu@qq.com" 
                    onChange={e => setEmail(e.target.value)} 
                    value={email}
                  />
                  <Button type={"submit"} className="w-full">
                    Verify your email
                  </Button>
                  <p className="w-full text-center font-bold">OR</p>
                  <Button>
                    <FaGoogle className="mr-2"/>
                    Sign In With Google
                  </Button>
                </form>
                <DialogFooter>
                  this is dialog
                </DialogFooter>
              </DialogContent>
            </Dialog>
            )}
            <div className="relative flex w-full justify-center">
                {isLogin && (
                  <Button className="w-full group">
                    Checkout
                    <ChevronRight className="ml-2 transition group-hover:translate-x-1"/>
                  </Button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;