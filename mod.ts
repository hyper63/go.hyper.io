import { serve, serveStatic } from 'server'
import { graphql, shortcut } from './api.ts'

serve({
  '/': serveStatic("app.html", { baseUrl: import.meta.url }),
  '/build/bundle.css': serveStatic("app.css", { baseUrl: import.meta.url }),
  '/build/bundle.js': serveStatic("app.js", { baseUrl: import.meta.url }),
  '/graphql': graphql,
  '/:code': async (_, params) => params
    ? Response.redirect(await shortcut(params.code))
    : new Response('Not Found!')
})