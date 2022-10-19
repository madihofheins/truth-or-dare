input.onButtonPressed(Button.A, function () {
    basic.showString("TRUTH OR DARE")
    if (("truth" as any) < ("5" as any)) {
        basic.showString("Who is your favorite teacher?")
    } else if (("dare" as any) > ("5" as any)) {
        basic.showString("Do 15 jumping jacks.")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    no = randint(0, 4)
})
let no = 0
basic.showString("TRUTH OR DARE")
let RandomNumber = randint(0, 5)
basic.forever(function () {
	
})
