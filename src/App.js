import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
import { createTheme, responsiveFontSizes, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "22d23e4f58f6b57333ef3838830bc2a52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtnInstance.playText("Please try that again.");
          } else {
            window.open(article && article.url, "_blank");
            alanBtnInstance.playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {!newsArticles.length ? (
          <div className={classes.logoContainer}>
            <img
              src="https://media.defense.gov/2021/Nov/15/2002893358/-1/-1/0/211115-D-BD104-002.JPG"
              className={classes.alanLogo}
              alt="brain-logo"
            />
            <h1>Voice Reader News App</h1>
          </div>
        ) : (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        )}
        <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      </div>
    </ThemeProvider>
  );
};

export default App;
