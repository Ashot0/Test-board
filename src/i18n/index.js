import { createI18n } from "vue-i18n";

const messages = {
	en: {
		Home: "Home",
		BgPin: "Bg-pin",
		Carousel: "Carousel",
		Form: "Form",
		Map: "Map",
		backgroundPinText:
			"All pins are loaded when the page loads. Click the 'Fetch Pins' button to manually update them from the server. If you attempt to delete pins not found on the server, synchronization will occur 🧐",
		carouselTextTitle1: "Swiper slider",
		carouselTextTitle2: "Handwritten carousel",
		carouselText:
			"Each slider is a separate CarouselBlock component that contains data for the slider. The carousel is implemented so that all CarouselBlocks can pass the active slide variable and track its changes, enabling synchronization 🧐",
		carouselText2:
			"Sliders are implemented using the Swiper.js library and are interconnected with each other 🧐",
		formBlockFirstName: "Firstname",
		formBlockLastName: "Lastname",
		formBlockPhone: "Phone number",
		formBlockName: "Nickname",
		formBlockEmail: "Email",
		formBlockPassword: "Password",
		formBlockAccept1: "I agree to check this box.",
		formBlockAccept2: "I confirm that I agree to check this box too.",
		formBlockAccept3: "I confirm that I agree to check this box.",
		formBlockAccept4: "I agree to check this box as well.",
		formBlockAccept5: "I also agree to check this box.",
		formBlockMessage: "Message",
		accept: "Accept",
		errors: {
			firstNameTooShort: "First name must be at least 3 characters long",
			firstNameCapital: "First name must start with a capital letter",
			lastNameTooShort: "Last name must be at least 3 characters long",
			lastNameCapital: "Last name must start with a capital letter",
			phoneRequired: "Phone number is required",
			phoneInvalid: "Please enter a valid phone number",
			nameTooShort: "Nickname must be at least 3 characters long",
			emailRequired: "Email is required",
			emailInvalid: "Please enter a valid email",
			passwordTooShort:
				"Password must be at least 6 and no more than 24 characters long",
			passwordMissingCase:
				"Password must include both uppercase and lowercase letters",
			passwordMissingDigit: "Password must include at least one number",
			passwordMissingSpecial:
				"Password must include at least one special character from '@$!%*?&_-'",
			acceptRequired: "You must check this box to continue",
			messageRequired: "You cannot send an empty message",
		},
		mapBlock:
			"This section is temporarily unavailable due to a missing API key 🥲",
		submit: "submit",
	},
	ru: {
		Home: "Главная",
		BgPin: "Картинка с пинами",
		Carousel: "Карусель",
		Form: "Форма",
		Map: "Карта",
		backgroundPinText:
			"Все пины загружаються при загрузке страницы, нажмите кнопку 'fetch pins' для ручного обновления с сервера. При попытке удаления пинов отсутствующих на сервере произойдёт синхронизация 🧐",
		carouselTextTitle1: "Swiper карусель",
		carouselTextTitle2: "Рукописная карусель",
		carouselText:
			"Каждый слайдер это отдельный компонент CarouselBlock с прокинутыми данными для слайдера. Сама связанная карусель реализуеться засчёт того что у всех CarouselBlock есть возможность прокинуть переменную активного слайда и отслеживать её изменение по которому отрабатывать синхронизацию 🧐",
		carouselText2:
			"Слайдеры реализованны при помощи библиотеки Swiper.js и взаимно связанны друг с другом 🧐",
		formBlockFirstName: "Имя",
		formBlockLastName: "Фамилия",
		formBlockPhone: "Номер телефона",
		formBlockName: "Никнейм",
		formBlockEmail: "Email",
		formBlockPassword: "Пароль",
		formBlockAccept1: "Даю согласие на то чтобы поставить эту галочку",
		formBlockAccept2:
			"Подтверждаю что даю согласие на то чтобы поставить эту галочку",
		formBlockAccept3:
			"Утверждаю что даю согласие на то чтобы поставить эту галочку",
		formBlockAccept4: "Даю согласие на то чтобы поставить и эту галочку",
		formBlockAccept5: "Так же даю согласие на то чтобы поставить эту галочку",
		formBlockMessage: "Сообщение",
		accept: "Подтверждение",
		errors: {
			firstNameTooShort: "Имя должно быть больше трёх символов",
			firstNameCapital: "Имя должно начинаться с заглавной буквы",
			lastNameTooShort: "Фамилия должна быть больше трёх символов",
			lastNameCapital: "Фамилия должна начинаться с заглавной буквы",
			phoneRequired: "Номер телефона обязателен",
			phoneInvalid: "Введите корректный номер телефона",
			nameTooShort: "Никнейм должен быть больше трёх символов",
			emailRequired: "Email обязателен",
			emailInvalid: "Введите корректный email",
			passwordTooShort:
				"Пароль должен быть не меньше шести символов и не больше 24",
			passwordMissingCase: "Пароль должен содержать строчные и заглавные буквы",
			passwordMissingDigit: "Пароль должен содержать хотя бы одну цифру",
			passwordMissingSpecial:
				"Пароль должен содержать специальные символы '@$!%*?&_'",
			acceptRequired: "Поставьте галочку чтобы продолжить",
			messageRequired: "Нельзя отправить пустое сообщение",
		},
		mapBlock: "Раздел временно не доступен в связи с отсутствием API ключа 🥲",
		submit: "Отправить",
	},
	ua: {
		Home: "Головна",
		BgPin: "Картинка з пінами",
		Carousel: "Карусель",
		Form: "Форма",
		Map: "Карта",
		backgroundPinText:
			"Усі піни завантажуються при завантаженні сторінки, натисніть кнопку 'fetch pins' для ручного оновлення із сервера. При спробі видалення пінів відсутніх на сервері відбудеться синхронізація 🧐",
		carouselTextTitle1: "Swiper карусель",
		carouselTextTitle2: "Рукописна карусель",
		carouselText:
			"Кожен слайдер це окремий компонент CarouselBlock із прокинутими даними для слайдера. Сама зв'язана карусель реалізується за рахунок того, що у всіх CarouselBlock є можливість прокинути змінну активного слайда і відстежувати її зміну, за якою відпрацьовувати синхронізацію 🧐",
		carouselText2:
			"Слайдери реалізовані за допомогою бібліотеки Swiper.js та взаємно пов'язані один з одним 🧐",
		formBlockFirstName: "Ім'я",
		formBlockLastName: "Прізвище",
		formBlockPhone: "Номер телефона",
		formBlockName: "Нікнейм",
		formBlockEmail: "Email",
		formBlockPassword: "Пароль",
		formBlockAccept1: "Даю згоду на те, щоб поставити цю галочку",
		formBlockAccept2:
			"Підтверджую що даю згоду на те, щоб поставити цю галочку",
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
	},
};

const i18n = createI18n({
	locale: "ru",
	fallbackLocale: "en",
	messages,
});

export default i18n;
