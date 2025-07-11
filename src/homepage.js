import { homepage_single_article_html } from "../Html_Templates/Homepage_Single_Article_Html copy";
import { homepage_single_news_html } from "../Html_Templates/Homepage_Single_News_Html";
import {
  addEventListener,
  addEventListeners,
  applyPlaceholder,
  insertInnerHtml,
  selectElement,
  selectElements,
} from "../Utils/General_Utils";
import { Articles, News } from "../Utils/Mock_Data";
import {
  Placeholders,
  Routes,
  Selectors,
} from "../Utils/Selectors_And_PlaceHolders";

const ourArticlesOnClickEventHandler = (e) => {
  e.preventDefault();
  window.location.href = Routes.Articles;
};
const seeMoreArticlesOnClickEventHandler = () => {
  e.preventDefault();
  window.location.href = Routes.Articles;
};
const seeMoreNewsOnClickEventHandler = () => {
  e.preventDefault();
  window.location.href = Routes.News;
};

// const articleOnClickEventHandler = (article_id = null) => {
//   e.preventDefault();
//   window.location.href = Routes.Single_Article;
// };

// const newsOnClickEventHandler = (article_id = null) => {
//   e.preventDefault();
//   window.location.href = Routes.Single_Article;
// };

const attachHrefs = () => {
  selectElement(Selectors.Homepage.our_articles_button).href = Routes.Archives;
  selectElement(Selectors.Homepage.our_articles.see_more_button).href =
    Routes.Archives;
  selectElement(Selectors.Homepage.current_volume).href = Routes.Current;
  selectElement(Selectors.Homepage.latest_news.see_more_button).href =
    Routes.News;
};

// const populateArticles = () => {
//   const articles_html_template = homepage_single_article_html;
//   const articles_html_filled = Articles.map((el) => {
//     let temp_article_html = applyPlaceholder(
//       articles_html_template,
//       Placeholders.Homepage.our_articles.single_article.article_abstract,
//       el.article_abstract
//     );
//     temp_article_html = applyPlaceholder(
//       temp_article_html,
//       Placeholders.Homepage.our_articles.single_article.article_authors,
//       el.article_authors
//     );
//     temp_article_html = applyPlaceholder(
//       temp_article_html,
//       Placeholders.Homepage.our_articles.single_article.article_title,
//       el.article_title
//     );
//     temp_article_html = applyPlaceholder(
//       temp_article_html,
//       Placeholders.Homepage.our_articles.single_article.article_publish_date,
//       el.article_publish_date
//     );
//     temp_article_html = applyPlaceholder(
//       temp_article_html,
//       Placeholders.Homepage.our_articles.single_article.article_image_src,
//       `${Routes.ArticleImages}${el.article_image_src}`
//     );

//     return temp_article_html;
//   }).join(" ");
//   // insertInnerHtml(
//   //   Selectors.Homepage.our_articles.container,
//   //   articles_html_filled
//   // );
// };

const populateNews = () => {
  const news_html_template = homepage_single_news_html;
  const news_html_filled = News.map((el) => {
    let temp_news_html = applyPlaceholder(
      news_html_template,
      Placeholders.Homepage.our_articles.single_news.news_abstract,
      el.news_abstract
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.Homepage.our_articles.single_news.news_authors,
      "NLA Enugu State Chapter"
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.Homepage.our_articles.single_news.news_title,
      el.news_title
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.Homepage.our_articles.single_news.news_publish_date,
      el.news_publish_date
    );
    temp_news_html = applyPlaceholder(
      temp_news_html,
      Placeholders.Homepage.our_articles.single_news.news_image_src,
      `${Routes.NewsImages}${el.news_image_src}`
    );

    return temp_news_html;
  }).join(" ");
  insertInnerHtml(Selectors.Homepage.latest_news.container, news_html_filled);
};

const addHrefsToNewsAndArticles = () => {
  const news = selectElements(Selectors.Homepage.latest_news.latest_news);
  for (let i = 0; i < news.length; i++) {
    news[i].href = Routes.Single_News;
  }
  selectElement(Selectors.Homepage.latest_news.see_more_button).href =
    Routes.News;
};

// populateArticles();
populateNews();
attachHrefs();
addHrefsToNewsAndArticles();
