const tabsBtn = document.querySelectorAll(".tab_choice");
const tabsItems = document.querySelectorAll(".tabs_content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
var acc = document.getElementsByClassName("accordion"),
    i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        for (j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("show");

            } else {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }

        }

    }
}


// const anchors = document.querySelectorAll('.nav__link')

// for (let anchor of anchors) {
//     anchor.addEventListener("click", function (event) {
//         event.preventDefault();
//         const blockID = anchor.getAttribute('href')
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         })
//     });
// }


