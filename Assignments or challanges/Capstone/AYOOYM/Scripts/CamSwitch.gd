extends Area3D

func _switch():
	print("Tagged")
	var Countdown = get_node("../../UI/RichTextLabel")
	for i in range(3):
		Countdown.text = str(i + 1)
		await get_tree().create_timer(1.0).timeout
		print(i)

	var cam = get_node("../CamNeck/Camera3D")
	cam.current = true
	Countdown.text = ""
