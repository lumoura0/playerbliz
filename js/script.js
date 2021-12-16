const activate = document.getElementById('activate')
const holder = document.querySelector('.holder')
const mode = document.getElementById('mode')
const darkToLight = document.querySelector('body')
const containerDark = document.querySelector('.container')
const dashboardDark = document.querySelector('.dashboard')
const precoDark = document.querySelectorAll('.preco-item')
const footerDark = document.querySelector('footer')
const btnDark = document.querySelectorAll('.btn-compra')

let active = true
const dark = darkToLight.classList.contains('dark')
activate.addEventListener('click', modeActivation())

function modeActivation() {
    if (active && dark) {
        active = false
        holder.style = 'justify-content: end'
        mode.innerHTML = `Dark`
        containerDark.classList.remove('dark')
        darkToLight.classList.remove('dark')
        dashboardDark.classList.remove('dark')
        footerDark.classList.remove('dark')
        btnDark.forEach(item => {
            item.classList.remove('dark');
        })
        precoDark.forEach(item => {
            item.classList.remove('dark');
        })

        return
    }
    if (!active) {
        active = true
        holder.style = 'justify-content: flex-start'
        mode.innerHTML = `Light`
        darkToLight.classList.add('dark')
        containerDark.classList.add('dark')
        dashboardDark.classList.add('dark')
        footerDark.classList.add('dark')
        btnDark.forEach(item => {
            item.classList.add('dark');
        })
        precoDark.forEach(item => {
            item.classList.add('dark');
        })
        return
    }
}
