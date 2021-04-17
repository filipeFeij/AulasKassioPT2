$(function() {
	const todoList = {
		$container: $(".todo-list"),
		$input: $("input:text"),
		$btn: $(".btn-addTask"),
		
		var teste = "teste";
		
		init: function(){
			this.$input.on("keyup", (e) => {
				let tarefa = this.$input.val();
				if (e.keycode === 13 && tarefa){
					this.adicionarTarefa(tarefa);
				}
			});
		},
				
		adicionarTarefa: function(tarefa){
			alert(tarefa);
		}
		
	}
	todoList.init();
});