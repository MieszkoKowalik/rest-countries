import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";

function Root() {
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
      </ThemesProvider>
    </>
  );
}

export default Root;
