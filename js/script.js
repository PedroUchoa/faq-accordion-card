const lista = document.querySelectorAll('[data-show]')
lista.forEach(Element => {

    Element.firstElementChild.addEventListener('click', () => {
        if (!Element.lastElementChild.classList.contains('none')) {
            Element.lastElementChild.classList.add('none')
            Element.firstElementChild.lastChild.style.transform = 'rotate(360deg)'
            Element.firstElementChild.style.fontWeight = '500'
        } else {
            lista.forEach(Element => {
                Element.lastElementChild.classList.add('none')
                Element.firstElementChild.lastChild.style.transform='rotate(360deg)'
                Element.firstElementChild.style.fontWeight = '500'
            })
            Element.lastElementChild.classList.remove('none')
            Element.firstElementChild.lastChild.style.transform = 'rotate(180deg)'
            Element.firstElementChild.style.fontWeight = '700'
        }
    })

})