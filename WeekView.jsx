
// WeekView component - renders full module content
function WeekView({ module, state, onStateChange, studentName }) {
  const [activeTab, setActiveTab] = React.useState('lesson');
  const [openSections, setOpenSections] = React.useState({});
  const [showModel, setShowModel] = React.useState(false);

  const ws = state || { checkedItems: [], draftText: '', reflectionNotes: '', selfScores: {} };

  function toggleSection(i) {
    setOpenSections(prev => ({ ...prev, [i]: !prev[i] }));
  }

  function toggleCheck(i) {
    const checked = ws.checkedItems.includes(i)
      ? ws.checkedItems.filter(x => x !== i)
      : [...ws.checkedItems, i];
    onStateChange({ ...ws, checkedItems: checked });
  }

  function setDraft(val) { onStateChange({ ...ws, draftText: val }); }
  function setReflection(val) { onStateChange({ ...ws, reflectionNotes: val }); }
  function setScore(criterionIdx, score) {
    onStateChange({ ...ws, selfScores: { ...ws.selfScores, [criterionIdx]: score } });
  }

  const progress = module.checklist.length > 0
    ? Math.round((ws.checkedItems.length / module.checklist.length) * 100) : 0;
  const rubric = window.COURSE_DATA.rubric;
  const scoredModules = [3, 5, 7, 8];
  const isScored = scoredModules.includes(module.number);

  const tabs = [
    { id: 'lesson', label: '📖 Lesson' },
    { id: 'checklist', label: '✅ Checklist & Draft' },
    { id: 'assess', label: '📊 Self-Assess' },
    { id: 'reflect', label: '💬 Reflect' },
  ];

  return (
    <div style={wvStyles.container}>
      {/* Module Header */}
      <div style={wvStyles.header}>
        <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap' }}>
          <div style={wvStyles.weekBadge}>Module {module.number}</div>
          <div>
            <h1 style={wvStyles.title}>{module.title}</h1>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:4 }}>
              <span style={wvStyles.chip}>{module.gradingMode || window.COURSE_DATA.gradingMode[module.number]}</span>
              <span style={wvStyles.chip}>{module.lengthTarget}</span>
              <span style={{...wvStyles.chip, background: isScored ? '#B0202A' : '#58595B', color:'#fff'}}>
                {window.COURSE_DATA.weights[module.number]}% of grade
              </span>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div style={wvStyles.progressWrap}>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'#666', marginBottom:4 }}>
            <span>Stage progress</span><span>{ws.checkedItems.length}/{module.checklist.length} items</span>
          </div>
          <div style={wvStyles.progressBar}>
            <div style={{ ...wvStyles.progressFill, width: progress + '%' }}></div>
          </div>
        </div>
      </div>

      {/* Deliverable box */}
      <div style={wvStyles.deliverableBox}>
        <strong style={{ color:'#B0202A' }}>This Module's Deliverable:</strong>
        <p style={{ margin:'6px 0 8px', lineHeight:1.5 }}>{module.deliverable}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {module.required.map((r,i) => (
            <span key={i} style={wvStyles.reqChip}>{r}</span>
          ))}
        </div>
      </div>

      {/* Tab nav */}
      <div style={wvStyles.tabNav}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={{ ...wvStyles.tabBtn, ...(activeTab === t.id ? wvStyles.tabActive : {}) }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* LESSON TAB */}
      {activeTab === 'lesson' && (
        <div style={wvStyles.tabContent}>
          <p style={wvStyles.overview}>{module.lesson.overview}</p>
          {module.lesson.sections.map((sec, i) => (
            <div key={i} style={wvStyles.accordion}>
              <button style={wvStyles.accordionBtn} onClick={() => toggleSection(i)}>
                <span>{sec.heading}</span>
                <span style={{ fontSize:18, color:'#B0202A' }}>{openSections[i] ? '−' : '+'}</span>
              </button>
              {openSections[i] && (
                <div style={wvStyles.accordionBody}
                  dangerouslySetInnerHTML={{ __html: sec.html }} />
              )}
            </div>
          ))}

          {/* Writing Tips */}
          <div style={wvStyles.tipsBox}>
            <div style={wvStyles.tipsHeader}>✍️ Writing Tips for Module {module.number}</div>
            <ol style={{ margin:'8px 0', paddingLeft:20 }}>
              {module.lesson.tips.map((tip, i) => (
                <li key={i} style={{ marginBottom:6, lineHeight:1.5 }}>{tip}</li>
              ))}
            </ol>
          </div>

          {/* Model Example */}
          <div style={wvStyles.modelWrap}>
            <button style={wvStyles.modelBtn} onClick={() => setShowModel(!showModel)}>
              <span>📄 {module.lesson.model.title}</span>
              <span style={{ fontSize:13, color:'#B0202A' }}>{showModel ? 'Hide ▲' : 'Show ▼'}</span>
            </button>
            {showModel && (
              <div style={wvStyles.modelBody}
                dangerouslySetInnerHTML={{ __html: module.lesson.model.html }} />
            )}
          </div>
        </div>
      )}

      {/* CHECKLIST & DRAFT TAB */}
      {activeTab === 'checklist' && (
        <div style={wvStyles.tabContent}>
          <h3 style={wvStyles.sectionHead}>Submission Checklist</h3>
          <p style={{ color:'#555', fontSize:14, marginBottom:12 }}>
            Check off each item as you complete it. These are required elements for this module's submission.
          </p>
          {module.checklist.map((item, i) => (
            <div key={i} style={{ ...wvStyles.checkRow, background: ws.checkedItems.includes(i) ? '#fdf3f3' : '#fafafa' }}
              onClick={() => toggleCheck(i)}>
              <div style={{ ...wvStyles.checkbox, ...(ws.checkedItems.includes(i) ? wvStyles.checkboxChecked : {}) }}>
                {ws.checkedItems.includes(i) && <span style={{ color:'#fff', fontSize:13, fontWeight:700 }}>✓</span>}
              </div>
              <span style={{ color: ws.checkedItems.includes(i) ? '#333' : '#444', textDecoration: ws.checkedItems.includes(i) ? 'none' : 'none', fontSize:14, lineHeight:1.5 }}>
                {item}
              </span>
            </div>
          ))}

          <h3 style={{ ...wvStyles.sectionHead, marginTop:28 }}>Working Draft</h3>
          <p style={{ color:'#555', fontSize:14, marginBottom:8 }}>
            Draft your Module {module.number} content here. This is saved automatically. Target: <strong>{module.lengthTarget}</strong>
          </p>
          <div style={{ position:'relative' }}>
            <textarea
              value={ws.draftText}
              onChange={e => setDraft(e.target.value)}
              placeholder={`Start drafting your Module ${module.number} submission here...\n\nBegin with a 75–100 word revision memo:\n"In this revision, I [added / changed / addressed feedback about]..."\n\nThen write your Module ${module.number} content.`}
              style={wvStyles.textarea}
            />
            <div style={wvStyles.charCount}>
              {ws.draftText.length} characters · ~{Math.round(ws.draftText.split(/\s+/).filter(Boolean).length)} words
            </div>
          </div>

          {/* UNLV WebCampus Bridge */}
          <div style={wvStyles.lmsBridge}>
            <div style={{ fontWeight:600, color:'#B0202A', marginBottom:6 }}>📋 UNLV WebCampus Submission Reminder</div>
            <p style={{ margin:0, fontSize:14, lineHeight:1.5, color:'#333' }}>{module.lms}</p>
          </div>

          {/* Save module to file */}
          <div style={{ marginTop:16, background:'#f0f4ff', border:'1px solid #c8d8f8', borderRadius:8, padding:'14px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontWeight:700, fontSize:13, color:'#1a1a2e', marginBottom:2 }}>💾 Save this module to a file</div>
              <div style={{ fontSize:12, color:'#555', lineHeight:1.5 }}>Download → open in browser → Print → Save as PDF → upload to this module's <strong>Canvas reflection area</strong>.</div>
            </div>
            <button
              onClick={() => {
                if (typeof window.buildModuleHTML === 'function') {
                  const html = window.buildModuleHTML(module, ws, studentName || 'Student');
                  const blob = new Blob([html], { type:'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'MHA635_Module' + module.number + '_' + (studentName || 'student').replace(/[^a-z0-9]/gi,'_').toLowerCase() + '.html';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }
              }}
              disabled={!ws.draftText || !ws.draftText.trim()}
              title={!ws.draftText ? 'Add a draft above first' : 'Download this module as an HTML file'}
              style={{ background: ws.draftText && ws.draftText.trim() ? '#1a1a2e' : '#e0e0e0', color: ws.draftText && ws.draftText.trim() ? '#fff' : '#bbb', border:'none', padding:'9px 18px', borderRadius:7, fontSize:13, fontWeight:700, cursor: ws.draftText && ws.draftText.trim() ? 'pointer' : 'default', fontFamily:"system-ui,sans-serif", whiteSpace:'nowrap', flexShrink:0, transition:'all 0.15s' }}>
              💾 Save Module {module.number}
            </button>
          </div>
        </div>
      )}

      {/* SELF-ASSESS TAB */}
      {activeTab === 'assess' && (
        <div style={wvStyles.tabContent}>
          <h3 style={wvStyles.sectionHead}>Self-Assessment Rubric</h3>
          <p style={{ color:'#555', fontSize:14, marginBottom:16 }}>
            Rate your work honestly against each criterion. This is formative — it helps you improve before submission.
            {!isScored && <span style={{ color:'#888' }}> (This module is graded Complete/Revise, but self-assessment still helps.)</span>}
          </p>
          {rubric.map((criterion, ci) => {
            const score = ws.selfScores[ci] || 0;
            return (
              <div key={ci} style={wvStyles.rubricCard}>
                <div style={wvStyles.rubricCriterion}>{criterion.criterion}</div>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:8 }}>
                  {[4,3,2,1].map(s => (
                    <button key={s} onClick={() => setScore(ci, s)}
                      style={{ ...wvStyles.scoreBtn, ...(score === s ? wvStyles.scoreBtnActive : {}) }}>
                      {s} — {['Limited','Developing','Adequate','Strong'][s-1]}
                    </button>
                  ))}
                </div>
                {score > 0 && (
                  <div style={{ ...wvStyles.scoreDesc, borderColor: score === 4 ? '#2a7a2a' : score === 3 ? '#2a5a8a' : score === 2 ? '#c47a00' : '#B0202A', background: score === 4 ? '#f0faf0' : score === 3 ? '#f0f4fa' : score === 2 ? '#fdf6e8' : '#fdf3f3' }}>
                    {criterion.scores[score]}
                  </div>
                )}
              </div>
            );
          })}
          {Object.keys(ws.selfScores).length > 0 && (
            <div style={wvStyles.scoreTotal}>
              <span>Self-Assessment Total: </span>
              <strong style={{ color:'#B0202A', fontSize:18 }}>
                {Object.values(ws.selfScores).reduce((a,b) => a+b, 0)} / {rubric.length * 4}
              </strong>
              <span style={{ color:'#888', fontSize:13 }}> (indicative only — official grade is from your UNLV WebCampus reflection)</span>
            </div>
          )}
        </div>
      )}

      {/* REFLECT TAB */}
      {activeTab === 'reflect' && (
        <div style={wvStyles.tabContent}>
          <h3 style={wvStyles.sectionHead}>Module Reflection Prompts</h3>
          <p style={{ color:'#555', fontSize:14, marginBottom:16 }}>
            Reflect on these questions before joining the module UNLV WebCampus discussion with Dr. George.
            Your responses here are private — use UNLV WebCampus for the official graded reflection.
          </p>
          {module.reflection.map((prompt, i) => (
            <div key={i} style={wvStyles.promptCard}>
              <div style={wvStyles.promptQ}>{i+1}. {prompt}</div>
            </div>
          ))}
          <h3 style={{ ...wvStyles.sectionHead, marginTop:24 }}>My Reflection Notes</h3>
          <p style={{ color:'#555', fontSize:14, marginBottom:8 }}>
            Draft your thoughts here before heading to UNLV WebCampus. Private — not submitted anywhere.
          </p>
          <textarea
            value={ws.reflectionNotes}
            onChange={e => setReflection(e.target.value)}
            placeholder="Jot down your reflections here. What stood out? What challenged you? What would you do differently?"
            style={{ ...wvStyles.textarea, minHeight: 160 }}
          />
          <div style={wvStyles.lmsBridge}>
            <div style={{ fontWeight:600, color:'#B0202A', marginBottom:6 }}>🎓 Ready for UNLV WebCampus?</div>
            <p style={{ margin:0, fontSize:14, lineHeight:1.5, color:'#333' }}>
              Once you've reflected here, head to the official UNLV WebCampus to participate in the Module {module.number} group reflection with Dr. George. Your engagement there is how this module's work is formally recognized.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const wvStyles = {
  container: { maxWidth:860, margin:'0 auto', fontFamily:"Georgia, 'Times New Roman', serif" },
  header: { background:'#fff', borderRadius:10, padding:'20px 24px', marginBottom:16, boxShadow:'0 1px 4px rgba(0,0,0,0.08)' },
  weekBadge: { background:'#B0202A', color:'#fff', fontSize:12, fontWeight:700, padding:'4px 12px', borderRadius:20, letterSpacing:1, whiteSpace:'nowrap', fontFamily:"system-ui, sans-serif" },
  title: { margin:0, fontSize:'1.5rem', fontWeight:700, color:'#1a1a1a' },
  chip: { background:'#f0f0f0', color:'#444', fontSize:12, padding:'3px 10px', borderRadius:20, fontFamily:"system-ui, sans-serif" },
  progressWrap: { marginTop:14 },
  progressBar: { background:'#f0f0f0', borderRadius:20, height:8, overflow:'hidden' },
  progressFill: { background:'linear-gradient(90deg,#B0202A,#d44)', height:'100%', borderRadius:20, transition:'width 0.4s ease' },
  deliverableBox: { background:'#fdf3f3', border:'1px solid #f0c8c8', borderRadius:8, padding:'14px 18px', marginBottom:16, fontFamily:"system-ui, sans-serif", fontSize:14 },
  reqChip: { background:'#fff', border:'1px solid #e0b0b0', color:'#B0202A', fontSize:12, padding:'3px 10px', borderRadius:20 },
  tabNav: { display:'flex', gap:4, background:'#fff', padding:'8px 8px 0', borderRadius:'10px 10px 0 0', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', flexWrap:'wrap' },
  tabBtn: { padding:'8px 14px', border:'none', background:'transparent', cursor:'pointer', fontSize:13, fontFamily:"system-ui, sans-serif", color:'#666', borderRadius:'6px 6px 0 0', borderBottom:'2px solid transparent', transition:'all 0.15s' },
  tabActive: { color:'#B0202A', fontWeight:600, borderBottom:'2px solid #B0202A', background:'#fdf3f3' },
  tabContent: { background:'#fff', borderRadius:'0 0 10px 10px', padding:'20px 24px', boxShadow:'0 1px 4px rgba(0,0,0,0.06)', fontFamily:"system-ui, sans-serif" },
  overview: { fontSize:15, lineHeight:1.7, color:'#333', marginBottom:16, fontStyle:'italic', borderLeft:'3px solid #B0202A', paddingLeft:14 },
  accordion: { border:'1px solid #eee', borderRadius:8, marginBottom:10, overflow:'hidden' },
  accordionBtn: { width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', background:'#fafafa', border:'none', cursor:'pointer', fontSize:14, fontWeight:600, color:'#1a1a1a', textAlign:'left' },
  accordionBody: { padding:'14px 16px', fontSize:14, lineHeight:1.7, color:'#333', borderTop:'1px solid #eee' },
  tipsBox: { background:'#f8f8f8', border:'1px solid #e8e8e8', borderRadius:8, padding:'14px 18px', marginTop:16 },
  tipsHeader: { fontWeight:700, color:'#333', marginBottom:4, fontSize:14 },
  modelWrap: { border:'1px solid #e0b0b0', borderRadius:8, marginTop:16, overflow:'hidden' },
  modelBtn: { width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 16px', background:'#fdf3f3', border:'none', cursor:'pointer', fontSize:13, fontWeight:600, color:'#333', textAlign:'left' },
  modelBody: { padding:'14px 16px', fontSize:13.5, lineHeight:1.7, color:'#333', borderTop:'1px solid #f0c8c8' },
  sectionHead: { fontSize:15, fontWeight:700, color:'#1a1a1a', marginBottom:12, marginTop:4, fontFamily:"Georgia, serif" },
  checkRow: { display:'flex', alignItems:'flex-start', gap:12, padding:'10px 14px', borderRadius:8, marginBottom:8, cursor:'pointer', border:'1px solid #eee', transition:'background 0.15s' },
  checkbox: { width:20, height:20, border:'2px solid #ccc', borderRadius:4, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', marginTop:1, transition:'all 0.15s' },
  checkboxChecked: { background:'#B0202A', borderColor:'#B0202A' },
  textarea: { width:'100%', minHeight:220, padding:'12px 14px', border:'1px solid #ddd', borderRadius:8, fontSize:14, lineHeight:1.7, fontFamily:"Georgia, serif", resize:'vertical', boxSizing:'border-box', color:'#333' },
  charCount: { fontSize:12, color:'#999', textAlign:'right', marginTop:4 },
  lmsBridge: { background:'#f8f3e8', border:'1px solid #e8d8b0', borderRadius:8, padding:'14px 18px', marginTop:20 },
  rubricCard: { border:'1px solid #eee', borderRadius:8, padding:'14px 16px', marginBottom:12, background:'#fafafa' },
  rubricCriterion: { fontSize:14, fontWeight:700, color:'#1a1a1a', marginBottom:10 },
  scoreBtn: { padding:'6px 14px', border:'1px solid #ddd', borderRadius:6, cursor:'pointer', fontSize:12, background:'#fff', color:'#555', transition:'all 0.15s', fontFamily:"system-ui, sans-serif" },
  scoreBtnActive: { background:'#B0202A', borderColor:'#B0202A', color:'#fff', fontWeight:600 },
  scoreDesc: { fontSize:13, padding:'8px 12px', borderRadius:6, border:'1px solid', lineHeight:1.5, marginTop:4 },
  scoreTotal: { textAlign:'right', padding:'12px', fontSize:14, color:'#333', marginTop:8 },
  promptCard: { background:'#f8f8f8', border:'1px solid #eee', borderRadius:8, padding:'12px 16px', marginBottom:10 },
  promptQ: { fontSize:14, lineHeight:1.6, color:'#333' },
};

Object.assign(window, { WeekView });
