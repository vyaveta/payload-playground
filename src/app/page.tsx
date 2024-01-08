"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tinvention } from "@/sanity/schema/invention";
import { getHeaders, getInventions } from "@/sanity/utils"
import { useEffect, useState } from "react";
import { urlFor } from "../../sanity.config";
import Image from "next/image";
import { Theader } from "@/sanity/schema/header";

export default function Home() {

    const [data, setData] = useState<Tinvention[]>([])
    const [header, setHeader] = useState<Theader[]>([])


    const set = async () => {
        let d: Tinvention[] = await getInventions()
        let h: Theader[] = await getHeaders()
        console.error("data!!!", h)
        setHeader(h)
        setData(d)
    }

    useEffect(() => {
        set()
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 w-full px-4" >
             <div className=" w-full mt-16 py-10" >
                <h1 className="text-center font-bold " >{header[0] && header[0].title}</h1>
            </div> 
            <div className="w-full h-full  flex flex-row justify-center items-center mt-7  flex-wrap gap-9" >
                {
                    data && data.map((invention, i) => (
                        <Card key={i} >
                            <CardHeader >
                                <CardTitle>{invention.name}</CardTitle>
                                <CardDescription>{invention.slug.current}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>This is one of the card from sanity cms</p>
                                <img src={urlFor(invention.image)} alt="image" height={100} width={150} />
                            </CardContent>
                            <CardFooter>
                                <p>Card footer</p>
                            </CardFooter>
                        </Card>
                    ))

                }

            </div>
        </div>
    )
}