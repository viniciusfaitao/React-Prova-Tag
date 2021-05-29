import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { TagBooksProvider } from "../../contexts/tagBooks/Index";
import { GoodReadsProvider } from "../../contexts/goodReads/Index";
import { HeaderComponent } from "../../components/header/Index";
import { FooterComponent } from "../../components/footer/Index";
import { Books } from "../books/Index";
import { BookDetails } from "../bookDetails/Index";

const App = () => {
  return (
    <Router>
      <TagBooksProvider>
        <GoodReadsProvider>
          <div className="App">
            <HeaderComponent />
            <Switch>
              <Route path="/livros" children={<Books />} />
              <Route path="/livro/:id" children={<BookDetails />} />
              <Route path="/" children={<Redirect to="/livros" />} />
            </Switch>
            <FooterComponent />
          </div>
        </GoodReadsProvider>
      </TagBooksProvider>
    </Router>
  );
};

export default App;
