import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import React, { createRef, useEffect, useState } from "react";
import useStyles from "./styles";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  const classes = useStyles();
  const [elementRefs, setElementRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);
    setElementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [index, activeArticle, elementRefs]);

  return (
    <Card
      ref={elementRefs[index]}
      className={classNames(
        classes.card,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/image/news-placeholder-image"
          }
        />
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            style={{ fontFamily: "Montserrat" }}
          >
            {new Date(publishedAt).toDateString()}{" "}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            style={{ fontFamily: "Montserrat" }}
          >
            {source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          style={{ fontFamily: "Montserrat" }}
        >
          {title}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Montserrat" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          style={{ fontFamily: "Montserrat" }}
        >
          Learn More
        </Button>
        <Typography
          variant="h5"
          color="textSecondary"
          style={{ fontFamily: "Montserrat" }}
        >
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
