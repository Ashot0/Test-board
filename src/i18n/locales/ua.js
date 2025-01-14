const ua = {
	Home: "Головна",
	BgPin: "Картинка з пінами",
	Carousel: "Карусель",
	Form: "Форма",
	Map: "Карта",
	backgroundPinText:
		"Зберігання пінів відбувається за допомогою mockAPI. Усі піни завантажуються при завантаженні сторінки та синхронізуються на сторінці для всіх користувачів. Кожні 3 секунди відбувається реверсивний запит синхронізації змін. При спробі видалення пінів відсутніх на сервері відбудеться синхронізація 🧐",
	carouselTextTitle1: "Swiper карусель",
	carouselTextTitle2: "Рукописна карусель",
	carouselText:
		"Кожен слайдер це окремий компонент CarouselBlock із прокинутими даними для слайдера. Сама зв'язана карусель реалізується за рахунок того, що у всіх CarouselBlock є можливість прокинути змінну активного слайда і відстежувати її зміну, за якою відпрацьовувати синхронізацію 🧐",
	carouselText2:
		"Слайдери реалізовані за допомогою бібліотеки Swiper.js та взаємно пов'язані один з одним. Після натискання на замок слайдери синхронізуються та зв'язуються/відв'язуються 🧐",
	formBlockFirstName: "Ім'я",
	formBlockLastName: "Прізвище",
	formBlockPhone: "Номер телефона",
	formBlockName: "Нікнейм",
	formBlockEmail: "Email",
	formBlockPassword: "Пароль",
	formBlockAccept1: "Даю згоду на те, щоб поставити цю галочку",
	formBlockAccept2: "Підтверджую що даю згоду на те, щоб поставити цю галочку",
	formBlockAccept3: "Стверджую, що даю згоду на те, щоб поставити цю галочку",
	formBlockAccept4: "Даю згоду на те, щоб поставити і цю галочку",
	formBlockAccept5: "Так само даю згоду на те, щоб поставити цю галочку",
	formBlockMessage: "Повідомлення",
	accept: "Підтвердження",
	errors: {
		firstNameTooShort: "Ім'я повинно бути більше трьох символів",
		firstNameCapital: "Ім'я повинно починатися з великої літери",
		lastNameTooShort: "Прізвище повинно бути більше трьох символів",
		lastNameCapital: "Прізвище повинно починатися з великої літери",
		phoneRequired: "Номер телефону обов'язковий",
		phoneInvalid: "Введіть коректний номер телефону",
		nameTooShort: "Нікнейм повинен бути більше трьох символів",
		emailRequired: "Email обов'язковий",
		emailInvalid: "Введіть коректний email",
		passwordTooShort: "Пароль повинен бути від 6 до 24 символів",
		passwordMissingCase: "Пароль повинен містити великі та малі літери",
		passwordMissingDigit: "Пароль має містити хоча б одну цифру",
		passwordMissingSpecial:
			"Пароль повинен містити спеціальні символи '@$!%*?&_-'",
		acceptRequired: "Ви повинні встановити цей прапорець, щоб продовжити",
		messageRequired: "Ви не можете відправити порожнє повідомлення",
	},
	mapBlock: "Розділ тимчасово не доступний через відсутність API ключа 🥲",
	submit: "Надiслати",
	openModal: "Вiдкрити Модалку",
	openPopup: "Вiдкрити Попап",
	openDropdown: "Вiдкрити Дропдаун",
	cancel: "Вiдмiнити",
	modalExample: "Приклад модального вiкна",
	popupExample: "Приклад попапа",
	close: "Закрити",
	option: "Опцiя",
	addElement: "Додати елемент",
	bubbleSort: "Пухирцеве сортування",
	sourceArray: "Початковий масив",
	sort: "Відсортувати",
	sortedArray: "Відсортований масив",
	progressBarDesc:
		"Умовна вказівка ​​числа заповненості прогрес бару від 0 до 300",
};

export default ua;
