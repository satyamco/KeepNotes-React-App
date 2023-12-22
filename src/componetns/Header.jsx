import React from 'react'
import { MdEmojiObjects } from "react-icons/md";
import { useTheme } from "../context/Theme.js"



const Header = () => {
  const {themeMode, lightTheme, darkTheme} = useTheme()

 const onChangeBtn = (e) =>{
  const darkModeStatus = e.currentTarget.checked
  if(darkModeStatus){
    darkTheme()
  }else{
    lightTheme()
  }
 }
  
  
  return (
    <nav className='sticky top-0 flex items-center justify-between bg-sky-500 py-3 px-8 shadow-sm'>
        <a href="/"><h2 className='font-bold text-white text-2xl flex items-center'><MdEmojiObjects/>KeepNotes</h2></a>
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white max-sm:hidden"> DarkMode</span>
        </label>
    </nav>
  )
}

export default Header