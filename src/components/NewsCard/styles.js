import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
    fontFamily: 'Montserrat'
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    fontFamily: 'Montserrat'
  },
  title: {
    padding: "0 16px",
    margin: "20px",
    // fontFamily: 'Montserrat'
    fontFamily: 'Raleway, Arial',
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
});
