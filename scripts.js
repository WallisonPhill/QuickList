// Variáveis
var list = document.querySelector('ul')
var product = document.querySelector('#item')
var button = document.querySelector('#btn-add') 

// Função para adicionar um novo item
button.addEventListener('click', addProduct)

function addProduct() {
  //Aqui eu adiciono um novo elemento na lista.
  var li = document.createElement('li') 
  
  //Para criar um novo checkbox  
  var checkbox = document.createElement('input') 
  checkbox.type = 'checkbox'
  
  // Criação do texto do item
  var span = document.createElement('span')
  span.textContent = product.value

  // Criando o ícone de lixeira
  var deleteLink = document.createElement('a')
  var deleteIcon = document.createElement('img')
  deleteIcon.src = './assets/icons/erase.svg'
  deleteIcon.alt = 'Ícone de deletar'
  deleteLink.appendChild(deleteIcon)
  
  // Adicionar os elementos dentro do <li>
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(deleteLink)

  // Adicionando o <li> à lista
  list.appendChild(li)
  
  // Limpando o campo de entrada e focando novamente
  product.value = ''
  product.focus()
}