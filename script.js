function funct7(){
	$(".welcome-text-par-2").fadeIn(2000);
}
function funct5(){
	$(".welcome-text-end").fadeIn(3000);
	setTimeout(funct6, 1000);
}
function funct6(){
	$(".welcome-text-par").fadeIn(3300);
	setTimeout(funct7, 1000);
}

function funct4(){
	$(".welcome-text-4").fadeIn(3000);
	setTimeout(funct4_hide, 1);
}
function funct4_hide(){
	$(".welcome-text-4").fadeOut(500);
	setTimeout(funct5, 3700);
}

function funct3(){
	$(".welcome-text-3").fadeIn(3000);
	setTimeout(funct3_hide, 1);
}
function funct3_hide(){
	$(".welcome-text-3").fadeOut(500);
	setTimeout(funct4, 3700);
}


function funct2(){
	$(".welcome-text-2").fadeIn(3000);
	setTimeout(funct2_hide, 1);
}
function funct2_hide(){
	$(".welcome-text-2").fadeOut(500);
	setTimeout(funct3, 3700);
}


function funct1(){
	$(".welcome-text-1").fadeIn(3000);
	setTimeout(funct1_hide, 1);
}
function funct1_hide(){
	$(".welcome-text-1").fadeOut(500);
	setTimeout(funct2, 3700);
}

setTimeout(funct1, 1000);
