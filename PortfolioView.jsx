// PortfolioView — per-module save + consolidated portfolio generator

// ── Standalone HTML builder for a single module ──────────────────────────────
// Exported to window so WeekView can call it too.
function buildModuleHTML(module, ws, studentName) {
  const cd = window.COURSE_DATA;
  const rubric = cd.rubric;
  const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  const checked = ws.checkedItems || [];
  const draft = ws.draftText || '';
  const reflection = ws.reflectionNotes || '';
  const scores = ws.selfScores || {};
  const progress = module.checklist.length > 0 ? Math.round((checked.length / module.checklist.length) * 100) : 0;
  const scoreTotal = Object.values(scores).reduce((a,b) => a+b, 0);
  const scoreMax = rubric.length * 4;
  const wordCount = draft.split(/\s+/).filter(Boolean).length;
  const scoreLabels = ['—','Limited','Developing','Adequate','Strong'];
  const scoreColors = ['#ccc','#B0202A','#c47a00','#2a5a8a','#2a7a2a'];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MHA 635 · Module ${module.number}: ${module.title} · ${studentName}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; color: #1a1a1a; margin: 0; padding: 0; background: #f5f5f5; }
  @media print { body { background: #fff; } .no-print { display: none !important; } }
  .cover { background: linear-gradient(135deg,#8B0000 0%,#B0202A 70%); color:#fff; padding:40px 48px 32px; }
  .content { max-width:800px; margin:0 auto; padding:28px 24px 48px; }
  .section { background:#fff; border:1px solid #e0e0e0; border-radius:8px; overflow:hidden; margin-bottom:22px; }
  .sec-head { background:#f5f5f5; padding:10px 18px; font-weight:700; font-size:11px; text-transform:uppercase; letter-spacing:0.8px; color:#666; border-bottom:1px solid #e0e0e0; }
  .sec-body { padding:18px 20px; }
  .print-btn { position:fixed; bottom:24px; right:24px; background:#B0202A; color:#fff; border:none; padding:12px 22px; border-radius:8px; font-size:14px; font-weight:700; cursor:pointer; box-shadow:0 4px 16px rgba(176,32,42,0.4); z-index:999; }
  table { width:100%; border-collapse:collapse; font-size:13px; }
  th, td { border:1px solid #ddd; padding:7px 10px; text-align:left; }
  th { background:#f5f5f5; font-weight:700; }
</style>
</head>
<body>
<button class="no-print print-btn" onclick="window.print()">🖨 Print / Save as PDF</button>

<div class="cover">
  <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:0.7;margin-bottom:8px;">University of Nevada, Las Vegas · MHA 635 · Module ${module.number} of 7</div>
  <h1 style="font-family:Georgia,serif;font-size:2rem;margin:0 0 6px;font-weight:700;">${module.title}</h1>
  <p style="margin:0 0 22px;opacity:0.85;font-size:14px;line-height:1.5;">${module.deliverable}</p>
  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
    <div>
      <div style="font-size:20px;font-weight:700;">${studentName || 'Student'}</div>
      <div style="font-size:13px;opacity:0.8;margin-top:2px;">Master of Hospitality Administration</div>
    </div>
    <div style="text-align:right;font-size:13px;opacity:0.85;">
      <div>Saved: ${today}</div>
      <div style="margin-top:2px;">Instructor: Babu George, PhD</div>
      <div style="margin-top:4px;font-weight:700;font-size:14px;">${cd.gradingMode[module.number]} · ${cd.weights[module.number]}% of grade</div>
    </div>
  </div>
</div>

<div class="content">

  <div class="section">
    <div class="sec-head">Checklist — ${progress}% complete (${checked.length} of ${module.checklist.length} items)</div>
    <div class="sec-body">
      ${module.checklist.map((item, i) => `
        <div style="display:flex;align-items:flex-start;gap:10px;padding:5px 0;font-size:14px;color:${checked.includes(i)?'#333':'#bbb'};">
          <span style="color:${checked.includes(i)?'#B0202A':'#ddd'};font-weight:700;flex-shrink:0;width:16px;margin-top:1px;">${checked.includes(i)?'✓':'○'}</span>
          <span>${item}</span>
        </div>`).join('')}
    </div>
  </div>

  <div class="section">
    <div class="sec-head">Working Draft${wordCount > 0 ? ` — ${wordCount} words` : ' — No draft saved'}</div>
    <div class="sec-body">
      ${draft
        ? `<div style="font-family:Georgia,serif;font-size:14.5px;line-height:1.9;color:#1a1a1a;white-space:pre-wrap;">${draft.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`
        : `<div style="color:#bbb;font-style:italic;font-size:14px;text-align:center;padding:20px 0;">No draft text was saved for this module.</div>`}
    </div>
  </div>

  ${Object.keys(scores).length > 0 ? `
  <div class="section">
    <div class="sec-head">Self-Assessment — ${scoreTotal} / ${scoreMax} total</div>
    <div class="sec-body">
      <table>
        <thead><tr><th>Criterion</th><th style="width:70px;text-align:center;">Score</th><th style="width:110px;">Level</th></tr></thead>
        <tbody>
          ${rubric.map((r,ri) => {
            const s = scores[ri] || 0;
            return `<tr>
              <td>${r.criterion}</td>
              <td style="text-align:center;font-weight:700;color:${s ? scoreColors[s] : '#ccc'};">${s || '—'}</td>
              <td style="color:${s ? scoreColors[s] : '#ccc'};">${scoreLabels[s]}</td>
            </tr>`;
          }).join('')}
          <tr style="background:#fdf3f3;">
            <td style="font-weight:700;">Total</td>
            <td style="text-align:center;font-weight:800;color:#B0202A;">${scoreTotal} / ${scoreMax}</td>
            <td style="font-weight:700;color:#B0202A;">${scoreTotal >= scoreMax*0.875 ? 'Strong' : scoreTotal >= scoreMax*0.625 ? 'Adequate' : scoreTotal >= scoreMax*0.375 ? 'Developing' : 'Limited'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>` : ''}

  ${reflection ? `
  <div class="section">
    <div class="sec-head">Reflection Notes</div>
    <div class="sec-body">
      <div style="background:#f8f3e8;border:1px solid #e8d8b0;border-radius:6px;padding:16px;font-family:Georgia,serif;font-size:14.5px;line-height:1.9;color:#333;white-space:pre-wrap;">${reflection.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    </div>
  </div>` : ''}

  <div style="text-align:center;padding:32px 0 16px;border-top:2px solid #eee;color:#aaa;font-size:13px;">
    <div style="font-weight:700;color:#B0202A;font-family:Georgia,serif;font-size:14px;margin-bottom:4px;">MHA 635: Research Methods — Module ${module.number}: ${module.title}</div>
    <div>University of Nevada, Las Vegas · Instructor: Babu George, PhD</div>
    <div style="margin-top:4px;">Saved: ${today}</div>
  </div>
</div>
</body>
</html>`;
}

// ── Full portfolio HTML builder (all 7 modules) ───────────────────────────────
function buildFullPortfolioHTML(modules, appState, studentName) {
  const cd = window.COURSE_DATA;
  const rubric = cd.rubric;
  const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  function getWeekProgress(wNum) {
    const ws = appState.weekStates[wNum] || {};
    const module = modules.find(w => w.number === wNum);
    if (!module) return 0;
    return Math.round(((ws.checkedItems||[]).length / module.checklist.length) * 100);
  }

  function getScoreLabel(total, max) {
    const pct = total / max;
    if (pct >= 0.875) return 'Strong';
    if (pct >= 0.625) return 'Adequate';
    if (pct >= 0.375) return 'Developing';
    return 'Limited';
  }

  const scoreColors = ['#ccc','#B0202A','#c47a00','#2a5a8a','#2a7a2a'];
  const scoreLabels = ['—','Limited','Developing','Adequate','Strong'];

  const weekSections = modules.map(w => {
    const ws = appState.weekStates[w.number] || {};
    const draft = ws.draftText || '';
    const reflection = ws.reflectionNotes || '';
    const scores = ws.selfScores || {};
    const checked = ws.checkedItems || [];
    const prog = getWeekProgress(w.number);
    const scoreTotal = Object.values(scores).reduce((a,b)=>a+b,0);
    const scoreMax = rubric.length * 4;
    const isScored = [3,5,7].includes(w.number);

    return `
    <div style="page-break-inside:avoid;margin-bottom:36px;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      <div style="background:${isScored?'#B0202A':'#58595B'};color:#fff;padding:14px 20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <span style="font-size:11px;opacity:0.75;text-transform:uppercase;letter-spacing:1px;">Module ${w.number}</span>
          <h3 style="margin:2px 0 0;font-size:18px;font-family:Georgia,serif;">${w.title}</h3>
        </div>
        <div style="text-align:right;font-size:12px;opacity:0.9;">
          <div>${cd.gradingMode[w.number]}</div>
          <div style="font-weight:700;font-size:16px;">${cd.weights[w.number]}%</div>
          <div>Progress: ${prog}%</div>
        </div>
      </div>
      <div style="padding:20px;">
        <div style="margin-bottom:14px;">
          <strong style="color:#B0202A;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Deliverable</strong>
          <p style="margin:6px 0 0;font-size:14px;color:#333;line-height:1.6;">${w.deliverable}</p>
        </div>
        <div style="margin-bottom:14px;">
          <strong style="color:#B0202A;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Checklist (${checked.length}/${w.checklist.length})</strong>
          <div style="margin-top:8px;">
            ${w.checklist.map((item, i) => `
              <div style="display:flex;align-items:flex-start;gap:8px;padding:4px 0;font-size:13px;color:${checked.includes(i)?'#333':'#bbb'};">
                <span style="color:${checked.includes(i)?'#B0202A':'#ddd'};font-weight:700;flex-shrink:0;">${checked.includes(i)?'✓':'○'}</span>
                <span>${item}</span>
              </div>`).join('')}
          </div>
        </div>
        ${draft ? `
        <div style="margin-bottom:14px;">
          <strong style="color:#B0202A;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Working Draft (${draft.split(/\s+/).filter(Boolean).length} words)</strong>
          <div style="margin-top:8px;background:#fafafa;border:1px solid #eee;border-radius:6px;padding:14px;font-size:13.5px;line-height:1.85;color:#333;white-space:pre-wrap;font-family:Georgia,serif;">${draft.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
        </div>` : `
        <div style="margin-bottom:14px;background:#fafafa;border:1px dashed #ddd;border-radius:6px;padding:14px;text-align:center;font-size:13px;color:#bbb;">
          No draft submitted for Module ${w.number}
        </div>`}
        ${Object.keys(scores).length > 0 ? `
        <div style="margin-bottom:14px;">
          <strong style="color:#B0202A;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Self-Assessment</strong>
          <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:12px;">
            <thead><tr style="background:#f5f5f5;">
              <th style="text-align:left;padding:6px 8px;border:1px solid #ddd;">Criterion</th>
              <th style="text-align:center;padding:6px 8px;border:1px solid #ddd;width:60px;">Score</th>
              <th style="text-align:left;padding:6px 8px;border:1px solid #ddd;">Level</th>
            </tr></thead>
            <tbody>
              ${rubric.map((r,ri) => {
                const s = scores[ri] || 0;
                return `<tr>
                  <td style="padding:6px 8px;border:1px solid #ddd;">${r.criterion}</td>
                  <td style="text-align:center;padding:6px 8px;border:1px solid #ddd;font-weight:700;color:${s?scoreColors[s]:'#ccc'};">${s||'—'}</td>
                  <td style="padding:6px 8px;border:1px solid #ddd;color:${s?scoreColors[s]:'#ccc'};">${scoreLabels[s]}</td>
                </tr>`;
              }).join('')}
              <tr style="background:#fdf3f3;">
                <td style="padding:6px 8px;border:1px solid #ddd;font-weight:700;">Total</td>
                <td style="text-align:center;padding:6px 8px;border:1px solid #ddd;font-weight:700;color:#B0202A;">${scoreTotal}/${scoreMax}</td>
                <td style="padding:6px 8px;border:1px solid #ddd;font-weight:700;color:#B0202A;">${getScoreLabel(scoreTotal,scoreMax)}</td>
              </tr>
            </tbody>
          </table>
        </div>` : ''}
        ${reflection ? `
        <div>
          <strong style="color:#B0202A;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;">Reflection Notes</strong>
          <div style="margin-top:8px;background:#f8f3e8;border:1px solid #e8d8b0;border-radius:6px;padding:14px;font-size:13.5px;line-height:1.85;color:#333;white-space:pre-wrap;font-family:Georgia,serif;">${reflection.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
        </div>` : ''}
      </div>
    </div>`;
  }).join('');

  const overallProg = Math.round(modules.reduce((sum,w) => sum+getWeekProgress(w.number),0)/modules.length);
  const totalWords = modules.reduce((sum,w) => {
    return sum + ((appState.weekStates[w.number]||{}).draftText||'').split(/\s+/).filter(Boolean).length;
  }, 0);
  const allScoreTotal = modules.reduce((sum,w) => {
    return sum + Object.values((appState.weekStates[w.number]||{}).selfScores||{}).reduce((a,b)=>a+b,0);
  }, 0);
  const maxSelfScore = modules.length * rubric.length * 4;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MHA 635 Portfolio — ${studentName}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; color: #1a1a1a; margin: 0; padding: 0; background: #f5f5f5; }
  @media print { body { background: #fff; } .no-print { display: none !important; } }
  .cover { background: linear-gradient(135deg,#8B0000,#B0202A); color:#fff; padding:60px 48px; }
  .content { max-width:860px; margin:0 auto; padding:32px 24px 48px; }
  .print-btn { position:fixed; bottom:24px; right:24px; background:#B0202A; color:#fff; border:none; padding:14px 24px; border-radius:8px; font-size:15px; font-weight:700; cursor:pointer; box-shadow:0 4px 16px rgba(176,32,42,0.4); z-index:999; }
  .summary-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:28px; }
  .summary-card { background:#fff; border-radius:8px; padding:18px; text-align:center; border:1px solid #eee; }
  .summary-num { font-size:32px; font-weight:800; color:#B0202A; margin-bottom:4px; }
  .summary-label { font-size:12px; color:#888; text-transform:uppercase; letter-spacing:0.5px; }
</style>
</head>
<body>
<button class="no-print print-btn" onclick="window.print()">🖨 Print / Save as PDF</button>
<div class="cover">
  <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;opacity:0.7;margin-bottom:12px;">University of Nevada, Las Vegas · MHA 635</div>
  <h1 style="font-family:Georgia,serif;font-size:2.4rem;margin:0 0 8px;font-weight:700;">Applied Research Project</h1>
  <h2 style="font-family:Georgia,serif;font-size:1.3rem;margin:0 0 24px;font-weight:400;opacity:0.85;">Course Portfolio — All 7 Modules</h2>
  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
    <div>
      <div style="font-size:22px;font-weight:700;">${studentName}</div>
      <div style="font-size:14px;opacity:0.8;margin-top:2px;">Master of Hospitality Administration</div>
    </div>
    <div style="text-align:right;font-size:13px;opacity:0.8;">
      <div>Generated: ${today}</div>
      <div style="margin-top:2px;">Instructor: Babu George, PhD</div>
      <div style="margin-top:2px;">Overall Progress: ${overallProg}%</div>
    </div>
  </div>
</div>
<div class="content">
  <div class="summary-grid">
    <div class="summary-card"><div class="summary-num">${overallProg}%</div><div class="summary-label">Overall Progress</div></div>
    <div class="summary-card"><div class="summary-num">${totalWords.toLocaleString()}</div><div class="summary-label">Total Words Written</div></div>
    <div class="summary-card"><div class="summary-num">${allScoreTotal > 0 ? allScoreTotal + '/' + maxSelfScore : '—'}</div><div class="summary-label">Self-Assessment Total</div></div>
  </div>
  <div style="background:#fff;border-radius:8px;padding:20px;margin-bottom:28px;border:1px solid #eee;">
    <h3 style="font-family:Georgia,serif;margin:0 0 10px;color:#B0202A;">About This Portfolio</h3>
    <p style="font-size:14px;color:#444;line-height:1.7;margin:0;">This portfolio documents the progressive development of a research proposal in MHA 635: Research Methods at the University of Nevada, Las Vegas. Each section represents one module of work, building from a business problem identification through to a complete, integrated research proposal.</p>
  </div>
  ${weekSections}
  <div style="text-align:center;padding:40px 20px;border-top:2px solid #eee;margin-top:20px;color:#999;font-size:13px;">
    <div style="font-weight:700;color:#B0202A;font-family:Georgia,serif;font-size:15px;margin-bottom:6px;">MHA 635: Research Methods</div>
    <div>University of Nevada, Las Vegas · Master of Hospitality Administration</div>
    <div style="margin-top:2px;">Instructor: Babu George, PhD</div>
    <div style="margin-top:4px;">Portfolio generated ${today}</div>
  </div>
</div>
</body>
</html>`;
}

// ── PortfolioView React component ─────────────────────────────────────────────
function PortfolioView({ appState }) {
  const cd = window.COURSE_DATA;
  const modules = cd.weeks;
  const studentName = appState.studentName || '';
  const [savedModules, setSavedModules] = React.useState({});
  const [generatingFull, setGeneratingFull] = React.useState(false);
  const [fullSaved, setFullSaved] = React.useState(false);

  function getModuleStats(wNum) {
    const ws = appState.weekStates[wNum] || {};
    const module = modules.find(w => w.number === wNum);
    if (!module) return { progress:0, wordCount:0, hasReflection:false, hasScores:false, hasDraft:false };
    const progress = Math.round(((ws.checkedItems||[]).length / module.checklist.length) * 100);
    const wordCount = (ws.draftText||'').split(/\s+/).filter(Boolean).length;
    const hasReflection = (ws.reflectionNotes||'').trim().length > 0;
    const hasScores = Object.keys(ws.selfScores||{}).length > 0;
    const hasDraft = wordCount > 0;
    return { progress, wordCount, hasReflection, hasScores, hasDraft };
  }

  function downloadFile(html, filename) {
    const blob = new Blob([html], { type:'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function safeName(name) {
    return (name || 'student').replace(/[^a-z0-9]/gi, '_').toLowerCase();
  }

  function handleModuleSave(module) {
    const ws = appState.weekStates[module.number] || {};
    const html = buildModuleHTML(module, ws, studentName || 'Student');
    downloadFile(html, `MHA635_Module${module.number}_${safeName(studentName)}.html`);
    setSavedModules(prev => ({ ...prev, [module.number]: true }));
  }

  function handleFullPortfolio() {
    setGeneratingFull(true);
    setTimeout(() => {
      const html = buildFullPortfolioHTML(modules, appState, studentName || 'Student');
      downloadFile(html, `MHA635_Full_Portfolio_${safeName(studentName)}.html`);
      setGeneratingFull(false);
      setFullSaved(true);
    }, 500);
  }

  const totalWords = modules.reduce((sum, w) => {
    return sum + ((appState.weekStates[w.number]||{}).draftText||'').split(/\s+/).filter(Boolean).length;
  }, 0);
  const completedModules = modules.filter(w => getModuleStats(w.number).progress === 100).length;
  const modulesWithDraft = modules.filter(w => getModuleStats(w.number).hasDraft).length;
  const noName = !studentName.trim();

  return (
    <div style={spStyles.container}>
      <div style={spStyles.pageHeader}>
        <h2 style={spStyles.pageTitle}>💾 Save Your Work</h2>
        <p style={spStyles.pageDesc}>
          After completing each module: <strong>(1)</strong> save it using the button below, <strong>(2)</strong> open the downloaded file in your browser, <strong>(3)</strong> Print → Save as PDF, then <strong>(4)</strong> upload the PDF to the <strong>module reflection area on Canvas</strong>. Do this for every module — don't wait until the end of the term.
        </p>
        {noName && (
          <div style={{ background:'#fff8e8', border:'1px solid #f0d080', borderRadius:8, padding:'10px 14px', marginTop:12, fontSize:13, color:'#7a5a00' }}>
            ⚠️ Enter your name on the Home tab first — it will appear on every saved file.
          </div>
        )}
      </div>

      {/* Summary stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:16 }}>
        {[
          { label:'Modules Completed', val:`${completedModules}/${modules.length}`, sub:'all checklist items checked' },
          { label:'Modules with Drafts', val:`${modulesWithDraft}/${modules.length}`, sub:'has working draft text' },
          { label:'Total Words Written', val:totalWords.toLocaleString(), sub:'across all modules' },
        ].map((s,i) => (
          <div key={i} style={{ background:'#fff', borderRadius:10, padding:'14px 12px', textAlign:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', border:'1px solid #eee' }}>
            <div style={{ fontSize:24, fontWeight:800, color:'#B0202A' }}>{s.val}</div>
            <div style={{ fontSize:12, fontWeight:600, color:'#333', margin:'4px 0 2px', lineHeight:1.3 }}>{s.label}</div>
            <div style={{ fontSize:11, color:'#aaa' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Per-module cards */}
      <div style={{ marginBottom:20 }}>
        <div style={{ fontWeight:700, fontSize:12, color:'#888', textTransform:'uppercase', letterSpacing:0.8, marginBottom:10, paddingLeft:2 }}>
          Save each module → upload to its Canvas reflection area
        </div>
        <div style={{ display:'grid', gap:10 }}>
          {modules.map(w => {
            const { progress, wordCount, hasReflection, hasScores, hasDraft } = getModuleStats(w.number);
            const isScored = [3,5,7].includes(w.number);
            const wasSaved = savedModules[w.number];

            return (
              <div key={w.number} style={{
                background:'#fff',
                borderRadius:10,
                padding:'14px 18px',
                boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                border: wasSaved ? '1px solid #a5d6a7' : '1px solid #eee',
                display:'flex',
                alignItems:'center',
                gap:14,
                flexWrap:'wrap',
                transition:'border-color 0.2s',
              }}>
                <div style={{
                  width:44, height:44, borderRadius:'50%', flexShrink:0,
                  background: progress===100?'#B0202A':progress>0?'#e08888':'#e0e0e0',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color: progress>0?'#fff':'#999', fontWeight:800, fontSize:16,
                  outline: isScored ? '2px solid #B0202A' : 'none', outlineOffset:2,
                }}>
                  {w.number}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:700, fontSize:14, color:'#1a1a1a', marginBottom:4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{w.title}</div>
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap', fontSize:11, color:'#999', fontFamily:"system-ui,sans-serif" }}>
                    <span style={{ color: progress===100?'#2a7a2a':progress>0?'#c47a00':'#bbb' }}>
                      {progress===100 ? '✓ 100%' : progress+'%'} checklist
                    </span>
                    {hasDraft   && <span style={{ color:'#2a5a8a' }}>✍ {wordCount} words</span>}
                    {hasScores  && <span style={{ color:'#B0202A' }}>📊 assessed</span>}
                    {hasReflection && <span style={{ color:'#666' }}>💬 reflected</span>}
                    <span style={{ color:'#ccc' }}>{cd.gradingMode[w.number]} · {cd.weights[w.number]}%</span>
                  </div>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>
                  {wasSaved && (
                    <span style={{ fontSize:12, color:'#2a7a2a', fontWeight:700 }}>✓ Saved</span>
                  )}
                  <button
                    onClick={() => handleModuleSave(w)}
                    disabled={!hasDraft}
                    title={!hasDraft ? 'Add a draft to this module first' : `Download Module ${w.number} as an HTML file`}
                    style={{
                      background: hasDraft ? '#B0202A' : '#f0f0f0',
                      color: hasDraft ? '#fff' : '#bbb',
                      border:'none',
                      padding:'8px 16px',
                      borderRadius:7,
                      fontSize:13,
                      fontWeight:700,
                      cursor: hasDraft ? 'pointer' : 'default',
                      fontFamily:"system-ui,sans-serif",
                      whiteSpace:'nowrap',
                      transition:'all 0.15s',
                      boxShadow: hasDraft ? '0 2px 6px rgba(176,32,42,0.2)' : 'none',
                    }}
                  >
                    💾 Save Module {w.number}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ background:'#f0f4ff', border:'1px solid #c8d8f8', borderRadius:10, padding:'16px 20px', fontSize:13, color:'#333', lineHeight:1.6 }}>
        <strong style={{ color:'#1a1a2e' }}>Workflow reminder:</strong> Complete the module checklist and draft → click Save below → open the HTML file → Print → Save as PDF → upload to the <strong>Canvas module reflection area</strong> for that module. Repeat for each of the 7 modules throughout the term.
      </div>
    </div>
  );
}

Object.assign(window, { PortfolioView, buildModuleHTML });
