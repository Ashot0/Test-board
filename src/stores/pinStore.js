import { defineStore } from "pinia";
import { ref } from "vue";

export const usePinStore = defineStore("pinStore", () => {
	const pins = ref([]);

	const fetchPins = async () => {
		try {
			const response = await fetch(
				"https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins",
				{
					method: "GET",
					headers: { "content-type": "application/json" },
				}
			);
			if (!response.ok) {
				throw new Error(response.status);
			}
			const data = await response.json();
			pins.value = data;
		} catch (error) {
			console.error("Ошибка при загрузке пинов:", error);
		}
	};

	const addPin = async (x, y) => {
		const newPin = { pinX: x, pinY: y };
		try {
			const response = await fetch(
				"https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins",
				{
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(newPin),
				}
			);
			if (!response.ok) {
				throw new Error(response.status);
			}
			const createdPin = await response.json();
			pins.value.push(createdPin);
		} catch (error) {
			console.error("Error adding a pin:", error);
		}
	};

	const deletePin = async (id) => {
		try {
			const response = await fetch(
				`https://676eb48adf5d7dac1ccb7865.mockapi.io/api/v2/pins/${id}`,
				{
					method: "DELETE",
					headers: { "content-type": "application/json" },
				}
			);

			if (!response.ok) {
				throw new Error(response.status);
			}
			pins.value = pins.value.filter((pin) => pin.id !== id);
		} catch (error) {
			console.error("Error when deleting pin:", error);
			await fetchPins();
		}
	};

	return {
		pins,
		fetchPins,
		addPin,
		deletePin,
	};
});
