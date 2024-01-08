import { header } from "@/sanity/schema/header"
import invention from "@/sanity/schema/invention"
import { navItems } from "@/sanity/schema/nav-items"
import { createClient } from "next-sanity"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import  ImageUrlBuilder  from "@sanity/image-url";

export const config = defineConfig({
    projectId: "3ejsn20b",
    dataset: "production",
    title: "Memantine app",
    apiVersion: "1",
    basePath: "/muhuhuhu",
    plugins: [deskTool()],
    schema: { types: [invention, navItems, header] }
})

 export const client = createClient ({
    projectId: "3ejsn20b",
    dataset: "production", 
    apiVersion: "1",
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any): string | any => builder.image(source)