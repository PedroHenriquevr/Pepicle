import {AiOutlineSearch} from 'react-icons/ai'
import style from './Input.module.scss'
export default function Input() {
    return(
        <div className={style.containerInput}>
            <AiOutlineSearch/>
            <input type="text" placeholder='teste' className={style.input} />
        </div>
    )
}