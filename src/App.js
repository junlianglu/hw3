import "./styles.css";
import { HOCCounter, HOCTdList } from "./ContentContainer";

export default function App() {
  return (
    <div className="App">
      <HOCCounter visible={true} />
      <HOCTdList visible={true} />
    </div>
  );
}
