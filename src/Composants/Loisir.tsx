import {IoMdFootball} from 'react-icons/io'
import {FaChess , FaCarSide} from 'react-icons/fa'

export const Loisir=() =>{
    return(
        <div>
            <hr/>
            <h2><em>Loisirs</em></h2>
            <div><IoMdFootball /> Football</div>
            <div><FaCarSide/> Voyages</div>
            <div><FaChess/> Jeu d'échecs </div>
        </div>
    )
}