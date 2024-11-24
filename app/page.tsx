import { isValidMonth } from "@/lib/guards";
import DaysCarousel from "../components/custom-components/days-carousel.tsx";
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

export default function Home(): JSX.Element {
  if (isValidMonth(12) === true) {
    return
    <>
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Adventskalender
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>;
  }
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Adventskalender
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <DaysCarousel />
    </>
  );
}
