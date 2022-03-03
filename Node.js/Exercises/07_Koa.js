/* 
Ödev 6


Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
Koa Dökümantasyon

Kolay gelsin.

*/

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '<h1>INDEX </h1>'
});

router.get('/about', (ctx) => {
    ctx.body = '<h1>HAKKIMDA</h1>'
  });

  router.get('/contact', (ctx) => {
    ctx.body = '<h1>ILETISIM </h1>'
  });

app.use(router.routes())
const port = 3000;

  app.listen(3000,() => {
      console.log(`app started on port ${port}`)
  })

//ödev oluşturuldu
