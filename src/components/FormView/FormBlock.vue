<template>
	<div class="form-block__wrapper">
		<form @submit.prevent="handleSubmit" class="form-block">
			<div
				:class="{ invalid: errors.firstName }"
				class="form-block__item form-block__first-name"
			>
				<label class="form-block__label" for="first-name">
					{{ t("formBlockFirstName") }}
					<p class="form-block__error" v-if="errors.firstName">
						{{ errors.firstName }}
					</p>
				</label>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.firstName"
					type="text"
					name="first-name"
					id="first-name"
				/>
			</div>
			<div
				:class="{ invalid: errors.lastName }"
				class="form-block__item form-block__last-name"
			>
				<label class="form-block__label" for="last-name"
					>{{ t("formBlockLastName") }}
					<p class="form-block__error" v-if="errors.lastName">
						{{ errors.lastName }}
					</p></label
				>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.lastName"
					type="text"
					name="last-name"
					id="last-name"
				/>
			</div>
			<div
				:class="{ invalid: errors.phone }"
				class="form-block__item form-block__phone"
			>
				<label class="form-block__label" for="phone"
					>{{ t("formBlockPhone") }}
					<p class="form-block__error" v-if="errors.phone">
						{{ errors.phone }}
					</p></label
				>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.phone"
					type="tel"
					name="phone"
					id="phone"
				/>
			</div>
			<div
				:class="{ invalid: errors.name }"
				class="form-block__item form-block__name"
			>
				<label class="form-block__label" for="name"
					>{{ t("formBlockName") }}
					<p class="form-block__error" v-if="errors.name">
						{{ errors.name }}
					</p>
				</label>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.name"
					type="text"
					name="name"
					id="name"
				/>
			</div>
			<div
				:class="{ invalid: errors.email }"
				class="form-block__item form-block__email"
			>
				<label class="form-block__label" for="email"
					>{{ t("formBlockEmail") }}
					<p class="form-block__error" v-if="errors.email">
						{{ errors.email }}
					</p>
				</label>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.email"
					type="email"
					name="email"
					id="email"
				/>
			</div>
			<div
				:class="{ invalid: errors.password }"
				class="form-block__item form-block__password"
			>
				<label class="form-block__label" for="password"
					>{{ t("formBlockPassword") }}
					<p class="form-block__error" v-if="errors.password">
						{{ errors.password }}
					</p>
				</label>
				<input
					class="form-block__input form-block__input_text"
					v-model="form.password"
					type="password"
					name="password"
					id="password"
				/>
			</div>
			<div
				:class="{ invalid: errors.accept1 }"
				class="form-block__item form-block__accept"
			>
				<input
					class="form-block__input form-block__input_checkbox"
					v-model="form.accept1"
					type="checkbox"
					name="accept1"
					id="accept1"
				/>

				<label class="form-block__label" for="accept1">
					<p class="form-block__error" v-if="errors.accept1">
						{{ errors.accept1 }}
					</p>
					{{ t("formBlockAccept1") }}
				</label>
			</div>
			<div
				:class="{ invalid: errors.accept2 }"
				class="form-block__item form-block__accept"
			>
				<input
					class="form-block__input form-block__input_checkbox"
					v-model="form.accept2"
					type="checkbox"
					name="accept2"
					id="accept2"
				/>

				<label class="form-block__label" for="accept2">
					<p class="form-block__error" v-if="errors.accept2">
						{{ errors.accept2 }}
					</p>
					{{ t("formBlockAccept2") }}
				</label>
			</div>
			<div
				:class="{ invalid: errors.accept3 }"
				class="form-block__item form-block__accept"
			>
				<input
					class="form-block__input form-block__input_checkbox"
					v-model="form.accept3"
					type="checkbox"
					name="accept3"
					id="accept3"
				/>

				<label class="form-block__label" for="accept3">
					<p class="form-block__error" v-if="errors.accept3">
						{{ errors.accept3 }}
					</p>
					{{ t("formBlockAccept3") }}
				</label>
			</div>
			<div
				:class="{ invalid: errors.accept4 }"
				class="form-block__item form-block__accept"
			>
				<input
					class="form-block__input form-block__input_checkbox"
					v-model="form.accept4"
					type="checkbox"
					name="accept4"
					id="accept4"
				/>

				<label class="form-block__label" for="accept4">
					<p class="form-block__error" v-if="errors.accept4">
						{{ errors.accept4 }}
					</p>
					{{ t("formBlockAccept4") }}
				</label>
			</div>
			<div
				:class="{ invalid: errors.accept5 }"
				class="form-block__item form-block__accept"
			>
				<input
					class="form-block__input form-block__input_checkbox"
					v-model="form.accept5"
					type="checkbox"
					name="accept5"
					id="accept5"
				/>

				<label class="form-block__label" for="accept5">
					<p class="form-block__error" v-if="errors.accept5">
						{{ errors.accept5 }}
					</p>
					{{ t("formBlockAccept5") }}
				</label>
			</div>
			<div
				:class="{ invalid: errors.message }"
				class="form-block__item form-block__message"
			>
				<label class="form-block__label" for="message"
					>{{ t("formBlockMessage") }}
					<p class="form-block__error" v-if="errors.message">
						{{ errors.message }}
					</p>
				</label>
				<textarea
					class="form-block__input form-block__input_textarea"
					v-model="form.message"
					name="message"
					id="message"
					cols="30"
					rows="10"
				></textarea>
				<button class="form-block__submit-btn" type="submit">
					{{ t("submit") }}
				</button>
			</div>
		</form>
		<li v-if="complete" class="form-block__data-block">
			<p>{{ t("formBlockFirstName") }} : {{ form.firstName }}</p>
			<p>{{ t("formBlockLastName") }} : {{ form.lastName }}</p>
			<p>{{ t("formBlockPhone") }} : {{ form.phone }}</p>
			<p>{{ t("formBlockName") }} : {{ form.name }}</p>
			<p>{{ t("formBlockEmail") }} : {{ form.email }}</p>
			<p>{{ t("formBlockPassword") }} : {{ form.password }}</p>
			<p>{{ t("accept") }} 1 : {{ form.accept1 }}</p>
			<p>{{ t("accept") }} 2 : {{ form.accept2 }}</p>
			<p>{{ t("accept") }} 3 : {{ form.accept3 }}</p>
			<p>{{ t("accept") }} 4 : {{ form.accept4 }}</p>
			<p>{{ t("accept") }} 5 : {{ form.accept5 }}</p>
			<p>{{ t("formBlockMessage") }} : {{ form.message }}</p>
		</li>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const complete = ref(false);

