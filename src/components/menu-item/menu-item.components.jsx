import React from 'react';
import { withRouter, useHistory} from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  let history = useHistory();

  return(
  // dynamically pass in css class from props using string interpolation
  <div className={`${size} menu-item`} onClick={()=> {history.push(linkUrl)}}>
    <div className="background-image"
      style={{backgroundImage: `url(${imageUrl})`
      }}>
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
  )
}
export default withRouter(MenuItem);