import $ from "jquery";

export const smoothScrollToSection = (sectionId: string, offset: number = 57) => {
  const targetElement = $(`#${sectionId}`);
  if (targetElement.length && targetElement.offset()) {
    $("html, body").animate(
      { scrollTop: targetElement.offset()!.top - offset },
      0
    );
  }
};

export const toggleMenu = () => {
  const menu = document.querySelector("#menu");
  if (menu) {
    menu.classList.contains("hidden")
      ? menu.classList.remove("hidden")
      : menu.classList.add("hidden");
  }
};

export const getContactHref = (contact: { img: string; link: string }) => {
  return contact.img === "gmail" 
    ? "mailto:smshahroz.allauddin@gmail.com" 
    : contact.link;
};

export const getContactTarget = (contact: { img: string }) => {
  return contact.img !== "gmail" ? "_blank" : "_self";
};
