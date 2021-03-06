import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import { E_NAME } from "../constant";
// import Commands from "../components/commands";

import './c-nav-bar.css'


const NavBar = () => {
    /*
    Here is full navbar.
    Html/ Bootstrap part
    */
   let navigate = useNavigate();
   const [navStatus, setNavStatus] = useState(false);
   const [searchText, setSearchText] = useState('');

    const navigateTo = (e) => {
        if (e.key === 'Enter') {
            navigate('/commands',{replace: true, state: { searchText:searchText }});
            setNavStatus(false);
        }
    } 

   return (

       <>
        <nav className="bg-c_nav-pink-light border-t-4 border-c_focus-light px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center text-c_normal-light hover:text-c_focus-light">
                    <img src="/logo512.png" className="rounded-full mr-3 h-8 sm:h-8 " alt="Eru " />
                    <span className="text-center text-2xl font-semibold whitespace-nowrap ">{E_NAME}</span>
                </Link>
                <div className="flex md:order-2">
                    <button onClick={(e)=>{setNavStatus(!navStatus)}} type="button" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" className="md:hidden text-c_normal-light  hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-c_focus-light rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden relative md:block">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{navigateTo(e)}} type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-c_normal-light rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-1 focus:outline-c_focus-light" placeholder="eru help"></input>
                    </div>
                    <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden text-c_normal-light  hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-c_focus-light"
                    onClick={(e)=>{setNavStatus(!navStatus)}}
                    aria-controls="mobile-menu-3" aria-expanded="false">
                        {/* make this one visble if the drop down is closed */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        {/* make this one visible if the drop down is open */}
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                
                <div className={ 
                   navStatus?"justify-between items-center w-full md:flex md:w-auto md:order-1":"hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                } id="mobile-menu-3">
                    <div className="relative mt-3 md:hidden">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{navigateTo(e)}} type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-c_normal-light rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-1 focus:outline-c_focus-light" placeholder="eru help"/>
                    </div>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
                        {/* disable selected option apply classes */}
                        {/* <li>
                            <Link onClick={(e)=>{setNavStatus(!navStatus)}} to="/faqs" className="block py-2 pr-4 pl-3 text-c_normal-light bg-c_focus-light rounded md:bg-transparent md:text-c_focus-light md:font-semibold md:p-0 " aria-current="page">FAQ</Link>
                            
                        </li> */}
                        
                        <li>
                            <Link onClick={(e)=>{setNavStatus(!navStatus)}} to="/faqs" className="block py-2 pr-4 pl-3 text-c_normal-light border-b border-gray-100 hover:bg-c_focus-light hover:border hover:rounded hover:border-c_normal-light md:hover:bg-transparent md:border-0 md:hover:text-c_focus-light md:hover:border-none md:p-0 ">FAQ</Link>
                            {/* FAQs */}
                        </li>
                        <li>
                            <Link onClick={(e)=>{setNavStatus(!navStatus)}} to="/commands" className="block py-2 pr-4 pl-3 text-c_normal-light border-b border-gray-100 hover:bg-c_focus-light hover:border hover:rounded hover:border-c_normal-light md:hover:bg-transparent md:border-0 md:hover:text-c_focus-light md:hover:border-none md:p-0 ">Commands</Link>
                            {/* Commands */}
                        </li>
                        <li>
                            <Link onClick={(e)=>{setNavStatus(!navStatus)}} to="/vote" className="block py-2 pr-4 pl-3 text-c_normal-light border-b border-gray-100 hover:bg-c_focus-light hover:border hover:rounded hover:border-c_normal-light md:hover:bg-transparent md:border-0 md:hover:text-c_focus-light md:hover:border-none md:p-0 ">Vote</Link>
                            {/* vote */}
                        </li>
                        <li>
                            <Link onClick={(e)=>{setNavStatus(!navStatus)}} to="/status" className="block py-2 pr-4 pl-3 text-c_normal-light border-b border-gray-100 hover:bg-c_focus-light hover:border hover:rounded hover:border-c_normal-light md:hover:bg-transparent md:border-0 md:hover:text-c_focus-light md:hover:border-none md:p-0 ">Staus</Link>
                            {/* Status */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

       </>
   )
}

export default NavBar;