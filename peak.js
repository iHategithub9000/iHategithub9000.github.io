
if ((function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true})(navigator.userAgent||navigator.vendor||window.opera)){
  document.body.innerHTML=`<h1 style="color: white">you when no mobile support</h1>

<video id="video" width="640" height="360" controls playsinline preload="metadata">
  <source src="3jpSd6P.mp4" type="video/mp4">
  peak fucking browser bro, cant even play video smh
</video>
<img src="x" onerror="document.getElementById('video').width=window.innerWidth" style="display: none">
<h1 style="color: white">bottom text</h1>
` 
throw new Error("errorring script so it doesnt run further (we're on fucking mobile wtf)")
}
if(Math.random()<0.2||JSON.parse(localStorage.getItem("requiresCaptcha"))){
  localStorage.setItem("requiresCaptcha",true);
  location.href="/captcha.html";
}
const konami = ['UP','UP','DOWN','DOWN','LEFT','RIGHT','LEFT','RIGHT','B','A'];
let cheatbuffer = [];

const norm = k => {
  const map = {
    ArrowUp: 'UP', ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT', ArrowRight: 'RIGHT'
  };
  return map[k] || k.toUpperCase();
};

window.addEventListener('keydown', e => {
  cheatbuffer.push(norm(e.key));
  if (cheatbuffer.length > konami.length) cheatbuffer.shift();
  if (cheatbuffer.join(',') === konami.join(',')) {
    openCheatDialog();
    cheatbuffer = [];
  }
});

const dialog = document.getElementById('cheatDialog');
const form = document.getElementById('cheatForm');
const input = document.getElementById('cheatInput');

function openCheatDialog() {
  dialog.style.display = 'block';
  input.value = '';
  input.focus();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const code = input.value.trim().toUpperCase();
  dialog.style.display = 'none';

  switch (code) {
    case 'DAJIGMN'://godmode
      setInterval(()=>{try{onColorMismatch=()=>{}}catch{}})
      break;
    case 'AGWERHB'://slows game
      setInterval(()=>{try{video.playbackRate=0.5}catch{}})
      break;
    case 'PFWGBFE'://regen
      setInterval(()=>{try{if(buffer!=300)buffer=buffer+2;onColorMismatch()}catch{}},1000)
      break;
    default:
      alert('Unknown cheat: ' + code);
  }
});

let clicks = 0;
document.getElementById("header").addEventListener('click', () => {
  clicks++;
  if (clicks == 6) {
    location.href = "/undertale.html";
  }
});
window.bad = false;
let playercolor = "white";

let cursorX = 0;
let cursorY = 0;
let mouseOverVideo = false;
window.debug=false;
function togglePlayerColor() {
  playercolor = playercolor === "white" ? "black" : "white";
  document.getElementById("col").innerText="You need to stay on "+playercolor
  updatePageStyle();
}

function updatePageStyle() {
  const opposite = playercolor === "white" ? "black" : "white";
  document.body.style.backgroundColor = opposite;
  document.body.style.color = playercolor;

  const video = document.querySelector("video");
  const allChildren = document.body.querySelectorAll("*");
  allChildren.forEach(el => {
    if (el !== video && !el.contains(video)) {
      el.style.color = playercolor;
      el.style.backgroundColor = opposite;
    }
  });
}
  let buffer = 300;
function onColorMismatch() {
  console.log("mismatch")
  document.getElementById("helth").innerText="Health: "+buffer
  if(!debug){x=new Audio('https://painscreen.is-a.dev/undertale-damage-taken-101soundboards.mp3');x.volume=0.4;x.play();}
  buffer--;
  if (buffer < 0){
    if(!debug) {video.pause();alert("You lose");location.reload()}
    console.log("lost")
    buffer=300
  }
  // Add more logic here as needed
}

document.addEventListener('keydown', function (event) {
  if (event.key === "b" && event.altKey && event.ctrlKey && !window.bad) {
    
    const wrapper = document.querySelector("div.wrapper");

    window.video = document.createElement("video");
    window.video.src = "badapple.mp4";
    window.video.autoplay = true;
    window.video.controls = false;
    window.video.width = 640;
    window.video.height = 360;
    wrapper.appendChild(window.video);

    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 360;
    canvas.style.display = "none";
    wrapper.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    togglePlayerColor()
    // Track mouse over video
    video.addEventListener("mousemove", (e) => {
      const rect = video.getBoundingClientRect();
      cursorX = Math.floor(e.clientX - rect.left);
      cursorY = Math.floor(e.clientY - rect.top);
    });

    video.addEventListener("mouseenter", () => {
      mouseOverVideo = true;
    });

    video.addEventListener("mouseleave", () => {
      mouseOverVideo = false;
    });
    video.addEventListener('ended', function () {
        alert('You win!');
        location.reload()
      });
    video.addEventListener("play", () => {
      function samplePixel() {
        if (video.paused || video.ended) return;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (!mouseOverVideo) {
          onColorMismatch();
        } else {
          const pixel = ctx.getImageData(cursorX, cursorY, 1, 1).data;
          const avg = (pixel[0] + pixel[1] + pixel[2]) / 3;
          const currentColor = avg > 127 ? "white" : "black";
          if (currentColor !== playercolor) {
            onColorMismatch();
          }
        }

        requestAnimationFrame(samplePixel);
      }

      requestAnimationFrame(samplePixel);
    });

    video.addEventListener("click", () => {
      togglePlayerColor();
    });

    updatePageStyle();
    window.bad = true;
  }
});
