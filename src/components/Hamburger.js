import React,{useState} from 'react'
import MobItems from './MobItems';

function Hamburger() {
    
    const [showMenu, setshowMenu] = useState(false);

    if(showMenu){
        return <MobItems />
    }else{
        
    }

    return (
        <div className="d-sm-none d-block">
            <i className="fa fa-bars c-white" onClick={() => setshowMenu(!showMenu)}></i>
        </div>
    )
}

export default Hamburger

