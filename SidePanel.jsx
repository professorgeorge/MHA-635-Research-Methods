
// SidePanel views: Home, Rubric, FeedbackCodes, Glossary

function HomeView({ appState, onTabChange }) {
  const cd = window.COURSE_DATA;
  const modules = cd.weeks;
  const totalWeight = Object.values(cd.weights).reduce((a,b)=>a+b,0);

  function getWeekProgress(wNum) {
    const ws = appState.weekStates[wNum] || {};
    const module = modules.find(w => w.number === wNum);
    if (!module) return 0;
    const checked = (ws.checkedItems || []).length;
    return Math.round((checked / module.checklist.length) * 100);
  }

  const overallProgress = Math.round(
    modules.reduce((sum, w) => sum + getWeekProgress(w.number), 0) / modules.length
  );

  const scoredModules = [3,5,7,8];

  return (
    <div style={spStyles.container}>
      {/* Hero */}
      <div style={spStyles.hero}>
        <div style={spStyles.heroBadge}>UNLV · Master of Hospitality Administration</div>
        <h1 style={spStyles.heroTitle}>MHA 635: Research Methods</h1>
        <p style={spStyles.heroSub}>Applied Research Project — Proposal + Mini-Study (8 Modules)</p>
        <div style={spStyles.heroInstructor}>
          <div style={spStyles.instructorAvatar}>BG</div>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#fff' }}>Babu George, PhD</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.75)' }}>Visiting Professor</div>
            <a href="https://www.linkedin.com/in/beingbabu/" target="_blank" rel="noopener noreferrer"
              style={{ color:'#ffcdd2', fontSize:12, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:4, marginTop:2 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              linkedin.com/in/beingbabu
            </a>
          </div>
        </div>
      </div>

      {/* Data loss warning */}
      <div style={{ background:'#fff8e8', border:'1px solid #f0d080', borderRadius:10, padding:'14px 18px', marginBottom:14, display:'flex', gap:12, alignItems:'flex-start' }}>
        <span style={{ fontSize:20, flexShrink:0, marginTop:1 }}>⚠️</span>
        <div>
          <div style={{ fontWeight:700, fontSize:13, color:'#7a5a00', marginBottom:4 }}>Your progress is stored in this browser only</div>
          <div style={{ fontSize:13, color:'#6a4a00', lineHeight:1.6 }}>Clearing browser history, cache, or site data will permanently erase your drafts and checklist progress. <strong>Save each module as you finish it</strong> using the <strong>💾 Save Module</strong> button — then upload the PDF to that module's Canvas reflection area. Don't rely on the browser alone.</div>
        </div>
      </div>

      {/* Student name field */}
      <div style={spStyles.card}>
        <div style={spStyles.cardLabel}>👤 Your Name (for Portfolio)</div>
        <input
          type="text"
          value={appState.studentName || ''}
          onChange={e => window.__setStudentName(e.target.value)}
          placeholder="Enter your full name..."
          style={spStyles.nameInput}
        />
      </div>

      {/* Overall Progress */}
      <div style={spStyles.card}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
          <div style={spStyles.cardLabel}>📊 Overall Course Progress</div>
          <div style={{ fontSize:24, fontWeight:800, color:'#B0202A' }}>{overallProgress}%</div>
        </div>
        <div style={{ background:'#f0f0f0', borderRadius:20, height:10, overflow:'hidden', marginBottom:16 }}>
          <div style={{ background:'linear-gradient(90deg,#B0202A,#e04444)', height:'100%', borderRadius:20, width:overallProgress+'%', transition:'width 0.5s ease' }}></div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat('+modules.length+',1fr)', gap:6 }}>
          {modules.map(w => {
            const prog = getWeekProgress(w.number);
            const isScored = scoredModules.includes(w.number);
            return (
              <div key={w.number} style={{ textAlign:'center', cursor:'pointer' }} onClick={() => onTabChange('module'+w.number)}>
                <div style={{ ...spStyles.weekDot, background: prog === 100 ? '#B0202A' : prog > 0 ? '#e08888' : '#e0e0e0', position:'relative' }}>
                  <span style={{ color: prog > 0 ? '#fff' : '#999', fontSize:12, fontWeight:700 }}>{w.number}</span>
                  {isScored && <div style={spStyles.scoredDot}></div>}
                </div>
                <div style={{ fontSize:10, color:'#888', marginTop:3, fontFamily:"system-ui, sans-serif" }}>{prog}%</div>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize:11, color:'#aaa', marginTop:8, fontFamily:"system-ui, sans-serif" }}>
          🔴 Red dot = scored milestone week
        </div>
      </div>

      {/* How This Course Works */}
      <div style={spStyles.card}>
        <div style={spStyles.cardLabel}>🎯 How This Course Works</div>

        {/* What is this app */}
        <div style={{ background:'#f8f3f3', borderRadius:8, padding:'12px 14px', marginBottom:16, fontSize:13, color:'#333', lineHeight:1.7 }}>
          Use it to read lessons, track your checklist, write your draft, and self-assess — then save and upload each module to Canvas.
        </div>

        {/* Step by step workflow */}
        <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:0.8, color:'#888', marginBottom:10 }}>Your weekly workflow</div>
        <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
          {[
            { step:'1', color:'#2a5a8a', label:'Read the lesson', desc:'Open the module from the sidebar. Read the lesson tab — it covers the theory, examples, and writing tips you need.' },
            { step:'2', color:'#c47a00', label:'Work the checklist', desc:'Switch to the Checklist & Draft tab. Check off each item as you complete it. Your progress is tracked automatically.' },
            { step:'3', color:'#B0202A', label:'Write your draft', desc:'Type your draft directly into the text box. It saves automatically to this browser.' },
            { step:'4', color:'#2a7a2a', label:'Self-assess', desc:'Use the Self-Assessment tab to score your work against the rubric before submitting. This builds your editing instinct.' },
            { step:'5', color:'#58595B', label:'Save & submit to Canvas', desc:'Click “💾 Save Module”. Open the downloaded HTML file in your browser, Print → Save as PDF, then upload to that module’s reflection area on Canvas. You may also copy your draft text directly into the Canvas submission text box alongside the PDF.' },
          ].map((s, i, arr) => (
            <div key={i} style={{ display:'flex', gap:0, alignItems:'stretch' }}>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:32, flexShrink:0 }}>
                <div style={{ width:28, height:28, borderRadius:'50%', background:s.color, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:13, flexShrink:0, zIndex:1 }}>{s.step}</div>
                {i < arr.length-1 && <div style={{ width:2, flex:1, background:'#e8e8e8', margin:'2px 0' }}></div>}
              </div>
              <div style={{ paddingLeft:12, paddingBottom: i < arr.length-1 ? 16 : 0, paddingTop:2 }}>
                <div style={{ fontWeight:700, fontSize:13, color:'#1a1a1a', marginBottom:2 }}>{s.label}</div>
                <div style={{ fontSize:12.5, color:'#555', lineHeight:1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop:'1px solid #eee', margin:'16px 0' }}></div>

        {/* App tabs explained */}
        <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:0.8, color:'#888', marginBottom:10 }}>What’s in each tab</div>
        <div style={{ display:'grid', gap:8 }}>
          {[
            { icon:'📖', label:'Lesson', desc:'Background reading, examples, and model text for that module’s deliverable.' },
            { icon:'✅', label:'Checklist & Draft', desc:'Your to-do list + the text editor where you write and save your draft.' },
            { icon:'📊', label:'Self-Assessment', desc:'Score your draft against the 6-criterion rubric before uploading to Canvas.' },
            { icon:'💬', label:'Reflection', desc:'Guided prompts to help you think critically before submitting.' },
            { icon:'🎓', label:'Rubric (sidebar)', desc:'The full scoring rubric used for Modules 3, 5, 7, and 8.' },
            { icon:'💾', label:'Portfolio (sidebar)', desc:'Save any module as a standalone HTML file — then print to PDF for Canvas.' },
          ].map((t, i) => (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13 }}>
              <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>{t.icon}</span>
              <div><strong style={{ color:'#1a1a1a' }}>{t.label}</strong><span style={{ color:'#666' }}> — {t.desc}</span></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop:'1px solid #eee', margin:'16px 0' }}></div>

        {/* Grading summary */}
        <div style={{ fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:0.8, color:'#888', marginBottom:10 }}>Grading at a glance</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          {[
            { color:'#2a7a2a', badge:'Complete / Revise', desc:'Modules 1, 2, 4, 6: graded on completion. Revise if the instructor requests changes.' },
            { color:'#B0202A', badge:'Scored Milestones', desc:'Modules 3, 5, 7, 8: graded on a 6-criterion rubric. These carry the most weight.' },
          ].map((g, i) => (
            <div key={i} style={{ background:'#fafafa', border:'1px solid #eee', borderRadius:8, padding:'10px 12px' }}>
              <div style={{ display:'inline-block', background:g.color, color:'#fff', fontSize:10, fontWeight:700, borderRadius:4, padding:'2px 7px', marginBottom:6, letterSpacing:0.4 }}>{g.badge}</div>
              <div style={{ fontSize:12, color:'#555', lineHeight:1.6 }}>{g.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:10, background:'#f0f4ff', border:'1px solid #c8d8f8', borderRadius:8, padding:'10px 12px', fontSize:12.5, color:'#333', lineHeight:1.6 }}>
          📌 <strong>Canvas is your grade of record.</strong> This app does not submit anything on your behalf. Every module must be uploaded to UNLV WebCampus to count toward your grade.
        </div>
      </div>

      {/* Module Grid */}
      <div style={spStyles.card}>
        <div style={spStyles.cardLabel}>📅 8-Module Schedule</div>
        {modules.map(w => {
          const prog = getWeekProgress(w.number);
          const isScored = scoredModules.includes(w.number);
          const ws = appState.weekStates[w.number] || {};
          const draftLen = (ws.draftText || '').split(/\s+/).filter(Boolean).length;
          return (
            <div key={w.number} style={{ ...spStyles.weekRow, borderLeft: isScored ? '3px solid #B0202A' : '3px solid #ddd' }}
              onClick={() => onTabChange('module'+w.number)}>
              <div style={{ display:'flex', alignItems:'center', gap:10, flex:1 }}>
                <div style={{ ...spStyles.wNum, background: prog===100?'#B0202A':prog>0?'#e08888':'#e0e0e0', color:prog>0?'#fff':'#999' }}>{w.number}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:600, fontSize:14, color:'#1a1a1a' }}>{w.title}</div>
                  <div style={{ fontSize:12, color:'#777', marginTop:2, fontFamily:"system-ui,sans-serif" }}>
                    {w.lengthTarget} · {cd.gradingMode[w.number]} · {cd.weights[w.number]}%
                    {draftLen > 0 && <span style={{ color:'#B0202A', marginLeft:8 }}>✍️ {draftLen} words drafted</span>}
                  </div>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
                <div style={{ background:'#f0f0f0', borderRadius:20, height:6, width:80, overflow:'hidden' }}>
                  <div style={{ background:'#B0202A', height:'100%', borderRadius:20, width:prog+'%' }}></div>
                </div>
                <span style={{ fontSize:12, color:'#999', width:30, textAlign:'right', fontFamily:"system-ui,sans-serif" }}>{prog}%</span>
                <span style={{ color:'#B0202A', fontSize:16 }}>›</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Grade weights */}
      <div style={spStyles.card}>
        <div style={spStyles.cardLabel}>⚖️ Grade Weights</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:8, marginTop:10 }}>
          {modules.map(w => {
            const isScored = scoredModules.includes(w.number);
            return (
              <div key={w.number} style={{ ...spStyles.weightCard, background: isScored ? '#fdf3f3' : '#fafafa', borderColor: isScored ? '#f0c8c8' : '#eee' }}>
                <div style={{ fontSize:11, color:'#888', fontFamily:"system-ui,sans-serif" }}>Module {w.number}</div>
                <div style={{ fontSize:22, fontWeight:800, color: isScored ? '#B0202A' : '#555' }}>{cd.weights[w.number]}%</div>
                <div style={{ fontSize:11, color:'#666', lineHeight:1.3, fontFamily:"system-ui,sans-serif" }}>{w.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RubricView({ appState }) {
  const rubric = window.COURSE_DATA.rubric;
  const [scores, setScores] = React.useState({});

  function setScore(i, s) { setScores(prev => ({ ...prev, [i]: s })); }
  const total = Object.values(scores).reduce((a,b)=>a+b,0);
  const maxTotal = rubric.length * 4;

  const scoreColors = { 4:'#2a7a2a', 3:'#2a5a8a', 2:'#c47a00', 1:'#B0202A' };
  const scoreBg = { 4:'#f0faf0', 3:'#f0f4fa', 2:'#fdf6e8', 1:'#fdf3f3' };

  return (
    <div style={spStyles.container}>
      <div style={spStyles.pageHeader}>
        <h2 style={spStyles.pageTitle}>📊 Rubric Self-Assessment</h2>
        <p style={spStyles.pageDesc}>Use the course rubric to evaluate your current draft. This is formative only — your official grade comes from your UNLV WebCampus reflection. Be honest: a tough self-assessment helps you improve before submission.</p>
      </div>
      <div style={spStyles.card}>
        {rubric.map((criterion, ci) => {
          const score = scores[ci] || 0;
          return (
            <div key={ci} style={{ marginBottom:20, paddingBottom:20, borderBottom: ci < rubric.length-1 ? '1px solid #eee' : 'none' }}>
              <div style={{ fontWeight:700, fontSize:15, color:'#1a1a1a', marginBottom:10, fontFamily:"Georgia,serif" }}>
                {ci+1}. {criterion.criterion}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:8 }}>
                {[4,3,2,1].map(s => (
                  <div key={s} onClick={() => setScore(ci, s)}
                    style={{ ...spStyles.rubricOption, borderColor: score===s ? scoreColors[s] : '#e0e0e0', background: score===s ? scoreBg[s] : '#fafafa', cursor:'pointer' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                      <div style={{ ...spStyles.scoreCircle, background: score===s ? scoreColors[s] : '#ddd', color:'#fff' }}>{s}</div>
                      <span style={{ fontWeight:600, fontSize:12, color: score===s ? scoreColors[s] : '#555', fontFamily:"system-ui,sans-serif" }}>
                        {['Limited','Developing','Adequate','Strong'][s-1]}
                      </span>
                    </div>
                    <p style={{ margin:0, fontSize:12, lineHeight:1.5, color:'#444', fontFamily:"system-ui,sans-serif" }}>{criterion.scores[s]}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {Object.keys(scores).length === rubric.length && (
          <div style={{ textAlign:'center', padding:'16px', background:'#fdf3f3', borderRadius:8, marginTop:8 }}>
            <div style={{ fontSize:13, color:'#555', marginBottom:4, fontFamily:"system-ui,sans-serif" }}>Your Self-Assessment Score</div>
            <div style={{ fontSize:36, fontWeight:800, color:'#B0202A' }}>{total} <span style={{ fontSize:18, color:'#999' }}>/ {maxTotal}</span></div>
            <div style={{ fontSize:12, color:'#888', marginTop:4, fontFamily:"system-ui,sans-serif" }}>
              {total >= 22 ? '🟢 Strong — ready to submit' : total >= 16 ? '🟡 Adequate — some revisions recommended' : '🔴 Developing — significant revision needed before submission'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CodesView() {
  const codes = window.COURSE_DATA.feedbackCodes;
  const categories = [...new Set(codes.map(c => c.cat))];
  const [filter, setFilter] = React.useState('All');

  const filtered = filter === 'All' ? codes : codes.filter(c => c.cat === filter);

  return (
    <div style={spStyles.container}>
      <div style={spStyles.pageHeader}>
        <h2 style={spStyles.pageTitle}>🔖 Instructor Feedback Code Bank</h2>
        <p style={spStyles.pageDesc}>When your instructor returns work with a feedback code, look it up here to understand what it means and how to fix it.</p>
      </div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16, fontFamily:"system-ui,sans-serif" }}>
        {['All', ...categories].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}
            style={{ padding:'5px 14px', border:'1px solid', borderRadius:20, fontSize:12, cursor:'pointer',
              background: filter===cat ? '#B0202A' : '#fff',
              color: filter===cat ? '#fff' : '#555',
              borderColor: filter===cat ? '#B0202A' : '#ddd' }}>
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display:'grid', gap:10 }}>
        {filtered.map((c, i) => (
          <div key={i} style={spStyles.codeCard}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={spStyles.codeBadge}>{c.code}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color:'#1a1a1a', marginBottom:4 }}>{c.meaning}</div>
                <div style={{ fontSize:13, color:'#555', lineHeight:1.5 }}>💡 {c.tip}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GlossaryView() {
  const glossary = window.COURSE_DATA.glossary;
  const [search, setSearch] = React.useState('');
  const filtered = glossary.filter(g =>
    g.term.toLowerCase().includes(search.toLowerCase()) ||
    g.def.toLowerCase().includes(search.toLowerCase())
  );
  const letters = [...new Set(filtered.map(g => g.term[0].toUpperCase()))].sort();

  return (
    <div style={spStyles.container}>
      <div style={spStyles.pageHeader}>
        <h2 style={spStyles.pageTitle}>📚 Research Methods Glossary</h2>
        <p style={spStyles.pageDesc}>Key terms used in research methods and this course. Use this as a reference while reading and writing your proposal.</p>
      </div>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search terms..."
        style={{ width:'100%', padding:'10px 14px', border:'1px solid #ddd', borderRadius:8, fontSize:14, boxSizing:'border-box', marginBottom:16, fontFamily:"system-ui,sans-serif" }}
      />
      {letters.map(letter => (
        <div key={letter} style={{ marginBottom:16 }}>
          <div style={{ fontSize:20, fontWeight:800, color:'#B0202A', fontFamily:"Georgia,serif", borderBottom:'2px solid #f0c8c8', paddingBottom:4, marginBottom:10 }}>{letter}</div>
          {filtered.filter(g => g.term[0].toUpperCase() === letter).map((g, i) => (
            <div key={i} style={spStyles.glossCard}>
              <div style={{ fontWeight:700, fontSize:14, color:'#1a1a1a', marginBottom:4, fontFamily:"Georgia,serif" }}>{g.term}</div>
              <div style={{ fontSize:13, color:'#444', lineHeight:1.6, fontFamily:"system-ui,sans-serif" }}>{g.def}</div>
            </div>
          ))}
        </div>
      ))}
      {filtered.length === 0 && (
        <div style={{ textAlign:'center', color:'#999', padding:40, fontFamily:"system-ui,sans-serif" }}>No terms match "{search}"</div>
      )}
    </div>
  );
}

const spStyles = {
  container: { maxWidth:860, margin:'0 auto', fontFamily:"system-ui,sans-serif" },
  hero: { background:'linear-gradient(135deg,#8B0000 0%,#B0202A 60%,#cc3333 100%)', borderRadius:12, padding:'28px 28px 24px', marginBottom:16, color:'#fff' },
  heroBadge: { fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:'rgba(255,255,255,0.75)', marginBottom:8, fontWeight:600 },
  heroTitle: { fontSize:'1.9rem', fontWeight:800, margin:'0 0 4px', fontFamily:"Georgia,serif", lineHeight:1.2 },
  heroSub: { fontSize:14, color:'rgba(255,255,255,0.85)', margin:'0 0 20px', lineHeight:1.5 },
  heroInstructor: { display:'flex', alignItems:'center', gap:14, background:'rgba(255,255,255,0.12)', borderRadius:10, padding:'12px 16px' },
  instructorAvatar: { width:46, height:46, borderRadius:'50%', background:'rgba(255,255,255,0.25)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:16, flexShrink:0 },
  card: { background:'#fff', borderRadius:10, padding:'18px 20px', marginBottom:14, boxShadow:'0 1px 4px rgba(0,0,0,0.07)' },
  cardLabel: { fontWeight:700, fontSize:13, color:'#555', textTransform:'uppercase', letterSpacing:0.5, marginBottom:10 },
  nameInput: { width:'100%', padding:'10px 14px', border:'1px solid #ddd', borderRadius:8, fontSize:15, fontFamily:"Georgia,serif", boxSizing:'border-box' },
  weekDot: { width:38, height:38, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', cursor:'pointer', position:'relative', transition:'transform 0.15s' },
  scoredDot: { position:'absolute', bottom:-2, right:-2, width:10, height:10, background:'#B0202A', borderRadius:'50%', border:'2px solid #fff' },
  weekRow: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 14px', borderRadius:8, marginBottom:8, background:'#fafafa', cursor:'pointer', border:'1px solid #eee', transition:'background 0.15s' },
  wNum: { width:30, height:30, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, flexShrink:0 },
  howCard: { background:'#fafafa', border:'1px solid #eee', borderRadius:8, padding:'14px' },
  weightCard: { border:'1px solid', borderRadius:8, padding:'12px', textAlign:'center' },
  pageHeader: { background:'#fff', borderRadius:10, padding:'20px 22px', marginBottom:14, boxShadow:'0 1px 4px rgba(0,0,0,0.07)' },
  pageTitle: { margin:'0 0 8px', fontSize:'1.4rem', fontWeight:700, color:'#1a1a1a', fontFamily:"Georgia,serif" },
  pageDesc: { margin:0, fontSize:14, color:'#555', lineHeight:1.6 },
  rubricOption: { border:'2px solid', borderRadius:8, padding:'12px', transition:'all 0.15s', userSelect:'none' },
  scoreCircle: { width:24, height:24, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:800, flexShrink:0 },
  codeCard: { background:'#fff', border:'1px solid #eee', borderRadius:8, padding:'14px 16px', boxShadow:'0 1px 3px rgba(0,0,0,0.05)' },
  codeBadge: { background:'#B0202A', color:'#fff', fontWeight:800, fontSize:15, padding:'6px 12px', borderRadius:6, fontFamily:"Georgia,serif", flexShrink:0, minWidth:42, textAlign:'center' },
  glossCard: { padding:'10px 14px', border:'1px solid #eee', borderRadius:8, marginBottom:8, background:'#fafafa' },
};

Object.assign(window, { HomeView, RubricView, CodesView, GlossaryView });
