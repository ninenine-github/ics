import './Sidebar.css';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Sidebar(){
    return (
        <div className="Sidebar">
            <img className='ICSpic' alt='' src='https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1669593600&Signature=WA1v~sT2Zvnst3t7ejZo9~iqgO8ZzHypfGS0EWZRoK9~k2gNcmHjzIzQG-48WJJ83xjXttYkBXbb3nDHN7IMi1~i4izwHA1-JurZzRsVA~Y6lINZFu2rHSOf8H95jbdqerxcwaSYCLrN5LuYKcTCKwU8M6jXk0V53xi7leasJgu1Np~8~bkNJFRvhgMR3eUdZ56YbVS2A70I4qro3lqtb3iI8wbQkl3fi0hIlQE1GAFpyk7FC1GGZVfgDjA7xugUcf8gPDbb4gXqQSEz-rFLm9pJIW4Q3Vrr01KTE5VHHJS3hQeZfFLANQtYV630pY1TJa7NbF6AcU~m4Ba2z9yvVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
            <div className='PlaceBox'>
                <div className='Box'>
                    <ListAltIcon style={{ color: 'white' }} />
                </div>
                <p>Place</p>
            </div>
        </div>
    );
}

export default Sidebar;