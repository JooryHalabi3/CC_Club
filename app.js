const initialData = {
  members: [
    { id: 1, name: 'ريماس فرج', committee: 'الإدارة', role: 'رئيسة النادي', hours: 0, points: 0, attendance: '—' },
    { id: 2, name: 'خالد النافع', committee: 'الإدارة', role: 'نائب رئيسة النادي', hours: 0, points: 0, attendance: '—' },
    { id: 3, name: 'خالد الدمح', committee: 'الجودة والحياة', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 4, name: 'ماريا الزهيري', committee: 'الجودة والحياة', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 5, name: 'عزوف العسيري', committee: 'المسابقات والأنشطة الرياضية', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 6, name: 'حامد فردوس', committee: 'المسابقات والأنشطة الرياضية', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 7, name: 'اياد بشناق', committee: 'العلاقات العامة', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 8, name: 'اسيل الحازمي', committee: 'العلاقات العامة', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 9, name: 'فهد الصاعدي', committee: 'إدارة الفعاليات', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 10, name: 'اميره حسنين', committee: 'إدارة الفعاليات', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 11, name: 'اروى السلمي', committee: 'الموارد البشرية', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 12, name: 'نوره الوذيناني', committee: 'الموارد البشرية', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 13, name: 'الوليد الحارثي', committee: 'اللجنة التسويقية', role: 'قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
    { id: 14, name: 'هادن الشعار', committee: 'اللجنة التسويقية', role: 'نائب قائد/ة لجنة', hours: 0, points: 0, attendance: '—' },
  ],
  events: [
    { id: 1, name: 'معسكر الأمن السيبراني', owner: 'الجودة والحياة', date: '2026-09-18', progress: 72, status: 'قيد التنفيذ', budget: 4200 },
    { id: 2, name: 'بطولة الألعاب الإلكترونية', owner: 'المسابقات والأنشطة الرياضية', date: '2026-09-25', progress: 48, status: 'تخطيط', budget: 2800 },
    { id: 3, name: 'لقاء شركاء النادي', owner: 'العلاقات العامة', date: '2026-10-03', progress: 30, status: 'تخطيط', budget: 1600 },
  ],
  tasks: [
    { id: 1, title: 'اعتماد خطة المعسكر', committee: 'إدارة الفعاليات', status: 'todo', priority: 'عالية', due: '2026-09-06' },
    { id: 2, title: 'تجهيز هوية البطولة', committee: 'اللجنة التسويقية', status: 'doing', priority: 'متوسطة', due: '2026-09-08' },
    { id: 3, title: 'مخاطبة ثلاث جهات راعية', committee: 'العلاقات العامة', status: 'doing', priority: 'عالية', due: '2026-09-07' },
    { id: 4, title: 'تحديث سجل ساعات الأعضاء', committee: 'الموارد البشرية', status: 'done', priority: 'منخفضة', due: '2026-09-01' },
    { id: 5, title: 'تأكيد المدرب للورشة', committee: 'الجودة والحياة', status: 'todo', priority: 'متوسطة', due: '2026-09-10' },
  ],
  partners: [
    { id: 1, org: 'شركة تقنية ألف', contact: 'أحمد سالم', status: 'متابعة مطلوبة', next: '2026-09-05' },
    { id: 2, org: 'مؤسسة الابتكار', contact: 'ريم عادل', status: 'تمت الموافقة', next: '2026-09-14' },
    { id: 3, org: 'مركز باء', contact: 'خالد حسن', status: 'تم الإرسال', next: '2026-09-09' },
  ],
  marketing: [
    { id: 1, title: 'إعلان معسكر الأمن السيبراني', type: 'منشور', status: 'قيد المراجعة', due: '2026-09-04' },
    { id: 2, title: 'هوية بطولة الألعاب الإلكترونية', type: 'تصميم', status: 'قيد التنفيذ', due: '2026-09-08' },
    { id: 3, title: 'تغطية لقاء الشركاء', type: 'تغطية', status: 'مجدول', due: '2026-10-03' },
  ],
  programs: [
    { id: 1, name: 'أساسيات لينكس', speaker: 'د. محمد القحطاني', seats: 45, registered: 39, date: '2026-09-12' },
    { id: 2, name: 'مدخل إلى الذكاء الاصطناعي', speaker: 'م. مها العتيبي', seats: 60, registered: 52, date: '2026-09-21' },
  ],
  sports: [
    { id: 1, name: 'بطولة FIFA', teams: 12, participants: 24, date: '2026-09-25', status: 'التسجيل مفتوح' },
    { id: 2, name: 'تحدي الشطرنج', teams: 0, participants: 18, date: '2026-10-08', status: 'قريبًا' },
  ]
};

const leadership = [
  { committee:'الإدارة', lead:'ريماس فرج', leadRole:'رئيسة النادي', deputy:'خالد النافع', deputyRole:'نائب رئيسة النادي', admin:true },
  { committee:'الجودة والحياة', lead:'خالد الدمح', leadRole:'قائد/ة اللجنة', deputy:'ماريا الزهيري', deputyRole:'نائب قائد/ة اللجنة' },
  { committee:'المسابقات والأنشطة الرياضية', lead:'عزوف العسيري', leadRole:'قائد/ة اللجنة', deputy:'حامد فردوس', deputyRole:'نائب قائد/ة اللجنة' },
  { committee:'العلاقات العامة', lead:'اياد بشناق', leadRole:'قائد/ة اللجنة', deputy:'اسيل الحازمي', deputyRole:'نائب قائد/ة اللجنة' },
  { committee:'إدارة الفعاليات', lead:'فهد الصاعدي', leadRole:'قائد/ة اللجنة', deputy:'اميره حسنين', deputyRole:'نائب قائد/ة اللجنة' },
  { committee:'الموارد البشرية', lead:'اروى السلمي', leadRole:'قائد/ة اللجنة', deputy:'نوره الوذيناني', deputyRole:'نائب قائد/ة اللجنة' },
  { committee:'اللجنة التسويقية', lead:'الوليد الحارثي', leadRole:'قائد/ة اللجنة', deputy:'هادن الشعار', deputyRole:'نائب قائد/ة اللجنة' },
];

const data = JSON.parse(localStorage.getItem('clubos_data_v2')) || initialData;
const save = () => localStorage.setItem('clubos_data_v2', JSON.stringify(data));

const pageMeta = {
  dashboard: ['لوحة التحكم', 'نظرة شاملة على أداء النادي اليوم'],
  events: ['إدارة الفعاليات', 'تخطيط الفعاليات والمبادرات ومتابعة التنفيذ'],
  members: ['الموارد البشرية', 'إدارة الأعضاء والساعات والنقاط والحضور'],
  tasks: ['المهام', 'متابعة مهام النادي واللجان في مكان واحد'],
  quality: ['الجودة والحياة', 'إدارة البرامج والدورات والورش'],
  pr: ['العلاقات العامة', 'إدارة الجهات والشراكات والرعايات'],
  marketing: ['اللجنة التسويقية', 'طلبات المحتوى والتصميم والحملات'],
  sports: ['المسابقات والأنشطة الرياضية', 'إدارة المسابقات والفرق والأنشطة'],
  reports: ['التقارير', 'مؤشرات الأداء والتحليلات العامة']
};

const content = document.getElementById('pageContent');
const title = document.getElementById('pageTitle');
const subtitle = document.getElementById('pageSubtitle');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalForm = document.getElementById('modalForm');
const modalTitle = document.getElementById('modalTitle');
let currentPage = 'dashboard';

function badge(text) {
  const t = String(text);
  let cls = 'purple';
  if (/موافقة|مكتمل|منشور|مفتوح/.test(t)) cls = 'success';
  if (/مراجعة|متابعة|تنفيذ|مجدول/.test(t)) cls = 'warning';
  if (/متأخر|مرفوض/.test(t)) cls = 'danger';
  if (/تخطيط|الإرسال|قريب/.test(t)) cls = 'info';
  return `<span class="badge ${cls}">${t}</span>`;
}

function renderDashboard() {
  const done = data.tasks.filter(t => t.status === 'done').length;
  const totalHours = data.members.reduce((s,m)=>s+m.hours,0);
  return `
    <div class="hero">
      <div><h2>مساء الإنجاز 👋</h2><p>كل عمليات النادي في مكان واحد. تابعي تقدم اللجان، الفعاليات، الأعضاء والمهام بدون جداول متفرقة.</p></div>
      <div class="hero-actions"><button class="btn btn-light" onclick="openAdd('event')">＋ فعالية جديدة</button><button class="btn btn-ghost" onclick="openAdd('task')">＋ مهمة</button></div>
    </div>
    <div class="stats-grid">
      ${stat('◎', data.members.length, 'الأعضاء النشطون', '+8% هذا الشهر')}
      ${stat('◫', data.events.length, 'الفعاليات الحالية', '3 قادمة')}
      ${stat('✓', `${done}/${data.tasks.length}`, 'المهام المكتملة', 'هذا الأسبوع')}
      ${stat('◷', totalHours, 'ساعات التطوع', '+32 ساعة')}
    </div>
    <div class="panel" style="margin-top:18px">
      <div class="panel-head"><div><h3>هيكل الإدارة واللجان</h3><p>رئاسة النادي وقيادات اللجان</p></div></div>
      <div class="leadership-grid">${leadership.map(l=>leaderCard(l)).join('')}</div>
    </div>
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><div><h3>الفعاليات الحالية</h3><p>متابعة سريعة لنسبة التقدم</p></div><button class="btn btn-ghost" onclick="go('events')">عرض الكل</button></div>
        ${eventsTable(data.events.slice(0,3))}
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>آخر النشاطات</h3><p>تحديثات النادي الأخيرة</p></div></div>
        <div class="activity-list">
          ${activity('تم اعتماد خطة معسكر الأمن السيبراني','منذ 20 دقيقة')}
          ${activity('تم تحديث ساعات 4 أعضاء','منذ ساعة')}
          ${activity('تم إرسال طلب رعاية جديد','منذ 3 ساعات')}
          ${activity('تمت جدولة منشور البطولة','أمس')}
        </div>
      </div>
    </div>
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><div><h3>أداء اللجان</h3><p>نسبة إنجاز المهام الحالية</p></div></div>
        ${committeeProgress('إدارة الفعاليات',78)}${committeeProgress('اللجنة التسويقية',65)}${committeeProgress('العلاقات العامة',58)}${committeeProgress('الموارد البشرية',86)}
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>المهام القريبة</h3><p>أقرب مواعيد التسليم</p></div></div>
        ${data.tasks.filter(t=>t.status!=='done').slice(0,4).map(t=>`<div class="activity"><div class="activity-dot"></div><div><strong>${t.title}</strong><span>${t.committee} · ${t.due}</span></div></div>`).join('')}
      </div>
    </div>`;
}

function personInitial(name){ return name.trim().charAt(0); }
function leaderCard(l){ return `<div class="leader-card ${l.admin?'admin-card':''}"><div class="committee-name">${l.committee}</div><div class="leader-person"><div class="person-avatar">${personInitial(l.lead)}</div><div><strong>${l.lead}</strong><span>${l.leadRole}</span></div></div><div class="leader-person"><div class="person-avatar">${personInitial(l.deputy)}</div><div><strong>${l.deputy}</strong><span>${l.deputyRole}</span></div></div></div>`; }

function stat(icon, value, label, trend) { return `<div class="stat-card"><div class="stat-top"><div class="stat-icon">${icon}</div><span class="trend">${trend}</span></div><h3>${value}</h3><p>${label}</p></div>`; }
function activity(a,b){ return `<div class="activity"><div class="activity-dot"></div><div><strong>${a}</strong><span>${b}</span></div></div>`; }
function committeeProgress(name,p){ return `<div style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;margin-bottom:7px;font-size:13px"><strong>${name}</strong><span>${p}%</span></div><div class="progress"><span style="width:${p}%"></span></div></div>`; }
function eventsTable(items){ return `<div class="table-wrap"><table><thead><tr><th>الفعالية</th><th>اللجنة</th><th>التاريخ</th><th>التقدم</th><th>الحالة</th></tr></thead><tbody>${items.map(e=>`<tr><td><strong>${e.name}</strong></td><td>${e.owner}</td><td>${e.date}</td><td><div style="display:flex;align-items:center;gap:8px"><div class="progress" style="width:90px"><span style="width:${e.progress}%"></span></div><span>${e.progress}%</span></div></td><td>${badge(e.status)}</td></tr>`).join('')}</tbody></table></div>`; }

function renderEvents(){ return `
  ${toolbar('event','إضافة فعالية','بحث في الفعاليات...')}
  <div class="card-grid">${data.events.map(e=>`<div class="entity-card"><div class="entity-meta"><span>${e.date}</span>${badge(e.status)}</div><h4>${e.name}</h4><p>المسؤول: ${e.owner}</p><div style="margin:12px 0"><div class="progress"><span style="width:${e.progress}%"></span></div></div><div class="entity-meta"><span>الإنجاز ${e.progress}%</span><span>الميزانية ${e.budget.toLocaleString()} ر.س</span></div><div class="entity-footer"><button class="btn btn-ghost" onclick="incrementProgress(${e.id})">تحديث التقدم</button><button class="btn btn-danger" onclick="removeItem('events',${e.id})">حذف</button></div></div>`).join('')}</div>`; }

function renderMembers(){ return `
  ${toolbar('member','إضافة عضو','بحث في الأعضاء...')}
  <div class="panel"><div class="table-wrap"><table><thead><tr><th>العضو</th><th>اللجنة</th><th>الدور</th><th>الساعات</th><th>النقاط</th><th>الحضور</th><th></th></tr></thead><tbody>${data.members.map(m=>`<tr><td><strong>${m.name}</strong></td><td>${m.committee}</td><td>${badge(m.role)}</td><td>${m.hours} ساعة</td><td>${m.points}</td><td>${m.attendance}</td><td><button class="btn btn-danger" onclick="removeItem('members',${m.id})">حذف</button></td></tr>`).join('')}</tbody></table></div></div>`; }

function renderTasks(){
  const col=(status,label)=>`<div class="kanban-col"><div class="kanban-head"><strong>${label}</strong><span class="kanban-count">${data.tasks.filter(t=>t.status===status).length}</span></div>${data.tasks.filter(t=>t.status===status).map(t=>`<div class="task-card"><div class="task-top">${badge(t.priority)}<span style="font-size:11px;color:var(--muted)">${t.due}</span></div><h4>${t.title}</h4><p>${t.committee}</p><div class="task-bottom"><button class="btn btn-ghost" onclick="advanceTask(${t.id})">نقل للحالة التالية</button><button class="btn btn-danger" onclick="removeItem('tasks',${t.id})">×</button></div></div>`).join('')}</div>`;
  return `${toolbar('task','إضافة مهمة','بحث في المهام...')}<div class="kanban">${col('todo','جديدة')}${col('doing','قيد التنفيذ')}${col('done','مكتملة')}</div>`;
}

function renderQuality(){ return `${toolbar('program','إضافة برنامج','بحث في البرامج...')}<div class="card-grid">${data.programs.map(p=>`<div class="entity-card"><div class="entity-meta"><span>${p.date}</span>${badge('قيد التسجيل')}</div><h4>${p.name}</h4><p>المتحدث: ${p.speaker}</p><div class="entity-footer"><span>${p.registered}/${p.seats} مسجل</span><div class="progress" style="width:110px"><span style="width:${Math.round((p.registered/p.seats)*100)}%"></span></div></div></div>`).join('')}</div>`; }

function renderPR(){ return `${toolbar('partner','إضافة جهة','بحث في الجهات...')}<div class="panel"><div class="table-wrap"><table><thead><tr><th>الجهة</th><th>جهة الاتصال</th><th>الحالة</th><th>المتابعة القادمة</th><th></th></tr></thead><tbody>${data.partners.map(p=>`<tr><td><strong>${p.org}</strong></td><td>${p.contact}</td><td>${badge(p.status)}</td><td>${p.next}</td><td><button class="btn btn-danger" onclick="removeItem('partners',${p.id})">حذف</button></td></tr>`).join('')}</tbody></table></div></div>`; }

function renderMarketing(){ return `${toolbar('marketing','طلب محتوى','بحث في المحتوى...')}<div class="card-grid">${data.marketing.map(m=>`<div class="entity-card"><div class="entity-meta"><span>${m.type}</span>${badge(m.status)}</div><h4>${m.title}</h4><p>موعد التسليم: ${m.due}</p><div class="entity-footer"><button class="btn btn-ghost" onclick="cycleMarketing(${m.id})">تغيير الحالة</button><button class="btn btn-danger" onclick="removeItem('marketing',${m.id})">حذف</button></div></div>`).join('')}</div>`; }

function renderSports(){ return `${toolbar('sport','إضافة مسابقة','بحث في الأنشطة...')}<div class="card-grid">${data.sports.map(s=>`<div class="entity-card"><div class="entity-meta"><span>${s.date}</span>${badge(s.status)}</div><h4>${s.name}</h4><p>عدد المشاركين: ${s.participants} ${s.teams?`· الفرق: ${s.teams}`:''}</p><div class="entity-footer"><span>إدارة التسجيل والنتائج</span><button class="btn btn-danger" onclick="removeItem('sports',${s.id})">حذف</button></div></div>`).join('')}</div>`; }

function renderReports(){
  const committees = ['إدارة الفعاليات','الموارد البشرية','الجودة والحياة','العلاقات العامة','اللجنة التسويقية','المسابقات والأنشطة الرياضية'];
  const vals=[78,86,72,58,65,69];
  return `<div class="stats-grid">${stat('◫',data.events.length,'إجمالي الفعاليات','الفصل الحالي')}${stat('◎',data.members.length,'إجمالي الأعضاء','نشطون')}${stat('◷',data.members.reduce((s,m)=>s+m.hours,0),'ساعات التطوع','مسجلة')}${stat('✓',Math.round(data.tasks.filter(t=>t.status==='done').length/data.tasks.length*100)+'%','إغلاق المهام','معدل عام')}</div><div class="grid-2"><div class="panel"><div class="panel-head"><div><h3>أداء اللجان</h3><p>مؤشر إنجاز تقريبي</p></div></div><div class="chart-bars">${committees.map((c,i)=>`<div class="bar-item"><div class="bar" style="height:${vals[i]*2}px"></div><span>${c.split(' ')[0]}</span></div>`).join('')}</div></div><div class="panel"><div class="panel-head"><div><h3>ملخص تنفيذي</h3><p>أهم المؤشرات</p></div></div>${committeeProgress('إنجاز الخطة التشغيلية',74)}${committeeProgress('الالتزام بالمواعيد',81)}${committeeProgress('مشاركة الأعضاء',88)}${committeeProgress('جاهزية الفعاليات القادمة',67)}</div></div>`;
}

function toolbar(type,label,placeholder){ return `<div class="toolbar"><div class="toolbar-right"><button class="btn btn-primary" onclick="openAdd('${type}')">＋ ${label}</button></div><div class="toolbar-left"><input class="input page-search" placeholder="${placeholder}" oninput="filterCards(this.value)"></div></div>`; }

function render(){
  const [t,s] = pageMeta[currentPage]; title.textContent=t; subtitle.textContent=s;
  const map={dashboard:renderDashboard,events:renderEvents,members:renderMembers,tasks:renderTasks,quality:renderQuality,pr:renderPR,marketing:renderMarketing,sports:renderSports,reports:renderReports};
  content.innerHTML = map[currentPage]();
}

function go(page){ currentPage=page; document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page)); document.getElementById('sidebar').classList.remove('open'); render(); }
window.go=go;

