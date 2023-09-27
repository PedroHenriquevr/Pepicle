import Input from "./Input";
import { PiScreencastLight } from 'react-icons/pi'
import avatar from 'assets/avatar.jpg'

export default function Header() {
    return(
        <main className="flex items-center justify-between h-[100px] px-4">
            <h1 className=" text-white text-3xl">Pepicle</h1>
            <Input/>
            <div className="flex content-between items-center">
            <button className=" outline-none box-border cursor-pointer text-orange-600 border-solid border-2 border-orange-600 py-3 px-8 rounded-3xl mr-8">My Channel</button>
            <PiScreencastLight color="white" style={{paddingRight: 10}} size={26}/>
            <img src={avatar} alt="" className=" rounded-full h-20 w-20 object-cover border-2 border-orange-500 border-solid " />
            </div>
        </main>
    )
}