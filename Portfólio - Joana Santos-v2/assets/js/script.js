function LightTheme(){
    var theme_color = document.querySelectorAll('.theme-color');
    var body = document.querySelector('body').style.backgroundColor = 'white';
    theme_color.forEach(element => {
        element.style.color = 'black';
    });
}
function DarkTheme(){
    var theme_color = document.querySelectorAll('.theme-color');
    var body = document.querySelector('body').style.backgroundColor = 'black';
    theme_color.forEach(element => {
        element.style.color = 'white';
    });
    var color_black = document.querySelectorAll('.color_black');
    color_black.forEach(element => {
        element.style.color = '#22d4fd';
    });
}
function Aboutme(){
    var container_section_context_home  = document.querySelector('.container-section-context-home');
    container_section_context_home .style.display = 'none';
    var container_section_context_about  = document.querySelector('.container-section-context-about-me');
    container_section_context_about .style.display = 'inherit';
}
function Home(){
    var container_section_context_home  = document.querySelector('.container-section-context-home');
    container_section_context_home .style.display = 'inherit';
    var container_section_context_about  = document.querySelector('.container-section-context-about-me');
    container_section_context_about .style.display = 'none';
}