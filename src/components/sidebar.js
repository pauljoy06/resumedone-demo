import React from 'react';

import {Icon} from './index';

import logo from '../icons/logo.png';
import search from '../icons/search.svg';
import myTemplate from '../icons/my_template.svg';
import star from '../icons/star.png';
import pastClock from '../icons/past_clock.svg';
import myBoard from '../icons/my_board.svg';
import boardIcon from '../icons/board_icon.png';
import lock from '../icons/lock.png';
import settings from '../icons/settings.svg';

import userProfilePic from '../icons/user_profile_pic.jpg';

const Sidebar = (props) => {
    const sidebarItems = [
        {
            name: 'My Templates',
            image: myTemplate,
        },
        {
            name: 'Search',
            image: search,
            subItems: [
                {
                    name: 'Software Engineer',
                    type: 'favorite',
                },
                {
                    name: 'Computer hardware engineer',
                    type: 'favorite',
                },
                {
                    name: 'Network Engineer',
                    type: 'favorite',
                },
                {
                    name: 'Technical Support',
                    type: 'favorite',
                },
                {
                    name: 'Network administrator',
                    type: 'favorite',
                },
                {
                    name: 'Management',
                    type: 'favorite',
                },
                {
                    name: 'Data analysis',
                    type: 'favorite',
                },
                {
                    name: 'Software Engineer',
                    type: 'favorite',
                },
                {
                    name: 'Past search 1',
                    type: 'previousSearch',
                },
                {
                    name: 'Past search 2',
                    type: 'previousSearch',
                },
                {
                    name: 'Computers and information...',
                    type: 'previousSearch',
                },
                {
                    name: 'Database Administrator',
                    type: 'previousSearch',
                },
                {
                    name: 'Computer security',
                    type: 'previousSearch',
                },
                {
                    name: 'Computer Systems Analyst',
                    type: 'previousSearch',
                },
            ]
        },
        {
            name: 'My boards',
            image: myBoard,
            subItems: [
                {
                    name: 'Board 1',
                    type: 'board',
                },
                {
                    name: 'Board 2',
                    type: 'board',
                },
                {
                    name: 'Board 3',
                    type: 'board',
                },
                {
                    name: 'Board Agent 1',
                    type: 'lock',
                },
                {
                    name: 'Board Agent 2',
                    type: 'lock',
                },
                {
                    name: 'Board Agent 3',
                    type: 'lock',
                },
            ]
        }
    ]

    return <div className='sidebar'>
        <div className='name-logo-section'>
            <Icon image={logo} height={24} width={115}/> 
        </div>
        <div className='sidebar-items'>
            {sidebarItems.map((sidebarItem, index)=> <SidebarItem
                name={sidebarItem.name}
                image={sidebarItem.image}
                subItems={sidebarItem.subItems}
                key={index}
            />)}
        </div>
        <div className='user-settings'>
            <div className='user-profile-picture'>
                <Icon image={userProfilePic} size={32} /> 
            </div>
            <div className='user-name'>
                Carla
            </div>
            <div className='settings'>
                <Icon image={settings} size={16} /> 
            </div>
        </div>
    </div>
}

const SidebarItem = (props) => {
    return <div className='sidebar-item'>
        <MainItem
            image={props.image}
            name={props.name}
        />
        {props.subItems && <div className='sub-items'>
            {props.subItems.map((subItem, index)=> <SubItem
                name={subItem.name}
                type={subItem.type}
                key={index}
            />)} 
        </div>}
    </div>
}

const MainItem = (props) => {
    return <div className='main-item'>
        <Icon image={props.image} size={16} /> 
        <div className='item-name'>{props.name}</div>
    </div>
}

const SubItem = (props) => {
    const itemTypeIconMap = {
        'favorite': star,
        'previousSearch': pastClock,
        'board': boardIcon,
        'lock': lock,
    }
    return <div className='sub-item'>
        <Icon image={itemTypeIconMap[props.type]} size={16} /> 
        <div className='item-name'>{props.name}</div>
    </div>
}

export default Sidebar;
