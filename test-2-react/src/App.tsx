
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoginPage, NotFoundPage } from './pages';
import { URLS } from './globals/constants/common';

export default function App() {
  return (
    <BrowserRouter>
      <header className="h-20 bg-primary flex items-center p-4">
        <h1 className="text-3xl text-black">Title</h1>
      </header>
      <main className="flex flex-col p-4 h-full">
        <Switch>
          <Route exact path="/">
            <Redirect to={URLS.LOGIN_STEP_1} />
          </Route>
          <Route exact path={URLS.LOGIN}>
            <Redirect to={URLS.LOGIN_STEP_1} />
          </Route>
          <Route path={URLS.LOGIN_STEP_1} component={LoginPage} />
          <Route path={URLS.LOGIN_STEP_2} component={LoginPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}