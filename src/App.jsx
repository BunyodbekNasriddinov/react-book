import { Private } from "@apps/Private";
import { Public } from "@apps/Public";
import { GlobalStyle } from "@components/GlobalStyle/";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./redux/token/tokenAction";


function App() {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  dispatch(setToken(localStorage.getItem('token') || ''))

  if (token) {
    return (
      <>
        <GlobalStyle />
        <Private />
      </>
    );
  } else {
    return (
      <>
        <GlobalStyle />
        <Public />
      </>
    );
  }
}

export default App;
