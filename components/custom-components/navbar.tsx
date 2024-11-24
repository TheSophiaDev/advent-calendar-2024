import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import ChristmasTree from "@/components/icons/christmas-tree.tsx"

export default function Navbar(): JSX.Element {
  return (
    <div className="bg-green-950 sticky flex flex-1 items-center justify-center top-0 z-40 w-full py-4">
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-white text-5xl font-christmas">
                  <ChristmasTree
                    className="inline mr-1"
                    width="1.2em"
                    height="1.2em"
                  />
                  Adventskalender 2024
                  <ChristmasTree
                    className="inline ml-1"
                    width="1.2em"
                    height="1.2em"
                  />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
