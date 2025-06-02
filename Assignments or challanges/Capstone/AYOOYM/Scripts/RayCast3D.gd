extends RayCast3D

var collition = false

@onready var decal = preload("res://decaltest.tscn")

func _process(delta):
	if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera" && get_node("..").current == true:
		if collition == false:
			print(get_collider())
			var cam = get_collider().get_node("../CamNeck/Camera3D")
			#get_collider()._switch()
			collition = true
			var Countdown = get_node("/root/TEST/UI/RichTextLabel")
			for i in range(3):
				Countdown.text = str(i + 1)
				print(i + 1)
				await get_tree().create_timer(1.0).timeout
			await get_tree().create_timer(0.01).timeout
			cam.current = true
			Countdown.text = ""
			collition = false
		
func _input(event):
	if collition == false && get_node("..").current == true:
		if event.is_action_pressed("CamSwitch"):
			force_raycast_update()
			print("Fire!")
	#if event.is_action_pressed("Ability") && get_node("..").current == true:
		#
			
#func _physicsInteraction():
	#print("Activated!")
	#force_raycast_update()
	#if is_colliding() && get_collider().name == "RigidBody3D":
		#print(get_collider())
		#print("noticed!")
		##get_collider().linear_velocity.y = 5
		#print("Normal:", get_collision_normal(), " Point:", get_collision_point())
		#var bul = decal.instantiate()
		#get_collider().add_child(bul)
		#bul.global_transform.origin = get_collision_point()
	#else:
		#print(get_collider())
		#print("Normal:", get_collision_normal(), " Point:", get_collision_point())
		#print(position.distance_to(get_collision_point()))
		#
		
