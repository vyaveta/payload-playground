import { getInventions } from "@/sanity/utils"

export default async function  Home() {

    const data: any[] = await getInventions()

    return(
        <>
            <div>
                hello world
                {
                    data.map((invention,i) => (
                        <div key={1} >
                            {invention.name}
                        </div>
                    ))
                }
            </div>
        </>
    )
}