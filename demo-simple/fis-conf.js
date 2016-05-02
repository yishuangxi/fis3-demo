fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*{js, css, png, jpg, gif}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js'),
  domain: 'http://www.baidu.com'
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});