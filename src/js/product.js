AOS.init();
let cardProduct = document.getElementById("productBox");
let main = document.getElementById("modal");
const body = document.getElementById('main');

let productAll = [];

const teste = fetch("/json/product.json").then((response) => {
    response.json().then((dados) => {
        const total = Object.keys(dados.products).length;
        console.log("Total de produtos:", total);
        productAll = dados.products;
        for (let i = 1; i <= total; i++) {
            cardProduct.innerHTML +=
                `
        <div class="product swiper-slide">
            <a class="btn-open" onclick="openModal(${dados.products[i].id})" type="button">
                <img src="${dados.products[i].img}" alt="">
            </a>
        
            <div class="product-info">
                <span class="product-subtitle">${dados.products[i].subTitle}</span>
                <a onclick="openModal(${dados.products[i].id})" type="button">
                    <span class="product-title">${dados.products[i].name}</span>
                </a>
                <div class="product-rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        
            <div class="product-btns">
                <a type="button" class="product-btn" href="https://wa.me/551998733015?text=Olá,%20quero%20falar%20com%20vocês!">Solicitar Orçamento</a>
                <input type="button" class="product-btn-solicited" onclick="openModal(${dados.products[i].id})" value="Ver Mais">
            </div>
        </div>
        `
        }
    })
});


const openModal = (id) => {

    body.classList.toggle("scrol");
    let nameProduct = productAll[id].name;
    let imgProduct = productAll[id].img;
    let descProduct = productAll[id].description;
    let subTitleProduct = productAll[id].subTitle;
    let qtdProduct = productAll[id].qtd;
    let marcaProduct = productAll[id].marca;

    main.innerHTML =
        `
    <button class="btn-close" onclick="(closeModal())">
        <i class="fa-solid fa-xmark"></i>
    </button>
    <header class="modal-header">
        <h1 class="info-title">${nameProduct}</h1>
    </header>

    <section class="modal-section">
        <div class="modal-img">
            <img src="${imgProduct}">
        </div>
        
        <div class="modal-container-text">
            <div class="modal-text">
                <span class="modal-title">Descrição</span>
                <span class="modal-desc">${descProduct}</span>
                <div class="product-rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="modal-box-info">
                    <span class="modal-info"><b>Marca:</b> ${marcaProduct}</span>
                    <span class="modal-info"><b>Quantidade:</b> ${qtdProduct}</span>
                    <span class="modal-info"><b>Uso:</b> ${subTitleProduct}</span>
                </div>

            </div>

            <div class="modal-btn">
            <a type="button" class="product-btn" href="https://wa.me/551998733015?text=Olá,%20quero%20falar%20com%20vocês!">Solicitar Orçamento</a>
            </div>
        </div>
    </section>
    `
    main.showModal();
}

const closeModal = () => {
    body.classList.toggle("scrol");
    main.close();
}

const swiperProduct = new Swiper('.product-container-box', {
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: "auto",
    grabCursor: true, // Adiciona cursor de arrastarW
    navigation: {
        nextEl: ".button-next-p",
        prevEl: ".button-prev-p",
    },
    breakpoints: {
        // Configurações específicas para diferentes breakpoints
        320: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 15,
        },
        1024: {
            spaceBetween: 20,
        }
    }
});


// Adicione este código em um novo arquivo ou no final do body
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.getElementById('main');

    // Criar overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Abrir menu
    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Fechar menu ao clicar no overlay
    overlay.addEventListener('click', function () {
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});
