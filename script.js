function toggleMenu(){
    const menu = document.querySelector(".menu-links");          // We select the menu-links element from html document//
    const icon = document.querySelector(".hamburger-icon");      // We select the hamburger-icon element from html document//
    menu.classList.toggle("open");                               // when clicked on menu-links it adds or removes the menu//
    icon.classList.toggle("open");                               // when clicked on hamburger-icon it adds or removes the menu//
}
