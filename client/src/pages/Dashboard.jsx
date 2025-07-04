import React, { useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../Components/DashSidebar'
import DashProfile from '../Components/DashProfile'
import DashPost from '../Components/DashPost'
import DashUsers from '../Components/DashUsers'
import DashComments from '../Components/DashComments'
import DashboardComp from '../Components/DashboardCom'
export default function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState("")
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl=urlParams.get('tab')
    //console.log(tabFromUrl);
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar/>
      </div>
        {/* profile */}
        {tab==='profile' && <DashProfile/>}
        {/* posts */}
        {tab==='posts' && <DashPost/>}
        {tab==='users' && <DashUsers/>}
        {/* comments */}
        {tab=='comments' && <DashComments/>}
        {/* Dahsboard component */}
        {tab=='dash' && <DashboardComp/>}
    </div>
  )
}
