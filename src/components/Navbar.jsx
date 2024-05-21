import React from 'react'
import { User } from "@nextui-org/user";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { SearchIcon } from 'lucide-react';


export const Navbar2 = ({ tittle }) => {
  return (
    <>
      <nav
        className="sticky top-0 flex z-20  w-full flex-wrap items-center justify-between  shadow-dark-mild dark:bg-neutral-700 lg:py-">
        <Navbar className='bg-zinc-100 rounded' isBordered>
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
              {/* <AcmeLogo /> */}
              <p className="hidden sm:block font-bold text-inherit">Coordisoft</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3">
              <NavbarItem>
                <Link color="foreground" href="#">
                  Dashboard
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page" color="secondary">
                  Movimientos
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Usuarios
                </Link>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>

          <NavbarContent as="div" className="items-center" justify="end">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[12rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Buscar en coordisoft"
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
            />
          <h2>miller</h2>
          </NavbarContent>
        </Navbar>
      </nav>
    </>
  )
}