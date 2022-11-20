import './Placedetail.css';

function Placedetail() {
  return (
    <div className="placedetail">
      <div className='Detailleft'>
        <img alt=''></img>
        <div>
          <div>
            <h2>name</h2>
            <p>Rating</p>
          </div>
          <div>
            <p>Address</p>
            <p>Address Detail</p>
          </div>
          <div>
            <p>Opening Hour</p>
            <p>Opening Hour Detail</p>
          </div>
        </div>
      </div>
      <div className='Detailright'>
        <h3>Image</h3>
        <div>
          <img alt='' ></img>
          <img alt='' ></img>
          <img alt='' ></img>
        </div>
      </div>
    </div>
  );
}

export default Placedetail;
