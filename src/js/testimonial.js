let cardTestimonial = document.getElementById("testimonialBox");

const testimonials = fetch("/json/testimonial.json").then((response) => {
    response.json().then((dados) => {
        const total = Object.keys(dados.testimonial).length;
        console.log("Total de produtos:", total);
        for(let i = 1; i <= total; i++){
        cardTestimonial.innerHTML +=
        `
        <div class="testimonial swiper-slide">
            <i class="fa-solid fa-quote-left"></i>
            <div class="testimonial-text">
                <span>${dados.testimonial[i].description}</span>
            </div>
            <div class="testimonial-profile">
                <div class="profile-picture">
                    <img src="${dados.testimonial[i].img}">
                </div>

                <div class="profile-name">
                    <span>${dados.testimonial[i].name}</span>
                    <div class="profile-rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="testimonial-link">
                <a href="${dados.testimonial[i].link}">Ver comentario</a>
            </div>
        </div>
        `
        }
    })
});

const swiperTestimonial = new Swiper('.testimonial-container', {
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    }
});