import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
import MainTemplate from "components/templates/MainTemplate";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Countries from "views/Countries/Countries";
import Country from "views/Country/Country";

function Root() {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </MainTemplate>
      </ThemesProvider>
    </BrowserRouter>
  );
}

export default Root;
