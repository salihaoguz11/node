# NODE JS SERVER KURULUMU

```jsx
* NODE JS JS backend calisma ortamidir.
* %60 C++ ve %40 JS ile olusturulmustur.
* Created by Ryan Dhal in 2009

Create=> POST
 Read => GET
 Update=>PUT
 Delete=>DELETE
 Patch=>Sadece degistirdigim yeri gonderiyorum.
 Put=> Degistirsem de degistirmesem de verinin hepsini yolluyorum.
```

## 1-Calistigimiz yere "npm init -y" komutunu indiririz.

```jsx
"npm init -y" bu komut package.json olusturmak icin yazilir.Benim projem icin bana bir yer tahsis edilir. Node bilir ki bu klasor bu proje icin tahsis edilmistir.
```

## Her proje icin farkli bir klasore neden ihtiyac var?

```jsx
Global de kurarsan butun projelerin hepsinde ki paketlerin hepsi bir arada olur. Ve tasidin zaman hepsini tasiman gerekir. Ve herhangi bir projede ki ki guncelleme olsa onu takip etme cok zor olabilir. Mesela proje de express2 ile kurulup yapilmis ama senin globalde express3 kullanilmis. Ve ileri de projeleri calistirmak istesem bu projeler muhtemelen calismaz.Bilgisayar global enviromenttir. Projeler is elocal enviroment.

```

## 2- "npm i dotenv" komutunu yazariz ve indiririz.

```jsx

```

## 3- ".env" dosyasi ekle

```jsx
".env dosyasi"
GIZLI sifrelerin yada bilgilerin oldugu alandir. Burada gizelenmis veriler bulunur.
*Buyuk harf ile yazilir. PORT gibi
*PORT=8000 esittir sol ve sag tarafinda bosluk olmadan dipdibe yazilir.
*Bir degisiklik yapilirsa kapatip acmazk lazim.(ctrl+C)
*Yorum satirlari kodlarin yanina degil altina yada ustune yazilir.

```

## 4- ".gitignore" dosyasi ekle

```jsx
BU dosya neyin gidip gitmemesini istedigimi belirttigim yerdir.
.gitignore generator : toptal(google yap)
node dosyasina uygun olani kopyala ve bu dosyanin icine yapistir.
```

## 5- "npm i express" dosyasi ekle. Eger express kullanacaksak.

```jsx
express ile module kurarsin. Oldukca fazla dosya iner. Expressin ihtiyac duydugu dosyalarda iner.
```
