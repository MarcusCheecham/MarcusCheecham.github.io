extends Area3D

func _switch():
	var cam = get_node("../CamNeck/Camera3D")
	if cam.current != null:
		print("Tagged")
		print(cam)

		var Countdown = get_node("../../UI/RichTextLabel")
		for i in range(3):
			Countdown.text = str(i + 1)
			await get_tree().create_timer(1.0).timeout
			print(i)
		cam.current = true
		Countdown.text = ""
