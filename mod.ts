import { serve, serveStatic } from 'server'
import { graphql, shortcut } from './api.ts'

const app_html = await Deno.readTextFile('./app.html')
const app_css = await Deno.readTextFile('./app.css')
const app_js = await Deno.readTextFile('./app.js')

serve({
  '/': () => new Response(app_html, { headers: { 'content-type': 'text/html' } }),
  '/build/bundle.css': () => new Response(app_css, { headers: { 'content-type': 'text/css' } }),
  '/build/bundle.js': () => new Response(app_js, { headers: { 'content-type': 'text/javascript' } }),
  '/graphql': graphql,
  '/:code': async (_, params) => params
    ? Response.redirect(await shortcut(params.code))
    : new Response('Not Found!')
})