let count = 1;
let count2 = 1;
function extendMenu() {

    console.log(count)
        if (count % 2 === 0) {
            const headerMenu = document.getElementById("header-menu");
            headerMenu.style.height = "60px";
            headerMenu.style.transition = "height 0.5s ease-in-out";

            const menuIcon = document.getElementById("menu-icon");
            menuIcon.style.rotate = "0deg";
            menuIcon.style.transition = "rotate 0.5s ease-in-out";

        } else {
            const headerMenu = document.getElementById("header-menu");
            headerMenu.style.height = "322px";
            headerMenu.style.transition = "height 0.5s ease-in-out";

            const menuIcon = document.getElementById("menu-icon");
            menuIcon.style.rotate = "90deg";
            menuIcon.style.transition = "rotate 0.5s ease-in-out";
        }

    count = count + 1
}

function extendMenu2 () {
    const linkElement1 = document.getElementById('link1');
    const linkElement2 = document.getElementById('link2');
    const linkElement3 = document.getElementById('link3');
    const linkElement4 = document.getElementById('link4');
    const image = document.getElementById('image')
    const map = document.getElementById('map')
    const links = document.getElementById('links')
    const name = document.getElementById('name-main')
    const description = document.getElementById('description')
    const descriptionHeader = document.getElementById('description-header')
    const descriptionContent = document.getElementById('description-content')

    if (count2 % 2 === 0) {
        linkElement1.style.fontSize = '0';
        linkElement1.style.padding = '0';
        linkElement1.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement2.style.fontSize = '0';
        linkElement2.style.padding = '0';
        linkElement2.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement3.style.fontSize = '0';
        linkElement3.style.padding = '0';
        linkElement3.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement4.style.fontSize = '0';
        linkElement4.style.padding = '0';
        linkElement4.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        image.style.height= '0'
        image.style.transition = 'height 0.5s ease-in-out'

        map.style.height = '0'
        map.style.marginTop = '0'
        map.style.borderLeftWidth = '0px'
        map.style.transition = 'height 0.5s ease-in-out, margin-top 0.5s ease-in-out, border-left-width 0.5s ease-in-out'

        links.style.height = '0'
        links.style.transition = 'height 0.5s ease-in-out'

        name.style.borderBottomWidth = '0px'
        name.style.transition = 'border-bottom-width 0.5s ease-in-out'

        description.style.height = '0'
        description.style.width = '0'
        description.style.padding = '0'
        description.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out'

        descriptionHeader.style.fontSize = '0'
        descriptionHeader.style.transition = 'font-size 0.5s ease-in-out'

        descriptionContent.style.fontSize = '0'
        descriptionContent.style.transition = 'font-size 0.5s ease-in-out, text-decoration-color 0.25s ease-in-out'
    } else {
        linkElement1.style.fontSize = '18px';
        linkElement1.style.padding = '5px';
        linkElement1.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement2.style.fontSize = '18px';
        linkElement2.style.padding = '5px';
        linkElement2.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement3.style.fontSize = '18px';
        linkElement3.style.padding = '5px';
        linkElement3.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        linkElement4.style.fontSize = '18px';
        linkElement4.style.padding = '5px';
        linkElement4.style.transition = 'font-size 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out';

        image.style.height= '250px'
        image.style.transition = 'height 0.5s ease-in-out'

        map.style.height = '250px'
        map.style.marginTop = '5px'
        map.style.borderLeftWidth = '2px'
        map.style.transition = 'height 0.5s ease-in-out, margin-top 0.5s ease-in-out, border-left-width 0.5s ease-in-out'

        links.style.height = '250px'
        links.style.transition = 'height 0.5s ease-in-out'

        name.style.borderBottomWidth = '2px'
        name.style.transition = 'border-bottom-width 0.5s ease-in-out'

        description.style.height = '230px'
        description.style.width = '230px'
        description.style.padding = '5px'
        description.style.transition = 'height 0.5s ease-in-out, width 0.5s ease-in-out, padding 0.5s ease-in-out, background-color 0.25s ease-in-out'

        descriptionHeader.style.fontSize = '18px'
        descriptionHeader.style.transition = 'font-size 0.5s ease-in-out'

        descriptionContent.style.fontSize = '14px'
        descriptionContent.style.transition = 'font-size 0.5s ease-in-out, text-decoration-color 0.25s ease-in-out'
    }
    count2 = count2 + 1;
}
