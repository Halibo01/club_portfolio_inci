# Üniversite Topluluğu - Örnek Web Sitesi

Bu küçük proje, üniversite topluluğu için örnek bir statik web sitesi iskeleti sağlar. İçinde temel bir `index.html`, `css/styles.css` ve `js/script.js` bulunur.

Quick start

- Dosyaları açmak için doğrudan tarayıcıda `index.html` dosyasını çift tıklayıp açabilirsiniz.
- Geliştirme sırasında basit bir yerel sunucu kullanmak isterseniz (ör. resimlerin CORS sorunları veya modül kullanımında fayda sağlar) PowerShell'de şu komutlardan birini kullanabilirsiniz:

```powershell
# Python 3 yüklüyse (Windows PowerShell):
python -m http.server 5500; # kök dizinde çalıştırın

# veya
py -3 -m http.server 5500;
```

Ardından tarayıcıda `http://localhost:5500` adresini açın.

Nasıl özelleştirilir
- `index.html` içindeki metinleri Türkçe/İngilizce olarak düzenleyin.
- `css/styles.css` ile renkleri ve tipografiyi değiştirin.
- Daha gelişmiş bir iletişim formu için bir backend (örn. Node/Express, Firebase Functions veya Formspree gibi üçüncü taraf) ekleyin ve `js/script.js` içindeki gönderim kısmını güncelleyin.

İleri adımlar önerisi
- Etkinlikleri bir JSON dosyası veya küçük bir API ile dinamik hale getirin.
- Üye kayıt sistemi ve oturum açma ekleyin.
- Deploy etmek için GitHub Pages veya Netlify kullanın.
