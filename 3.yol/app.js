/* 
1.butonların üzerinde yazmasını istediğim şeyleri bir dizide tutalım.
2. butonlara click olduğunda çalışsın istediğim fonksiyon

3.kullanıcı seçimi ile sanal seçimin karşılaştırılıp sonuçların
 switch ile yazılması 

Append sayfada seçtiğimiz bir alanın sonuna veri eklememizi sağlar.



 */

const sonucEl = document.querySelector("#sonuc");
const secenekEl = document.querySelector("#secenek");
const secenekler = ["tas", "kagit", "makas"];

/* const handleClick = (e) => {
  getSonuc(
    e.target.innerHTML,
    secenekler[Math.floor(Math.random() * secenekler.length)]
  );
}; */

/*kullanıcı seçimi ve sanal secim parametreleriyle*/
const getSonuc = (e) => {
  let kullaniciSecimi = e.target.innerHTML;
  let sanalSecim = secenekler[Math.floor(Math.random() * secenekler.length)];

  switch (kullaniciSecimi + sanalSecim) {
    case "makaskagit":
    case "tasmakas":
    case "kagittas":
      sonucEl.innerHTML = `Senin seçimin:${kullaniciSecimi} ve
       bilgisayarın seçimi:${sanalSecim} ve SEN KAZANDIN`;
      break;
    case "kagitmakas":
    case "makastas":
    case "taskagit":
      sonucEl.innerHTML = `Senin seçimin:${kullaniciSecimi} ve
       bilgisayarın seçimi:${sanalSecim} ve SEN KAYBETTİN`;
      break;
    case "kagitkagit":
    case "makasmakas":
    case "tastas":
      sonucEl.innerHTML = `Senin seçimin:${kullaniciSecimi} ve 
      bilgisayarın seçimi:${sanalSecim} ve BERABERESİNİZ`;
      break;
  }
};

secenekler.forEach((secim) => {
  const button = document.createElement("button");
  button.innerHTML = secim;
  button.addEventListener("click", getSonuc);
  secenekEl.appendChild(button);
});
