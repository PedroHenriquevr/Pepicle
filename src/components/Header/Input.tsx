import {AiOutlineSearch} from 'react-icons/ai'


export default function Input() {
    return(
        <div className="flex items-center content-around bg-zinc-800 w-1/3 px-4 rounded-xl h-12 gap-1 text-zinc-200">
            <AiOutlineSearch/>
            <input type="text" placeholder='teste' className="border-none outline-none bg-zinc-800 w-full text-zinc-200 text-base placeholder:text-zinc-400" />
        </div>
    )
}