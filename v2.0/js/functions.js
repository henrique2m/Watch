// TUESDAY, WEDNESDAY, THURSDAY
const  messageTWT = 
[
"Bom dia! Hoje teremos um dia muito produtivo, conto com vocês para alcançarmos todos os objetivos, garantindo assim, o bem maior, o sucesso de todos. ",
"Chegamos a metade da nossa jornada diária, em busca dos nossos objetivos. Agora vamos fazer uma pausa. Alimente-se bem e beba muita água. Bom descanso!",
"Boa tarde! Agora que já estamos com as energias renovadas, podemos retomar nossas atividades como força máxima. Bom trabalho a todos!",
"Estamos quase chegando ao fim da nossa jornada diária, gostaria de agradecer a todos pelo esforço e empenho.",
"Parabéns! Hoje tivemos um dia muito produtivo. Tenha uma ótima noite de sono. Bom descanso!"
]
// MONDAY, FRIDAY
const messageMF =
[
"Bom dia! Depois de um ótimo final de semana, estamos todos renovados e prontos para começarmos a semana com força máxima. O nosso sucesso coletivo se torna o seu sucesso individual. Um bom trabalho a todos!",
"Estamos quase chegando ao fim de mais uma semana, gostaria de agradecer a todos pelo esforço e empenho.",
"Parabéns! Tivemos uma semana muito produtiva, quero desejar um ótimo final de semana. Bom descanso!"
]

let r = 1; // ROTATE

function rotate(){
	const icon = document.getElementById('icon');
	icon.style.transform = "rotate("+r+"deg)";
	r  = r + 1;
}

function toggle(flt, bg, vsblty){ // Float, background, visibility
	const popup = document.getElementsByClassName("popup");
	const watch = document.getElementById("watch");
	for (let i = 0; i < popup.length; i++){
		 popup[i].style.visibility = vsblty; 
	}
	watch.style.float = flt;
	watch.style.backgroundColor = bg; 
}

 function watch(){

	    const data = new Date();
	   	let hours = data.getHours();
	    let minutes = data.getMinutes();
	    let seconds = data.getSeconds();
	 	let day = data.getDay(); 

		   if (hours < 10) {
		    hours = "0"+hours;
		   }
		   if (minutes < 10) {
		    minutes = "0"+minutes;
		   }
		   if (seconds < 10) {
		    seconds = "0"+seconds;
		   }

		  const awakening = hours+""+minutes;
		  const info = document.getElementById("info");
		  const show = document.getElementById("num").innerHTML=hours+":"+minutes+":"+seconds;

		   if ( day !== 0 && day !== 6) {

				 const pL = 'left';
				 const pR = 'right';
				 const bgV = 'rbga(7,0,130,0.5)';
				 const bgH = '#2D3180';
				 const vV = 'visible';
				 const vH = 'hidden';

			   switch(awakening){
			   		case "0800":
			   			if(day === 1){
			   				toggle(pL, bgV, vV);
			   				rotate();
			   				info.innerHTML = messageMF[0];
			   			}else{
			   				toggle(pL, bgV, vV);
			   				rotate();
			   				info.innerHTML = messageTWT[0];
			   			}
			   		break;
			   		case "1159":
			   			toggle(pL, bgV, vV);
			   			rotate();
			   			info.innerHTML = messageTWT[1];
			   		break;
			   		case "1519":
			   			toggle(pL, bgV, vV);
			   			rotate();
			   			info.innerHTML = messageTWT[2];
			   			break;
			   		case "1725":
				   		if(day === 5){
				   				toggle(pL, bgV, vV);
				   				rotate();
				   				info.innerHTML = messageMF[1];
				   			}else{
				   				toggle(pL, bgV, vV);
				   				rotate();
				   				info.innerHTML = messageTWT[3];
				   			}
				   		break;
			   		case "1729":
				   		if(day === 5){
				   				toggle(pL, bgV, vV);
				   				rotate();
				   				info.innerHTML = messageMF[2];
				   			}else{
				   				toggle(pL, bgV, vV);
				   				rotate();
				   				info.innerHTML = messageTWT[4];
				   			}
				   		break;
				   		default: toggle(pR, bgH, vH); r = 1;

	   			}

	   			show;
   			}else{
   				show;
   			}

  	}
  	//loading
  	window.setInterval("watch()",1000);