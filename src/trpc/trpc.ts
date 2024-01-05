import { initTRPC } from "@trpc/server";
import { TcreateContext } from "../server";


const t = initTRPC.context<TcreateContext>().create()

export const router = t.router

export const publicProcedure = t.procedure