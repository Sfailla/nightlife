

// function for truncating names of search results
const truncateRes = (str) => {
    if (typeof str === 'string' && str.length > 30) {
        str = str.slice(0, 30);
        return str + '...';
    } else {
        return str;
    }
}

export default truncateRes;


// export default function scrollPos() {

//     const handleEvent = (event) => {
//         console.log('Y = ', window.scrollY);

//         const navList = document.querySelector('.side-nav__nav-list-group');
//         const navYelp = document.querySelector('.side-nav__yelp-tag');

//         // if (sideNavWidth )

//         let topStart = 100;
//         let mbStart = 110;

//         if (window.scrollY < 1) {
//            navList.style.top = topStart + 'px';
//            navYelp.style.marginbotton = mbStart + 'px';
//         }

//         if (window.scrollY >= 1 && window.scrollY < 100) {
            
//             navList.style.top = (topStart - scrollY) + 'px';
//             navYelp.style.marginBottom = (mbStart - scrollY) + 'px';
//         } 
        
//         if (window.scrollY >= 100) {
//             let top = navList.style.top = '0px';
//         }
//     }
//     window.addEventListener('scroll', handleEvent, false);
// }

