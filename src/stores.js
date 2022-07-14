import { writable } from 'svelte/store';


const description =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const DataStore = writable([
	{
		id: 1,
		name: 'Asian sunset',
		link: "./images/asia.jpg",
		description: description,
		price: '£20',
		reserved: false
	},
	{
		id: 2,
		name: 'Avocados',
		link: "./images/avocado.jpg",
		description: description,
		price: '£10',
		reserved: false
	},
	{
		id: 3,
		name: 'Serene beach',
		link: "./images/beach.jpg",
		description: description,
		price: '£20',
		reserved: false
	},
	{
		id: 4,
		name: 'Misty bridge',
		link: "./images/bridge.jpg",
		description: description,
		price: '£25',
		reserved: false
	},
	{
		id: 5,
		name: 'Desert and night',
		link: "./images/desert.jpg",
		description: description,
		price: '£20',
		reserved: false
	},
	{
		id: 6,
		name: 'Summer field-scape',
		link: "./images/field.jpg",
		description: description,
		price: '£10',
		reserved: false
	},
	{
		id: 7,
		name: 'Forest at night',
		link: "./images/forest.jpg",
		description: description,
		price: '£15',
		reserved: false
	},
	{
		id: 8,
		name: 'Horses bucking',
		link: "./images/horses.jpg",
		description: description,
		price: '£20',
		reserved: false
	},
	{
		id: 9,
		name: 'Landscape early evening',
		link: "./images/landscape.jpg",
		description: description,
		price: '£30',
		reserved: false
	},
	{
		id: 10,
		name: 'Eerie mountains',
		link: "./images/mountains.jpg",
		description: description,
		price: '£30',
		reserved: false
	},
	{
		id: 11,
		name: 'Abstract sky',
		link: "./images/night-sky.jpg",
		description: description,
		price: '£10',
		reserved: false
	},
	{
		id: 12,
		name: 'Sunrise over the water',
		link: "./images/sunset.jpg",
		description: description,
		price: '£30',
		reserved: false
	},
	{
		id: 13,
		name: 'Yellow scene',
		link: "./images/yellow.jpg",
		description: description,
		price: '£20',
		reserved: false
	}
]);

export const UserData = writable([
	{
		name: 'Adrian Paul',
		email: 'Ap@gmail.com',
		number: '07812312366',
		comment: 'I love your art, would you be able to make me something. Please contact me'
	},
	{
		name: 'Peter Parker',
		email: 'pp@gmail.com',
		number: '0785698515',
		comment: 'Please contact me ASAP'
	}
]);