const form = reactive({
	firstName: "",
	lastName: "",
	phone: "",
	name: "",
	email: "",
	password: "",
	accept1: false,
	accept2: false,
	accept3: false,
	accept4: false,
	accept5: false,
	message: "",
});

const errors = reactive({
	firstName: null,
	lastName: null,
	phone: null,
	name: null,
	email: null,
	password: null,
	accept1: null,
	accept2: null,
	accept3: null,
	accept4: null,
	accept5: null,
	message: null,
});

const validate = () => {
	let IsValid = true;
	const phoneRegex = /^\+?[1-9]\d{9,14}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&_-]{6,24}$/;
	const passwordRegex2 =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{6,24}$/;
	const passwordRegex3 =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{6,24}$/;

	if (form.firstName.length < 3) {
		errors.firstName = t("errors.firstNameTooShort");
		IsValid = false;
	} else if (form.firstName[0] !== form.firstName[0].toUpperCase()) {
		errors.firstName = t("errors.firstNameCapital");
		IsValid = false;
	} else {
		errors.firstName = null;
	}

	if (form.lastName.length < 3) {
		errors.lastName = t("errors.lastNameTooShort");
		IsValid = false;
	} else if (form.lastName[0] !== form.lastName[0].toUpperCase()) {
		errors.lastName = t("errors.lastNameCapital");
		IsValid = false;
	} else {
		errors.lastName = null;
	}

	if (!form.phone) {
		errors.phone = t("errors.phoneRequired");
		IsValid = false;
	} else if (!phoneRegex.test(form.phone)) {
		errors.phone = t("errors.phoneInvalid");
		IsValid = false;
	} else {
		errors.phone = null;
	}

	if (form.name.length < 3) {
		errors.name = t("errors.nameTooShort");
		IsValid = false;
	} else {
		errors.name = null;
	}

	if (!form.email) {
		errors.email = t("errors.emailRequired");
		IsValid = false;
	} else if (!emailRegex.test(form.email)) {
		errors.email = t("errors.emailInvalid");
		IsValid = false;
	} else {
		errors.email = null;
	}

	if (form.password.length < 6) {
		errors.password = t("errors.passwordTooShort");
		IsValid = false;
	} else if (!passwordRegex1.test(form.password)) {
		errors.password = t("errors.passwordMissingCase");
		IsValid = false;
	} else if (!passwordRegex2.test(form.password)) {
		errors.password = t("errors.passwordMissingDigit");
		IsValid = false;
	} else if (!passwordRegex3.test(form.password)) {
		errors.password = t("errors.passwordMissingSpecial");
		IsValid = false;
	} else {
		errors.password = null;
	}

	if (!form.accept1) {
		errors.accept1 = t("errors.acceptRequired");
		IsValid = false;
	} else {
		errors.accept1 = null;
	}

	if (!form.accept2) {
		errors.accept2 = t("errors.acceptRequired");
		IsValid = false;
	} else {
		errors.accept2 = null;
	}
	if (!form.accept3) {
		errors.accept3 = t("errors.acceptRequired");
		IsValid = false;
	} else {
		errors.accept3 = null;
	}

	if (!form.accept4) {
		errors.accept4 = t("errors.acceptRequired");
		IsValid = false;
	} else {
		errors.accept4 = null;
	}

	if (!form.accept5) {
		errors.accept5 = t("errors.acceptRequired");
		IsValid = false;
	} else {
		errors.accept5 = null;
	}

	if (!form.message) {
		errors.message = t("errors.messageRequired");
		IsValid = false;
	} else {
		errors.message = null;
	}

	return IsValid;
};

