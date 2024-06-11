import Router from "./shared/Router";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  );
}

export default App;
