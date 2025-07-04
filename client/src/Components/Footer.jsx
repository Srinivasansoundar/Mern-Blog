import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble} from 'react-icons/bs'
function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className=' w-full max-w-7xl mx-auto'>
                <div className=' grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className="m-3">
                        <Link to='/'
                            className='self-center border-b-2  whitespace-nowrap 
    text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >Srini's</span>
                            Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                        <Footer.Title className='' title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link>
                               <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                100 JS Projects
                               </Footer.Link>
                            </Footer.Link>
                            <Footer.Link>
                               <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                Srini Blog
                               </Footer.Link>
                            </Footer.Link>

                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title className='' title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link>
                               <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Github
                               </Footer.Link>
                            </Footer.Link>
                            <Footer.Link>
                               <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                Discord
                               </Footer.Link>
                            </Footer.Link>

                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title className='' title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link>
                               <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Privacy policy
                               </Footer.Link>
                            </Footer.Link>
                            <Footer.Link>
                               <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                               Terms and Condition
                               </Footer.Link>
                            </Footer.Link>

                        </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#'
                 by="Srini's blog"
                year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom