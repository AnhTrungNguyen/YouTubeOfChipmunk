document.getElementById('todo1').onclick = function() {
  var textTodo = document.getElementById('TodoText1');
  if (this.checked) {
    textTodo.innerHTML = "Mua ô <del>tô</del>";
  }else{
    textTodo.innerHTML = "Mua ô tô";
  }
}

document.getElementById('todo2').onclick = function() {
  var textTodo = document.getElementById('TodoText2');
  if (this.checked) {
    textTodo.innerHTML = "Xây dựng một trang web <del>và blog</del>";
  }else{
    textTodo.innerHTML = "Xây dựng một trang web và blog";
  }
}
