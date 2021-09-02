import Popup from "./components/Popup/PopupModal";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Popup />
    </MuiThemeProvider>
  );
}

export default App;
