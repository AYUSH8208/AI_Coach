import React  from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown,  FileTextIcon, GraduationCapIcon, LayoutDashboardIcon, PenBoxIcon, StarsIcon } from "lucide-react";
import { DropdownMenu,DropdownMenuItem,DropdownMenuContent ,DropdownMenuTrigger} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
    await checkUser();

    return (
    

        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-lg z-50 
        supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href='/'>
                    <Image 
                    src="/logo6.png" alt="Logo" width={200} height={50}
                    className="h-12 py-1 w-auto object-contain"/>
                </Link>
                <div className="flex items-center space-x-2 mid :space-x-4">
                <SignedIn>
                    <Link href='/dashboard'>
                        <Button variant="outline" >
                            <LayoutDashboardIcon className="h-4 w-4 mr-2" />
                            <span className="hidden md:block">Industry Insights</span>
                        </Button>
                    </Link>
                
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button>
                            <StarsIcon className="h-4 w-4 mr-2" />
                            <span className="hidden md:block">Tools</span>
                            <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link href={"/resume"} className="flex items-center gap-2">
                            <FileTextIcon className="h-4 w-4 mr-2" />
                            <span >Build Resume</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                            <PenBoxIcon className="h-4 w-4 mr-2" />
                            <span >Cover Letter</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/interview"} className="flex items-center gap-2">
                            <GraduationCapIcon className="h-4 w-4 mr-2" />
                            <span >Interview Prep</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>

                    </SignedIn>
                
            
    
        <SignedOut>
              <SignInButton >
                <Link href='/onboarding'>
                <Button variant="outline">Sign in</Button>
                </Link>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                    elements:{
                        avatarBox: "h-8 w-8",
                        userButtonPopoverCard: "shadow-xl",
                        userPreviewMainIdentifier:"font-semibold"
                    }
                }}
                afterSignOutUrl="/" 
                         
              />
            </SignedIn>

            </div>

         </nav>
        </header>
    
  );
}

export default Header;