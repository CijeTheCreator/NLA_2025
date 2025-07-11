import { footer_html } from "../Html_Templates/Footer_Html";
import { header_html } from "../Html_Templates/Header_Html";
import {
  addEventListener,
  insertInnerHtml,
  removeAllHrefs,
  selectElement,
  selectElements,
} from "../Utils/General_Utils";
import {
  Routes,
  Selectors,
  WebServer,
} from "../Utils/Selectors_And_PlaceHolders";

//Insert Header
insertInnerHtml("header", header_html);
// insertInnerHtml("footer", "");

const headerElements = Selectors.Navbar;

selectElement(headerElements.archive_button).href = Routes.Archives;
selectElement(headerElements.current_button).href = Routes.Current;
selectElement(headerElements.contact_button).href = Routes.Contact;
selectElement(headerElements.note_to_authors_button).href =
  Routes.NotesToAuthors;
selectElement(headerElements.editorial_team_button).href =
  Routes.EditorialBoard;
selectElement(headerElements.news_button).href = Routes.News;

if (window.innerWidth > 768) {
  selectElement("body").style.marginTop = "100px";
}

document.querySelector("header .logo").href = Routes.Homepage;

// selectElement("footer").style.position = "absolute";
// selectElement("footer").style.bottom = "0";
// selectElement("footer").style.left = "0";
// selectElement("footer").style.right = "0";

// selectElement(Selectors.Footer.Facebook).href =
//   "https://web.facebook.com/nigerianlibrary/";

// selectElement(Selectors.Footer.Twitter).href =
//   "https://twitter.com/nla_ng?lang=en";

if (window.innerWidth <= 768) {
  selectElement("body").style.marginTop = `${
    document.querySelector("header").clientHeight
  }px`;
}
