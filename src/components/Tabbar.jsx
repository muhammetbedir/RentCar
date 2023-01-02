import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useNavigate} from 'react-router-dom';

function Tabbar() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        newValue === 0 ? navigate("/") : newValue === 1 ? navigate("/favori") : navigate("/signin")
      };
    
    return (
        <div>
            <Tabs sx={{width:"100%", position:'fixed',bottom:0, left:0}} centered value={value} onChange={handleChange} aria-label="icon label tabs example">
              <Tab sx={{width: 1/4}} icon={<Home />} label="Anasayfa" />
            <Tab sx={{width: 1/4}} icon={<FavoriteIcon />} label="Favoriler" />
             <Tab sx={{width: 1/4}} icon={<PersonPinIcon />} label="Giriş Yap" />
            </Tabs>
        </div>
    )
}

export default Tabbar