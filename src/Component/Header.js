import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(prop){
    const [inputSearch, setInputSearch] = useState('');
    prop.addnewitem(inputSearch)

    return (
        <div className="StickyHeader">
            <div className="Header">
                <NotificationsIcon className='Topright' style={{ color: 'white' }} />
                <img className='Topright' src="https://s3-alpha-sig.figma.com/img/4269/07cc/458052afe359577a66f0cdac017ced71?Expires=1669593600&Signature=Nr5y04~-xg709nYQwrH7ET5pA9zACu59mPYdFNhxbK80YuybN2InF8gaFysWrKpBCKfI0lQTBTolQLgXXo~WA2zSlje-prhZ6X6hunlMyzhyz7U-aKXoFuOir4lydpjhAG8K6QIPR8pHOX8COMAg6bz3DE3cuAuj4O8TWCVVGe4TFNcm8SrZb8S0pjG0LjrHRa9a8JhwJSYA2J6HT8FSN-IaZPVdfYfH0zGyP4bLXPi2zG4mSAJK0LQLCKvR6SIDTwDahrLUj2NLGPPAvmm7AGLEniqRpIXSWFuoa7eMPyTWyJrOGnZoj0wu9QCFzNCuDYmUMOCNtdn1GTuaqPnrxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></img>
                <p className='Topright'>Akkarapol</p>
                <ArrowDropDownIcon className='Topright' style={{ color: 'white' }} />
            </div>
            <div className='SubHeader'>
                <div className='SubHeaderLeft'>
                    <h1>Place List</h1>
                </div>
                <div className='SubHeaderRight'>
                    <div className='Select'>
                        <select className='Topright'>
                            <option>Restaurant</option>
                            <option>Bakery</option>
                            <option>Cafe</option>
                        </select>
                    </div>
                    <p className='Topright'>|</p>
                    <div className='SubHeaderRight1'>
                        <input onChange={element=>setInputSearch(element.target.value)} value={inputSearch} type="text" placeholder='Search name...'></input>
                        <Link to={`/search/${inputSearch}`}>
                            <SearchIcon style={{ color: '#9E9E9E' }}/>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;