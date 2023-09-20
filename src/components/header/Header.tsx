import Input from "../input/Input";
import { PiScreencastLight } from 'react-icons/pi'
import avatar from 'assets/avatar.jpg'
import style from './Header.module.scss'

export default function Header() {
    return(
        <main className={style.header}>
            <h1>Pepicle</h1>
            <Input/>
            <button>My Channel</button>
            <div className={style.perfil}>
            <PiScreencastLight/>
            <img src={avatar} alt="" className={style.avatar} />
            </div>
        </main>
    )
}