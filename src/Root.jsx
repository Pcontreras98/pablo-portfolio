import App from './App.jsx'
import { NotFound } from './components/NotFound.jsx'

function isHomePath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  return path === '/' || path === '/index.html'
}

export function Root() {
  return isHomePath(window.location.pathname) ? <App /> : <NotFound />
}
