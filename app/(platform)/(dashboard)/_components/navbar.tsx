import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
            {/* TODO: mobile sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button className="rounded-sm hidden md:block h-auto py-1.5 px-2" size={"sm"}>
                    Create
                </Button>
                <Button className="rounded-sm block md:hidden" size={"sm"}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className="ml-auto  flex items-center gap-x-2">
                <OrganizationSwitcher appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }
                }}
                    hidePersonal
                    afterCreateOrganizationUrl={"/organization/:id"}
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectPersonalUrl={"/organization/:id"} />
                <UserButton afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            rootBox: {
                                avatarBox: {
                                    height: 30,
                                    width: 30,
                                }
                            }
                        }
                    }} />
            </div>
        </nav>
    )
}