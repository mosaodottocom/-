'use strict';

/* =========================================================
   Works data (lightbox)
   ========================================================= */
const WORKS = [
  {
    title: 'IJL 2026 Playoff',
    src: 'assets/works/01-ijl2026-playoff.webp',
    client: 'AXIZ WAVE 第五人格部門',
    cat: 'Key Visual',
    role: 'Key Visual / Retouch / Typography',
    year: '2026',
    desc: 'IdentityV Japan League 2026 Summer プレーオフ告知のキービジュアル。オレンジの大型タイポグラフィとブルーに染めた選手群像を対比させ、決戦を目前にした高揚感を一枚に凝縮しました。日程・会場・ロスター情報は左側に整理し、SNS上でも一目で読める構成に。'
  },
  {
    title: 'IJL 2026 Summer',
    src: 'assets/works/02-ijl2026-summer.webp',
    client: 'AXIZ WAVE 第五人格部門',
    cat: 'Key Visual / Gameday',
    role: 'Season Visual / Gameday Format',
    year: '2026',
    desc: 'Identity V Japan League Passions For V・2026 Summer のシーズンビジュアルと、選手ごとのGameday告知シリーズ。グリッドとスカイブルーで夏らしい爽快感を出しつつ、シーズンを通して差し替え運用しやすいフォーマットとして設計しています。'
  },
  {
    title: 'Call of the Abyss IX — Global Finals',
    src: 'assets/works/03-coa9-global-finals.webp',
    client: 'AXIZ WAVE 第五人格部門',
    cat: 'Key Visual / Gameday',
    role: 'Key Visual / Gameday / Compositing',
    year: '2026',
    desc: '上海で開催された世界大会「Call of the Abyss IX」Global Finals に向けたキービジュアル。クラシカルな建築とクローム調のスクリプトロゴで大舞台の荘厳さを、シアンのUIパーツで “System Implementation Complete.” というチームコンセプトの未来感を表現しました。'
  },
  {
    title: 'Call of the Abyss IX — Live Global Finals',
    src: 'assets/works/04-coa9-live-finals.webp',
    client: 'AXIZ WAVE 第五人格部門',
    cat: 'Key Visual / Gameday',
    role: 'Key Visual / Schedule / Gameday',
    year: '2026',
    desc: 'グループステージ期の告知ビジュアル。スタジャン姿のモノクロ写真に極太のコンデンスドタイポを重ね、ストリートの空気感と試合前の緊張感を両立。対戦カードと日程を左端に集約し、情報の即読性を確保しています。'
  },
  {
    title: 'Happy Birthday Wafu',
    src: 'assets/works/05-birthday-wafu.webp',
    client: 'AXIZ WAVE',
    cat: 'SNS Graphic',
    role: 'Graphic Design',
    year: '2026',
    desc: '所属メンバーの誕生日を祝うSNS用ビジュアル。ギンガムチェック、リボン、風船、ウィンドウUIのモチーフを組み合わせ、チームカラーのブルーを軸にポップで柔らかなトーンにまとめました。'
  },
  {
    title: 'EX:CEED — The Genesis',
    src: 'assets/works/06-exceed-genesis.webp',
    client: 'EX:CEED',
    cat: 'Key Visual',
    role: 'Key Visual / Title Logo',
    year: '2026',
    desc: 'Overwatchのスクリム団体「EX:CEED」のキービジュアル「天地開闢 — The Genesis」。画面全体を赤のモノトーンで統一し、背を向けたヒーローのシルエットとエッジの効いた筆文字風タイトルで、始まりの緊張感と力強さを表現しました。'
  },
  {
    title: 'Cheeky Custom',
    src: 'assets/works/07-cheeky-custom.webp',
    client: 'Cheeky Custom',
    cat: 'Key Visual / SNS',
    role: 'Key Visual / Logo Typography',
    year: '2025',
    desc: 'カスタムマッチ企画「CHEEKY CUSTOM」の告知ビジュアル。ぷっくりとした立体ロゴとチェック柄、赤×水色の配色で、キャラクターのやんちゃな魅力をそのままポップなトーンに落とし込みました。開催日をリボン帯で大きく見せ、SNSで一目で伝わる構成に。'
  },
  {
    title: 'Apex Legends Creator Tournament Series',
    src: 'assets/works/08-apex-creator-tournament.webp',
    client: 'Apex Legends Creator Tournament',
    cat: 'Key Visual',
    role: 'Key Visual / Typography',
    year: '2026',
    desc: 'Apex Legends のクリエイター大会シリーズのビジュアル。黒・白・赤の3色に絞り、大胆にトリミングしたマスコットと荒々しいブラシタイポで “PLAY BIG, PLAY LOUD” の勢いを表現。縦組みのカタカナや周囲のテキストでストリート感を加えています。'
  },
  {
    title: 'もう普通にAPEXすんの良くね？',
    src: 'assets/works/09-apex-thumbnail.webp',
    client: 'YouTube 動画サムネイル',
    cat: 'Thumbnail',
    role: 'Thumbnail Design',
    year: '2026',
    desc: '配信・動画用のサムネイル。「良くね？」を画面いっぱいの極太明朝で組み、縦組みのコピーと合わせて小さな表示サイズでも一瞬で読めるように設計。規制線テープや留置所風の背景でキャラクターのシュールさを引き立てています。'
  }
];