document.getElementById('nav').addEventListener('click',e=>{ const b=e.target.closest('.nav-item'); if(b) go(b.dataset.page); });
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
document.getElementById('themeBtn').addEventListener('click',()=>{ document.body.classList.toggle('dark'); localStorage.setItem('clubos_theme',document.body.classList.contains('dark')?'dark':'light'); });
if(localStorage.getItem('clubos_theme')==='dark') document.body.classList.add('dark');

document.getElementById('globalSearch').addEventListener('input',e=>filterCards(e.target.value));
function filterCards(q){ q=q.trim().toLowerCase(); document.querySelectorAll('.entity-card,.task-card,tbody tr').forEach(el=>{ el.style.display = !q || el.innerText.toLowerCase().includes(q) ? '' : 'none'; }); }
window.filterCards=filterCards;

const forms = {
  event: { title:'إضافة فعالية', fields:[['name','اسم الفعالية','text'],['owner','اللجنة المسؤولة','select'],['date','التاريخ','date'],['budget','الميزانية','number']] },
  member: { title:'إضافة عضو', fields:[['name','اسم العضو','text'],['committee','اللجنة','select'],['role','الدور','text'],['hours','الساعات','number']] },
  task: { title:'إضافة مهمة', fields:[['title','عنوان المهمة','text'],['committee','اللجنة','select'],['priority','الأولوية','selectPriority'],['due','موعد التسليم','date']] },
  program: { title:'إضافة برنامج', fields:[['name','اسم البرنامج','text'],['speaker','المتحدث','text'],['date','التاريخ','date'],['seats','عدد المقاعد','number']] },
  partner: { title:'إضافة جهة', fields:[['org','اسم الجهة','text'],['contact','جهة الاتصال','text'],['status','الحالة','text'],['next','موعد المتابعة','date']] },
  marketing: { title:'طلب محتوى', fields:[['title','عنوان الطلب','text'],['type','النوع','text'],['status','الحالة','text'],['due','موعد التسليم','date']] },
  sport: { title:'إضافة مسابقة', fields:[['name','اسم المسابقة','text'],['participants','عدد المشاركين','number'],['date','التاريخ','date'],['status','الحالة','text']] }
};
const committees=['الإدارة','إدارة الفعاليات','الموارد البشرية','الجودة والحياة','العلاقات العامة','اللجنة التسويقية','المسابقات والأنشطة الرياضية'];
let activeForm=null;
function openAdd(type){
  activeForm=type; const f=forms[type]; modalTitle.textContent=f.title;
  modalForm.innerHTML=f.fields.map(([name,label,kind])=>{
    if(kind==='select') return `<div class="field"><label>${label}</label><select class="input" name="${name}" required>${committees.map(c=>`<option>${c}</option>`).join('')}</select></div>`;
    if(kind==='selectPriority') return `<div class="field"><label>${label}</label><select class="input" name="${name}"><option>عالية</option><option>متوسطة</option><option>منخفضة</option></select></div>`;
    return `<div class="field"><label>${label}</label><input class="input" name="${name}" type="${kind}" required></div>`;
  }).join('')+`<div class="modal-actions"><button type="button" class="btn btn-ghost" onclick="closeModalFn()">إلغاء</button><button class="btn btn-primary" type="submit">حفظ</button></div>`;
  modalBackdrop.hidden=false;
}
window.openAdd=openAdd;
function closeModalFn(){ modalBackdrop.hidden=true; activeForm=null; }
window.closeModalFn=closeModalFn;
document.getElementById('closeModal').addEventListener('click',closeModalFn);
modalBackdrop.addEventListener('click',e=>{ if(e.target===modalBackdrop) closeModalFn(); });
modalForm.addEventListener('submit',e=>{
  e.preventDefault(); const fd=Object.fromEntries(new FormData(modalForm).entries()); const id=Date.now();
  if(activeForm==='event') data.events.unshift({id,name:fd.name,owner:fd.owner,date:fd.date,progress:0,status:'تخطيط',budget:Number(fd.budget)||0});
  if(activeForm==='member') data.members.unshift({id,name:fd.name,committee:fd.committee,role:fd.role,hours:Number(fd.hours)||0,points:0,attendance:'100%'});
  if(activeForm==='task') data.tasks.unshift({id,title:fd.title,committee:fd.committee,priority:fd.priority,due:fd.due,status:'todo'});
  if(activeForm==='program') data.programs.unshift({id,name:fd.name,speaker:fd.speaker,date:fd.date,seats:Number(fd.seats)||0,registered:0});
  if(activeForm==='partner') data.partners.unshift({id,org:fd.org,contact:fd.contact,status:fd.status,next:fd.next});
  if(activeForm==='marketing') data.marketing.unshift({id,title:fd.title,type:fd.type,status:fd.status,due:fd.due});
  if(activeForm==='sport') data.sports.unshift({id,name:fd.name,participants:Number(fd.participants)||0,teams:0,date:fd.date,status:fd.status});
  save(); closeModalFn(); render(); toast('تم الحفظ بنجاح');
});

function removeItem(key,id){ data[key]=data[key].filter(x=>x.id!==id); save(); render(); toast('تم الحذف'); }
window.removeItem=removeItem;
function incrementProgress(id){ const e=data.events.find(x=>x.id===id); if(!e)return; e.progress=Math.min(100,e.progress+10); if(e.progress===100)e.status='مكتمل'; else if(e.progress>0)e.status='قيد التنفيذ'; save(); render(); toast('تم تحديث نسبة الإنجاز'); }
window.incrementProgress=incrementProgress;
function advanceTask(id){ const t=data.tasks.find(x=>x.id===id); if(!t)return; t.status=t.status==='todo'?'doing':t.status==='doing'?'done':'todo'; save(); render(); }
window.advanceTask=advanceTask;
function cycleMarketing(id){ const m=data.marketing.find(x=>x.id===id); const states=['قيد التنفيذ','قيد المراجعة','مجدول','منشور']; const i=states.indexOf(m.status); m.status=states[(i+1)%states.length]; save(); render(); }
window.cycleMarketing=cycleMarketing;
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800); }

render();