const handleSubmit = () => {
	if (validate()) {
		complete.value = true;
	}
};
</script>

<style lang="scss" scoped>
.form-block {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 480px;
	min-height: 640px;
	background-color: var(--light-pink-color);
	border: 1px solid var(--dark-red-color);
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	gap: 15px;
	position: relative;
	padding: 20px;
	text-align: center;
	@media (max-width: 481px) {
		width: 320px;
	}
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		gap: 50px;
		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
	&__item {
		width: 100%;
	}
	&__label {
		display: block;
		margin-bottom: 2.5px;
		&:focus {
			font-weight: bold;
		}
	}
	&__input {
		&_textarea,
		&_text {
			resize: none;
			min-width: 100%;
			padding: 5px;
			margin-top: 2.5px;
			border-radius: 10px;
			border: 1px solid var(--dark-red-color);
			&:focus {
				border-color: var(--red-color);
				box-shadow: 0 0 5px var(--red-color);
				outline: none;
			}
		}
		&_checkbox {
			margin-right: 5px;
			&:focus {
				border-color: var(--red-color);
				filter: drop-shadow(0 0 5px var(--red-color));
				outline: none;
			}
		}
	}
	&__accept {
		display: flex;
		text-align: left;
		font-size: 12px;
	}
	&__error {
		color: var(--dark-red-color);
	}
	&__data-block {
		display: flex;
		flex-direction: column;
		gap: 20px;
		border-radius: 20px;
		padding: 20px;
		border: 1px solid var(--dark-red-color);
		width: 480px;
		min-height: 640px;
		@media (max-width: 481px) {
			width: 320px;
		}
	}
	&__submit-btn {
		margin-top: 10px;
		background-color: var(--red-color);
		padding: 10px 20px;
		border-radius: 20px;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		&:hover {
			opacity: 0.9;
		}
		&:active {
			opacity: 0.7;
		}
		&:focus {
			border-color: var(--red-color);
			box-shadow: 0 0 5px var(--red-color);
			outline: none;
		}
	}
}
.invalid {
	filter: drop-shadow(0 0 1px var(--pink-color));
}
</style>
