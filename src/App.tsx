import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TypingTest from './components/typingtest/TypingTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/typingtest"} component={TypingTest} />
        <Route exact path={"/"} component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
