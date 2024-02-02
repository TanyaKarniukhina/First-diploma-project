const root = document.querySelector("#root");

//функция для создания элементов

function createElement(tag, className, text, location, attribute, value) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    location.append(element);
    if (attribute && value) {
        element.setAttribute(attribute, value);
    }
    return element;
}

//создаем элементы шапки сайта

const header = createElement("header", "header", "", root);
const headerBlock = createElement("div", "header-block", "", header);
const headerLogo = createElement("i", "fab fa-pinterest", "", headerBlock);
const search = createElement("input", "header-block__search", "", headerBlock, "placeholder", "Поиск");
const noticeIcon = createElement("i", "fas fa-bell", "", headerBlock);
const messageIcon = createElement("i", "fas fa-message", "", headerBlock);
const dropdown = createElement("div", "header-block-dropdown", "", headerBlock)
const dropdownButton = createElement("button", "header-block-dropdown__button", "Выбрать доску", dropdown);
const dropdownMenu = createElement("ul", "header-block-dropdown-menu", "", dropdown)
const dropdownMenuFirstItem = createElement("li", "header-block-dropdown-menu__item", "Доска 1", dropdownMenu);
const dropdownMenuSecondItem = createElement("li", "header-block-dropdown-menu__item", "Доска 2", dropdownMenu);
const dropdownMenuThirdItem = createElement("li", "header-block-dropdown-menu__item", "Доска 3", dropdownMenu);

//функция раскрывающегося списка

function showDropdown() {
    const dropdownContent = document.querySelector(".header-block-dropdown");
    const dropdownButton = dropdownContent.querySelector(".header-block-dropdown__button"); 
    dropdownButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show-dropdown");
    });
}

showDropdown();

//создание контейнера, в котором будут отображаться посты

const frame = createElement("main", "frame", "", root);

//функция для создания одного поста

function createOnePost(data) {
    const post = createElement("div", "post", "", frame);
    const picture = createElement("div", "post-picture", "", post);
    const photo = createElement("img", "post-picture__photo", "", picture);
    const menuIcon = createElement("i", "fas fa-ellipsis", "", picture);
    const description = createElement("div", "post-description", "", post);
    const avatar = createElement("img", "post-description__avatar", "", description);
    const hashtag = createElement("h4", "post-description__hashtag", "", description);
    return post;
}

//функция для получения данных с сервера

const URL = "https://65b8aaf1b71048505a892637.mockapi.io/Pinterest"
async function getData() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

//создания постов на основе данных с сервера

getData().then(data => {
    data.forEach(postData => {
        const postElement = createOnePost(postData);
        const photo = postElement.querySelector(".post-picture__photo");
        const avatar = postElement.querySelector(".post-description__avatar");
        const hashtag = postElement.querySelector(".post-description__hashtag");
        photo.setAttribute("src", `${postData.picture}?random=${postData.id}`);
        avatar.setAttribute("src", `${postData.avatar}`);
        hashtag.innerText = `#${postData.hashtag}`;
    });

    showPostMenu();
})

//поиск поста по хештэгу

search.addEventListener("input", function(e) {
    const allPosts = document.querySelectorAll(".post");
    const currentInputValue = e.target.value;
    allPosts.forEach(function(post) {
        const hashtag = post.querySelector(".post-description__hashtag");
        const hashtagValue = hashtag.innerText;
        if (hashtagValue.includes(currentInputValue)) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
});

//создание меню поста

function showPostMenu() {
    const postPictures = document.querySelectorAll(".post-picture");
    postPictures.forEach(picture => {
        const menu = createElement("div", "post-picture-menu", "", picture);
        const addButtonContainer = createElement("div", "post-picture-menu-container", "", menu);
        const addToTheBoardButton = createElement("button", "post-picture-menu-container__add", "Добавить на доску", addButtonContainer);
        const rightIcon = createElement("i", "fas fa-chevron-right", "", addButtonContainer);
        const complainButton = createElement("button", "post-picture-menu__complain", "Пожаловаться на пин", menu);
        const menuIcon = picture.querySelector(".fa-ellipsis");
        menuIcon.addEventListener("click", function() {
            menu.classList.toggle("show-menu");
        });
        
        showBoardMenu(menu);
        showComplainMenu(menu);
    });
}

//создание меню с выбором досок

function showBoardMenu(menu) {
    const boardMenu = createElement("div", "post-picture-menu-boards", "", menu);
    const firstBoard = createElement("button", "post-picture-menu-boards__button", "Доска 1", boardMenu);
    const secondBoard = createElement("button", "post-picture-menu-boards__button", "Доска 2", boardMenu);
    const thirdBoard = createElement("button", "post-picture-menu-boards__button", "Доска 3", boardMenu);
    const addToTheBoardButton = menu.querySelector(".post-picture-menu-container__add");
    addToTheBoardButton.addEventListener("click", function() {
        boardMenu.classList.toggle("show-board-menu");
    });
}

//создание меню с жалобами

function showComplainMenu(menu) {
    const complainMenu = createElement("div", "post-picture-menu-complain", "", menu); 
    const complainHeadline = createElement("h4", "post-picture-menu-complain__headline", "Жалоба на пин", complainMenu);
    const complainOptions = createElement("div", "post-picture-menu-complain-options", "", complainMenu);
    const complainButtons = createElement("div", "post-picture-menu-complain-buttons", "", complainMenu);
    const cancelButton = createElement("button", "post-picture-menu-complain-buttons__cancel", "Отмена", complainButtons);
    const sendButton = createElement("button", "post-picture-menu-complain-buttons__send", "Отправить", complainButtons);

    const complainOptionsData = [
        "Спам",
        "Изображения обнаженного тела, порнография или содержимое сексуального характера",
        "Членовредительство",
        "Ложная информация",
        "Агрессивные действия",
        "Опасные товары",
        "Преследование или критика",
        "Сцены насилия",
        "Нарушение конфиденциальности",
        "Это моя интеллектуальная собственность"
    ];

    complainOptionsData.forEach(optionText => {
        const option = createElement("div", "post-picture-menu-complain-options-option", "", complainOptions);
        const radioButton = createElement("input", "post-picture-menu-complain-options__button", "", option, "type", "radio");
        radioButton.setAttribute("name", "complainOption");
        const complainText = createElement("h4", "post-picture-menu-complain-options__text", optionText, option);

        radioButton.addEventListener('change', function(e) {
            if (!e.target.checked) {
                sendButton.disabled = true;
                sendButton.classList.remove("active-send-button");
            } else {
                sendButton.disabled = false;
                sendButton.classList.add("active-send-button");
            }
        });
    });

    const complainButton = menu.querySelector(".post-picture-menu__complain");
    complainButton.addEventListener("click", function() {
        complainMenu.classList.toggle("show-complain-menu");
    });

    cancelButton.addEventListener("click", function() {
        complainMenu.classList.remove("show-complain-menu");
    });
}
