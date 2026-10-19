const $ = (id) => document.getElementById(id);

let order, idx, score, missed;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(section) {
  for (const id of ["start", "quiz", "result"]) $(id).hidden = id !== section;
}

function start() {
  order = shuffle(QUESTIONS.map((_, i) => i));
  idx = 0;
  score = 0;
  missed = [];
  show("quiz");
  render();
}

function render() {
  const q = QUESTIONS[order[idx]];
  $("pos").textContent = `Pregunta ${idx + 1} de ${order.length}`;
  $("score").textContent = score;
  $("bar").style.width = `${(idx / order.length) * 100}%`;
  $("question").textContent = q.q;
  $("feedback").hidden = true;
  $("nextBtn").hidden = true;
  const ul = $("options");
  ul.innerHTML = "";
  q.options.forEach((text, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => answer(i);
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function answer(choice) {
  const q = QUESTIONS[order[idx]];
  const ok = choice === q.answer;
  if (ok) score++;
  else missed.push({ q, choice });

  [...$("options").querySelectorAll("button")].forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add("correct");
    else if (i === choice) b.classList.add("wrong");
  });

  const fb = $("feedback");
  fb.className = ok ? "ok" : "bad";
  fb.textContent = "";
  const head = document.createElement("strong");
  head.textContent = ok ? "¡Correcto!" : `Incorrecto. La respuesta correcta es: ${q.options[q.answer]}`;
  fb.appendChild(head);
  if (q.explanation) {
    const p = document.createElement("p");
    p.textContent = q.explanation;
    fb.appendChild(p);
  }
  fb.hidden = false;

  $("score").textContent = score;
  $("nextBtn").textContent = idx === order.length - 1 ? "Ver resultado" : "Siguiente";
  $("nextBtn").hidden = false;
  $("nextBtn").focus();
}

function next() {
  idx++;
  if (idx < order.length) render();
  else finish();
}

function finish() {
  show("result");
  $("final").textContent = `${score} / ${order.length}`;
  const box = $("wrong");
  box.innerHTML = "";
  if (!missed.length) {
    box.textContent = "¡Sin errores!";
    return;
  }
  const h = document.createElement("h3");
  h.textContent = "Para repasar";
  box.appendChild(h);
  missed.forEach(({ q, choice }) => {
    const d = document.createElement("div");
    d.className = "review";
    const t = document.createElement("strong");
    t.textContent = q.q;
    const a = document.createElement("p");
    a.className = "bad-text";
    a.textContent = `Tu respuesta: ${q.options[choice]}`;
    const c = document.createElement("p");
    c.className = "ok-text";
    c.textContent = `Correcta: ${q.options[q.answer]}`;
    d.append(t, a, c);
    box.appendChild(d);
  });
}

$("title").textContent = QUIZ_TITLE;
document.title = QUIZ_TITLE;
$("count").textContent = QUESTIONS.length;
$("startBtn").onclick = start;
$("nextBtn").onclick = next;
$("againBtn").onclick = start;
