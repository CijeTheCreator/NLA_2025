import { Single_Issue_Html } from "../Html_Templates/CurrentIssue_SingleIssue";
import {
  articles,
  NameToNumberMappings,
  currentIssue as GlobalCurrentIssue,
} from "../Utils/Data";
import {
  applyPlaceholder,
  insertInnerHtml,
  selectElement,
} from "../Utils/General_Utils";
import {
  WebServer,
  FileServer,
  Selectors,
  Placeholders,
} from "../Utils/Selectors_And_PlaceHolders";

const urlParams = new URLSearchParams(window.location.href);
let currentIssue = urlParams.get("issue");

const currentIssuesPlaceholders = Placeholders.Current_Issue;
const currentIssuesSelectors = Selectors.Current_Issue;
const currentArtilces = articles.filter(
  (el) => el.volume_name.replace(/ /g, "") == currentIssue
);
currentIssue = currentArtilces[0].volume_name;
const currentArticlesHtml = currentArtilces
  .map((el) => {
    let tempCurrentArticle = Single_Issue_Html;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_name,
      el.article_name
    );
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_authors,
      el.authors.join(", ")
    );

    let pageRange;
    try {
      pageRange = NameToNumberMappings[currentIssue]
        .find((el2) => el2.article_name == el.article_name)
        .file_name.split(".")[0];
    } catch (error) {
      console.log(el.article_name + " not found");
      pageRange = "N/A";
    }
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_pages,
      pageRange
    );
    const articlePath = FileServer + el.file_name;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_href,
      articlePath
    );

    const articleSuffixLink = `../Single%20Article?site-=nla&articleId=${el.id}`;
    const articleLink = articleSuffixLink;
    tempCurrentArticle = applyPlaceholder(
      tempCurrentArticle,
      currentIssuesPlaceholders.article_name_href,
      articleLink
    );
    return tempCurrentArticle;
  })
  .join(" ");

const publishDate = currentArtilces[0].publish_date;
const publishedHtml = `
  <strong> Published: </strong>
                            ${publishDate}`;
insertInnerHtml(currentIssuesSelectors.Container, currentArticlesHtml);
insertInnerHtml(currentIssuesSelectors.Main_Publish_Date, publishedHtml);

if (currentIssue == GlobalCurrentIssue) {
  insertInnerHtml(
    currentIssuesSelectors.Main_Title,
    `Current Issue: ${currentIssue}`
  );
} else {
  insertInnerHtml(currentIssuesSelectors.Main_Title, `Issue: ${currentIssue}`);
}
