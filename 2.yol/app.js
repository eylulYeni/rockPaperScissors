/* 1.kullanıcı seçimini göstereceğim element
2.sanal seçimi göstereceğim element
3.seçimleri karşılaştırıp sonucu göstereceğim element
4. for döngüsüyle butonları oluşturalım.
5.butonların üzerinde yazmasını istediğim şeyleri bir dizide tutalım.
6. butonlara click olduğunda çalışsın istediğim fonksiyon
7. sanal seçim için fonksiyon
8.kullanıcı seçimi ile sanal seçimin karşılaştırılıp sonuçların
 switch ile yazılması 

Append sayfada seçtiğimiz bir alanın sonuna veri eklememizi sağlar.



 */

const kullaniciSecimiEl = document.createElement("h2");
const sanalSecimEl = document.createElement("h2");
const sonucEl = document.createElement("h2");
const containerEl = document.getElementById("container");
containerEl.append(kullaniciSecimiEl, sanalSecimEl, sonucEl);

const secenekler = ["tas", "kagit", "makas"];

let kullaniciSecimi;
let sanalSecim;

/* butona tıklandığında çalışacak fonksiyon */

const handleClick = (e) => {
  kullaniciSecimi = e.target.id;
  kullaniciSecimiEl.innerHTML = `Sen: ${kullaniciSecimi}`;
  generateSanalSecim();
  getSonuc();
};
/* sanal seçim üreten fonksiyon */
const generateSanalSecim = () => {
  sanalSecim = secenekler[Math.floor(Math.random() * secenekler.length)];
  sanalSecimEl.innerHTML = `Bilgisayar:${sanalSecim}`;
};

/* butonları ekleme */
for (let i = 0; i < secenekler.length; i++) {
  const button = document.createElement("button");
  button.setAttribute("id", secenekler[i]);
  button.innerHTML = secenekler[i];
  button.addEventListener("click", handleClick);
  containerEl.appendChild(button);
}

/* kimin kazandığını belirlediğimiz fonksiyon */
/*  Taş makası, makas kağıdı, kâğıt da 
taşı yener. Eğer oyuncular aynı durumu seçerse 
oyun berabere biter.  */

const getSonuc = () => {
  switch (kullaniciSecimi + sanalSecim) {
    case "makaskagit":
    case "tasmakas":
    case "kagittas":
      sonucEl.innerHTML = "SEN KAZANDIN!";
      break;
    case "kagitmakas":
    case "makastas":
    case "taskagit":
      sonucEl.innerHTML = "KAYBETTİN!";
      break;
    case "kagitkagit":
    case "makasmakas":
    case "tastas":
      sonucEl.innerHTML = "BERABERESİNİZ!";
      break;
  }
};
