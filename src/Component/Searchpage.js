import './Searchpage.css';
import Placecard from './Placecard';
import Data from './example_data.json';

function Searchpage(searchValue){
    const value = searchValue.names;
    const result = Data.filter(e=>{return e.name.includes(value)});   

    return (
        <div className="Searchpage">
            {result.map((element)=>{
                return <Placecard placePic={element.profile_image_url} placeName={element.name} key={element.id} 
                openTime={element.operation_time} rating={element.rating} productPic={element.images}
                />
            })}
        </div>
    );
}

export default Searchpage;