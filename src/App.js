import { BrowserRouter, Switch } from "react-router-dom";
// Custom RouteLink
import { RouteLink } from "./route/routeLink";

// Ашиглагдаж байгаа хуудсуудыг оруулж ирэх
import HomePage from "./pages/home";
import ReadPage from "./pages/article";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteLink exact path="/" component={HomePage} />
        <RouteLink exact path="/post/read/id=:id" component={ReadPage} />

        {/* Not Found хуудас */}
        <RouteLink exact path="*" component={NotFound} />
        <RouteLink path="/" />
      </Switch>
    </BrowserRouter>
  );
}
