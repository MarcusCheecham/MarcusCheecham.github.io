extends Node3D

@onready var ray = get_node("CamNeck/Camera3D/RayCast3D")
@onready var cam = get_node("CamNeck/Camera3D")

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
	
func _input(event):
	if event.is_action_pressed("Ability") && cam.current == true:
		ray._physicsInteraction()
