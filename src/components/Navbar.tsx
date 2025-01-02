import Link from "next/link";
import { ClockArrowUp, LucideMoreVertical } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog-tw";
import { Label } from "~/components/ui/label";
import { ToggleMode } from "./ui/toogle-mode";

export const NavBar = () => {
  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="max-w-8xl mx-auto">
        <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* <TailwindSvg /> */}
            <Link className="mr-3 flex w-32 gap-2 overflow-hidden" href="/">
              <span className="sr-only">home page</span>
              <ClockArrowUp /> Nextjs+Shadcn
            </Link>

            <div className="relative ml-auto hidden items-center lg:flex">
              <NavigationMenu className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                <NavigationMenuList className="flex space-x-8">
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-sky-500 dark:hover:text-sky-400">
                        Docs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-sky-500 dark:hover:text-sky-400">
                        Components
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-sky-500 dark:hover:text-sky-400">
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-sky-500 dark:hover:text-sky-400">
                        Showcase
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                <ToggleMode />
                <Link
                  href="https://github.com/arifpohan12"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="-my-1 ml-2 lg:hidden">
              <Dialog>
                <DialogTrigger className="dialog__trigger flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                  <span className="sr-only">Navigation</span>
                  <LucideMoreVertical />
                </DialogTrigger>
                <DialogPortal>
                  <DialogOverlay className="dialog__overlay inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
                  <DialogContent className="dialog__content dark:highlight-white/5 top-4 max-w-xs translate-x-[-46%] translate-y-0 rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400">
                    <DialogTitle asChild />

                    <DialogClose className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"></DialogClose>

                    <ul className="space-y-6">
                      <li>
                        <a
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                          href="/docs/installation"
                        >
                          Docs
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/?ref=top"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          Components
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                          href="/showcase"
                        >
                          Showcase
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/arifpohan12"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          GitHub
                        </a>
                      </li>
                    </ul>
                    <DialogFooter className="border-t border-slate-200 pt-4 dark:border-slate-200/10">
                      <div className="flex items-center justify-between">
                        <Label className="font-normal text-slate-700 dark:text-slate-400">
                          Switch theme
                        </Label>
                        <ToggleMode />
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </DialogPortal>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
