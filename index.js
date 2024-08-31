const switchThemeBtn = document.getElementById("theme-button")
switchThemeBtn.addEventListener('click', switchTheme)

function switchTheme(){
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
}