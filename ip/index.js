//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

const ipcard = (data) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.setAttribute("src", `https://flagsapi.com/${data.ülkeKodu}/flat/64.png`);
  card.append(img);

  const div = document.createElement("div");
  div.className = "card-info";
  card.append(div);

  const h3 = document.createElement("h3");
  h3.className = "ip";
  h3.textContent = data.sorgu;
  div.append(h3);

  const p1 = document.createElement("p");
  p1.className = "ulke";
  p1.textContent = `${data.ülke} (${data.ülkeKodu})`;
  div.append(p1);

  const p2 = document.createElement("p");
  p2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;
  div.append(p2);

  const p3 = document.createElement("p");
  p3.textContent = `Şehir: ${data.şehir}`;
  div.append(p3);

  const p4 = document.createElement("p");
  p4.textContent = `Saat dilimi: ${data.saatdilimi}`;
  div.append(p4);

  const p5 = document.createElement("p");
  p5.textContent = `Para birimi: ${data.parabirimi}`;
  div.append(p5);

  const p6 = document.createElement("p");
  p6.textContent = `ISP: ${data.isp}`;
  div.append(p6);

  return card;
};

/* const getdata = async () => {
  await ipAdresimiAl();

  axios.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`).then((res) => {
    console.log(res);
    const card = ipcard(res.data);
    document.querySelector(".cards").append(card);
  });
};

getdata(); */

ipAdresimiAl().then(() => {
  axios.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`).then((res) => {
    console.log(res);
    const card = ipcard(res.data);
    document.querySelector(".cards").append(card);
  });
});
