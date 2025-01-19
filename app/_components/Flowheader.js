import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { SignInAction, SignOutAction } from "../utils/actions";
import { auth } from "../utils/auth";

export default async function Flowheader() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <Navbar fluid rounded className="bg-black text-white px-10">
        <NavbarBrand href="/">
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white text-[1.4rem]">
            PixelDepot
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {session ? (
            // Logged-in User
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User Image" img={session.user.image} rounded />
              }
            >
              <DropdownHeader>
                <span className="block text-md">
                  {session.user.name.split(" ").at(0)}
                </span>
                <span className="block truncate text-md font-medium">
                  {session.user.email}
                </span>
              </DropdownHeader>

              <DropdownDivider />

              <DropdownItem onClick={SignOutAction}>Sign Out</DropdownItem>
            </Dropdown>
          ) : (
            // Guest User
            <NavbarLink
              href="/login"
              className="text-white text-[1.3rem] bg-black-500 px-7 py-2 "
              onClick={SignInAction}
            >
              Login
            </NavbarLink>
          )}
          <NavbarToggle />
        </div>
        <NavbarCollapse className="text-white">
          <NavbarLink href="/" active className="text-white text-[1.3rem]">
            Home
          </NavbarLink>
          <NavbarLink href="/about" className="text-white text-[1.3rem]">
            About
          </NavbarLink>
          <NavbarLink href="/upload" className="text-white text-[1.3rem]">
            Upload
          </NavbarLink>
          <NavbarLink href="/blog" className="text-white text-[1.3rem]">
            Blog
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
