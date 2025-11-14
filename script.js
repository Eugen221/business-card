document.addEventListener('DOMContentLoaded',()=>{
  const buttons = document.querySelectorAll('.link-btn');
  const defaultLinks = {
    'https://t.me/':'https://t.me/huntertemplar',
    'https://store.steampowered.com/':'https://steamcommunity.com/profiles/76561199144159549/'
  };

  buttons.forEach(btn=>{
    const raw = btn.dataset.link;
    const final = defaultLinks[raw] || raw;
    btn.addEventListener('click',()=> window.open(final,'_blank','noopener'));
  });
});