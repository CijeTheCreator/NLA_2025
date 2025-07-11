import { articles_single_article_html } from "../Html_Templates/Articles_Single_Article_Html";
import { Articles } from "../Utils/Mock_Data";
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
  const articles_html_template = articles_single_article_html;
  const articles_html_filled = Articles.map((el) => {
    let temp_article_html = applyPlaceholder(
      articles_html_template,
      Placeholders.Articles.single_article.article_abstract,
      el.article_abstract
    );
    temp_article_html = applyPlaceholder(
      temp_article_html,
      Placeholders.Articles.single_article.article_authors,
      el.article_authors
    );
    temp_article_html = applyPlaceholder(
      temp_article_html,
      Placeholders.Articles.single_article.article_title,
      el.article_title
    );
    temp_article_html = applyPlaceholder(
      temp_article_html,
      Placeholders.Articles.single_article.article_publish_date,
      el.article_publish_date
    );
    temp_article_html = applyPlaceholder(
      temp_article_html,
      Placeholders.Articles.single_article.article_image_src,
      `${Routes.ArticleImages}${el.article_image_src}`
    );

    return temp_article_html;
  }).join(" ");
  console.log(articles_html_template);
  insertInnerHtml(Selectors.Articles.articles_container, articles_html_filled);
};

selectElement(
  Selectors.Articles.NLA_Enugu_State_Chapter_bread_crumbs_Button
).href = Routes.Homepage;

populate_page();
const articles = selectElements(Selectors.Articles.single_articles);
for (let i = 0; i < articles.length; i++) {
  articles[i].href = Routes.Single_Article;
}
