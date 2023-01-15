const numeratorElm = document.querySelector('#numerator')
const denomiratorElm = document.querySelector('#denominator')
const errorElm = document.querySelector('#error')
const resultElm = document.querySelector('#result')

const handleClick = () => {
  const numerator = parseInt(numeratorElm.value.trim())
  const denomirator = parseInt(denomiratorElm.value.trim())

  if (isNaN(numerator)) {
    errorElm.textContent = 'البسط ليس رقم.'
    return
  }

  if (isNaN(denomirator)) {
    errorElm.textContent = 'المقام ليس رقم.'
    return
  }
  if (denomirator === 0) {
    errorElm.textContent = 'المقام لا يمكن أن يكون صفر.'
    return
  }

  if ((numerator / denomirator) % 1 === 0) {
    errorElm.textContent = 'هذا الرقم عدد صحيح وليس كسر.'
    return
  }

  errorElm.textContent = ''

  resultElm.classList.remove('hidden')
  resultElm.innerHTML = `
  <div>
الكسر ${presentFraction(numerator, denomirator)} ${
    numerator >= denomirator ? 'غير' : ''
  } فعلي
  </div>
  
  <div>السبب: البسط (${numerator}) ${
    numerator > denomirator
      ? 'أكبر من'
      : numerator === denomirator
      ? 'يساوي'
      : 'أصغر من'
  } المقام (${denomirator}).`
}

function presentFraction (num, denom) {
  return `
 <div class="frac">
    <span>${num}</span>
    <span class="symbol">/</span>
    <span class="bottom">${denom}</span>
    
  </div>
  `
}
