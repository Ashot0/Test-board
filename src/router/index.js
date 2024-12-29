import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";
import BackgroundPinView from "../views/BackgroundPinView.vue";
import MapView from "../views/MapView.vue";
import CarouselView from "../views/CarouselView.vue";
const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/form",
		name: "form",
		component: FormView,
	},

	{
		path: "/bg-pin",
		name: "bg-pin",
		component: BackgroundPinView,
	},

	{
		path: "/map",
		name: "map",
		component: MapView,
	},
	{
		path: "/carousel",
		name: "carousel",
		component: CarouselView,
	},
];

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
});

export default router;
