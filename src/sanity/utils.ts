import { createClient,groq } from "next-sanity"
import { client } from "../../sanity.config"

export const getInventions = async () => {
    let inventions: any[] = []
    try{
        // this is another structured query instead of fetching all the fields, we can specify fields like this.
        // return client.fetch(
        //     groq`*[_type == "inventions"]{
        //         _id,
        //         _createdAt,
        //         name,
        //         "slug": slug.current,
        //         "image": image.asset->url,
        //         url,
        //         content
        //     }`
        // )
        await client.fetch('*[_type == "invention"]').then((data) => {
            console.log("the data is ", data)
            inventions = data
            return inventions
        }).catch((err) => {
            console.error("[Error while fetching]", err)
            return []
        })
    }catch(_){
        console.error("[SANITY_GET-INVENTIONS]", _)
        return[]
    }finally{
        return inventions
    }
}


// export const getHeaders = async () => {
//     let headers: any[] = []
//     try{

//         await client.fetch('*[_type == "header"]').then((data) => {
//             headers = data
//         }).catch((err) => {
//             throw new Error(err)
//         })

//     }catch(_){
//         console.error("[SANITY_HEADERS]: Failed to retrieve headers", _)
//     }finally{
//         return headers
//     }
// }

// export const getNavItems = async () => {
//     let navItems: any[] = []
//     try{
//         await client.fetch('*[_type == "nav_items"]').then((data) => {
//             navItems = data
//         }).catch((err) => {
//             throw new Error(err)
//         })
//     }catch(_){
//         console.error("[SANITY_GET-NAV-ITEMS]: Failed to retrive nav-items", _)
//     }finally{
//         return navItems
//     }
// }