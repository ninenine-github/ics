import './Content.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Placecard from './Placecard';
import Data from './example_data.json';

function Content(){
    return (
        <div className="Content">
            <div className='PlaceCard'>
                {Data.map((element)=>{
                    return <Placecard placePic={element.profile_image_url} placeName={element.name} key={element.id} 
                    openTime={element.operation_time} rating={element.rating} productPic={element.images}
                    />
                })}
                {/* <Placecard placePic="https://images.unsplash.com/photo-1587174147003-eb7dc051122b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxzaG9wJTIwcmVzdGF1cmFudCUyMGJyZWFkfGVufDB8fHx8MTY0NjM2Nzg3Mg&ixlib=rb-1.2.1&q=80&w=1080" 
                 placeName="Bistro Bazaar" openTime="9:00" rating="4.1" 
                 productPic="https://images.unsplash.com/photo-1588280991458-d759882787cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080"
                /> */}
            </div>
            <div className='footer'>
                <div className='Navigate'><NavigateBeforeIcon /></div>
                <p>1</p>
                <div className='Navigate'><NavigateNextIcon /></div>
            </div>
        </div>
    );
}

export default Content;