import path from 'path'
import { webpackBundler } from '@payloadcms/bundler-webpack'; // bundler-import
import { mongooseAdapter } from '@payloadcms/db-mongodb'; // database-adapter-import
import { slateEditor } from '@payloadcms/richtext-slate'; // editor-import
import { buildConfig } from 'payload/config'

import Users from './collections/Users'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users],
  routes: {
    admin: '/admin'
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Payload Playground",
      favicon: "/favicon.ico",
      ogImage: "/image.png"
    }
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL as string
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  }
})
