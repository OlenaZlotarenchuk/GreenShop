document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      title: "Barberton Daisy",
      price: "$119.00",
      oldPrice: "",
      image: "img/plants/plant1.webp",
      labels: [
        {
          "type": "new",
          "value": "New"
        }
      ],
    },
    {
      id: 2,
      title: "Angel Wing Begonia",
      price: "$169.00",
      oldPrice: "",
      image: "img/plants/plant2.webp",
      labels: []
    },
    {
      id: 3,
      title: "African Violet",
      price: "$199.00",
      oldPrice: "$229.00",
      image: "img/plants/plant3.webp",
      labels: [
        {
          "type": "sale",
          "value": "13% OFF"
        }
      ],
    },
    {
      id: 4,
      title: "Beach Spider Lily",
      price: "$119.00",
      oldPrice: "$229.00",
      image: "img/plants/plant4.webp",
      labels: [
        {
          "type": "sale",
          "value": "13% OFF"
        }
      ],
    },
    {
      id: 5,
      title: "Blushing Bromeliad",
      price: "$139.00",
      oldPrice: "",
      image: "img/plants/plant5.webp",
      labels: []
    },
    {
      id: 6,
      title: "Aluminum Plant",
      price: "$179.00",
      oldPrice: "",
      image: "img/plants/plant6.webp",
      labels: []
    },
    {
      id: 7,
      title: "Bird's Nest Fern",
      price: "$99.00",
      oldPrice: "",
      image: "img/plants/plant7.webp",
      labels: [
        {
          "type": "new",
          "value": "New"
        }
      ],
    },
    {
      id: 8,
      title: "Broadleaf Lady Palm",
      price: "$59.00",
      oldPrice: "",
      image: "img/plants/plant8.webp",
      labels: [
        {
          "type": "new",
          "value": "New"
        }
      ],
    },
    {
      id: 9,
      title: "Chinese Evergreen",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant9.webp",
      labels: []
    },
    {
      id: 10,
      title: "Broadleaf Lady Palm",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant10.webp",
      labels: []
    },
    {
      id: 11,
      title: "Bird's Nest Fern",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant11.webp",
      labels: []
    },
    {
      id: 12,
      title: "Chinese Evergreen",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant12.webp",
      labels: []
    },
    {
      id: 13,
      title: "Aluminum Plant",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant13.webp",
      labels: []
    },
    {
      id: 14,
      title: "Blushing Bromeliad",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant14.webp",
      labels: []
    },
    {
      id: 15,
      title: "Chinese Evergreen",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant15.webp",
      labels: []
    },
    {
      id: 16,
      title: "Chinese Evergreen",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant16.webp",
      labels: []
    },
    {
      id: 17,
      title: "Beach Spider Lily",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant17.webp",
      labels: []
    },
    {
      id: 18,
      title: "Bird's Nest Fern",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant18.webp",
      labels: []
    },
    {
      id: 19,
      title: "Chinese Evergreen",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant19.webp",
      labels: []
    },
    {
      id: 20,
      title: "Beach Spider Lily",
      price: "$39.00",
      oldPrice: "",
      image: "img/plants/plant20.webp",
      labels: [{
        "type": "new",
        "value": "New"
      }]
    }

  ];

  const productsPerPage = 9;
  let currentPage = 1;

  const productsContainer = document.getElementById("products-container");
  const paginationButtons = document.getElementById("pagination-buttons");
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");

  // Функція для відображення продуктів
  function renderProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    // Очищаємо попередній контент
    productsContainer.innerHTML = "";

    // Відображаємо продукти
    products.slice(start, end).forEach((product) => {
      let labelsHTML = '';

      // Додавання ярликів відповідно до HTML
      if (product.labels && product.labels.length > 0) {
        product.labels.forEach((label) => {
          if (label.type === "new") {
            labelsHTML += `
                <div class="item-product__label item-product__label_new">${label.value}</div>
              `;
          } else if (label.type === "sale") {
            labelsHTML += `
                <div class="item-product__label item-product__label_sale">${label.value}</div>
              `;
          }
        });
      }

      const productHTML = `
          <article data-pid="${product.id}" class="products__item item-product">
            <div class="item-product__labels">
              ${labelsHTML}
            </div>
            <div class="item-product__wrapper">
              <a href="#" class="item-product__image">
                <img src="${product.image}" alt="${product.title}">
              </a>
              <div class="item-product__actions actions-product">
                <div class="actions-product__body">
                  <a href="#" class="actions-product__link actions-product__button _icon-cart"></a>
                  <a href="#" class="actions-product__link _icon-favourite"></a>
                  <a href="#" class="actions-product__link _icon-search"></a>
                </div>
              </div>
            </div>
            <div class="item-product__body">
              <div class="item-product__content">
                <h5 class="item-product__title h5">
                  <a href="#" class="item-product__title-link">${product.title}</a>
                </h5>
              </div>
              <div class="item-product__prices">
                <div class="item-product__price">${product.price}</div>
                <div class="item-product__price item-product__price_old">${product.oldPrice}</div>
              </div>
            </div>
          </article>
        `;
      productsContainer.innerHTML += productHTML;
    });

    updatePaginationButtons(page);
  }

  // Функція для оновлення кнопок пагінації
  function updatePaginationButtons(page) {
    const totalPages = Math.ceil(products.length / productsPerPage);

    paginationButtons.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const buttonHTML = `
          <button class="page-button ${i === page ? "active" : ""}" data-page="${i}">
            ${i}
          </button>
        `;
      paginationButtons.innerHTML += buttonHTML;
    }

    // Включаємо/вимикаємо стрілки
    prevPageButton.disabled = page === 1;
    nextPageButton.disabled = page === totalPages;

    // Додаємо обробники подій
    document.querySelectorAll(".page-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        currentPage = parseInt(e.target.dataset.page);
        renderProducts(currentPage);
      });
    });
  }

  // Обробники для стрілок
  prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentPage);
    }
  });

  nextPageButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      currentPage++;
      renderProducts(currentPage);
    }
  });

  // Ініціалізація
  renderProducts(currentPage);

});