const reduce = matchMedia('(prefers-reduced-motion: reduce)');

/* =========================================================
   Hero — continuous elliptical ribbon of works (WebGL)
   Split into two canvases so the type sits inside the ribbon.
   ========================================================= */
(() => {
  const vertexSource = `attribute vec2 uv; varying vec2 vUv; uniform vec2 viewport; uniform float progress; uniform float skew; uniform float intro;
void main(){ vUv=uv; float pi=3.14159265359; float f=1.3032253728; float visibleY=15.0/f; float visibleX=visibleY*viewport.x/viewport.y; float radius=visibleX*.7; float height=visibleY*.4; float theta=(uv.x-.5)*2.0*pi;
vec3 pos=vec3(radius*sin(theta),(uv.y-.5)*height,radius*cos(theta)*.4);pos.x+=sin(uv.y*pi)*skew;
float rz=.06*pi-progress*.2*pi;float rx=-.07*pi+progress*.5*pi;
pos.xy=mat2(cos(rz),sin(rz),-sin(rz),cos(rz))*pos.xy;
pos.yz=mat2(cos(rx),sin(rx),-sin(rx),cos(rx))*pos.yz;
float mobile=viewport.x<701.0?.4:1.0;pos.y+=-height*(viewport.x<701.0?.8:.9)+progress*visibleY*1.8*mobile+max(0.0,(progress-.333333)*1.5)*visibleY*mobile-intro*visibleY;
pos.z-=.24*radius; float dist=7.5-pos.z;gl_Position=vec4(pos.x*f/(viewport.x/viewport.y),pos.y*f,1.002002*dist-.2002002,dist);}`;
  const fragmentSource = `precision highp float;varying vec2 vUv;uniform sampler2D atlas;uniform float halfSign;uniform vec2 viewport;uniform float progress;uniform float intro;
void main(){float pi=3.14159265359;float theta=(vUv.x-.5)*2.0*pi;if(cos(theta)*halfSign<0.0)discard;
float repeatX=(2.0*pi*.7*(viewport.x/viewport.y))/(10.0*(.4*(16.0/9.0)/.98));float sequence=(vUv.x-.5)*repeatX+.85-progress*3.0+intro;
if(sequence<0.0||sequence>1.0)discard;float slot=fract(sequence*10.0);if(slot<.01||slot>.99)discard;
float index=min(floor(sequence*10.0),9.0);float imageIndex=index<.5?8.0:index-1.0;float sprite=8.0-imageIndex;vec2 local=(vec2((slot-.01)/.98,vUv.y)-.5)/1.01+.5;if(halfSign<0.0)local.x=1.0-local.x;
vec2 sampleUv=(local+vec2(mod(sprite,3.0),2.0-floor(sprite/3.0)))/3.0;vec4 color=texture2D(atlas,sampleUv);float alpha=1.0;
vec3 rgb=color.rgb;if(halfSign>0.0)alpha=smoothstep(0.0,.3,cos(theta));if(halfSign<0.0){alpha=smoothstep(0.0,.04,vUv.x)*(1.0-smoothstep(.96,1.0,vUv.x));rgb=mix(rgb,vec3(.969),.55);}gl_FragColor=vec4(rgb,alpha);}`;

  const scene = document.querySelector('.fixed-scene');
  const hero = document.querySelector('.hero');
  const hint = document.querySelector('.hint');
  const heading = document.querySelector('.heading');
  const paths = [...document.querySelectorAll('.ink-script path')];
  const pathLengths = paths.map(p => p.getTotalLength());
  const totalLength = pathLengths.reduce((a, b) => a + b, 0);
  paths.forEach((p, i) => { p.style.strokeDasharray = pathLengths[i]; });

  const renderers = [];
  let loaded = false, failed = false, w = innerWidth, h = innerHeight, current = 0, last = 0, startTime = null,
      introRunning = true, skew = 0, previousY = scrollY, velocity = 0, animation = 0;
  const fail = e => { failed = true; document.body.classList.add('no-webgl'); if (e) console.error(e); };

  function makeRenderer(canvas, sign) {
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: 'high-performance' });
    if (!gl) throw Error('WebGL unavailable');
    const compile = (type, text) => {
      const s = gl.createShader(type); gl.shaderSource(s, text); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw Error(gl.getShaderInfoLog(s));
      return s;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw Error(gl.getProgramInfoLog(program));
    gl.useProgram(program);
    const vertices = [];
    for (let i = 0; i < 200; i++) { const a = i / 200, b = (i + 1) / 200; vertices.push(a, 0, b, 0, a, 1, a, 1, b, 0, b, 1); }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    const uv = gl.getAttribLocation(program, 'uv');
    gl.enableVertexAttribArray(uv); gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 0, 0);
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    const uniforms = {};
    for (const name of ['viewport', 'progress', 'intro', 'skew', 'halfSign', 'atlas']) uniforms[name] = gl.getUniformLocation(program, name);
    gl.uniform1f(uniforms.halfSign, sign); gl.uniform1i(uniforms.atlas, 0);
    canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); fail(); });
    const count = vertices.length / 2;
    return {
      canvas, gl,
      upload(image) { gl.bindTexture(gl.TEXTURE_2D, texture); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); },
      render(p, intro, s) {
        gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(uniforms.viewport, w, h); gl.uniform1f(uniforms.progress, p);
        gl.uniform1f(uniforms.intro, intro); gl.uniform1f(uniforms.skew, s);
        gl.drawArrays(gl.TRIANGLES, 0, count);
      }
    };
  }

  try { renderers.push(makeRenderer(document.querySelector('.back'), -1), makeRenderer(document.querySelector('.front'), 1)); }
  catch (e) { fail(e); }

  // Works atlas (3x3 sprites, generated into assets/atlas.js)
  const atlas = new Image();
  atlas.onload = () => { try { renderers.forEach(r => r.upload(atlas)); loaded = true; } catch (e) { fail(e); } };
  atlas.onerror = () => fail(Error('Works atlas could not be loaded'));
  if (window.WORKS_ATLAS) atlas.src = window.WORKS_ATLAS; else fail(Error('WORKS_ATLAS missing'));

  function resize() {
    w = innerWidth; h = scene.clientHeight;
    for (const r of renderers) {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      r.canvas.width = Math.round(w * dpr); r.canvas.height = Math.round(h * dpr);
      r.gl.viewport(0, 0, r.canvas.width, r.canvas.height);
    }
  }
  addEventListener('resize', resize, { passive: true }); resize();

  function animate(now) {
    animation = requestAnimationFrame(animate);
    const dt = Math.min((now - last) / 1000 || .016, .05); last = now;
    // Nothing to draw once the hero has fully scrolled away.
    if (scrollY > hero.offsetHeight + h && current >= 1) { previousY = scrollY; return; }
    const target = Math.min(1, Math.max(0, scrollY / (h * 1.5)));
    current += (target - current) * (1 - Math.exp(-7 * dt)); if (Math.abs(target - current) < .00001) current = target;
    velocity += (scrollY - previousY - velocity) * (1 - Math.exp(-5 * dt)); previousY = scrollY;
    const distortion = (15 / 1.3032253728) * .4 * 16 / 9;
    const targetSkew = reduce.matches ? 0 : Math.max(-distortion * 1.02, Math.min(distortion * 1.02, -velocity * .07 * distortion));
    skew += (targetSkew - skew) * (1 - Math.exp(-6 * dt));
    if (loaded && startTime === null) startTime = now;
    const elapsed = startTime === null ? 0 : (now - startTime) / 1000;
    const opening = reduce.matches || !introRunning ? 0 : Math.pow(1 - Math.min(1, elapsed / 2.6), 4);
    if (elapsed >= 2.6) introRunning = false;
    // Heading (with the eyes, thumbs-up and script) shrinks into the centre, accelerating as it goes.
    const textProgress = Math.min(1, current * 1.6), shrink = Math.pow(textProgress, 2.6);
    heading.style.transform = 'scale(' + Math.max(0, 1 - shrink) + ')';
    heading.style.opacity = 1 - Math.pow(textProgress, 5);
    // The script is erased stroke by stroke in step with the shrink, finishing as the heading vanishes.
    let erased = totalLength * textProgress, past = 0;
    paths.forEach((p, i) => {
      const amount = Math.min(Math.max(erased - past, 0), pathLengths[i]);
      p.style.strokeDashoffset = -amount; p.style.opacity = amount >= pathLengths[i] - 1 ? '0' : '1'; past += pathLengths[i];
    });
    hint.style.opacity = current > .02 ? '0' : '1';
    if (loaded && !failed) { try { for (const r of renderers) r.render(current, opening, skew); } catch (e) { fail(e); } }
  }

  document.querySelector('.replay').onclick = () => { scrollTo({ top: 0, behavior: 'instant' }); current = 0; startTime = null; introRunning = true; };
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animation);
    else { last = performance.now(); animation = requestAnimationFrame(animate); }
  });
  animation = requestAnimationFrame(animate);

  // Pupils follow the pointer.
  const pupil = document.querySelector('.eyes .pupil'), eyes = document.querySelector('.eyes');
  if (matchMedia('(pointer:fine)').matches && !reduce.matches) {
    addEventListener('pointermove', e => {
      const r = eyes.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 400);
      pupil.style.transform = `translate(${3 + dx / d * 7 * k}%,${4 + dy / d * 10 * k}%)`;
    }, { passive: true });
  }
})();

