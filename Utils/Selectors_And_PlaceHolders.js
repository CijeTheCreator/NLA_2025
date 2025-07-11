// export const IP = `192.168.49.36`;
// export const FileServer = `http://192.168.49.36:8080/`;
// export const WebServer = `http://192.168.49.36:5500/`;

export const IP = `127.0.0.1`;
export const FileServer = `http://127.0.0.1/journals/`;
export const WebServer = `http://127.0.0.1/`;

export const Selectors = {
  Navbar: {
    logo: `.logo`,
    articles_button: `.articles_button`,
    news_button: `.news_button`,
    search_button: `.search_button`,
    note_to_authors_button: `.note_to_authors_button`,
    current_button: `.current_Button`,
    archive_button: `.archive_button`,
    editorial_team_button: `.editorial_team_button`,
    contact_button: `.contact_button`,
  },
  Footer: {
    Facebook: `.facebook`,
    Twitter: `.twitter`,
  },
  Homepage: {
    our_articles_button: `.our_articles_button`,
    our_articles: {
      container: `.articles_container`,
      see_more_button: `.see_more_button`,
      articles: `.article_card`,
    },
    latest_news: {
      container: `.news_container`,
      latest_news: `.latest_news_card`,
      see_more_button: `.see_more_latest_news_button`,
    },
    current_volume: `.current_volume`,
  },
  Articles: {
    NLA_Enugu_State_Chapter_bread_crumbs_Button: `.nlaescb`,
    single_articles: `.single_articles`,
    articles_container: `.articles_container`,
  },
  News: {
    NLA_Enugu_State_Chapter_bread_crumbs_Button: `.nlaescb`,
    single_news: `.single_news`,
    news_container: `.news_container`,
  },
  Single_Article: {
    Download_Pdf_Button: `.download_pdf_button`,
    download_other_formats_button: `.download_other_formats_button`,
    order_printed_copies_button: `.order_printed_copies_button`,
    text_container: `.text_container`,
  },

  Single_News: {
    NLA_Enugu_State_Chapter_bread_crumbs_Button: `.nlaescb`,
    text_container: `.text_container`,
  },
  Current_Issue: {
    Container: `.current_issues_container`,
    Artilce_Name_Link: `.article_name_link`,
    Download_Pdf_Button: `.download_pdf_button`,
    Main_Title: `.large_title`,
    Main_Publish_Date: `.main_publish_date`,
  },
  Archives: {
    Container: `.archive_container`,
  },
};

