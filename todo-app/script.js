const ul = document.querySelector('ul');
const input = document.getElementById('input');
let todos = [];

const dummyEdit = document.createElement('div');
dummyEdit.innerHTML = `<input type="text"><button data-type="edit" >Edit</button><button data-type="save" >Save</button><button data-type="delete" >Delete</button>`;

function renderTodos(e) {
  ul.innerHTML = '';
  const fragment = document.createDocumentFragment();
  todos.forEach((todo, id) => {
    const li = document.createElement('li');
    li.setAttribute('id', 'todo-' + id);
    li.setAttribute('class', 'todo');
    li.append(todo);
    fragment.append(li);
  });
  ul.append(fragment);
}

function updateTodo(data, index) {
  todos.forEach((todo, idx) => {
    if (id == idx) todo = data;
  });
  renderTodos();
}

function deleteTodo(index) {
  todos = todos.filter((data, id) => id != index);
  renderTodos();
}

function delegate(e) {
  const closestEle = e.target.closest('.todo');
  const id = closestEle.getAttribute('id');
  if (!id) return;
  const action = e.target.getAttribute('data-type');
  console.log(action);
  switch (action) {
    case null: {
      renderTodos();
      console.log('changeLayout');
      const liEle = document.getElementById(id);
      liEle.innerHTML = '';
      console.log(dummyEdit);
      liEle.append(dummyEdit);
      break;
    }
    case 'edit': {
      console.log('edit' + id);
      break;
    }
    case 'delete': {
      console.log('edit' + id);
      deleteTodo(Number(id.slice(5)));
      break;
    }
  }
}

function addTodo() {
  const data = input.value;
  todos.push(data);
  renderTodos();
}

renderTodos();
