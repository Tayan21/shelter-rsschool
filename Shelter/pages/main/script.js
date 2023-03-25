/*
let btnMenu = document.querySelectorAll('.btn');
console.log(btnMenu);
btnMenu.forEach (item => {
    item.addEventListener('mouseover', (e) =>{
        btnMenu.forEach(el=>{el.classList.remove('active');});
        item.classList.add('active')
    })
})

*/
const burger = document.querySelector('.menu-btn');
const menuItem = document.querySelectorAll('.btn');
const mobileMenu = document.querySelector('.menu-box');
const wrapper = document.querySelector('.menu-wrapper');
const headerLogo = document.querySelector('.header_logo');

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  mobileMenu.classList.toggle('_active');
  wrapper.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  headerLogo.classList.toggle('hidden');
})

menuItem.forEach(el => {
  el.addEventListener('click', (e) => {
    if(burger.classList.contains('_active')){
      burger.classList.remove('_active');
      mobileMenu.classList.remove('_active');
      wrapper.classList.remove('_active');
      document.body.classList.remove('_lock');
      headerLogo.classList.remove('hidden');
    }    
  });
});

wrapper.addEventListener('click', () => {
  if(burger.classList.contains('_active')){
    burger.classList.remove('_active');
    mobileMenu.classList.remove('_active');
    wrapper.classList.remove('_active');
    document.body.classList.remove('_lock');
    headerLogo.classList.remove('hidden');
  }    
})




const petsJson = [
    {
      "name": "Jennifer",
      "img": "../Shelter/assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../Shelter/assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../Shelter/assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../Shelter/assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../Shelter/assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../Shelter/assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../Shelter/assets/images//pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../Shelter/assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]

class ModalWindow {
  constructor() {
    this.overlay = '';
    this.modal = '';
    this.modalContent = '';
    this.modalCloseButton = '';    
  }

  bildModalWindow(content) {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('overlay');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.modalContent = document.createElement('div');
    this.modalContent.classList.add('modal__wrapper');

    this.modalCloseButton = document.createElement('button');
    this.modalCloseButton.classList.add('modal__close-button');
    this.modalCloseButton.innerHTML= `<svg class="cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="cross" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
    </svg>`;

    this.setContent(content);

    this.appendModalElements();

    this.buildEvents();

    this.openModal();
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHtml = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }    
  }

  appendModalElements() {    
    this.modal.append(this.modalContent);
    this.modal.append(this.modalCloseButton);
    this.overlay.append(this.modal);
  }

  buildEvents() {
    this.modalCloseButton.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay); 
  }

  closeModal(e) {
    let target = e.target.classList;

    if (target.contains('overlay') || target.contains('modal__close-button') || target.contains('cross')) {
      let overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.remove();
      }

      document.body.classList.remove('_lock');
    }
  }
}




