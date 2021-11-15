import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
import MainTemplate from "components/templates/MainTemplate";

function Root() {
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <MainTemplate></MainTemplate>
      </ThemesProvider>
    </>
  );
}

export default Root;
