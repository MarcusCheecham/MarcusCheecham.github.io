

const CAM_SENS = 0.006
var head = self

# Called when the node enters the scene tree for the first time.
func _ready():
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
	
func _input(event):
	if event is InputEventMouseMotion:
		head.rotate_y(-event.relative.x * CAM_SENS)
		self.Camera3D.rotate_x(-event.relative.y * CAM_SENS)
		Camera3D.rotation.x = clampf(Camera3D.rotation.x, deg_to_rad(-90.0), deg_to_rad(90.0))
		
	elif event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
		
