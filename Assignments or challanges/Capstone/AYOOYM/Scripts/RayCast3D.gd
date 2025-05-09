extends RayCast3D


func _physics_process(delta):
	if is_colliding():
		var hit = get_collider()
		print(hit.name)
