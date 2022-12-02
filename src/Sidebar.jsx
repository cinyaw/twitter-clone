import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/MailOutline"
import ListAltIcon from "@material-ui/icons/ListAlt"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { Button } from '@mui/material'
 
function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'></TwitterIcon>

        <SidebarOption Icon={HomeIcon} text="Home"></SidebarOption>
        <SidebarOption Icon={SearchIcon} text="Explore"></SidebarOption>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"></SidebarOption>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"></SidebarOption>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"></SidebarOption>
        <SidebarOption Icon={ListAltIcon} text="Lists"></SidebarOption>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"></SidebarOption>
        <SidebarOption Icon={MoreHorizIcon} text="More"></SidebarOption>

        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar