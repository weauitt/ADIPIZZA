const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Указываем префикс, по которому будут определяться запросы для проксирования
    createProxyMiddleware({
      target: ' https://demo5518646.mockable.io/PizzaCard', // Целевой домен, на который будут перенаправляться запросы
      changeOrigin: true, // Изменение оригинального происхождения запроса
      // Дополнительные опции по вашему усмотрению
    })
  );
};