/* =========================================================
   Header state
   ========================================================= */
(() => {
  const header = document.querySelector('.site-header');
  const darks = [...document.querySelectorAll('[data-theme="dark"]')];
  const update = () => {
    header.classList.toggle('scrolled', scrollY > innerHeight * .9);
    const y = header.getBoundingClientRect().top + header.offsetHeight / 2;
    header.classList.toggle('on-dark', darks.some(el => { const r = el.getBoundingClientRect(); return r.top <= y && r.bottom >= y; }));
  };
  addEventListener('scroll', update, { passive: true }); addEventListener('resize', update); update();
})();

/* =========================================================
   Scroll reveal
   ========================================================= */
(() => {
  const items = document.querySelectorAll('.reveal, .work');
  if (!('IntersectionObserver' in window) || reduce.matches) { items.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -12% 0px' });
  items.forEach(el => io.observe(el));
})();

/* =========================================================
   Works filter
   ========================================================= */
(() => {
  const chips = document.querySelectorAll('.chip'), grid = document.querySelector('.work-grid'), works = grid.querySelectorAll('.work');
  chips.forEach(chip => chip.addEventListener('click', () => {
    const f = chip.dataset.filter;
    chips.forEach(c => { const on = c === chip; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', on); });
    grid.classList.toggle('is-filtered', f !== 'all');
    works.forEach(w => {
      const show = f === 'all' || w.dataset.cat.split(' ').includes(f);
      w.classList.toggle('is-hidden', !show);
      if (show) w.classList.add('in');
    });
  }));
})();

/* =========================================================
   Menu & lightbox
   ========================================================= */
(() => {
  const menu = document.querySelector('.menu');
  document.querySelector('.menu-toggle').onclick = () => menu.showModal();
  menu.querySelector('.close').onclick = () => menu.close();
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.close()));
  menu.addEventListener('click', e => { if (e.target === menu) menu.close(); });

  const lb = document.querySelector('.lightbox'), img = lb.querySelector('.lb-img');
  const $ = s => lb.querySelector(s);
  let index = 0;
  const visible = () => [...document.querySelectorAll('.work:not(.is-hidden) .work-link')].map(b => +b.dataset.index);
  function show(i) {
    index = i; const wk = WORKS[i];
    img.classList.remove('swap'); void img.offsetWidth; img.classList.add('swap');
    img.src = wk.src; img.alt = wk.title;
    $('.lb-no').textContent = String(i + 1).padStart(2, '0');
    $('.lb-total').textContent = String(WORKS.length).padStart(2, '0');
    $('.lb-title').textContent = wk.title; $('.lb-client').textContent = wk.client;
    $('.lb-cat').textContent = wk.cat; $('.lb-role').textContent = wk.role;
    $('.lb-year').textContent = wk.year; $('.lb-desc').textContent = wk.desc;
  }
  const step = d => { const v = visible(), p = v.indexOf(index); show(v[(p + d + v.length) % v.length]); };
  document.querySelectorAll('.work-link').forEach(b => b.addEventListener('click', () => {
    show(+b.dataset.index);
    document.body.classList.add('locked'); lb.showModal();
  }));
  $('.lb-prev').onclick = () => step(-1);
  $('.lb-next').onclick = () => step(1);
  $('.lb-close').onclick = () => lb.close();
  lb.addEventListener('close', () => document.body.classList.remove('locked'));
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
})();
