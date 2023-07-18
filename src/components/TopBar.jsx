import React from 'react'
import {NotificationsNone, Language, Settings } from '@material-ui/icons';
 
import admin from "./../assets/admin.JPG"

function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
                  <div className="topbarWrapperTopLeft">
                  <span className='logo'>DASHBOARD</span>
                  </div>
                  <div className="topbarWrapperTopRight">
                  <div className="topbarWrapperTopRightIconsContainer">
                        <NotificationsNone/>
                        <span className='notificationBadge'>5</span>
                  </div>
                  <div className="topbarWrapperTopRightIconsContainer">
                        <Language/>
                        <span className='notificationBadge'>5</span>
                  </div>
                  <div className="topbarWrapperTopRightIconsContainer">
                        <Settings/>
                  </div>

                  <img src={admin} alt="" className='topAvatar' />

            </div>
        </div>
    </div>
  )
}

export default TopBar