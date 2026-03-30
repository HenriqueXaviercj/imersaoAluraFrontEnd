document.addEventListener('DOMContentLoaded', () => {
  const profileLinks = document.querySelectorAll('ul li figure.profile a');

  profileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const figure = link.closest('figure.profile');
      const name = figure?.querySelector('figcaption')?.textContent?.trim();
      const image = link.querySelector('img')?.src || figure?.querySelector('img')?.src;

      if (name) {
        localStorage.setItem('perfilAtivoNome', name);
      }

      if (image) {
        localStorage.setItem('perfilAtivoImagem', image);
      }
    });
  });
});
