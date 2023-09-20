import { increment, decrement } from "./action";
import { connect } from "react-redux";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <>
      <div>{counter} </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
