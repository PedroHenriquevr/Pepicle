import { ReactNode } from 'react'
import { IconType } from 'react-icons'


export type ButtonProps = {
    children: ReactNode
    Icon: IconType
}

export default function ButtonSide({children, Icon}: ButtonProps) {
    return(
    <>
    <div className='bg-none flex  items-center gap-2 w-[100px]'>
        <Icon color='white' size={20}/>
        <button className='text-white text-xl px-4 py-2 custom-button hover:text-orange-600 '>{children}</button>
    </div>
    
    </>
    )
}