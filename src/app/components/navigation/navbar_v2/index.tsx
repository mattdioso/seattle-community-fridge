import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { hands } from '../../../data/icons';
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'SCF', href: '/', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Volunteer', href: '/volunteer', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
  { name: 'About Us', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getPageSection() {
  return window.location.pathname;
}

export default function Navbar() {
  // Determine which page is active.
  const [href, setHref] = useState('/');
  const [nav, setNav] = useState(navigation);
  useEffect(() => {
    setHref(getPageSection());
  });

  // Set the navigation object.
  useEffect(() => {
    var newNav = [];
    nav.forEach((n) => {
      n.current = (n.href === href);
      newNav.push(n);
    });
    setNav(newNav);
  }, [href]);

  // Return the navigation.
  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href={"/"}>
                <Image 
                  className="h-10 w-auto"
                  width={400} height={400}
                  src="/SCF_logo.png" alt="Seattle Community Fridge"
                  href="/"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {nav.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="sm:relative md:absolute inset-y-2 right-0 ml-6 flex-row-reverse"> { /* Rendered from right to left. */ }
                <SocialIcon style={{
                    width: '44px',
                    height: '44px'
                }} target='_blank' network="linktree" url="https://linktr.ee/seattlecommunityfridge"/>
                <SocialIcon style={{
                    width: '44px',
                    height: '44px'
                }} target="_blank" network="instagram" url="https://www.instagram.com/seattlecommunityfridge"/>
                <SocialIcon style={{
                    width: '44px',
                    height: '44px'
                }} target='_blank' fallback={ hands } fgColor="#00843D" bgColor="white" label="Donate" url="https://www.wagives.org/organization/Seattle-Community-Fridge"/>
                <SocialIcon style={{
                    width: '44px',
                    height: '44px'
                }} target='_blank' network="email" url="mailto:seattlecommunityfridge@gmail.com"/>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {nav.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}