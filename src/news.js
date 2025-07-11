import { news_single_news_html } from "../Html_Templates/News_Single_News_Html";
import { News } from "../Utils/Mock_Data";
import { Placeholders } from "../Utils/Selectors_And_PlaceHolders";
import { Selectors } from "../Utils/Selectors_And_PlaceHolders";
import {
  applyPlaceholder,
  selectElement,
  selectElements,
} from "../Utils/General_Utils";
import { Routes } from "../Utils/Selectors_And_PlaceHolders";
import { insertInnerHtml } from "../Utils/General_Utils";

const populate_page = () => {
  const news_html_template = news_single_news_html;
  const news_html_filled = News.map((el) => {
    let temp_news_html = applyPlaceholder(
      news_html_template,
      Placeholders.News.single_news.news_abstract,
      el.news_abstract
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.News.single_news.news_authors,
      "NLA Enugu State Chapter"
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.News.single_news.news_title,
      el.news_title
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.News.single_news.news_publish_date,
      el.news_publish_date
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.News.single_news.news_image_src,
      `${Routes.NewsImages}${el.news_image_src}`
    );

    return temp_news_html;
  }).join(" ");
  insertInnerHtml(Selectors.News.news_container, news_html_filled);
};

selectElement(Selectors.News.NLA_Enugu_State_Chapter_bread_crumbs_Button).href =
  Routes.Homepage;

populate_page();
const news = selectElements(Selectors.News.single_news);
for (let i = 0; i < news.length; i++) {
  news[i].href = Routes.Single_News;
}
