import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';




let d=new Date().getFullYear();

function footer()
{
    return(
        <footer className="footer-one"><p>Copyright {d} | Made with  
    
        <FavoriteIcon  
            style={{
            position:'absolute',
            paddingLeft:'1px',
            color:'red'
            }} 
            color="action" fontSize="small" 
        />
     &nbsp;&nbsp;&nbsp;&nbsp; by Nandik</p></footer>
    
    );
}

export default footer;