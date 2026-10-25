(function () {
  var root = document.documentElement;
  var m = document.cookie.match(/(?:^|; )theme=(light|dark)/);
  if (m) root.setAttribute('data-theme', m[1]);

  function current() {
    return root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var b = document.querySelector('.theme-toggle');
    function render() { b.textContent = current() === 'dark' ? '☀' : '☾'; }
    render();
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      document.cookie = 'theme=' + next + '; path=/; max-age=31536000; samesite=lax';
      render();
    });
  });
})();
