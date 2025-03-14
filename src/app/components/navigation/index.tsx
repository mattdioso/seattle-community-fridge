'use client';
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import {motion, AnimatePresence} from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar isOpen={isOpen} toggle={toggle}></Navbar>
        </>
    )
}

export default Navigation;