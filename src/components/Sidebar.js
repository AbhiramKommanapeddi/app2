
import logo from './images/youtubelogo.png';

import React from 'react'
import {Link} from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
        <div className='col-md-3 menu'>
          <div className='logodiv' style={{display:'flex'}}>
          <i className="fa-solid fa-bars" style={{color:'white'}}></i>
          <img src={logo} width='65' style={{}}/>
            <span style={{fontsize:'25px',margin:'10px'}}>Youtube</span>
            
          </div>
          <div className='Sidebar'>
            <ul style={{listStyle:'none'}}>
              <Link to="/" className='linkmenu'><li><i class="fa fa-home"></i>Home</li></Link>
              <Link to="/Shorts" className='linkmenu'><li><i class="fa fa-bolt"></i>Short</li></Link>
              <li><i class="fa fa-credit-card-alt"></i>Subscription</li>
            </ul>
            <hr/>
            <ul style={{listStyle:'none'}}>
             <li><i class="fa-regular fa-file-video"></i>You</li>
            <li><i class="fa-solid fa-clipboard-user"></i>Your Channel</li>
            <li><i class="fa-solid fa-history"></i>History</li>
            <li><i class="fa-regular fa-circle-play"></i>Your Videos</li>
            <li><i class="fa-regular fa-clock"></i>Watch later</li>
            <li><i class="fa-regular fa-thumbs-up"></i>Liked Videos</li>
            <li><i class="fa-solid fa-list-check"></i>Playlist</li>
              
            </ul>
          </div>

     </div>
     </>
                                           
  )
}
