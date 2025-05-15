extends RayCast3D

var collition = false

func _physics_process(delta):
	if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera" && get_node("..").current == true:
		collition = true
		target_position.z = 0
		print(get_collider())
		get_collider()._switch()
		await get_tree().create_timer(3.0).timeout
		collition = false
	elif get_node("..").current == true:
		target_position.z = 0

func _input(event):
	if event.is_action_pressed("CamSwitch") && event.is_action_released("CamSwitch") && collition == true && get_node("..").current == true:
		pass
	elif collition == false && get_node("..").current == true:
		if event.is_action_pressed("CamSwitch"):
			target_position.z = -50
			print("Extend")
		elif event.is_action_released("CamSwitch"):
			target_position.z = 0
			print("Shortend")
