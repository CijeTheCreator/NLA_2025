export const selectElement = (selector) => {
  return document.querySelector(selector);
};

export const removeAllHrefs = () => {
  const link_elements = selectElements("a");
  for (let link_element of link_elements) {
    link_element.href = "";
  }
};

export const selectElements = (selector) => {
  return document.querySelectorAll(selector);
};

export const disappearElement = (selector) => {
  selectElement(selector).style.display = "none";
};

export const appearElement = (selector) => {
  selectElement(selector).style.display = "";
};

export const insertModal = (
  modalHtml,
  modalSelector,
  attachModalEventListeners
) => {
  if (!selectElement(modalSelector)) {
    selectElement("body").insertAdjacentHTML("beforeend", modalHtml);
    attachModalEventListeners();
  } else {
    appearElement(modalSelector);
  }
};

export const addEventListeners = (selector, handler, event = "click") => {
  if (document.querySelectorAll(selector).length == 0) {
    console.log(`Selected 0 elements for ${selector}`);
    return [];
  }
  const elements = document.querySelectorAll(selector);
  for (element of elements) {
    element.addEventListener(event, handler);
  }
};

export const addEventListener = (selector, handler, event = "click") => {
  if (!document.querySelector(selector)) {
    console.log("Failed to select ", selector);
    return;
  }
  document.querySelector(selector).addEventListener(event, handler);
};

export const insertInnerHtml = (selector, html) => {
  selectElement(selector).innerHTML = html;
};

export const applyPlaceholder = (html, placeholder, new_value) => {
  return html.replaceAll(placeholder, new_value);
};
