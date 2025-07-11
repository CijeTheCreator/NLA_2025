import { single_news_base } from "../Html_Templates/Single_News_Base_Html";
import { applyPlaceholder, insertInnerHtml } from "../Utils/General_Utils";
import { Single_News, Single_News_HTML } from "../Utils/Mock_Data";
import {
  Placeholders,
  Routes,
  Selectors,
} from "../Utils/Selectors_And_PlaceHolders";
import { selectElement } from "../Utils/General_Utils";

const inject_page = () => {
  let single_news_temp = applyPlaceholder(
    single_news_base,
    Placeholders.Single_News.news_title,
    Single_News.news_title
  );
  single_news_temp = applyPlaceholder(
    single_news_temp,
    Placeholders.Single_News.news_image_src,
    `${Routes.NewsImages}${Single_News.news_image_src}`
  );
  single_news_temp = applyPlaceholder(
    single_news_temp,
    Placeholders.Single_News.news_image_alt,
    Single_News.news_image_alt
  );
  insertInnerHtml("body", single_news_temp);
};

const inject_news = () => {
  insertInnerHtml(Selectors.Single_News.text_container, Single_News_HTML);
};

inject_page();
inject_news();
selectElement(
  Selectors.Single_News.NLA_Enugu_State_Chapter_bread_crumbs_Button
).href = Routes.Homepage;
