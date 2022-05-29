import React from 'react'
// import*as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

// import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as GiIcons from 'react-icons/gi';



export const SidebarData=[ 
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome color="black"/>,
      cName: 'nav-text'
    },
    {
      title: 'Marketplace',
      path: '/marketplace',
      icon: <FaIcons.FaShoppingCart color="black"/>,
      cName: 'nav-text'
    },
    { 
      title: 'Inventory',
      path: '/inventory',
      icon: <MdIcons.MdInventory color="black" />,
      cName: 'nav-text'
    },
    {
        title: 'Claim Reward',
        path: '/claim',
        icon: <GrIcons.GrMoney color="black"/>,
        cName: 'nav-text'
     },
     
     {
      title: 'Investment Pools',
      path: '/Pool',
      icon: <GiIcons.GiReceiveMoney color="black"/>,
      cName: 'nav-text'
   },

     {
        title: 'Support',
        path: '/support',
        icon: <MdIcons.MdSupportAgent color="black"/>,
        cName: 'nav-text'
     }
    ]