export const Placeholders = {
  Header: `XXXHEADERXXX`,
  Homepage: {
    our_articles: {
      single_article: {
        article_image_src: `XXXARTICLE_IMAGE_SRCXXX`,
        article_image_alt: `XXXARTICLE_IMAGE_ALTXXX`,
        article_title: `XXXARTICLE_TITLE_ALTXXX`,
        article_abstract: `XXXARTICLE_ABSTRACTXXX`,
        article_authors: `XXXARTICLE_AUTHORSXXX`,
        article_publish_date: `XXXARTICLE_PUBLISH_DATEXXX`,
      },
      single_news: {
        news_image_src: `XXXNEWS_IMAGE_SRCXXX`,
        news_image_alt: `XXXNEWS_IMAGE_ALTXXX`,
        news_title: `XXXNEWS_TITLEXXX`,
        news_abstract: `XXXNEWS_ABSTRACTXXX`,
        news_authors: `XXXNEWS_AUTHORSXXX`,
        news_publish_date: `XXXNEWS_PUBLISH_DATEXXX`,

        // news_image_src: `XXXNEWS_IMAGE_SRC_SMALL_XXX`,
        // news_image_alt: `XXXNEWS_IMAGE_ALT_SMALL_XXX`,
        // news_title: `XXXNEWS_TITLEV_SMALL_XXX`,
        // news_abstract: `XXXNEWS_ABSTRACT_SMALL_XXX`,
        // news_authors: `XXXNEWS_AUTHORS_SMALL_XXX`,
        // news_publish_date: `XXXNEWS_PUBLISH_DATE_SMALL_XXX`,
      },
    },
  },
  Articles: {
    single_article: {
      article_image_src: `XXXARTICLE_IMAGE_SRCXXX`,
      article_image_alt: `XXXARTICLE_IMAGE_ALTXXX`,
      article_title: `XXXARTICLE_TITLE_ALTXXX`,
      article_abstract: `XXXARTICLE_ABSTRACTXXX`,
      article_authors: `XXXARTICLE_AUTHORSXXX`,
      article_publish_date: `XXXARTICLE_PUBLISH_DATEXXX`,
      article_pdf_source: `XXARTICLESOURCEXX`,
    },
  },

  News: {
    single_news: {
      //   news_image_src: `XXXNEWS_IMAGE_SRCXXX`,
      //   news_image_alt: `XXXNEWS_IMAGE_ALTXXX`,
      //   news_title: `XXXNEWS_TITLEXXX`,
      //   news_abstract: `XXXNEWS_ABSTRACTXXX`,
      //   news_authors: `XXXNEWS_AUTHORSXXX`,
      news_publish_date: `XXXNEWS_PUBLISH_DATEXXX`,

      news_image_src: `XXXNEWS_IMAGE_SRC_SMALL_XXX`,
      news_image_alt: `XXXNEWS_IMAGE_ALT_SMALL_XXX`,
      news_title: `XXXNEWS_TITLEV_SMALL_XXX`,
      news_abstract: `XXXNEWS_ABSTRACT_SMALL_XXX`,
      news_authors: `XXXNEWS_AUTHORS_SMALL_XXX`,
      //   news_publish_date: `XXXNEWS_PUBLISH_DATE_SMALL_XXX`,
    },
  },

  Single_Article: {
    volume_label: `XXXVOLUME_LABELXXX`,
    volume_year: `XXXVOLUME_YEARXXX`,
    article_doi_link_text: `XXXARTICLEDOILINKTEXTXXX`,
    article_doi_link_href: `XXXARTICLEDOILINKHREFXXX`,
    article_title_large: `XXXARTICLETITLELARGEXXX`,
    article_main_author: `XXXARTICLEMAINAUTHORXXX`,
    article_other_authors: `XXXARTICLEOTHERAUTHORSXXX`,
    dates: {
      published: `XXXARTICLEPUBLISHEDDATEXXX`,
      revised: `XXXARTICLEREVISEDDATEXXX`,
      received: `XXXARTICLERECEIVEDDATEXXX`,
      accepted: `XXXARTICLEACCEPTEDDATEXXX`,
    },
    article_views_count: `XXXARTICLES_VIEW_COUNTXXX`,
    article_downloads_count: `XXXARTICLE_DOWNLOADS_COUNTXXX`,
  },

  Single_News: {
    news_title: `XXXNEWS_TITLEXXX`,
    news_image_src: `XXXNEWS_IMAGE_SRCXXX`,
    news_image_alt: `XXXNEWS_IMAGE_ALTXXX`,
  },
  Current_Issue: {
    article_name: `XXXARTICLENAMEXXX`,
    article_pages: `XXXPAGESXXX`,
    article_authors: `XXXARTICLEAUTHORSXXX`,
    article_href: `XXHREFXX`,
    article_name_href: `XXNAMEHREFXX`,
  },
  Archives: {
    volume_name: `XXXVOLUMENAMEXXX`,
    issue_href: `XXXISSUEHREFXXX`,
  },
};

export const Routes = {
  Homepage: `http://${IP}:5500`,
  News: `http://${IP}:5500/News.html`,
  Articles: `http://${IP}:5500/Articles%20page.html`,
  Single_Article: `http://${IP}:5500/Single%20Article.html`,
  Single_News: `http://${IP}:5500/Single%20Nes.html`,
  ArticleImages: `http://${IP}:5500/Resources/Articles/`,
  NewsImages: `http://${IP}:5500/Resources/News/`,
  EditorialBoard: `http://${IP}:5500/EditorialBoard.html`,
  NotesToAuthors: `http://${IP}:5500/NoteToAuthors.html`,
  Contact: `http://${IP}:5500/Contact.html`,
  Archives: `http://${IP}:5500/Archives.html`,
  Current: `http://${IP}:5500/issue.html?site=nla&issue=Volume3No.2`,
};
