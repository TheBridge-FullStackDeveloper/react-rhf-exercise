import { Outlet } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const navigationBarItems = [
  {
    id: 1,
    url: "/",
    name: "Index",
  },
  {
    id: 2,
    url: "/posts",
    name: "Posts",
  },
  {
    id: 3,
    url: "/create-post",
    name: "Create a new post",
  },
];

export function NavBar() {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">BLOG</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navigationBarItems.map((navBarItem) => {
            return (
              <NavbarItem key={navBarItem.id}>
                <Link color="foreground" href={navBarItem.url}>
                  {navBarItem.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <Outlet />
    </>
  );
}
