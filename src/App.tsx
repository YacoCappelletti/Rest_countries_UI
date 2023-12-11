import "./App.css";
import Browser from "./components/Browser";
import CardsLayout from "./components/CardsLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="flex justify-center w-[100%] h-[100%]">
          <div className=" flex flex-col items-center w-[100%]  ">
            <h1 className="text-center text-[3.5rem] ">Rest Countries UI</h1>

            <Browser />
            <CardsLayout />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
