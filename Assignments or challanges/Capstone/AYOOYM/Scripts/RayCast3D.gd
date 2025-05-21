extends RayCast3D

var collition = false

@onready var decal = get_node("../../../../Decal")

func _process(delta):
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
	if is_colliding() && get_collider().name == "RigidBody3D":
		#var img = decal
		#get_collider().add_child(img)
		#img.global_transform.orgin = get_collision_point()
		#img.look_at(get_collision_point() + get_collision_normal(), Vector3.UP)
		print("noticed!")
		get_collider().linear_velocity.y = 5
		print(get_collision_normal())
