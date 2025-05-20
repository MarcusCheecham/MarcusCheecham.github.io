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
	#if get_node("..").current == true:
		#print(collition)
		#if is_colliding() && get_collider().name != "Camera":
			#collition = false
		
	if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera" && get_node("..").current == true:
		if collition == false:
			print(get_collider())
			get_collider()._switch()
			collition = true
			await get_tree().create_timer(3.01).timeout
			collition = false
		
func _input(event):
	if collition == false && get_node("..").current == true:
		if event.is_action_pressed("CamSwitch"):
			force_raycast_update()
			print("Fire!")
			
func _physicsInteraction():
	print("Activated!")
	force_raycast_update()
	print(get_collider())
	if is_colliding() && get_collider() == RigidBody3D:
		print("noticed!")
