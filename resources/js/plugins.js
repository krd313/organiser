/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Version: 4.3.0
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Common Plugins Js File
*/

//Common plugins
if (document.querySelectorAll("[toast-list]") || document.querySelectorAll('[data-choices]') || document.querySelectorAll("[data-provider]")) {
    document.writeln("<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/toastify-js'></script>");
    document.writeln("<script type='text/javascript' src='build/libs/choices.js/public/assets/scripts/choices.min.js'></script>");
    document.writeln("<script type='text/javascript' src='build/libs/flatpickr/flatpickr.min.js'></script>");
}



// if (document.querySelector("[toast-list], [data-choices], [data-provider]")) {
//     const scripts = [
//         'https://cdn.jsdelivr.net/npm/toastify-js',
//         'build/libs/choices.js/public/assets/scripts/choices.min.js',
//         'build/libs/flatpickr/flatpickr.min.js'
//     ];

//     scripts.forEach(src => {
//         const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script); // Append to body or head
//     });
// }
