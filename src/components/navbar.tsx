"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { getNavItems } from "@/sanity/utils"
import { TnavItems } from "@/sanity/schema/nav-items"


const Navbar = () => {

    const [navItems, setNavItems] = useState<TnavItems[] | any[]>([])


    const fetch = async () => {
        let data: TnavItems[] = await getNavItems()
        setNavItems(data)
    }

    useEffect(() => {
        fetch()
    },[])

    return (
        <div className="w-full flex justify-around items-center flex-row h-10 bg-white border-b fixed top-0 right-0 " >
            {
                navItems && navItems.map((item, i) => (
                    <Button key={`navitem${i}`} variant={"default"} >
                        {item.name}
                    </Button>
                ))
               
            }
        </div>
    )
}

export default Navbar