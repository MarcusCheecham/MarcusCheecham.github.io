extends RayCast3D

@onready var cam = get_node("../CamNeck/Camera3D")

func _physics_process(delta):
	if is_colliding() && Input.is_action_pressed("CamSwitch") && get_collider().name == "Camera":
		get_collider()._switch()
	else:
		target_position.y = 0

func _input(event):
	if event.is_action_pressed("CamSwitch"):
		target_position.y = -50
		print("Extend")
	elif event.is_action_released("CamSwitch"):
		target_position.y = 0
		print("Shortend")
