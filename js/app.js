const select = document.querySelector('select')
const allLang = ['ua', 'en']

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua'
        location.reload()
    }
    select.value = hash

    for (let i = 1; i <= 44; i++) {
        document.getElementById(`lang-${i}`).innerHTML = langArr[`lang-${i}`][hash]
    }
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`lang-${i}.${i}`).innerHTML = langArr[`lang-${i}.${i}`][hash]
    }
}
changeLanguage();