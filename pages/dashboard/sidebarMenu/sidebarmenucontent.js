import SidebarMenuObj from './sidebarMenuObj'
const contentDatafortheroute = {};

// Iterate over SidebarMenuObj to create content data for each route
SidebarMenuObj.forEach((menu) => {
    menu.dropdownmenu.forEach((item) => {
        const slug = item.slug.substring(1); // Remove leading slash to create slug
        contentDatafortheroute[slug] = {
            title: item.name,
            content: `This is the ${item.name} page content.` // Example content, replace with actual content
        };
    });
});

console.log(contentDatafortheroute,"contentDatafortheroute");


  export default contentDatafortheroute;
