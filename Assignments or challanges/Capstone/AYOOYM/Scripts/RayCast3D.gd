extends RayCast3D

const RAY_LENGTH = 1000

func _physics_process(delta):
	if is_colliding():
		var space_state = get_world_3d().direct_space_state
		var cam = get_node("..")
		var mousepos = get_viewport().get_mouse_position()

		var origin = cam.project_ray_origin(mousepos)
		var end = origin + cam.project_ray_normal(mousepos) * RAY_LENGTH
		var query = PhysicsRayQueryParameters3D.create(origin, end)
		query.collide_with_areas = true

		var result = space_state.intersect_ray(query)
		print(result)
		
func _input(event):
	if event.is_action_pressed("CamSwitch"):
		target_position.z = -50
		print("Extend")
	elif event.is_action_released("CamSwitch"):
		target_position.z = -0
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
