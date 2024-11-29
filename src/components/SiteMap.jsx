import ReactSitemap from "react-sitemap";
import { BrowserRouter as Router } from "react-router-dom";

const sitemap = new ReactSitemap();

sitemap
  .add("/home")
  .add("/gallery")
  .add("/contact")
  .add("/services")
  .save("./public/sitemap.xml"); // Saves the sitemap in the public folder
