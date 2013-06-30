$(document).ready(function(){

	var new_task, remove_task_num;

	$("#add_task").on("submit", function(event) {

		// tells the browser to stay put
		event.preventDefault();

		// get the new task and reset the input to be blank
		new_task = $("#task_name").val();
		$("#task_name").val("");

		// append the new task to the list
		$("<li>" + new_task + "</li>").appendTo("#task_list");

	});

	$("#remove_task").on("submit", function(event) {
		event.preventDefault();

		// gets the number. assumes the user doesn't know about zero indexed lists
		remove_task_num = parseInt($("#task_num").val()) - 1;
		$("#task_num").val("");

		// removes the item
		$("#task_list li").eq(remove_task_num).remove();
	});
	
});