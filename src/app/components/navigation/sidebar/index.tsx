import React from "react";
import { FaTimes } from "react-icons/fa";
import {motion, AnimatePresence} from 'framer-motion';
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { hands } from '../../../data/icons';

const Sidebar = ({
    isOpen, toggle
} : {
    isOpen: boolean;
    toggle: () => void;
}) => {
    
    const menu_variants = {
        hidden: {
            x: '-100vh',
        },
        visible: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        exit: {
            x: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.1
            }
        }
    };

    const link_variants = {
        hidden: {
            opacity: 0,
            y: '-50%'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: '-50%',
            transition: {
                duration: 0.1,
                ease: 'easeOut'
            }
        }
    }

    const ctrl_variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    return (
        <>
        <AnimatePresence>
        { isOpen && ( 
            <motion.nav className="absolute h-full w-full sm:w-2/5 bg-red-700 py-4 px-4 z-50" variants={menu_variants} initial="hidden" animate="visible" exit="exit">
                <FaTimes
                        className="absolute top-6 right-4 text-white cursor-pointer"
                        onClick={toggle}
                        style={{ fontSize: '16px' }}
                    />
                <div className="h-2/3 content-center font-SauceTomato text-center">
                    <motion.ul className="text-4xl my-auto mt-36 space-y-8" variants={ctrl_variants}>
                        <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/" className="hover:text-gray-500">
                                <p>Home</p>
                            </Link>
                        </motion.li>
                        <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/about" className="hover:text-gray-500">
                                <p>About Us</p>
                            </Link>
                        </motion.li>
                        <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/volunteer" className="hover:text-gray-500">
                                <p>Volunteer</p>
                            </Link>
                        </motion.li>
                        <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/locations" className="hover:text-gray-500">
                                <p>Locations</p>
                            </Link>
                        </motion.li>
                        <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/calendar" className="hover:text-gray-500">
                                <p>Calendar</p>
                            </Link>
                        </motion.li>
                        {/* <motion.li onClick={toggle} variants={link_variants}>
                            <Link href="/bonus" className="hover:text-gray-500">
                                <p>Bonus Content</p>
                            </Link>
                        </motion.li> */}

                    </motion.ul>
                    <div className="flex w-full mx-auto justify-center p-12 gap-x-2">
                        <SocialIcon style={{
                            width: '44px',
                            height: '44px'
                        }} target='_blank' network="email" url="mailto:seattlecommunityfridge@gmail.com"/>
                        <SocialIcon style={{
                            width: '44px',
                            height: '44px'
                        }} target='_blank' fallback={ hands } fgColor="#00843D" bgColor="white" label="Donate" url="https://www.wagives.org/organization/Seattle-Community-Fridge"/>
                        <SocialIcon style={{
                            width: '44px',
                            height: '44px'
                        }} target="_blank" network="instagram" url="https://www.instagram.com/seattlecommunityfridge"/>
                    </div>
                </div>
            </motion.nav>)
        }   
        </AnimatePresence>
        </>
    );
}

export default Sidebar;
