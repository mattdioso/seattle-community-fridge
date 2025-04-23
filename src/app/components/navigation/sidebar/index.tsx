import React from 'react';
import { MenuButton } from '../../MenuButton';
import { SocialIcon } from 'react-social-icons';

const Navbar = ({
    isOpen,
    toggle
} : {
    isOpen: boolean;
    toggle: () => void
}) => {

    const menuButtonStyle = {
        marginLeft: "2rem"
      };

    return (
        <div className="w-full h-24 flex pt-6">
            <MenuButton isOpen={isOpen} onClick={() => toggle()} style={menuButtonStyle} />
                <div className="hidden sm:flex w-full flex-row-reverse pr-14 gap-x-2">
                    <SocialIcon style={{
                        width: '44px',
                        height: '44px'
                    }} target='_blank' network="email" url="mailto:seattlecommunityfridge@gmail.com"/>
                    <SocialIcon style={{
                        width: '44px',
                        height: '44px'
                    }} target='_blank' network="vimeo" url="https://account.venmo.com/u/seattlecommunityfridge"/>
                     <SocialIcon style={{
                        width: '44px',
                        height: '44px'
                    }} target="_blank" network="instagram" url="https://www.instagram.com/seattlecommunityfridge"/>
                </div>
        </div>
    )
}

export default Navbar;
