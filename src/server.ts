import express from 'express'
import * as trpcExpress from "@trpc/server/adapters/express"
import { appRouter } from './trpc'
import { inferAsyncReturnType } from '@trpc/server'
import { nextApp, nextHandler } from './next-utils'
import { getPayloadClient } from './get-payload'

require('dotenv').config()
const app = express()

const PORT = Number(process.env.PORT) || 3000

const createContext = ({ req, res}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
})

export type TcreateContext = inferAsyncReturnType<typeof createContext>

const start = async () => {
  try{
    // Initialize Payload
    const payload = await getPayloadClient({
      initOptions: {
        express: app,
        onInit: async cms => cms.logger.info(`Admin url: ${cms.getAdminURL()}`)
      }
    })

    app.use("/api/trpc", trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }))

    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
      payload.logger.info(`Next.js started!!`)
      app.listen(PORT, async () => {
        payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
      })
    })

  }catch(_){
    console.error("[SERVER_start_function]", _)
  }

}

start()
