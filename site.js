// Every cut, in order
const V = 'media/video/';
const CUTS = [
  ['V0 v2', 'Oct 12, night', 'First overnight film: primitive hero, 60 s.', V + 'archive/leap_v2.mp4'],
  ['V0 final', 'Oct 12, 03:45', 'v3 of the night: KITE in 3D, CC0 sound design.', V + 'archive/leap.mp4'],
  ['V1 A1', 'Oct 12', 'Rebuild: new story, VO, score. Low-res animatic. Critic 4/10.', V + 'archive/leap_v1_anim_a1.mp4'],
  ['V1 A2', 'Oct 12', 'Chase re-cut, Glitch rescaled. Critic 5/10.', V + 'archive/leap_v1_anim_a2.mp4'],
  ['V1', 'Oct 12', 'Full 1080p render. Critic 6/10.', V + 'archive/leap_v1_final.mp4'],
  ['V1.2', 'Oct 12', 'Penetrations, flicker and motion measured and fixed.', V + 'v12/leap_v12_final.mp4'],
  ['i1', 'Oct 13', 'V1.3 starts: four redo shots, new look bible.', V + 'v13/leap_v13_i1_720p.mp4'],
  ['i3', 'Oct 13', 'Every shot reworked.', V + 'v13/leap_v13_i3_720p.mp4'],
  ['i4', 'Oct 13', 'Hero scale, rush, fight, overlap layer.', V + 'v13/leap_v13_i4_720p.mp4'],
  ['i5', 'Oct 13', 'Fight at full scale. Dror leaves 19 notes.', V + 'v13/leap_v13_i5_720p.mp4'],
  ['i6', 'Oct 13', '12 of 19 notes fixed.', V + 'v13/leap_v13_i6_720p.mp4'],
  ['i7', 'Oct 13', 'All 19 notes addressed.', V + 'v13/leap_v13_i7_720p.mp4'],
  ['i8', 'Oct 13', 'Readability pass. Critic 5.8.', V + 'v13/leap_v13_i8_720p.mp4'],
  ['i10', 'Oct 13', 'Webs unified, paused for review.', V + 'v13/leap_v13_i10_720p.mp4'],
  ['i11', 'Oct 15', 'New climax: power-up, dive, punch. Critic 6.0.', V + 'v13/leap_v13_i11_720p.mp4'],
  ['i12', 'Oct 16', '35 notes + Spider-Verse look restored.', V + 'v13/leap_v13_i12_720p.mp4'],
  ['i13', 'Oct 16', 'Calmer patterns, Glitch/Kite separation.', V + 'v13/leap_v13_i13_720p.mp4'],
  ['i16', 'Oct 17', 'The current cut: all 13 notes on i15c.', V + 'v13/leap_v13_i16_720p.mp4'],
];

const reel = document.getElementById('reel');
const player = document.getElementById('reelPlayer');
const cap = document.getElementById('reelCap');
CUTS.forEach(([v, d, t, src], i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.innerHTML = `<span class="d">${d}</span><span class="v">${v}</span><span class="t">${t}</span>`;
  b.onclick = () => select(i, true);
  reel.appendChild(b);
});
function select(i, play) {
  const [v, d, t, src] = CUTS[i];
  reel.querySelectorAll('button').forEach((b, j) => b.classList.toggle('on', j === i));
  player.src = src;
  cap.textContent = `${v} · ${d} · ${t}`;
  if (play) player.play().catch(() => {});
}
select(0, false);

// one video at a time
document.querySelectorAll('video,audio').forEach(m => m.addEventListener('play', () =>
  document.querySelectorAll('video,audio').forEach(o => o !== m && o.pause())));

// lightbox
const lb = document.getElementById('lb');
document.querySelectorAll('figure img').forEach(img => img.addEventListener('click', () => {
  lb.querySelector('img').src = img.src;
  lb.querySelector('p').textContent = img.closest('figure').querySelector('figcaption')?.textContent || '';
  lb.hidden = false;
}));
lb.addEventListener('click', () => lb.hidden = true);
addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
