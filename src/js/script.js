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

// callback-modal

const showCallbackModalBtns = document.querySelectorAll('.show-callback-modal');
const closeCallbackModalBtn = document.querySelector('.callback-modal .close-btn');
const callbackModal = document.querySelector('.callback-modal');

const showCallbackModal = () => {
    showCallbackModalBtns.forEach(el => {
        el.addEventListener('click' , (e)=> {
            e.preventDefault();
            overlay.classList.add('open');
            callbackModal.classList.add('active');
        })
    })
}
const hideCallbackModal = () => {
    overlay.classList.remove('open');
    callbackModal.classList.remove('active');
}
if (showCallbackModalBtns) {
    showCallbackModal();
    closeCallbackModalBtn?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
    overlay?.addEventListener('click' , ()=> {
        hideCallbackModal()
    })
}


// phoneSelect

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



// header logo-svg animation

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



// main-page swipers block

const textSwiper = document.querySelector('.text-swiper');
const pictureSwiper = document.querySelector('.picture-swiper');

if (textSwiper && pictureSwiper) {
    let swiperTxt = new Swiper(textSwiper, {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.text-swiper-pagination',
            clickable: true
        }
    });

    let swiperPic = new Swiper(pictureSwiper, {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.picture-swiper-button-next',
            prevEl: '.picture-swiper-button-prev',
        },
    });

    // Flag to prevent infinite loop
    let isSyncing = false;

    swiperTxt.on('slideChange', function () {
        if (!isSyncing) {
            isSyncing = true;
            swiperPic.slideTo(swiperTxt.realIndex);
            isSyncing = false;
        }
    });

    swiperPic.on('slideChange', function () {
        if (!isSyncing) {
            isSyncing = true;
            swiperTxt.slideTo(swiperPic.realIndex);
            isSyncing = false;
        }
    });
}



// custom select

const servicesSelect =  document.querySelector('.services');
const servicesOptions = document.querySelectorAll('.services-list li');
const servicesSelectBody = document.querySelector('.services-list');


if (servicesSelect) {
    servicesSelect.addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesSelect.querySelector('p').addEventListener('click' , () => {
        servicesSelectBody.classList.add('active');
    })
    servicesOptions.forEach(el => {
        el.addEventListener('click' , ()=> {
            servicesSelect.querySelector('p').innerHTML = el.innerHTML;
            servicesSelect.dataset.current = el.dataset.value;
            servicesSelectBody.classList.remove('active')
        })
    })
    document.addEventListener('click' , (e)=> {
        if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
            servicesSelectBody.classList.remove('active');
        }
    })
}


// modals

const showModal = (modal) => {
    overlay.classList.add('open');
    modal.classList.add('active');
}
const closeModal = (modal) => {
    overlay.addEventListener('click' , () => {
        overlay.classList.remove('open');
        modal.classList.remove('active');
    })
    const closeBtns =  modal.querySelectorAll('.close-btn');
    closeBtns?.forEach(closeBtn => {
        closeBtn.addEventListener('click' , () => {
            overlay.classList.remove('open');
            modal.classList.remove('active');
        })
    })

}

const documentsModal = document.querySelector('.documents-modal');
const newsSingleModal = document.querySelector('.news-single-modal');
const contactsModal = document.querySelector('.contacts-modal');
const showNewsSingleModalBtns = document.querySelectorAll('.news-card');
const showContactsModalBtns =  document.querySelectorAll('.show-contacts-modal');
const showDocumentsModalBtns =  document.querySelectorAll('.show-documents-modal');

showNewsSingleModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(newsSingleModal);
        closeModal(newsSingleModal);
    })
})
showContactsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(contactsModal);
        closeModal(contactsModal);
    })
})

showDocumentsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(documentsModal);
        closeModal(documentsModal);
    })
})


// gallery-modal
const galleryModal = document.querySelector('.gallery-modal');
const galleryModalImage = document.querySelector('.gallery-body .gallery-img img');
const galleryModalCloseBtn = document.querySelector('.gallery-modal .close-modal span');
const galleryThumbs = document.querySelectorAll('.gallery-content');

function showGalleryModal() {
    galleryThumbs.forEach(el=> {
        el.addEventListener('click' , ()=> {
            galleryModalImage.src = el.closest('.gallery-content').querySelector('img').src;
            galleryModal.classList.add('open');
            overlay.classList.add('open');
        })
    })
}
function closeGalleryModal() {
    galleryModalCloseBtn.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
    overlay.addEventListener('click' , ()=> {
        galleryModal.classList.remove('open');
        overlay.classList.remove('open');
    })
}

showGalleryModal();
closeGalleryModal();