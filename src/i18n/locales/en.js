const en = {
	Home: "Home",
	BgPin: "Bg-pin",
	Carousel: "Carousel",
	Form: "Form",
	Map: "Map",
	backgroundPinText:
		"Pins are stored using mockAPI. All pins are loaded when the page loads and are synchronized on the page for all users. Every 3 seconds a reverse request occurs to synchronize changes. When you try to delete pins that are not on the server, synchronization will occur 🧐",
	carouselTextTitle1: "Swiper slider",
	carouselTextTitle2: "Handwritten carousel",
	carouselText:
		"Each slider is a separate CarouselBlock component that contains data for the slider. The carousel is implemented so that all CarouselBlocks can pass the active slide variable and track its changes, enabling synchronization 🧐",
	carouselText2:
		"The sliders are implemented using the Swiper.js library and are interconnected with each other. By clicking on the lock, the sliders are synchronized and linked/unlinked 🧐",
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
			"Password must include at least one special character from $!%*?&_-",
		passwordMissingSpecialsub:
			"Password must include at least one special character from @$!%*?&_-",
		acceptRequired: "You must check this box to continue",
		messageRequired: "You cannot send an empty message",
	},
	mapBlock:
		"This section is temporarily unavailable due to a missing API key 🥲",
	submit: "submit",
	openModal: "Open modal",
	openPopup: "Open popup",
	openDropdown: "Open Dropdown",
	cancel: "Cancel",
	modalExample: "Modal example",
	popupExample: "Popup example",
	close: "Close",
	option: "Option",
	addElement: "Add element",
	bubbleSort: "Bubble sort",
	sourceArray: "Source array",
	sort: "Sort",
	sortedArray: "Sorted array",
	progressBarDesc:
		"Conditional indication of the progress bar fill number from 0 to 300",
};

export default en;
