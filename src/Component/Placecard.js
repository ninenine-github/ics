import './Placecard.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Placecard({placePic, placeName, openTime, rating, productPic}){
    return(
        <div className="Card">
            <div className='PlaceDetail'>
                <div className='PlacePic'>
                    <img alt='' src={placePic}></img>
                </div>
                <div className='PlaceInfo'>
                    <div className='PlaceName'>
                        <h3>{placeName}</h3>
                    </div>
                    <div className='Cardmid'>
                        <div className='OpenTime'>
                            <CalendarMonthIcon />
                            <p>{openTime[0].time_open}</p>
                            <p>-</p>
                            <p>{openTime[0].time_close}</p>
                        </div>
                        <div className='Rating'>
                            <FiberManualRecordIcon />
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProductPic'>
                <img className='img1' alt='' src={productPic[0]}></img>
                <img className='img2' alt='' src={productPic[1]}></img>
                <img className='img3' alt='' src={productPic[2]}></img>
            </div>
        </div>
    );
}

export default Placecard