import React, { useState } from 'react'
import Sidebar, {SidebarItem} from '../components/Sidebar'
import {
    Calendar1,
    HeartPulse,
    LogOut,
    MessageCircleMore,
    UserCircle,
  } from 'lucide-react'

const Profile = () => {
    const [toggleButton, setToggleButton] = useState(1);

  return (
    <>
        <div className='h-screen w-screen bg-gradient-to-b from-[#24263C] via-[#121323] to-[#030318]'>
            <div className='flex w-full h-full'>
                <div className='w-fit h-full px-2 flex flex-col justify-center'>
                    <Sidebar>
                        <SidebarItem click={() => setToggleButton(1)} active={toggleButton === 1} icon={<UserCircle/>} text="Dashboard"/>
                        <SidebarItem click={() => setToggleButton(3)} active={toggleButton === 3} icon={<Calendar1/>} text="Appointments" alert="See Appointments"/>
                        <SidebarItem click={() => setToggleButton(4)} active={toggleButton === 4} icon={<HeartPulse/>} text="Medical History" alert="View Medical History"/>
                        <SidebarItem click={() => setToggleButton(5)} active={toggleButton === 5} icon={<MessageCircleMore/>} text="Message Settings" alert={false}/>
                        <SidebarItem icon={<LogOut/>} text="Logout" alert={false}/>
                    </Sidebar>
                </div>

                <div className='w-[75%]'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Profile