document.addEventListener('DOMContentLoaded',function(){
  // Navbar toggle (mobil)
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', ()=> nav.classList.toggle('show'));

  // Yıl
  document.getElementById('year').textContent = new Date().getFullYear();

  // Etkinlik verilerini JSON dosyasından oku
  async function loadEvents() {
  try {
    const response = await fetch('js/events.json');
    const data = await response.json();
    
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';

    data.events.forEach(ev => {
      const a = document.createElement('a');
      a.href = ev.link;
      a.className = 'event-link';

      const div = document.createElement('div');
      div.className = 'event';

      div.innerHTML = `
        <h4>${ev.title}</h4>
        <small>${ev.date}</small>
        <p>${ev.desc}</p>
      `;

      a.appendChild(div);
      eventsList.appendChild(a);
    });

  } catch (error) {
    console.error('Etkinlik verileri yüklenirken hata oluştu:', error);
    document.getElementById('eventsList').innerHTML = 
      '<p>Etkinlik verileri yüklenirken bir hata oluştu.</p>';
  }
}

  // Sayfa yüklendiğinde etkinlikleri yükle
  loadEvents();

  // Basit form doğrulama ve simüle gönderim
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    result.textContent = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      result.textContent = 'Lütfen tüm alanları doldurun.';
      return;
    }
    // Gerçek gönderim yok — backend ekleyince burayı değiştirin
    result.textContent = 'Mesajınız kaydedildi. En kısa sürede dönüş yapacağız.';
    form.reset();
  });
});