class Pet extends ModalWindow {
  constructor({name, img, type, breed, description, age, inoculations, diseases, parasites}) {
    super();
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateCardTemplate() {
    let template = '';
    let pet = document.createElement('div');
    pet.className = 'pet-card';
    template += `<img src=${this.img} alt="${this.name}">`;
    template += `<p>${this.name}</p>`;
    template += `<a href="">Learn more</a>`;
    template += `</div>`;
    pet.innerHTML = template;
    
    pet.addEventListener("click", (event) => { 
      if (event.currentTarget.closest('.pet-card')) {
        document.body.classList.toggle('_lock');
        this.renderModal();
      }
    });
    return pet;
  }

  generateModalCardTemplate() {
    let template = '';
    let pet = document.createElement('div');
    pet.className = 'modal__content';
    template += `<img class="modal__img" src=${this.img} alt="${this.name}">`;
      
    template += `<div class="modal__inner">`;
    
    template += `<h3 class="content__title">${this.name}</h3>`;
    template += `<h4 class="content__type">${this.type} - ${this.breed}</h4>`;
    template += `<h5 class="content__description">${this.description}</h5>`;

    template += `<ul class="content__list">`;
    template += `<li class="content__list-item"><span class="item-bold">Age:</span> ${this.age}</li>`;
    template += `<li class="content__list-item"><span class="item-bold">Inoculations:</span> ${this.inoculations}</li>`;
    template += `<li class="content__list-item"><span class="item-bold">Diseases:</span> ${this.diseases}</li>`;
    template += `<li class="content__list-item"><span class="item-bold">Parasites:</span> ${this.parasites}</li>`;
    template += `</ul>`;
    template += `</div>`;
    template += `</button>`;
    template += `</div>`;

    pet.innerHTML = template;
    return pet;
  }

  renderModal() {
    let content = this.generateModalCardTemplate();
    super.bildModalWindow(content);
  }

  toString() {
    return this.name;
  }
}





function shuffleArray(arr) {
  let array = [...arr];
  for (var i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function convertJsonEntitiesToPets(jsonList) {
  return jsonList.map(json => new Pet(json));
}

// Найти направление движение карусели
function isRightMove(animationName) { 
return animationName.split('-')[1] === "right"; 
}

// Найти размер отображаемых элементов на карусели
function resolveViwedCaroselSize() {
const screenWidth = window.innerWidth;
if (screenWidth >= 1280) return 3;
if (screenWidth >= 768) return 2;
return 1;
}

// Генерация первых элементов карусели
function generateFirstCaroselElements() {
let newCaroselElements = [];
newCaroselElements.push(...getRandomNotUsedElements([], VIWED_ELEMENTS_SIZE));  
return fillNeighboringElements(newCaroselElements);
};

// Заполнить новыми случайными элементами слева и справа основных
function fillNeighboringElements(vivedElements) {
let leftPart = getRandomNotUsedElements(vivedElements, VIWED_ELEMENTS_SIZE);
let rightPart = getRandomNotUsedElements(vivedElements, VIWED_ELEMENTS_SIZE);

vivedElements.unshift(...leftPart);
vivedElements.push(...rightPart);

return vivedElements;
}

// Получить случайные классы животных определённого размера, исключая уже использованные эелементы
function getRandomNotUsedElements(alreadyUsedElementsArr, elementsCount) {
let notUsedElements = [...PETS].filter(pet => !alreadyUsedElementsArr.includes(pet));
notUsedElements = shuffleArray(notUsedElements);
return notUsedElements.slice(0, elementsCount);
};

// Сдвинуть карусель
function moveCaroselView(animationEvent) {
let isRight = isRightMove(animationEvent.animationName);
petsCarousel = moveCaroselElements(isRight);

let carosel = document.querySelector('.slider-inner');
let caroselElements = document.querySelectorAll('.pet-card');

for (let i = 0; i < VIWED_ELEMENTS_SIZE; i++) {
  if (isRight) {
    CARUSEL_CONTENT.classList.remove('transition-right');

    caroselElements[i].remove();
    caroselElements[i + VIWED_ELEMENTS_SIZE].replaceWith(petsCarousel[i].generateCardTemplate());
    carosel.append(petsCarousel[petsCarousel.length - VIWED_ELEMENTS_SIZE + i].generateCardTemplate());
  
  } else {
    CARUSEL_CONTENT.classList.remove('transition-left');

    caroselElements[caroselElements.length - (i + 1)].remove();
    caroselElements[i + VIWED_ELEMENTS_SIZE].replaceWith(petsCarousel[petsCarousel.length - VIWED_ELEMENTS_SIZE + i].generateCardTemplate());
    carosel.prepend(petsCarousel[i].generateCardTemplate());
  }    
}
BUTTON_LEFT.addEventListener("click", carouselLeft);
BUTTON_RIGHT.addEventListener("click", carouselRight);
}

// Сдвинуть элемент в нужную сторону и пересоздать левые и правые элементы
function moveCaroselElements(isRightMove) {
let upptededPetsCarousel = [...petsCarousel];

let nextViewedElements = isRightMove 
  ? upptededPetsCarousel.slice(-VIWED_ELEMENTS_SIZE)
  : upptededPetsCarousel.slice(0, VIWED_ELEMENTS_SIZE);
return fillNeighboringElements(nextViewedElements);
}

// Инициализация элементов карусели
function initializeCaroselElements() {
CARUSEL_CONTENT.innerHTML = '';
petsCarousel.forEach(pet => {
  CARUSEL_CONTENT.append(pet.generateCardTemplate());
});
}

// Нажатие карусели вправо
const carouselRight = () => {
CARUSEL_CONTENT.classList.add('transition-right');    
BUTTON_LEFT.removeEventListener("click", carouselLeft);
BUTTON_RIGHT.removeEventListener("click", carouselRight);
}

// Нажатие карусели влево
const carouselLeft = () => {
CARUSEL_CONTENT.classList.add('transition-left');  
BUTTON_LEFT.removeEventListener("click", carouselLeft);
BUTTON_RIGHT.removeEventListener("click", carouselRight);
}

// Все существующие животные
const PETS = convertJsonEntitiesToPets(petsJson);

// Количество отображаемых элементов на карусели
const VIWED_ELEMENTS_SIZE = resolveViwedCaroselSize();

// Карусель животных
let petsCarousel = generateFirstCaroselElements();
console.log(petsCarousel.length);

// DOM Elements
const BUTTON_LEFT = document.querySelector('.left');
const BUTTON_RIGHT = document.querySelector('.right');
const CARUSEL_CONTENT = document.querySelector('.slider-inner');

BUTTON_LEFT.addEventListener("click", carouselLeft);
BUTTON_RIGHT.addEventListener("click", carouselRight);

CARUSEL_CONTENT.addEventListener("animationend", (e) => moveCaroselView(e));
initializeCaroselElements();

  