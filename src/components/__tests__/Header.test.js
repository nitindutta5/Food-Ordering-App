import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header/Header";
import store from "../../store/store";

test("Check if Logo loads on Header component", () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  console.log(header);
});
