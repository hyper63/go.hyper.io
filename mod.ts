import { serve } from 'server'
import { graphql, shortcut } from './api.ts'

serve({
  '/': serveStatic('./public/index.html', 'text/html'),
  '/build/bundle.css': serveStatic('./public/build/bundle.css', 'text/css'),
  '/build/bundle.js': serveStatic('./public/build/bundle.js', 'text/javascript'),
  '/graphql': graphql,
  '/:code': async (_, params) => params
    ? Response.redirect(await shortcut(params.code))
    : new Response('Not Found!')
})


function serveStatic(file: string, type: string) {
  return async () => new Response(
    await Deno.readTextFile(file), {
    headers: { 'content-type': type }
  })
}
