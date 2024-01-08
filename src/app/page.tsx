"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tinvention } from "@/sanity/schema/invention";
import { getInventions } from "@/sanity/utils"
import { useEffect, useState } from "react";

export default function  Home() { 

    const [data, setData] = useState<Tinvention[]>([])

    const set = async () => {
        let d: Tinvention[] = await getInventions()
        console.error("data!!!",d)
        setData(d)
    }

    useEffect(() => {
        set()
    },[])

    return(
        <>
            <div className="w-full h-full min-h-screen flex flex-row justify-center items-center bg-gray-200 flex-wrap gap-9" >
                {
                   data && data.map((invention,i) => (
                        <Card key={i} >
                        <CardHeader >
                            <CardTitle>{invention.name}</CardTitle>
                            <CardDescription>{invention.slug.current}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is one of the card from sanity cms</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card footer</p>
                        </CardFooter>
                    </Card>
                    ))

                }
                
            </div>
        </>
    )
}