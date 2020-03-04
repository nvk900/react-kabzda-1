let initialState = {
	navLinks:[
		{href: '/profile', value: 'Profile'},
		{href: '/messages', value: 'Messages'},
		{href: '/news', value: 'News'},
		{href: '/music', value: 'Music'},
		{href: '/settings', value: 'Settings'}
	],
	friends:[
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Dmitriy'},
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Anastasiya'},
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Vladimir'},
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Oleg'},
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Ekaterina'},
		{href: '#', avatar: 'https://99px.ru/sstorage/1/2019/07/image_10507191802546189824.jpg', name: 'Julia'},
	]
};

const sidebarReducer = (state = initialState, action) => {
	


	return state;
}
 
export default sidebarReducer;