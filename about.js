const locations = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7602472610824!2d19.099317274745484!3d47.51862773894591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db7a2b6cab21%3A0x4d8e44bf7ff67396!2zVXpzb2tpIFV0Y2FpIEvDs3Jow6F6IMOpcMO8bGV0ZWs!5e0!3m2!1shu!2sil!4v1589270818219!5m2!1shu!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.391119533736!2d34.77323231449783!3d32.05866852757219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b61f1745de7%3A0xfb6b712c987bce78!2sLevinski%2C%20Tel%20Aviv-Yafo!5e0!3m2!1shu!2sil!4v1589270981505!5m2!1shu!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451093.63803840405!2d-15.876638035544511!3d27.958108638429067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40855504bf07c1%3A0x2ec916c8a5acdb16!2sGran%20Canaria!5e0!3m2!1shu!2sil!4v1589271074210!5m2!1shu!2sil",
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.43812740823!2d-1.3176279641071627!3d51.75050176349678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2zT3hmb3JkLCBFZ3llc8O8bHQgS2lyw6FseXPDoWc!5e0!3m2!1shu!2sil!4v1589277989023!5m2!1shu!2sil"
];

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector(".next");
let currentlySelected = 0;
  
  prevBtn.addEventListener('click', function() {
      document.getElementById("ifr").src = locations[currentlySelected -1];
      currentlySelected--;
      nextBtn.disabled =false;
      if (currentlySelected === 0) {
         prevBtn.disabled = true; 
      }
  });
  
  nextBtn.addEventListener('click', function(){
      document.getElementById("ifr").src = locations[currentlySelected +1];
      currentlySelected++;
      prevBtn.disabled = false;
      if (locations.length === currentlySelected +1) {
      nextBtn.disabled = true;
  }
  })

/**footer */

var input = ['HTML','CSS','JavaScript'];
var languagesPlaceholder = document.getElementById("languagesPlaceholder")
var last = input.pop();
languagesText = input.join(', ') + ' and ' + last +".";
languagesPlaceholder.innerText =  languagesText;