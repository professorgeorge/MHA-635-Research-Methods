
// Main App — navigation shell + state management

const STORAGE_KEY = 'mha635_v2';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { studentName:'', weekStates:{} };
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}

function App() {
  const [tab, setTab] = React.useState('home');
  const [appState, setAppState] = React.useState(loadState);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const cd = window.COURSE_DATA;

  React.useEffect(() => { saveState(appState); }, [appState]);

  // expose setter for HomeView name input
  window.__setStudentName = (name) => setAppState(prev => ({ ...prev, studentName: name }));

  function setWeekState(weekNum, ws) {
    setAppState(prev => ({
      ...prev,
      weekStates: { ...prev.weekStates, [weekNum]: ws }
    }));
  }

  function getWeekProgress(wNum) {
    const ws = appState.weekStates[wNum] || {};
    const module = cd.weeks.find(w => w.number === wNum);
    if (!module) return 0;
    return Math.round(((ws.checkedItems||[]).length / module.checklist.length) * 100);
  }

  const navItems = [
    { id:'home',      label:'Home',      icon:'🏠' },
    { id:'module1',     label:'Wk 1: Business Problem', icon:'1', week:1 },
    { id:'module2',     label:'Wk 2: Research Focus',   icon:'2', week:2 },
    { id:'module3',     label:'Wk 3: Literature Base',  icon:'3', week:3, scored:true },
    { id:'module4',     label:'Wk 4: Design Choice',    icon:'4', week:4 },
    { id:'module5',     label:'Wk 5: Data Plan',        icon:'5', week:5, scored:true },
    { id:'module6',     label:'Wk 6: Analysis Plan',    icon:'6', week:6 },
    { id:'module7',     label:'Wk 7: Final Proposal',   icon:'7', week:7, scored:true },
    { id:'module8',     label:'Wk 8: Mini-Study & Report', icon:'8', week:8, scored:true },
    { id:'rubric',    label:'Rubric',     icon:'📊' },
    { id:'codes',     label:'Feedback Codes', icon:'🔖' },
    { id:'glossary',  label:'Glossary',   icon:'📚' },
    { id:'portfolio', label:'Portfolio',  icon:'🎓' },
  ];

  function renderContent() {
    if (tab === 'home') return <HomeView appState={appState} onTabChange={setTab} />;
    if (tab === 'rubric') return <RubricView appState={appState} />;
    if (tab === 'codes') return <CodesView />;
    if (tab === 'glossary') return <GlossaryView />;
    if (tab === 'portfolio') return <PortfolioView appState={appState} />;
    const weekNum = parseInt(tab.replace('module',''));
    if (!isNaN(weekNum)) {
      const module = cd.weeks.find(w => w.number === weekNum);
      if (module) {
        return <WeekView
          module={module}
          state={appState.weekStates[weekNum]}
          onStateChange={(ws) => setWeekState(weekNum, ws)}
          studentName={appState.studentName}
        />;
      }
    }
    return <HomeView appState={appState} onTabChange={setTab} />;
  }

  const currentWeekNum = parseInt(tab.replace('module',''));
  const currentModule = !isNaN(currentWeekNum) ? cd.weeks.find(w=>w.number===currentWeekNum) : null;

  return (
    <div style={appStyles.shell}>
      {/* Top header */}
      <header style={appStyles.header}>
        <div style={appStyles.headerInner}>
          <div style={appStyles.headerLeft}>
            <button style={appStyles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span style={appStyles.hamburgerLine}></span>
              <span style={appStyles.hamburgerLine}></span>
              <span style={appStyles.hamburgerLine}></span>
            </button>
            <div>
              <div style={appStyles.headerCourse}>MHA 635: Research Methods</div>
            </div>
          </div>
          <div style={appStyles.headerRight}>
            {appState.studentName && (
              <span style={appStyles.headerName}>{appState.studentName}</span>
            )}

          </div>
        </div>
      </header>

      <div style={appStyles.body}>
        {/* Sidebar */}
        <nav style={{ ...appStyles.sidebar, transform: menuOpen ? 'translateX(0)' : undefined }}
          onClick={() => setMenuOpen(false)}>
          <div style={appStyles.navSection}>
            <div style={appStyles.navSectionLabel}>Overview</div>
            {navItems.filter(n=>['home'].includes(n.id)).map(item => (
              <button key={item.id} onClick={(e)=>{e.stopPropagation();setTab(item.id);setMenuOpen(false);}}
                style={{ ...appStyles.navBtn, ...(tab===item.id ? appStyles.navBtnActive : {}) }}>
                <span style={appStyles.navIcon}>{item.icon}</span>
                <span style={appStyles.navLabel}>{item.label}</span>
              </button>
            ))}
          </div>

          <div style={appStyles.navSection}>
            <div style={appStyles.navSectionLabel}>Eight Modules</div>
            {navItems.filter(n=>n.week).map(item => {
              const prog = getWeekProgress(item.week);
              const active = tab === item.id;
              return (
                <button key={item.id} onClick={(e)=>{e.stopPropagation();setTab(item.id);setMenuOpen(false);}}
                  style={{ ...appStyles.navBtn, ...(active ? appStyles.navBtnActive : {}), paddingRight:8 }}>
                  <div style={{ ...appStyles.navWeekDot,
                    background: prog===100?'#B0202A':prog>0?'#e08888':'#e0e0e0',
                    color: prog>0?'#fff':'#999',
                    outline: item.scored ? '2px solid #B0202A' : 'none',
                    outlineOffset: 1
                  }}>{item.week}</div>
                  <span style={{ ...appStyles.navLabel, flex:1, fontSize:12.5 }}>{item.label.replace(/^Wk \d+: /,'')}</span>
                  {prog > 0 && prog < 100 && <span style={appStyles.progPip}>{prog}%</span>}
                  {prog === 100 && <span style={{ color:'#2a7a2a', fontSize:14 }}>✓</span>}
                </button>
              );
            })}
          </div>

          <div style={appStyles.navSection}>
            <div style={appStyles.navSectionLabel}>Resources</div>
            {navItems.filter(n=>['rubric','codes','glossary','portfolio'].includes(n.id)).map(item => (
              <button key={item.id} onClick={(e)=>{e.stopPropagation();setTab(item.id);setMenuOpen(false);}}
                style={{ ...appStyles.navBtn, ...(tab===item.id ? appStyles.navBtnActive : {}) }}>
                <span style={appStyles.navIcon}>{item.icon}</span>
                <span style={appStyles.navLabel}>{item.label}</span>
              </button>
            ))}
          </div>

          <div style={appStyles.sidebarFooter}>
            <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)', lineHeight:1.6 }}>
              All progress saved locally.<br/>
              Official grades via UNLV WebCampus.
            </div>
          </div>
        </nav>

        {/* Overlay for mobile */}
        {menuOpen && (
          <div style={appStyles.overlay} onClick={() => setMenuOpen(false)} />
        )}

        {/* Main content */}
        <main style={appStyles.main}>
          {/* Breadcrumb */}
          <div style={appStyles.breadcrumb}>
            <span onClick={() => setTab('home')} style={{ cursor:'pointer', color:'#B0202A' }}>Home</span>
            {currentModule && <><span style={{ color:'#ccc', margin:'0 6px' }}>›</span><span style={{ color:'#555' }}>Module {currentModule.number}: {currentModule.title}</span></>}
            {['rubric','codes','glossary','portfolio'].includes(tab) && <><span style={{ color:'#ccc', margin:'0 6px' }}>›</span><span style={{ color:'#555' }}>{{rubric:'Rubric',codes:'Feedback Codes',glossary:'Glossary',portfolio:'Portfolio'}[tab]}</span></>}
          </div>

          {/* Module nav arrows */}
          {currentModule && (
            <div style={appStyles.weekNav}>
              <button style={appStyles.weekNavBtn}
                onClick={() => currentModule.number > 1 && setTab('module'+(currentModule.number-1))}
                disabled={currentModule.number === 1}>
                ← Module {currentModule.number - 1}
              </button>
              <span style={{ color:'#888', fontSize:13 }}>Module {currentModule.number} of 7</span>
              <button style={appStyles.weekNavBtn}
                onClick={() => currentModule.number < 7 && setTab('module'+(currentModule.number+1))}
                disabled={currentModule.number === 7}>
                Module {currentModule.number + 1} →
              </button>
            </div>
          )}

          <div style={appStyles.contentPad}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

const appStyles = {
  shell: { display:'flex', flexDirection:'column', height:'100vh', background:'#f5f5f5', fontFamily:"system-ui,sans-serif", overflow:'hidden' },
  header: { background:'#B0202A', color:'#fff', flexShrink:0, zIndex:100, boxShadow:'0 2px 8px rgba(0,0,0,0.2)' },
  headerInner: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 16px', maxWidth:'100%' },
  headerLeft: { display:'flex', alignItems:'center', gap:12 },
  headerCourse: { fontSize:15, fontWeight:700, fontFamily:"Georgia,serif", letterSpacing:0.2 },
  headerSub: { fontSize:11, opacity:0.75, letterSpacing:0.5 },
  headerRight: { display:'flex', alignItems:'center', gap:12 },
  headerName: { fontSize:13, opacity:0.9, fontStyle:'italic', display:'-webkit-box', WebkitLineClamp:1, WebkitBoxOrient:'vertical', overflow:'hidden', maxWidth:160 },
  instructorLink: { display:'flex', alignItems:'center', gap:5, color:'rgba(255,255,255,0.85)', fontSize:12, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)', padding:'4px 10px', borderRadius:20, whiteSpace:'nowrap' },
  hamburger: { background:'none', border:'none', cursor:'pointer', padding:4, display:'flex', flexDirection:'column', gap:5, flexShrink:0 },
  hamburgerLine: { display:'block', width:22, height:2, background:'#fff', borderRadius:2 },
  body: { display:'flex', flex:1, overflow:'hidden', position:'relative' },
  sidebar: { width:220, background:'#1a1a2e', flexShrink:0, overflowY:'auto', display:'flex', flexDirection:'column', zIndex:50,
    transition:'transform 0.25s ease',
    '@media(maxWidth:768px)': { position:'absolute', top:0, bottom:0, left:0, transform:'translateX(-100%)' } },
  navSection: { padding:'16px 8px 8px' },
  navSectionLabel: { fontSize:10, color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:1.5, padding:'0 8px 6px', fontWeight:700 },
  navBtn: { display:'flex', alignItems:'center', gap:8, width:'100%', padding:'8px 10px', border:'none', background:'transparent', color:'rgba(255,255,255,0.7)', cursor:'pointer', borderRadius:6, textAlign:'left', transition:'all 0.15s', fontSize:13 },
  navBtnActive: { background:'rgba(176,32,42,0.5)', color:'#fff', fontWeight:600 },
  navIcon: { fontSize:14, flexShrink:0, width:18, textAlign:'center' },
  navLabel: { flex:1, lineHeight:1.3 },
  navWeekDot: { width:22, height:22, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:800, flexShrink:0 },
  progPip: { fontSize:10, color:'rgba(255,255,255,0.5)', background:'rgba(255,255,255,0.1)', padding:'1px 5px', borderRadius:10 },
  sidebarFooter: { marginTop:'auto', padding:'16px 16px 20px', borderTop:'1px solid rgba(255,255,255,0.08)' },
  overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', zIndex:40 },
  main: { flex:1, overflowY:'auto', display:'flex', flexDirection:'column' },
  breadcrumb: { background:'#fff', padding:'8px 20px', fontSize:12, color:'#888', borderBottom:'1px solid #eee', flexShrink:0 },
  weekNav: { display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 16px', background:'#fdf3f3', borderBottom:'1px solid #f0d0d0' },
  weekNavBtn: { padding:'5px 14px', background:'#fff', border:'1px solid #e0b0b0', color:'#B0202A', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, transition:'all 0.15s' },
  contentPad: { padding:'16px', flex:1 },
};

const rootEl = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootEl);
appRoot.render(<App />);
