extends Control


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
	
func _countdown():
	for i in range(3):
		await get_tree().create_timer(1.0).timeout
		RichTextLabel.text = str(i)
