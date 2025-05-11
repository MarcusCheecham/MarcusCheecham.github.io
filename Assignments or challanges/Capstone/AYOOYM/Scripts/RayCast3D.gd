extends RayCast3D


func _physics_process(delta):
	pass
		
func _input(event):
	if event.is_action_pressed("CamSwitch"):
		scale.y = 50
		print("Extend")
	elif event.is_action_released("CamSwitch"):
		scale.y = 1
		print("Shortend")
		
		
#func _input(event):
	#if event.is_action_pressed("CamSwitch") && is_colliding():
		#print(get_collider().name)

		
		#_shoot()
#
#func _shoot():
	#var space = get_world_3d().direct_space_state
	#var query = PhysicsRayQueryParameters3D.create($Camera3D.global_position,
		#$Camera3D.global_position - $Camera3D.global_transform.basis.z * 100)
	#var collision = space.intersect_ray(query)
	#if collision:
		#$CanvasLayer/Label.text = collision.collider.name
	#else:
		#$CanvasLayer/Label.text = ""
