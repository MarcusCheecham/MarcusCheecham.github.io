extends Node3D

@onready var ray = get_node("CamNeck/Camera3D/RayCast3D")
@onready var cam = get_node("CamNeck/Camera3D")

@onready var decal = preload("res://decaltest.tscn")

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
	
func _input(event):
	if event.is_action_pressed("Ability") && cam.current == true:
		print("Activated!")
		ray.force_raycast_update()
		if ray.is_colliding() && ray.get_collider().name == "Physics":
			print(ray.get_collider())
			print("noticed!")
			#get_collider().linear_velocity.y = 5
			print("Normal:", ray.get_collision_normal(), " Point:", ray.get_collision_point())
			var bul = decal.instantiate()
			ray.get_collider().add_child(bul)
			bul.global_transform.origin = ray.get_collision_point()
		else:
			print(ray.get_collider())
			print("Normal:", ray.get_collision_normal(), " Point:", ray.get_collision_point())
			print(position.distance_to(ray.get_collision_point()))
