extends Node3D

var sens = 0.2

func _unhandled_input(event):
	if event is InputEventMouseMotion:
		rotation_degrees.y -= event.relative.x * sens
		rotation_degrees.y = clamp(rotation_degrees.y, -80.0, 80.0)
		$Camera3D.rotation_degrees.x -= event.relative.y * 0.2
		$Camera3D.rotation_degrees.x = clamp(
			$Camera3D.rotation_degrees.x, -60.0, 60.0
		)

