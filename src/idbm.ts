import './idbm.scss'

const form = document.forms[0]
const tileInput = form.children[0] as HTMLInputElement

const select = form.children[1] as HTMLSelectElement

form.addEventListener('submit',async (e)=> {
e.preventDefault()
if(!tileInput.value){
  alert('input title')
  return
}

    const url1 = `http://www.omdbapi.com/?apikey=383529d9&s=${tileInput.value}&type=${select.value}`
    
})

function