import dotenv from "dotenv"
import path from "path"
import payload, { Payload } from "payload"
import type { InitOptions } from "payload/config"


dotenv.config({
    path: path.resolve(__dirname, "./.env"),
})

let cached = (global as any).payload

if(!cached) cached = (global as any).payload = {
    client: null,
    promise: null,
}

interface Args{
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({initOptions}: Args = {}): Promise<Payload> => {
    try{
        if (!process.env.PAYLOAD_SECRET) throw new Error("PAYLOAD_SECRET IS MISSING!")

        if(cached.client) return cached.client

        if(!cached.promise){
            cached.promise = await payload.init({
                secret: process.env.PAYLOAD_SECRET as string,
                local: initOptions?.express ? false : true,
                ...(initOptions || {})
            })
        }

        try{
            cached.client = await cached.promise
        }catch(_){
            cached.promise = null
            console.error("PAYLOAD_CACHE_ERROR", _)
            throw _
        }

    }catch(_){
        console.log("[GET_PAYLOADCLIENT]", _)
    }finally{
        return cached.client
    }
}