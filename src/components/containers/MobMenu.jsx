// import * as React from "react";
// import { Minus, Plus } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import Link from "next/link";
// import { ROUTES } from "@/utils/data";
// import { cn } from "@/lib/utils";
// import { Menu } from "lucide-react";

// export function MobMenu({ pathname }) {
//   const [isOpen, setIsOpen] = React.useState(false);
//   React.useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);
//   return (
//     <Drawer open={isOpen}>
//       <DrawerTrigger
//         asChild
//         onClick={() => {
//           setIsOpen(!isOpen);
//         }}
//         className="md:hidden"
//       >
//         <Button variant="outline">
//           <Menu />
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <div className="mx-auto w-full max-w-sm">
//           <DrawerHeader className={"list-none space-y-6"}>
//             {ROUTES.map((item) => {
//               return (
//                 <li key={item.id}>
//                   <Link
//                     href={item.path}
//                     className={cn(
//                       "hover:text-primary",
//                       pathname === item.path && "text-primary"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               );
//             })}
//           </DrawerHeader>

//           <DrawerFooter className={"pb-10"}>
          
//             <Button variant="outline" className="md:hidden mx-auto"
//             >
//               Get in Touch
//             </Button>
          
//           </DrawerFooter>
//           <DrawerClose
//             onClick={() => setIsOpen(false)}
//             className="text-center w-full pb-6 text-accent-foreground"
//           >
//             Close Menu
//           </DrawerClose>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }


"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";

export function MobMenu({ pathname }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger
        asChild
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden"
      >
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="dark:bg-gray-900 dark:text-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="list-none space-y-6">
          <DrawerTitle><></></DrawerTitle>
            {ROUTES.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={cn(
                    "hover:text-primary dark:hover:text-gray-400",
                    pathname === item.path && "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </DrawerHeader>

          <DrawerFooter className="pb-10">
            <Button
              variant="outline"
              className="md:hidden mx-auto dark:bg-gray-800 dark:text-white"
              onClick={() => router.push("/contact")} // ✅ Navigate to /contact
            >
              Get in Touch
            </Button>
          </DrawerFooter>

          <DrawerClose
            onClick={() => setIsOpen(false)}
            className="text-center w-full pb-6 text-accent-foreground dark:text-gray-400"
          >
            Close Menu
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
