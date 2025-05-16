extends RayCast3D

var collition = false

	#if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera" && get_node("..").current == true:
		#collition = true
		#target_position.z = 0
		#print(get_collider())
		#get_collider()._switch()
		#await get_tree().create_timer(3.0).timeout
		#collition = false
	#elif get_node("..").current == true:
		#target_position.z = 0
		#
	#if is_colliding() && get_collider().name != "Camera" && get_node("..").current == true:
		#print(get_collider())
		
func _process(delta):
	if is_colliding() && get_node("..").current == true && get_collider().name != "Camera":
		collition = false
		
	if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera" && get_node("..").current == true:
		collition = true
		print(get_collider())
		get_collider()._switch()
		await get_tree().create_timer(3.0).timeout
		collition = false
		
func _input(event):
	if collition == true && get_node("..").current == true:
		pass
	elif collition == false && get_node("..").current == true:
		if event.is_action_pressed("CamSwitch"):
			force_raycast_update()
			print("Fire!")
			collition = true
