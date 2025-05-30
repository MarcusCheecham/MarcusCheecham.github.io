extends StaticBody3D

@onready var door = get_node("../Door")

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _trigger():
	door.position.y = -5
