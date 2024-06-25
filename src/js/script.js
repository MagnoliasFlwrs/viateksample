// menu

const menuModal = document.querySelector('.menu-modal');
const overlay = document.querySelector('.overlay');
const closeMenuBtn = document.querySelector('.menu-modal .close-btn');
const burgerBtn = document.querySelector('.burger-btn');

const showMenuModal = () => {
    overlay.classList.add('open');
    menuModal.classList.add('active');
}
const hideMenuModal = () => {
    overlay.classList.remove('open');
    menuModal.classList.remove('active');
}
burgerBtn?.addEventListener('click' , ()=> {
    showMenuModal()
})

closeMenuBtn?.addEventListener('click' , ()=> {
    hideMenuModal()
})
overlay?.addEventListener('click' , ()=> {
    hideMenuModal()
})

const phoneSelect = document.querySelector('.phone-select .header-phones');
const phoneSelectWraps = document.querySelectorAll('.phone-select');


phoneSelectWraps?.forEach(phoneSelectWrap => {
    const phoneSelect = phoneSelectWrap.querySelector('.header-phones');
    phoneSelect.addEventListener('click' , (e)=> {
        e.stopPropagation()
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.toggle('active');
        phoneSelect.classList.toggle('active');
        currentSelectWrap.classList.toggle('active');
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')

        if (!e.target.closest('.phone-select') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
                let currentSelectWrap = el.closest('.phone-select');
                let currentSelectPhoneSelect = currentSelectWrap.querySelector('.header-phones');
                console.log(currentSelectWrap)
                currentSelectWrap.classList.remove('active');
                currentSelectPhoneSelect.classList.remove('active');
            })
        }
    })
})


// logo-svg animation


const animatedLogo = document.querySelector('.animated-svg');
const gradient1 = document.getElementById('paint0_linear_2007_495');
const gradient2 = document.getElementById('paint2_linear_2007_495');
const gradient3 = document.getElementById('paint1_linear_2007_495');


animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-320.394');
    animate.setAttribute('to', '-100');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-100');
    animate.setAttribute('to', '-320.394');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient1.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-243.556');
    animate.setAttribute('to', '0');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '0');
    animate.setAttribute('to', '-243.556');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient2.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseover', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '-310.394');
    animate.setAttribute('to', '100');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient3.appendChild(animate);
    animate.beginElement();
});

animatedLogo.addEventListener('mouseout', () => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'x1');
    animate.setAttribute('from', '100');
    animate.setAttribute('to', '-310.394');
    animate.setAttribute('dur', '0.3s');
    animate.setAttribute('fill', 'freeze');
    gradient3.appendChild(animate);
    animate.beginElement();
});


const servicesSwiper = document.querySelector('.services-swiper');

if (servicesSwiper) {
    const swiper = new Swiper(servicesSwiper, {
        slidesPerView:1.3,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.custom-swiper-scrollbar',
        },
        breakpoints: {
            500: {
                direction: 'horizontal',
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            590: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 20
            },
            830: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 30
            },
            1150: {
                direction: 'horizontal',
                slidesPerView: 4,
                spaceBetween: 30
            },
            1250: {
                direction: 'horizontal',
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
}

const gallerySwiper = document.querySelector('.gallery-swiper');

if (gallerySwiper) {
    const swiper2 = new Swiper(gallerySwiper, {
        slidesPerView:1.3,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.gallery-custom-swiper-scrollbar',
        },
        breakpoints: {
            500: {
                direction: 'horizontal',
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            590: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 20
            },
            830: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 30
            },
            1150: {
                direction: 'horizontal',
                slidesPerView: 4,
                spaceBetween: 30
            },
            1250: {
                direction: 'horizontal',
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
}