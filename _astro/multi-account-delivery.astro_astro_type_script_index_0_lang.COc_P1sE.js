(()=>{const F=window.matchMedia("(prefers-reduced-motion: reduce)"),N={am:{pill:"Source: Account Managers",copy:"When an Account Manager brings a client request, I check whether it can go straight to a developer or needs ad hoc design work first.",cardsHtml:`
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route A • Direct Build</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">Direct Development → Web Developer</p>
              <p class="text-xs text-stone-600 mt-1">For functional changes or updates that do not require new visual layouts.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route B • Staged Handoff</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">Ad Hoc Design → Designer then Developer</p>
              <p class="text-xs text-stone-600 mt-1">For requests needing layout design before a developer builds the change.</p>
            </div>
          `,svgHtml:`
            <svg viewBox="0 0 480 170" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="54" width="122" height="62" rx="8" fill="#1C1C1E"/>
              <text x="22" y="76" fill="#A3B8A8" font-family="sans-serif" font-size="7" font-weight="700">ACTIVE SOURCE</text>
              <text x="22" y="92" fill="#FFFFFF" font-family="sans-serif" font-size="9.5" font-weight="700">Account Managers</text>
              <text x="22" y="105" fill="#A8A29E" font-family="sans-serif" font-size="7">Client website requests</text>
              <line x1="132" y1="85" x2="174" y2="85" stroke="#1C1C1E" stroke-width="1.8"/>
              <rect x="174" y="61" width="96" height="48" rx="8" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.4"/>
              <text x="188" y="81" fill="#3B4F41" font-family="sans-serif" font-size="7.5" font-weight="700">MY ASSESSMENT</text>
              <text x="188" y="94" fill="#1C1C1E" font-family="sans-serif" font-size="7">Needs design first?</text>
              <path d="M270 74C295 74 295 42 320 42" stroke="#1C1C1E" stroke-width="1.6"/>
              <path d="M270 96C295 96 295 128 320 128" stroke="#4D6654" stroke-width="1.6"/>
              <rect x="320" y="16" width="150" height="52" rx="7" fill="#FFFFFF" stroke="#1C1C1E" stroke-width="1.4"/>
              <rect x="330" y="24" width="54" height="10" rx="3" fill="#1C1C1E"/>
              <text x="335" y="31.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE A</text>
              <text x="330" y="47" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">Direct Development</text>
              <text x="330" y="59" fill="#78716C" font-family="sans-serif" font-size="7">Assigned straight to Developer</text>
              <rect x="320" y="102" width="150" height="52" rx="7" fill="#FFFFFF" stroke="#4D6654" stroke-width="1.4"/>
              <rect x="330" y="110" width="54" height="10" rx="3" fill="#4D6654"/>
              <text x="335" y="117.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE B</text>
              <text x="330" y="133" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">Ad Hoc Design → Dev</text>
              <text x="330" y="145" fill="#78716C" font-family="sans-serif" font-size="7">Designer first, then Developer</text>
            </svg>
          `},seo:{pill:"Source: SEO Specialists",copy:"For SEO website tasks, I assign code-related changes to a developer, while I can assist with WordPress metadata or copy changes when hard coding is not required.",cardsHtml:`
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route A • Technical SEO</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">Code-Related Changes → Web Developer</p>
              <p class="text-xs text-stone-600 mt-1">Template edits, schema code, or technical fixes requiring development.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route B • Non-Coded CMS</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">WordPress Metadata / Copy → I Can Assist</p>
              <p class="text-xs text-stone-600 mt-1">When hard coding is not required, I can step in to help update WordPress directly.</p>
            </div>
          `,svgHtml:`
            <svg viewBox="0 0 480 170" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="54" width="122" height="62" rx="8" fill="#1C1C1E"/>
              <text x="22" y="76" fill="#A3B8A8" font-family="sans-serif" font-size="7" font-weight="700">ACTIVE SOURCE</text>
              <text x="22" y="92" fill="#FFFFFF" font-family="sans-serif" font-size="9.5" font-weight="700">SEO Specialists</text>
              <text x="22" y="105" fill="#A8A29E" font-family="sans-serif" font-size="7">SEO website tasks</text>
              <line x1="132" y1="85" x2="174" y2="85" stroke="#1C1C1E" stroke-width="1.8"/>
              <rect x="174" y="61" width="96" height="48" rx="8" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.4"/>
              <text x="188" y="81" fill="#3B4F41" font-family="sans-serif" font-size="7.5" font-weight="700">MY ASSESSMENT</text>
              <text x="185" y="94" fill="#1C1C1E" font-family="sans-serif" font-size="7">Requires hard coding?</text>
              <path d="M270 74C295 74 295 42 320 42" stroke="#1C1C1E" stroke-width="1.6"/>
              <path d="M270 96C295 96 295 128 320 128" stroke="#4D6654" stroke-width="1.6"/>
              <rect x="320" y="16" width="150" height="52" rx="7" fill="#FFFFFF" stroke="#1C1C1E" stroke-width="1.4"/>
              <rect x="330" y="24" width="54" height="10" rx="3" fill="#1C1C1E"/>
              <text x="335" y="31.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE A</text>
              <text x="330" y="47" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">Web Developer</text>
              <text x="330" y="59" fill="#78716C" font-family="sans-serif" font-size="7">Code-related SEO changes</text>
              <rect x="320" y="102" width="150" height="52" rx="7" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.4"/>
              <rect x="330" y="110" width="54" height="10" rx="3" fill="#4D6654"/>
              <text x="335" y="117.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE B</text>
              <text x="330" y="133" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">I Can Assist (WP)</text>
              <text x="330" y="145" fill="#3B4F41" font-family="sans-serif" font-size="7">Metadata &amp; copy (no hard code)</text>
            </svg>
          `},sweeps:{pill:"Source: Daily Website Sweeps",copy:"During my morning website checks, I flag issues or improvements early—routing UI/UX refinements to a designer and technical errors to a developer.",cardsHtml:`
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route A • Visual Polish</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">UI/UX Refinement → Web Designer</p>
              <p class="text-xs text-stone-600 mt-1">Layout improvements or visual spacing refinements identified during my sweep.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-white border border-stone-200">
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">Route B • Bug Resolution</span>
              <p class="font-serif font-bold text-sm text-[#1C1C1E] mt-0.5">Website Error / Technical Issue → Developer</p>
              <p class="text-xs text-stone-600 mt-1">Functional errors or broken elements routed immediately for fixing.</p>
            </div>
          `,svgHtml:`
            <svg viewBox="0 0 480 170" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="54" width="122" height="62" rx="8" fill="#1C1C1E"/>
              <text x="22" y="76" fill="#A3B8A8" font-family="sans-serif" font-size="7" font-weight="700">ACTIVE SOURCE</text>
              <text x="22" y="92" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="700">Daily Website Sweeps</text>
              <text x="22" y="105" fill="#A8A29E" font-family="sans-serif" font-size="7">My morning site checks</text>
              <line x1="132" y1="85" x2="174" y2="85" stroke="#1C1C1E" stroke-width="1.8"/>
              <rect x="174" y="61" width="96" height="48" rx="8" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.4"/>
              <text x="188" y="81" fill="#3B4F41" font-family="sans-serif" font-size="7.5" font-weight="700">MY ASSESSMENT</text>
              <text x="188" y="94" fill="#1C1C1E" font-family="sans-serif" font-size="7">Visual or technical?</text>
              <path d="M270 74C295 74 295 42 320 42" stroke="#4D6654" stroke-width="1.6"/>
              <path d="M270 96C295 96 295 128 320 128" stroke="#1C1C1E" stroke-width="1.6"/>
              <rect x="320" y="16" width="150" height="52" rx="7" fill="#FFFFFF" stroke="#4D6654" stroke-width="1.4"/>
              <rect x="330" y="24" width="54" height="10" rx="3" fill="#4D6654"/>
              <text x="335" y="31.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE A</text>
              <text x="330" y="47" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">UI/UX → Designer</text>
              <text x="330" y="59" fill="#78716C" font-family="sans-serif" font-size="7">Interface &amp; visual refinements</text>
              <rect x="320" y="102" width="150" height="52" rx="7" fill="#FFFFFF" stroke="#1C1C1E" stroke-width="1.4"/>
              <rect x="330" y="110" width="54" height="10" rx="3" fill="#1C1C1E"/>
              <text x="335" y="117.5" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700">ROUTE B</text>
              <text x="330" y="133" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">Error → Developer</text>
              <text x="330" y="145" fill="#78716C" font-family="sans-serif" font-size="7">Website bugs &amp; technical fixes</text>
            </svg>
          `}},f=Array.from(document.querySelectorAll("[data-route-source]")),p=document.getElementById("route-flow-panel"),E=document.getElementById("route-active-pill"),A=document.getElementById("route-svg-container"),k=document.getElementById("route-cards-grid"),S=document.getElementById("route-first-person-copy"),y=n=>{const i=N[n];if(!i)return;f.forEach((e,s)=>{const a=e.getAttribute("data-route-source")===n;e.setAttribute("aria-selected",a?"true":"false");const o=`SOURCE 0${s+1}`,r=e.querySelector("h3")?.textContent||"",l=e.querySelector("p")?.textContent||"";a?(e.className="w-full text-left p-4 rounded-xl bg-[#1C1C1E] text-white border border-[#1C1C1E] shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]",e.innerHTML=`
              <div class="flex items-center justify-between">
                <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-300">${o}</span>
                <span class="text-xs font-bold">● Active</span>
              </div>
              <h3 class="font-serif text-lg font-bold mt-1">${r}</h3>
              <p class="text-xs text-stone-300 mt-0.5">${l}</p>
            `):(e.className="w-full text-left p-4 rounded-xl bg-[#FAF9F6] text-[#1C1C1E] border border-stone-200 hover:border-stone-400 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]",e.innerHTML=`
              <div class="flex items-center justify-between">
                <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700">${o}</span>
                <span class="text-xs text-stone-400">Select →</span>
              </div>
              <h3 class="font-serif text-lg font-bold mt-1">${r}</h3>
              <p class="text-xs text-stone-600 mt-0.5">${l}</p>
            `)});const t=()=>{E&&(E.textContent=i.pill),A&&(A.innerHTML=i.svgHtml),k&&(k.innerHTML=i.cardsHtml),S&&(S.textContent=i.copy)};F.matches||!p?t():(p.style.opacity="0.35",window.setTimeout(()=>{t(),p.style.opacity="1"},90))};f.forEach((n,i)=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-route-source");t&&y(t)}),n.addEventListener("keydown",t=>{if(t.key==="ArrowDown"||t.key==="ArrowRight"){t.preventDefault();const e=f[(i+1)%f.length];e.focus();const s=e.getAttribute("data-route-source");s&&y(s)}else if(t.key==="ArrowUp"||t.key==="ArrowLeft"){t.preventDefault();const e=f[(i-1+f.length)%f.length];e.focus();const s=e.getAttribute("data-route-source");s&&y(s)}})});const L={"urgent-external":{badge:"Immediate Priority Action",title:"Urgent External Client Request",f1:{val:"External Client",pct:"100%",note:"Client-facing impact takes precedence."},f2:{val:"Time-Critical",pct:"100%",note:"Tied to a live issue or fixed event date."},f3:{val:"Immediate Turnaround",pct:"95%",note:"High visibility; requires active updates."},f4:{val:"Reallocate Capacity",pct:"90%",note:"I shift available developers or designers immediately."},f5:{val:"Reprioritize Queue",pct:"90%",note:"Flexible and internal tasks pause temporarily."},summary:"How I handle it: I assess who on the team can pivot immediately, adjust timelines on flexible or internal tasks, and keep the Account Manager updated on our progress."},"routine-external":{badge:"Scheduled Sprint Queue",title:"Routine External Client Request",f1:{val:"External Client",pct:"85%",note:"Active client account deliverable."},f2:{val:"Standard Window",pct:"60%",note:"Important, but not a live blocker."},f3:{val:"Agreed Turnaround",pct:"75%",note:"Client expects steady, reliable progress."},f4:{val:"Match Open Slot",pct:"70%",note:"Assigned to a specialist with upcoming bandwidth."},f5:{val:"Balanced Alongside Queue",pct:"65%",note:"Sequenced without disrupting active launches."},summary:"How I handle it: I validate the scope and slot the task into our active schedule based on current developer or designer workload so we meet the client's expected window."},"internal-task":{badge:"Bandwidth-Aligned Scheduling",title:"Internal Account Task",f1:{val:"Internal Account",pct:"45%",note:"Internal project rather than external client."},f2:{val:"Moderately Flexible",pct:"45%",note:"Can yield when urgent client requests arrive."},f3:{val:"Internal Alignment",pct:"50%",note:"Direct internal stakeholder coordination."},f4:{val:"Assign Between Sprints",pct:"55%",note:"Scheduled when team members finish client priority tasks."},f5:{val:"Yields to Urgent Client Work",pct:"40%",note:"Can be paused if an urgent external launch arises."},summary:"How I handle it: I keep internal tasks moving during normal capacity windows, while keeping them flexible enough to pause if an urgent external client request needs the team."},"flexible-client":{badge:"Planned Backlog Sequence",title:"Flexible Client Request",f1:{val:"External Client",pct:"75%",note:"Client enhancement or non-urgent update."},f2:{val:"Flexible Window",pct:"35%",note:"No immediate hard deadline constraint."},f3:{val:"Clear Communication",pct:"60%",note:"Client values visibility on when work will start."},f4:{val:"Best-Fit Specialist",pct:"80%",note:"Allows waiting for the ideal designer or developer."},f5:{val:"Zero Disruption",pct:"35%",note:"Slotted cleanly after higher-urgency commitments."},summary:"How I handle it: Because the timeline is flexible, I can pair the task with the best-suited team member once they wrap up higher-urgency deliverables."}},d=Array.from(document.querySelectorAll("[data-prio-tab]")),m=document.getElementById("prio-detail-panel"),D=document.getElementById("prio-badge"),B=document.getElementById("prio-title"),I=document.getElementById("prio-decision-summary"),C=n=>{const i=L[n];if(!i)return;d.forEach((e,s)=>{const a=e.getAttribute("data-prio-tab")===n;e.setAttribute("aria-selected",a?"true":"false");const o=`SCENARIO 0${s+1}`,r=e.querySelector("h3")?.textContent||"",l=e.querySelector("p")?.textContent||"";a?(e.className="text-left p-4 rounded-xl bg-[#1C1C1E] text-white border border-[#1C1C1E] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]",e.innerHTML=`
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-300 block">${o}</span>
              <h3 class="font-serif font-bold text-base mt-1">${r}</h3>
              <p class="text-xs text-stone-300 mt-1">${l}</p>
            `):(e.className="text-left p-4 rounded-xl bg-[#FAF9F6] text-[#1C1C1E] border border-stone-200 hover:border-stone-400 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]",e.innerHTML=`
              <span class="font-sans text-[11px] font-semibold uppercase tracking-wide text-sage-700 block">${o}</span>
              <h3 class="font-serif font-bold text-base mt-1">${r}</h3>
              <p class="text-xs text-stone-600 mt-1">${l}</p>
            `)});const t=()=>{D&&(D.textContent=i.badge),B&&(B.textContent=i.title),I&&(I.textContent=i.summary),[i.f1,i.f2,i.f3,i.f4,i.f5].forEach((s,a)=>{const o=a+1,r=document.getElementById(`prio-f${o}-val`),l=document.getElementById(`prio-f${o}-bar`),U=document.getElementById(`prio-f${o}-note`);r&&(r.textContent=s.val),l&&(l.style.width=s.pct),U&&(U.textContent=s.note)})};F.matches||!m?t():(m.style.opacity="0.35",window.setTimeout(()=>{t(),m.style.opacity="1"},90))};d.forEach((n,i)=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-prio-tab");t&&C(t)}),n.addEventListener("keydown",t=>{if(t.key==="ArrowRight"||t.key==="ArrowDown"){t.preventDefault();const e=d[(i+1)%d.length];e.focus();const s=e.getAttribute("data-prio-tab");s&&C(s)}else if(t.key==="ArrowLeft"||t.key==="ArrowUp"){t.preventDefault();const e=d[(i-1+d.length)%d.length];e.focus();const s=e.getAttribute("data-prio-tab");s&&C(s)}})});const q={dev:{rationale:"Assignment Decision: For a Development task, I assign Web Developer A—matching code requirements with open bandwidth while protecting Web Developer B's active revamp milestone.",roles:{"dev-open":{highlighted:!0,badgeText:"Best Match ✓",badgeClass:"px-2.5 py-0.5 rounded-full bg-[#1C1C1E] text-white font-sans text-[11px] font-semibold",noteText:"Has open capacity and the technical skillset for code-level changes."},"dev-busy":{highlighted:!1,badgeText:"At Capacity",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-700 font-sans text-[11px] font-semibold",noteText:"Skilled for the task, but currently committed to a major revamp milestone."},designer:{highlighted:!1,badgeText:"Design Role",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"Not assigned for pure code tasks unless visual layout work is needed first."},"pm-assist":{highlighted:!1,badgeText:"Requires Code",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"Because hard coding is required, I route this to a developer rather than handling it myself."}}},uiux:{rationale:"Assignment Decision: For a UI/UX Refinement, I assign our Web Designer first to craft the visual improvement before any development handoff takes place.",roles:{"dev-open":{highlighted:!1,badgeText:"Staged Next",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-700 font-sans text-[11px] font-semibold",noteText:"Will implement the layout only after the designer completes the UI refinement."},"dev-busy":{highlighted:!1,badgeText:"At Capacity",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"Remains focused on the active website revamp."},designer:{highlighted:!0,badgeText:"Best Match ✓",badgeClass:"px-2.5 py-0.5 rounded-full bg-sage-700 text-white font-sans text-[11px] font-semibold",noteText:"Available for ad hoc UI polish and directly suited for layout refinement."},"pm-assist":{highlighted:!1,badgeText:"PM Review",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"I brief the designer on the visual issue spotted during my sweep or client review."}}},wp:{rationale:"Assignment Decision: For a non-coded WordPress metadata or copy update, I can step in and assist directly—or route to Web Developer A if template changes are involved.",roles:{"dev-open":{highlighted:!0,badgeText:"Backup / Code",badgeClass:"px-2.5 py-0.5 rounded-full bg-sage-100 border border-sage-200 text-sage-800 font-sans text-[11px] font-semibold",noteText:"Available if the WordPress update touches custom template code."},"dev-busy":{highlighted:!1,badgeText:"Protected",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"Uninterrupted so their full revamp stays on track."},designer:{highlighted:!1,badgeText:"Not Required",badgeClass:"px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-sans text-[11px] font-semibold",noteText:"No visual design work needed for metadata or copy updates."},"pm-assist":{highlighted:!0,badgeText:"Direct Assist ✓",badgeClass:"px-2.5 py-0.5 rounded-full bg-[#1C1C1E] text-white font-sans text-[11px] font-semibold",noteText:"When hard coding is not required, I can assist directly with WordPress metadata or copy changes."}}}},c=Array.from(document.querySelectorAll("[data-task-type]")),H=Array.from(document.querySelectorAll("[data-role-card]")),T=document.getElementById("resource-rationale-text"),b=n=>{const i=q[n];i&&(c.forEach(t=>{const e=t.getAttribute("data-task-type")===n;t.setAttribute("aria-selected",e?"true":"false"),t.className=e?"px-3.5 py-2 rounded-full bg-[#1C1C1E] text-white font-sans text-xs font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]":"px-3.5 py-2 rounded-full bg-[#FAF9F6] border border-stone-200 text-stone-700 hover:border-stone-400 font-sans text-xs font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]"}),H.forEach(t=>{const e=t.getAttribute("data-role-card")||"",s=i.roles[e];if(!s)return;t.className=s.highlighted?"p-5 rounded-xl bg-[#FAF9F6] border-2 border-[#1C1C1E] shadow-xs transition-all flex flex-col justify-between space-y-4 opacity-100":"p-5 rounded-xl bg-[#FAF9F6] border border-stone-200 opacity-65 transition-all flex flex-col justify-between space-y-4";const a=t.querySelector("[data-suitability-badge]"),o=t.querySelector("[data-suitability-note]");a&&(a.className=s.badgeClass,a.textContent=s.badgeText),o&&(o.textContent=s.noteText,o.className=s.highlighted?"text-[11px] text-[#1C1C1E] font-medium pt-2 border-t border-stone-200/80":"text-[11px] text-stone-500 pt-2 border-t border-stone-200/80")}),T&&(T.textContent=i.rationale))};c.forEach((n,i)=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-task-type");t&&b(t)}),n.addEventListener("keydown",t=>{if(t.key==="ArrowRight"||t.key==="ArrowDown"){t.preventDefault();const e=c[(i+1)%c.length];e.focus();const s=e.getAttribute("data-task-type");s&&b(s)}else if(t.key==="ArrowLeft"||t.key==="ArrowUp"){t.preventDefault();const e=c[(i-1+c.length)%c.length];e.focus();const s=e.getAttribute("data-task-type");s&&b(s)}})});const x=["before","decision","sprint"],W={before:{modeBadge:"Stage 1: Distributed Across Separate Accounts",captionLabel:"Stage 1 • Before the Urgent Request",captionText:"Our five developers were distributed across separate client accounts, each progressing through their scheduled website tasks.",devs:[{status:"Standard Queue",statusClass:"px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-sans text-[10px] font-semibold",assignment:"Assigned: Account Alpha",cardBorder:"border-stone-200",avatarClass:"bg-[#1C1C1E] text-white"},{status:"Standard Queue",statusClass:"px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-sans text-[10px] font-semibold",assignment:"Assigned: Account Beta",cardBorder:"border-stone-200",avatarClass:"bg-[#1C1C1E] text-white"},{status:"Standard Queue",statusClass:"px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-sans text-[10px] font-semibold",assignment:"Assigned: Account Gamma",cardBorder:"border-stone-200",avatarClass:"bg-[#1C1C1E] text-white"},{status:"Standard Queue",statusClass:"px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-sans text-[10px] font-semibold",assignment:"Assigned: Account Delta",cardBorder:"border-stone-200",avatarClass:"bg-[#1C1C1E] text-white"},{status:"Standard Queue",statusClass:"px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-sans text-[10px] font-semibold",assignment:"Assigned: Account Epsilon",cardBorder:"border-stone-200",avatarClass:"bg-[#1C1C1E] text-white"}],svgHtml:`
            <svg viewBox="0 0 520 155" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="20" fill="#78716C" font-family="sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.05em">BEFORE: NORMAL MULTI-ACCOUNT DISTRIBUTION</text>
              <rect x="16" y="34" width="90" height="104" rx="6" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2"/>
              <circle cx="61" cy="62" r="13" fill="#1C1C1E"/><text x="54" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="7.5" font-weight="700">D1</text>
              <text x="27" y="96" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700">Account Alpha</text>
              <text x="29" y="109" fill="#78716C" font-family="sans-serif" font-size="6.8">Ongoing Tasks</text>
              <rect x="116" y="34" width="90" height="104" rx="6" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2"/>
              <circle cx="161" cy="62" r="13" fill="#1C1C1E"/><text x="154" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="7.5" font-weight="700">D2</text>
              <text x="129" y="96" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700">Account Beta</text>
              <text x="129" y="109" fill="#78716C" font-family="sans-serif" font-size="6.8">Ongoing Tasks</text>
              <rect x="216" y="34" width="90" height="104" rx="6" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2"/>
              <circle cx="261" cy="62" r="13" fill="#1C1C1E"/><text x="254" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="7.5" font-weight="700">D3</text>
              <text x="224" y="96" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700">Account Gamma</text>
              <text x="229" y="109" fill="#78716C" font-family="sans-serif" font-size="6.8">Ongoing Tasks</text>
              <rect x="316" y="34" width="90" height="104" rx="6" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2"/>
              <circle cx="361" cy="62" r="13" fill="#1C1C1E"/><text x="354" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="7.5" font-weight="700">D4</text>
              <text x="328" y="96" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700">Account Delta</text>
              <text x="329" y="109" fill="#78716C" font-family="sans-serif" font-size="6.8">Ongoing Tasks</text>
              <rect x="416" y="34" width="88" height="104" rx="6" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2"/>
              <circle cx="460" cy="62" r="13" fill="#1C1C1E"/><text x="453" y="65" fill="#FFFFFF" font-family="sans-serif" font-size="7.5" font-weight="700">D5</text>
              <text x="424" y="96" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700">Account Epsilon</text>
              <text x="428" y="109" fill="#78716C" font-family="sans-serif" font-size="6.8">Ongoing Tasks</text>
            </svg>
          `},decision:{modeBadge:"Stage 2: Redirecting All 5 Developers & Dividing Work",captionLabel:"Stage 2 • My Reprioritization Decision",captionText:"I redirected all five developers to the urgent event website, divided the development work across them, and adjusted priorities on other projects.",devs:[{status:"Redirected",statusClass:"px-2 py-0.5 rounded bg-sage-50 border border-sage-200 text-sage-800 font-sans text-[10px] font-semibold",assignment:"Slice 1: Core Layouts",cardBorder:"border-sage-600",avatarClass:"bg-sage-700 text-white"},{status:"Redirected",statusClass:"px-2 py-0.5 rounded bg-sage-50 border border-sage-200 text-sage-800 font-sans text-[10px] font-semibold",assignment:"Slice 2: Key Templates",cardBorder:"border-sage-600",avatarClass:"bg-sage-700 text-white"},{status:"Redirected",statusClass:"px-2 py-0.5 rounded bg-sage-50 border border-sage-200 text-sage-800 font-sans text-[10px] font-semibold",assignment:"Slice 3: Inner Pages",cardBorder:"border-sage-600",avatarClass:"bg-sage-700 text-white"},{status:"Redirected",statusClass:"px-2 py-0.5 rounded bg-sage-50 border border-sage-200 text-sage-800 font-sans text-[10px] font-semibold",assignment:"Slice 4: Forms & Blocks",cardBorder:"border-sage-600",avatarClass:"bg-sage-700 text-white"},{status:"Redirected",statusClass:"px-2 py-0.5 rounded bg-sage-50 border border-sage-200 text-sage-800 font-sans text-[10px] font-semibold",assignment:"Slice 5: Responsive UI",cardBorder:"border-sage-600",avatarClass:"bg-sage-700 text-white"}],svgHtml:`
            <svg viewBox="0 0 520 155" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="20" fill="#3B4F41" font-family="sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.05em">DECISION: REDIRECTING ALL 5 DEVELOPERS &amp; ADJUSTING OTHER QUEUES</text>
              <!-- Left: Other Accounts Reprioritized -->
              <rect x="16" y="36" width="136" height="102" rx="7" fill="#FAF9F6" stroke="#D6D3CD" stroke-width="1.2" stroke-dasharray="3 2"/>
              <text x="28" y="58" fill="#78716C" font-family="sans-serif" font-size="8" font-weight="700">Other Client Projects</text>
              <text x="28" y="74" fill="#78716C" font-family="sans-serif" font-size="7">Priorities &amp; schedules adjusted</text>
              <rect x="28" y="88" width="110" height="18" rx="4" fill="#FFFFFF" stroke="#E5E4DF"/>
              <text x="38" y="99.5" fill="#57534E" font-family="sans-serif" font-size="6.8" font-weight="600">Temporarily Reprioritized</text>

              <!-- Center: PM Work Division Gate -->
              <path d="M152 87H190" stroke="#4D6654" stroke-width="1.6" stroke-dasharray="3 2"/>
              <rect x="190" y="42" width="134" height="90" rx="8" fill="#1C1C1E"/>
              <text x="204" y="62" fill="#A3B8A8" font-family="sans-serif" font-size="7" font-weight="700">MY PM DECISION</text>
              <text x="204" y="79" fill="#FFFFFF" font-family="sans-serif" font-size="9" font-weight="700">Divide Build Across 5</text>
              <text x="204" y="94" fill="#A8A29E" font-family="sans-serif" font-size="7">Split pages &amp; sections</text>
              <text x="204" y="106" fill="#A8A29E" font-family="sans-serif" font-size="7">for parallel execution</text>

              <!-- Right: Converging 5 Developers into Urgent Event Build -->
              <path d="M324 87H362" stroke="#1C1C1E" stroke-width="1.8"/>
              <rect x="362" y="36" width="142" height="102" rx="8" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.5"/>
              <text x="376" y="56" fill="#3B4F41" font-family="sans-serif" font-size="8" font-weight="700">Urgent Event Website</text>
              <circle cx="384" cy="82" r="10" fill="#1C1C1E"/><text x="379" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="6.5" font-weight="700">D1</text>
              <circle cx="408" cy="82" r="10" fill="#1C1C1E"/><text x="403" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="6.5" font-weight="700">D2</text>
              <circle cx="432" cy="82" r="10" fill="#1C1C1E"/><text x="427" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="6.5" font-weight="700">D3</text>
              <circle cx="456" cy="82" r="10" fill="#1C1C1E"/><text x="451" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="6.5" font-weight="700">D4</text>
              <circle cx="480" cy="82" r="10" fill="#1C1C1E"/><text x="475" y="85" fill="#FFFFFF" font-family="sans-serif" font-size="6.5" font-weight="700">D5</text>
              <text x="376" y="114" fill="#1C1C1E" font-family="sans-serif" font-size="7" font-weight="600">All 5 Developers Assigned</text>
            </svg>
          `},sprint:{modeBadge:"Stage 3: Coordinated 5-Dev Sprint with QA & SEO",captionLabel:"Stage 3 • Coordinated Accelerated Sprint",captionText:"With all five developers building divided sections of the urgent website in parallel, I coordinated directly with QA and SEO throughout the accelerated delivery effort.",devs:[{status:"In Sprint",statusClass:"px-2 py-0.5 rounded bg-[#1C1C1E] text-white font-sans text-[10px] font-semibold",assignment:"Event Site → QA & SEO",cardBorder:"border-[#1C1C1E]",avatarClass:"bg-[#1C1C1E] text-white"},{status:"In Sprint",statusClass:"px-2 py-0.5 rounded bg-[#1C1C1E] text-white font-sans text-[10px] font-semibold",assignment:"Event Site → QA & SEO",cardBorder:"border-[#1C1C1E]",avatarClass:"bg-[#1C1C1E] text-white"},{status:"In Sprint",statusClass:"px-2 py-0.5 rounded bg-[#1C1C1E] text-white font-sans text-[10px] font-semibold",assignment:"Event Site → QA & SEO",cardBorder:"border-[#1C1C1E]",avatarClass:"bg-[#1C1C1E] text-white"},{status:"In Sprint",statusClass:"px-2 py-0.5 rounded bg-[#1C1C1E] text-white font-sans text-[10px] font-semibold",assignment:"Event Site → QA & SEO",cardBorder:"border-[#1C1C1E]",avatarClass:"bg-[#1C1C1E] text-white"},{status:"In Sprint",statusClass:"px-2 py-0.5 rounded bg-[#1C1C1E] text-white font-sans text-[10px] font-semibold",assignment:"Event Site → QA & SEO",cardBorder:"border-[#1C1C1E]",avatarClass:"bg-[#1C1C1E] text-white"}],svgHtml:`
            <svg viewBox="0 0 520 155" class="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="20" fill="#1C1C1E" font-family="sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.05em">SPRINT: 5 DEVELOPERS BUILDING IN PARALLEL + CONTINUOUS QA &amp; SEO COORDINATION</text>
              <!-- Unified Urgent Website Build Pod -->
              <rect x="16" y="34" width="276" height="104" rx="8" fill="#1C1C1E"/>
              <text x="30" y="54" fill="#A3B8A8" font-family="sans-serif" font-size="7.5" font-weight="700">URGENT EVENT WEBSITE SPRINT POD</text>
              <rect x="30" y="66" width="44" height="54" rx="5" fill="#292524" stroke="#4D6654"/>
              <text x="45" y="89" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700">D1</text>
              <text x="37" y="106" fill="#A8A29E" font-family="sans-serif" font-size="6">Core UI</text>
              <rect x="81" y="66" width="44" height="54" rx="5" fill="#292524" stroke="#4D6654"/>
              <text x="96" y="89" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700">D2</text>
              <text x="86" y="106" fill="#A8A29E" font-family="sans-serif" font-size="6">Layouts</text>
              <rect x="132" y="66" width="44" height="54" rx="5" fill="#292524" stroke="#4D6654"/>
              <text x="147" y="89" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700">D3</text>
              <text x="142" y="106" fill="#A8A29E" font-family="sans-serif" font-size="6">Pages</text>
              <rect x="183" y="66" width="44" height="54" rx="5" fill="#292524" stroke="#4D6654"/>
              <text x="198" y="89" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700">D4</text>
              <text x="191" y="106" fill="#A8A29E" font-family="sans-serif" font-size="6">Blocks</text>
              <rect x="234" y="66" width="44" height="54" rx="5" fill="#292524" stroke="#4D6654"/>
              <text x="249" y="89" fill="#FFFFFF" font-family="sans-serif" font-size="8" font-weight="700">D5</text>
              <text x="242" y="106" fill="#A8A29E" font-family="sans-serif" font-size="6">Mobile</text>

              <!-- Connected QA & SEO Verification Nodes -->
              <path d="M292 68H342" stroke="#1C1C1E" stroke-width="1.6"/>
              <path d="M292 108H342" stroke="#4D6654" stroke-width="1.6"/>

              <rect x="342" y="36" width="162" height="46" rx="7" fill="#FAF9F6" stroke="#1C1C1E" stroke-width="1.4"/>
              <text x="356" y="56" fill="#1C1C1E" font-family="sans-serif" font-size="8.5" font-weight="700">Quality Assurance (QA)</text>
              <text x="356" y="70" fill="#78716C" font-family="sans-serif" font-size="7">Coordinated checks as sections finish</text>

              <rect x="342" y="92" width="162" height="46" rx="7" fill="#E6EDE8" stroke="#4D6654" stroke-width="1.4"/>
              <text x="356" y="112" fill="#3B4F41" font-family="sans-serif" font-size="8.5" font-weight="700">SEO Specialist Review</text>
              <text x="356" y="126" fill="#3B4F41" font-family="sans-serif" font-size="7">On-page SEO &amp; readiness alignment</text>
            </svg>
          `}},g=Array.from(document.querySelectorAll("[data-shift-stage]")),P=Array.from(document.querySelectorAll("[data-dev-node]")),z=document.getElementById("shift-mode-badge"),R=document.getElementById("shift-svg-stage"),O=document.getElementById("shift-caption-label"),M=document.getElementById("shift-caption-text"),w=document.getElementById("shift-prev-btn"),v=document.getElementById("shift-next-btn");let u=0;const h=n=>{const i=W[n];i&&(u=x.indexOf(n),w&&(w.disabled=u===0),v&&(v.disabled=u===x.length-1),g.forEach(t=>{const e=t.getAttribute("data-shift-stage")===n;t.setAttribute("aria-selected",e?"true":"false"),t.className=e?"px-4 py-2 rounded-full bg-[#1C1C1E] text-white font-sans text-xs font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]":"px-4 py-2 rounded-full text-stone-600 hover:text-[#1C1C1E] font-sans text-xs font-medium transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1E]"}),P.forEach((t,e)=>{const s=i.devs[e];if(!s)return;t.className=`p-3.5 rounded-xl bg-white border ${s.cardBorder} shadow-2xs transition-all duration-300 flex flex-col justify-between space-y-2`;const a=t.querySelector("[data-dev-avatar]"),o=t.querySelector("[data-dev-status]"),r=t.querySelector("[data-dev-assignment]");a&&(a.className=`w-7 h-7 rounded-full ${s.avatarClass} font-sans text-[11px] font-bold flex items-center justify-center transition-colors duration-300`),o&&(o.className=s.statusClass,o.textContent=s.status),r&&(r.textContent=s.assignment)}),z&&(z.textContent=i.modeBadge),R&&(R.innerHTML=i.svgHtml),O&&(O.textContent=i.captionLabel),M&&(M.textContent=i.captionText))};g.forEach((n,i)=>{n.addEventListener("click",()=>{const t=n.getAttribute("data-shift-stage");t&&h(t)}),n.addEventListener("keydown",t=>{if(t.key==="ArrowRight"||t.key==="ArrowDown"){t.preventDefault();const e=(i+1)%g.length;g[e].focus(),h(x[e])}else if(t.key==="ArrowLeft"||t.key==="ArrowUp"){t.preventDefault();const e=(i-1+g.length)%g.length;g[e].focus(),h(x[e])}})}),w?.addEventListener("click",()=>{u>0&&h(x[u-1])}),v?.addEventListener("click",()=>{u<x.length-1&&h(x[u+1])})})();
