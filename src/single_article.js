import {
  IP,
  Placeholders,
  Selectors,
} from "../Utils/Selectors_And_PlaceHolders";
import {
  applyPlaceholder,
  insertInnerHtml,
  selectElement,
} from "../Utils/General_Utils";
import { Single_Article, Single_Article_HTML } from "../Utils/Mock_Data";
import { single_article_base_html } from "../Html_Templates/Single_Article_Base_Html";

import { articles, Single_Article_iframe_HTML } from "../Utils/Data";

const getArticle = (articleId) => {
  return articles.find((el) => el.id == articleId);
};

const urlParams = new URLSearchParams(window.location.href);
const articleId = urlParams.get("articleId");
const articleData = getArticle(articleId);
const articleFileServer = `../journals/`;
const mainAuthor = articleData.authors[0];
const otherAuthors = articleData.authors.slice(1).join(", ");
const articlePath = articleFileServer + articleData.file_name;

let temp_single_artile_body = applyPlaceholder(
  Single_Article_iframe_HTML,
  Placeholders.Articles.single_article.article_pdf_source,
  articlePath
);
const inject_page = () => {
  let temp_single_article_page = applyPlaceholder(
    single_article_base_html,
    Placeholders.Single_Article.article_doi_link_href,
    Single_Article.article_doi_link_href
  );

  // temp_single_article_page = applyPlaceholder(
  //   temp_single_article_page,
  //   Placeholders.Single_Article.article_doi_link_text,
  //   Single_Article.article_doi_link_text
  // );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_downloads_count,
    Single_Article.article_downloads_count
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_main_author,
    mainAuthor
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_other_authors,
    otherAuthors
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_title_large,
    articleData.article_name
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.article_views_count,
    Single_Article.article_views_count
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.volume_label,
    articleData.volume_name
  );

  temp_single_article_page = applyPlaceholder(
    temp_single_article_page,
    Placeholders.Single_Article.dates.published,
    articleData.publish_date
  );

  insertInnerHtml("body", temp_single_article_page);
};

const inject_article_content = () => {
  insertInnerHtml(
    Selectors.Single_Article.text_container,
    temp_single_artile_body
  );
};

inject_page();
inject_article_content();
selectElement(Selectors.Single_Article.Download_Pdf_Button).href = articlePath;

selectElement("#__next > section > main").style.marginTop = "0px";
// selectElement(Selectors.NLA_Enugu_State_Chapter_bread_crumbs_Button).href =
//   Routes.Homepage;
