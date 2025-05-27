extends RayCast3D

var collition = false

@onready var decal = preload("res://decaltest.tscn")

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
	#if event.is_action_pressed("Ability") && get_node("..").current == true:
		#
			
func _physicsInteraction():
	print("Activated!")
	force_raycast_update()
	if is_colliding() && get_collider().name == "RigidBody3D":
		print(get_collider())
		print("noticed!")
		#get_collider().linear_velocity.y = 5
		print("Normal:", get_collision_normal(), " Point:", get_collision_point())
		var bul = decal.instantiate()
		get_collider().add_child(bul)
		bul.global_transform.origin = get_collision_point()
	else:
		print(get_collider())
		print("Normal:", get_collision_normal(), " Point:", get_collision_point())
		print(position.distance_to(get_collision_point()))
		
		
