import { serve } from 'server'
import { graphql, shortcut } from './api.ts'

const app = w3()

app.route('/', () => new Response('Hello World'))

app.listen(serve)

type Handler = (req: Request) => Response | Promise<Response>
interface Route {
  pattern: URLPattern,
  response: Handler
}

function w3() {
  let routes: Route[] = []

  const app = {
    route: (url: string, response: Handler) => (routes.push({ pattern: new URLPattern(url), response }), app),
    listen: (fn: Handler) => fn((req: Response) => {
      let res = () => new Response('Not Found!', { status: 404 })
      routes.foreach(({ pattern, response }) => {
        if (pattern.test(req.url)) {
          // get url params 
          // get query params
          // be sure to pass to response
          res = response
          break;
        }
      })
      return res(req)
    })
  }
  return app
}