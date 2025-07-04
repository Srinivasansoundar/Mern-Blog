import { Sidebar } from 'flowbite-react'
import React, { useState } from 'react'
import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie } from 'react-icons/hi'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'
function DashSidebar() {
    const{currentUser}=useSelector(state=>state.user)
    const location = useLocation()
    const [tab, setTab] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const tabFromUrl = urlParams.get('tab')
        //console.log(tabFromUrl);
        if (tabFromUrl) {
            setTab(tabFromUrl)
        }
    }, [location.search])
    const handleSignout = async () => {
        try {
            const res = await fetch('/api/user/signout', {
                method: "POST",
            })
            const data = res.json();
            if (!res.ok) {
                console.log(data.message);
            }
            else {
                dispatch(signoutSuccess());
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                      {currentUser.isAdmin && (
                        <Link to='/dashboard?tab=dash'>
                            <Sidebar.Item
                                active={tab === 'dash'}
                                icon={HiChartPie}
                                as='div'>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        
                    )}
                    <Link to="/dashboard?tab=profile">
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin?"Admin":"User"} labelColor='dark' as="div">
                            Profile
                        </Sidebar.Item>
                    </Link>
                    {currentUser.isAdmin && (
                        <Link to='/dashboard?tab=posts'>
                            <Sidebar.Item
                                active={tab === 'posts'}
                                icon={HiDocumentText}
                                as='div'>
                                Posts
                            </Sidebar.Item>
                        </Link>
                        
                    )}
                     {currentUser.isAdmin && (
                        <Link to='/dashboard?tab=users'>
                            <Sidebar.Item
                                active={tab === 'users'}
                                icon={HiOutlineUserGroup}
                                as='div'>
                                Users
                            </Sidebar.Item>
                        </Link>
                        
                    )}
                    {currentUser.isAdmin && (
                        <Link to='/dashboard?tab=comments'>
                            <Sidebar.Item
                                active={tab === 'comments'}
                                icon={HiAnnotation}
                                as='div'>
                                Comments
                            </Sidebar.Item>
                        </Link>
                        
                    )}

                    <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar