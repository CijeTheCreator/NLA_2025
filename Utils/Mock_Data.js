export const Articles = [
  {
    article_image_src: "1.png",
    article_title: "Vol. 3 No. 2 DECEMBER 2023",
    article_abstract:
      "This study explores the impact of digital libraries on academic research in Nigerian universities. The findings suggest significant improvements in accessibility and efficiency.",
    article_authors: "A.C Ukpabi",
    article_publish_date: "December 2023",
  },
  {
    article_image_src: "2.png",
    article_title: "Vol. 3 No. 1 SEPTEMBER 2023",
    article_abstract:
      "An analysis of reading habits among Nigerian youths and the role of libraries in promoting a culture of reading. The study emphasizes the importance of modernizing library services.",
    article_authors: "B.E Adeyemi",
    article_publish_date: "September 2023",
  },
  {
    article_image_src: "3.png",
    article_title: "Vol. 2 No. 4 JUNE 2023",
    article_abstract:
      "Investigating the challenges faced by public libraries in rural Nigeria. The paper discusses strategies for overcoming these challenges and improving library services.",
    article_authors: "C.D Ibrahim",
    article_publish_date: "June 2023",
  },
  {
    article_image_src: "4.png",
    article_title: "Vol. 2 No. 3 MARCH 2023",
    article_abstract:
      "The role of library automation systems in enhancing the efficiency of library operations. Case studies from various Nigerian institutions are examined.",
    article_authors: "D.F Okeke",
    article_publish_date: "March 2023",
  },
  {
    article_image_src: "5.png",
    article_title: "Vol. 2 No. 2 DECEMBER 2022",
    article_abstract:
      "A comprehensive review of the digitization projects in Nigerian libraries. The paper highlights successes, challenges, and future directions.",
    article_authors: "E.G Akpan",
    article_publish_date: "December 2022",
  },
  {
    article_image_src: "6.png",
    article_title: "Vol. 2 No. 1 SEPTEMBER 2022",
    article_abstract:
      "The impact of library services on community development in Nigeria. The research shows a strong correlation between library access and community growth.",
    article_authors: "F.H Okechukwu",
    article_publish_date: "September 2022",
  },
];

export const News = [
  {
    news_image_src: "1.png",
    news_title: "National Library Conference 2024 Announced",
    news_abstract:
      "The Nigerian Library Association has announced the dates for the 2024 National Library Conference. The event will feature keynote speakers from around the world and various workshops.",
    news_authors: "A.C Ukpabi",
    news_publish_date: "May 2024",
  },
  {
    news_image_src: "2.png",
    news_title: "New Digital Repository Launched",
    news_abstract:
      "A new digital repository has been launched to improve access to academic resources. This initiative aims to support researchers and students with a wealth of digital materials.",
    news_authors: "B.E Adeyemi",
    news_publish_date: "April 2024",
  },
  {
    news_image_src: "3.png",
    news_title: "Library Funding Increased by 20%",
    news_abstract:
      "The government has announced a 20% increase in funding for public libraries. This additional support will help libraries upgrade their facilities and expand their collections.",
    news_authors: "C.D Ibrahim",
    news_publish_date: "March 2024",
  },
  {
    news_image_src: "4.png",
    news_title: "Library Week Celebrations Across Nigeria",
    news_abstract:
      "Libraries across Nigeria are celebrating Library Week with various events, including book fairs, reading competitions, and workshops. The celebrations aim to promote literacy and library use.",
    news_authors: "D.F Okeke",
    news_publish_date: "February 2024",
  },
  {
    news_image_src: "5.png",
    news_title: "New Online Catalog System Implemented",
    news_abstract:
      "A new online catalog system has been implemented in several libraries to improve book tracking and user access. The system features an easy-to-use interface and advanced search options.",
    news_authors: "E.G Akpan",
    news_publish_date: "January 2024",
  },
  {
    news_image_src: "6.png",
    news_title: "Mobile Library Services Expanded to Rural Areas",
    news_abstract:
      "Mobile library services have been expanded to reach rural areas, providing access to books and educational resources to underserved communities. This initiative is expected to boost literacy rates.",
    news_authors: "F.H Okechukwu",
    news_publish_date: "December 2023",
  },
];

export const Single_Article = {
  volume_label: "Vol. 3 No. 2",
  volume_year: "2023",
  article_doi_link_text: "10.1234/nla.v3n2.2023.001",
  article_doi_link_href: "https://doi.org/10.1234/nla.v3n2.2023.001",
  article_title_large:
    "The Impact of Digital Libraries on Academic Research in Nigeria",
  article_main_author: "A.C Ukpabi",
  article_other_authors: "B.E Adeyemi, C.D Ibrahim",
  dates: {
    published: "December 2023",
    revised: "November 2023",
    received: "October 2023",
    accepted: "November 2023",
  },
  article_views_count: "500",
  article_downloads_count: "120",
};

export const Single_News = {
  news_title: "National Library Conference 2024 Announced",
  news_image_src: "1.png",
  news_image_alt: "Announcement of the 2024 National Library Conference",
};

export const Single_Article_HTML = `
<iframe
  src="XXARTICLESOURCEXX"
  frameborder="0"
  scrolling="auto"
  height="100%"
  width="100%"
></iframe>

`;

export const Single_News_HTML = `
    <h4 class="header" id="headline">Upcoming Conference: The Impact of Digital Libraries on Academic Research in Nigerian Universities</h4>
    <p>
        Nigerian universities are set to host a groundbreaking conference focused on the transformative impact of digital libraries on academic research. Scheduled to take place in Abuja from June 12-14, 2024, this event will bring together scholars, librarians, and technology experts from across the country and beyond.
    </p>
    <span class="end-abs"></span>

    <h4 id="details">Conference Details</h4>
    <p>
        The conference aims to explore how digital libraries have revolutionized access to information, enhanced research capabilities, and contributed to academic excellence in Nigerian higher education institutions. Keynote speakers include Professor Adebayo Adeniran from the University of Lagos and Dr. Funke Akinola from the National Library of Nigeria.
    </p>
    <p>
        Attendees will have the opportunity to participate in various sessions covering topics such as:
        <ul>
            <li>Technological advancements in digital library systems</li>
            <li>Case studies of successful digital library implementations</li>
            <li>The future of digital libraries in developing countries</li>
            <li>Challenges and solutions in digital library management</li>
        </ul>
    </p>

    <h4 id="registration">Registration Information</h4>
    <p>
        Registration is now open for all interested participants. Early bird registration discounts are available until May 31, 2024. To register, visit the conference website at <a href="https://www.digitallibraryconference.ng" class="referenceLink">www.digitallibraryconference.ng</a>.
    </p>

    <h4 id="contact">Contact Information</h4>
    <p>
        For further information, please contact the conference organizing committee at <a href="mailto:info@digitallibraryconference.ng" class="referenceLink">info@digitallibraryconference.ng</a> or call +234 800 123 4567.
    </p>



`;
