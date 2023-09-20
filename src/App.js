import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Redux counter program</h2>
        <Counter />
      </div>
    </Provider>
  );
}
