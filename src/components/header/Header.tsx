import Input from "../input/Input";
import { PiScreencastLight } from 'react-icons/pi'
import avatar from 'assets/avatar.jpg'
import style from './Header.module.scss'

export default function Header() {
    return(
        <main className={style.header}>
            <h1 className={style.title}>Pepicle</h1>
            <Input/>
            <div className={style.perfil}>
            <button className={style.button}>My Channel</button>
            <PiScreencastLight color="white" style={{paddingRight: 10}} size={26}/>
            <img src={avatar} alt="" className={style.avatar} />
            </div>
        </main>
    )
}