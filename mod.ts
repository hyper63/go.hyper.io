import { serve, serveStatic } from 'server'
import { graphql, shortcut } from './api.ts'

serve({
  '/': serveStatic("public/index.html", { baseUrl: import.meta.url}),
  '/build/bundle.css': serveStatic("public/build/bundle.css", { baseUrl: import.meta.url }),
  '/build/bundle.js': serveStatic("public/build/bundle.js", { baseUrl: import.meta.url }),
  '/graphql': graphql,
  '/:code': async (_, params) => params 
    ? Response.redirect(await shortcut(params.code)) 
    : new Response('Not Found!')
})