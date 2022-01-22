import { serve, serveStatic } from 'server'
import { graphql, shortcut } from './api.ts'

const index_html = await Deno.readTextFile('./app.html')

serve({
  '/': () => new Response(index_html, { headers: { 'content-type': 'text/html' } }),
  '/build/bundle.css': serveStatic("src/app.css", { baseUrl: import.meta.url }),
  '/build/bundle.js': serveStatic("src/app.js", { baseUrl: import.meta.url }),
  '/graphql': graphql,
  '/:code': async (_, params) => params
    ? Response.redirect(await shortcut(params.code))
    : new Response('Not Found!')
})