const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

function addChapter() {
    if (input.value.trim() !== '') {
        input.focus();
    }
    li.textContent = input.value;
    li.append(deleteButton);
    list.append(li);
}
function removeItem() {
    list.removeChild(li);
    input.focus();
}

button.addEventListener('click', addChapter);
deleteButton.addEventListener('click', removeItem);

input.value = '';
input.focus();