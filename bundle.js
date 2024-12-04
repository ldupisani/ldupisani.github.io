import*as e from"three";import*as t from"three/addons/lines/Line2.js";import*as n from"three/addons/lines/LineMaterial.js";import*as o from"three/addons/lines/LineGeometry.js";var s={d:(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},i={};s.r(i),s.d(i,{EDIT_INPUT_SETTINGS:()=>j,EDIT_PATTERN:()=>K,PRACTICE:()=>$,PRACTICE_PAUSED:()=>G});const a=(e=>{var t={};return s.d(t,e),t})({AmbientLight:()=>e.AmbientLight,Audio:()=>e.Audio,AudioListener:()=>e.AudioListener,AudioLoader:()=>e.AudioLoader,BoxGeometry:()=>e.BoxGeometry,Color:()=>e.Color,DoubleSide:()=>e.DoubleSide,Fog:()=>e.Fog,Mesh:()=>e.Mesh,MeshBasicMaterial:()=>e.MeshBasicMaterial,MeshLambertMaterial:()=>e.MeshLambertMaterial,PerspectiveCamera:()=>e.PerspectiveCamera,Raycaster:()=>e.Raycaster,Scene:()=>e.Scene,SpotLight:()=>e.SpotLight,Vector2:()=>e.Vector2,WebGLRenderer:()=>e.WebGLRenderer}),l={CRASH_LEFT:{label:"Crash Left",lane:1,note:49},HAT_OPEN:{label:"Hat Open",lane:2,note:46},HAT_CLOSED:{label:"Hat Closed",lane:2,note:42},HAT_PEDAL:{label:"Hat Pedal",lane:2,note:44},SNARE_CENTER:{label:"Snare Center",lane:3,note:38},SNARE_RIM:{label:"Snare Rim",lane:3,note:40},TOM_ONE:{label:"Tom High",lane:4,note:48},TOM_TWO:{label:"Tom Medium",lane:5,note:45},TOM_FLOOR:{label:"Tom Floor",lane:6,note:43},KICK_RIGHT:{label:"Kick",lane:7,note:36},RIDE_EDGE:{label:"Ride Edge",lane:8,note:51}},r={CRASH_LEFT:new a.MeshBasicMaterial({color:39321,side:a.DoubleSide}),HAT_OPEN:new a.MeshBasicMaterial({color:4478361,side:a.DoubleSide}),HAT_CLOSED:new a.MeshBasicMaterial({color:7824896,side:a.DoubleSide}),HAT_PEDAL:new a.MeshBasicMaterial({color:10027008,side:a.DoubleSide}),SNARE_CENTER:new a.MeshBasicMaterial({color:8912896,side:a.DoubleSide}),SNARE_RIM:new a.MeshBasicMaterial({color:34816,side:a.DoubleSide}),TOM_ONE:new a.MeshBasicMaterial({color:7829248,side:a.DoubleSide}),TOM_TWO:new a.MeshBasicMaterial({color:5592456,side:a.DoubleSide}),TOM_FLOOR:new a.MeshBasicMaterial({color:34816,side:a.DoubleSide}),KICK_RIGHT:new a.MeshBasicMaterial({color:8934656,side:a.DoubleSide}),RIDE_EDGE:new a.MeshBasicMaterial({color:30583,side:a.DoubleSide})},c={CRASH_LEFT:new a.MeshLambertMaterial({color:39321,side:a.DoubleSide}),HAT_OPEN:new a.MeshLambertMaterial({color:4478361,side:a.DoubleSide}),HAT_CLOSED:new a.MeshLambertMaterial({color:7824896,side:a.DoubleSide}),HAT_PEDAL:new a.MeshLambertMaterial({color:10027008,side:a.DoubleSide}),SNARE_CENTER:new a.MeshLambertMaterial({color:8912896,side:a.DoubleSide}),SNARE_RIM:new a.MeshLambertMaterial({color:34816,side:a.DoubleSide}),TOM_ONE:new a.MeshLambertMaterial({color:7829248,side:a.DoubleSide}),TOM_TWO:new a.MeshLambertMaterial({color:5592456,side:a.DoubleSide}),TOM_FLOOR:new a.MeshLambertMaterial({color:34816,side:a.DoubleSide}),KICK_RIGHT:new a.MeshLambertMaterial({color:8934656,side:a.DoubleSide}),RIDE_EDGE:new a.MeshLambertMaterial({color:30583,side:a.DoubleSide})};function d(){localStorage.setItem("note_settings",JSON.stringify(u))}let u={...l};!function(){const e=localStorage.getItem("note_settings");e&&(u=JSON.parse(e))}();const m=Object.keys(u).reduce(((e,t)=>{const n=u[t];return e[n.lane]||(e[n.lane]=new Set),e[n.lane].add(t),e}),{}),h=[],p="reset",v="pause",g="edit",b="snap_forwards",E="snap_backwards",f="nudge_forwards",y="nudge_backwards",_="velocity_up",M="velocity_down",T="repeat_note",S="any_note",I="any_key",w="any_controller",L=153,B="pointer_up";function k(e,t,n){switch(e){case L:if(n>0)for(let o of h)o.command===e&&o.label===t&&o.action(t,n);break;case S:if(n>0)for(let o of h)o.command===e&&o.action(t,n);break;default:for(let o of h)o.command===e&&o.action(t,n)}}function O(e,t,n){h.push({command:e,label:t,action:n})}function A(e){document.getElementById("midi").innerHTML=e}let P=!1;function C(e){P=e}function N(e){A("Failed to get MIDI access")}function x(e){const t=e.data[0],n=e.data[1],o=e.data[2];if(153===t)o>0&&(k(S,n,o),k(L,n,o),k(w,n,o))}setInterval((()=>{if(P){const e=P.inputs;let t="";e.forEach((e=>{t+=e.name+"<br/>"})),e.forEach((e=>{e.onmidimessage=x})),""===t&&(t="Attach MIDI drum kit"),A(t)}}),1e3),navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(C,N):A("Web MIDI API is not supported in this browser.");const D={Space:{command:p,lastEvent:""},Escape:{command:v,lastEvent:""},ArrowUp:{command:b,lastEvent:""},ArrowDown:{command:E,lastEvent:""},ArrowRight:{command:f,lastEvent:""},ArrowLeft:{command:y,lastEvent:""},Minus:{command:M,lastEvent:""},Equal:{command:_,lastEvent:""},Period:{command:T,lastEvent:""},KeyC:{command:L,label:"SNARE_RIM",value:75,lastEvent:""},KeyV:{command:L,label:"SNARE_CENTER",value:75,lastEvent:""},KeyQ:{command:L,label:"CRASH_LEFT",value:75,lastEvent:""},KeyW:{command:L,label:"HAT_PEDAL",value:100,lastEvent:""},KeyE:{command:L,label:"HAT_OPEN",value:75,lastEvent:""},KeyR:{command:L,label:"HAT_CLOSED",value:75,lastEvent:""},KeyU:{command:L,label:"TOM_ONE",value:75,lastEvent:""},KeyI:{command:L,label:"TOM_TWO",value:75,lastEvent:""},KeyO:{command:L,label:"TOM_FLOOR",value:75,lastEvent:""},KeyN:{command:L,label:"KICK_RIGHT",value:75,lastEvent:""},KeyP:{command:L,label:"RIDE_EDGE",value:75,lastEvent:""}};function R(){localStorage.setItem("key_settings",JSON.stringify(H))}let H={...D};!function(){const e=localStorage.getItem("key_settings");e&&(H=JSON.parse(e))}(),document.addEventListener("keydown",(e=>{if(e.preventDefault(),k(I,e.code),H[e.code]&&"keydown"!=H[e.code].lastEvent){if(H[e.code].lastEvent="keydown",H[e.code].command===L){const t=u[H[e.code].label].note;t>-1&&k(S,t,H[e.code].value)}const t=H[e.code].label?u[H[e.code].label].note:void 0;(void 0===t||t>-1)&&k(H[e.code].command,t,H[e.code].value)}})),document.addEventListener("keyup",(e=>{H[e.code]&&"keyup"!=H[e.code].lastEvent&&(H[e.code].lastEvent="keyup")}));const F=new a.Vector2;document.addEventListener("mousemove",(e=>{F.x=e.clientX/window.innerWidth*2-1,F.y=-e.clientY/window.innerHeight*2+1})),document.addEventListener("pointerup",(e=>{e.clientY<window.innerHeight-60&&k(B,e.pointerType)})),document.addEventListener("wheel",(e=>{e.deltaY>0?k(f,0,0):k(y,0,0)}));const $="PRACTICE",G="PRACTICE_PAUSED",K="EDIT_PATTERN",j="EDIT_INPUT_SETTINGS";function V(e){const t=1/8;return 2*(.5625-t*e)}const z=(e=>{var t={};return s.d(t,e),t})({Line2:()=>t.Line2});const W=(e=>{var t={};return s.d(t,e),t})({LineMaterial:()=>n.LineMaterial});const U=(e=>{var t={};return s.d(t,e),t})({LineGeometry:()=>o.LineGeometry});const J=new class{constructor(){this._startTime=!1,this._bars=0,this._noteCount=0,this._hitCount=0,this._timeScale=4,this._mode=G}get mode(){return this._mode}set mode(e){this._mode=e}get startTime(){return this._startTime}set startTime(e){this._startTime=e}get bars(){return this._bars}set bars(e){this._bars=e}get noteCount(){return this._noteCount}set noteCount(e){this._noteCount=e,document.getElementById("hitPercentage").innerHTML=`${this.hitPercentage}`}get hitCount(){return this._hitCount}set hitCount(e){this._hitCount=e,document.getElementById("hitPercentage").innerHTML=`${this.hitPercentage}`}get hitPercentage(){return 0===this.noteCount?"":`${Number(this._hitCount/this._noteCount*100).toFixed(2)}%`}get timeScale(){return this._timeScale}get beats(){return this._bars/this._timeScale}set beats(e){this._bars=e*this._timeScale}},X="grooves/eighth";class Y extends HTMLElement{connectedCallback(){this._value=X,this._level=!1}setOptions(){this.innerHTML=`\n      <label for="exerciseSelect">Exercise</label>\n      ${function(e){const t=q();let n="";if(t&&t.length>0){n=`\n        <optgroup label="Custom">\n        ${t.reduce(((e,t,n)=>e+`<option value="__CUSTOM__${n}">${t.name?t.name:`Slot ${n+1}`}</option>`),"")}\n        </optgroup>\n      `}return`\n      <select id="${e}">\n        ${n}\n        <optgroup label="Grooves">\n          <option value="grooves/eighth">Eighth note</option>\n          <option value="grooves/four_to_the_floor">Four to the floor</option>\n          <option value="grooves/shuffle">Shuffle</option>\n          <option value="grooves/sixteenth">Sixteenth note</option>\n          <option value="grooves/twelve_eight">12/8 groove</option>\n          <option value="grooves/twelve_eight_dance">12/8 dance</option>\n          <option value="grooves/twelve_eight_beat_1">12/8 beat 1</option>\n        </optgroup>\n        <optgroup label="Bounces">\n          <option value="bounces/catch_turn">Bounce catch turn</option>\n          <option value="bounces/catch_turn_soft">Bounce catch turn (light)</option>\n          <option value="bounces/triplets">Bounce triplets</option>\n          <option value="bounces/doubles">Bounce doubles</option>\n          <option value="bounces/doubles_reverse">Bounce doubles (reversed)</option>\n        </optgroup>\n        <optgroup label="Cross Stick">\n          <option value="cross_stick/quarters">Cross stick quarters</option>\n          <option value="cross_stick/basic">Cross stick basic</option>\n          <option value="cross_stick/beat_1">Cross stick beat 1</option>\n          <option value="cross_stick/beat_2">Cross stick beat 2</option>\n        </optgroup>\n        <optgroup label="Hats">\n          <option value="hat_openings/eighth_lead_close">8th Hi-hat openings (lead close)</option>\n          <option value="hat_openings/eighth_lead_open">8th Hi-hat openings (lead open)</option>\n          <option value="hat_openings/sixteenth_lead_close">16th Hi-hat openings (lead close)</option>\n          <option value="hat_openings/sixteenth_lead_open">16th Hi-hat openings (lead open)</option>\n          <option value="hat_openings/eighth_beat_1">8th Beat 1</option>\n          <option value="hat_openings/eighth_beat_2">8th Beat 2</option>\n          <option value="hat_openings/sixteenth_bark_1">16th bark 1</option>\n          <option value="hat_openings/sixteenth_bark_2">16th bark 2</option>\n          <option value="hat_openings/sixteenth_bark_3">16th bark 3 (snare)</option>\n          <option value="hat_openings/sixteenth_bark_4">16th bark 4 (snare)</option>\n          <option value="hat_openings/foot_control_1">Foot Control 1</option>\n          <option value="hat_openings/foot_control_2">Foot Control 2</option>\n          <option value="hat_openings/foot_control_3">Foot Control 3</option>\n        </optgroup>\n        <optgroup label="Flams">\n          <option value="flams/flam_basic">Flam Basic</option>\n          <option value="flams/flam_cross">Flam Cross</option>\n        </optgroup>\n        <optgroup label="Templates">\n          <option value="templates/twelve">Twelve</option>\n        </optgroup>\n      </select>   \n    `}("exerciseSelect")}\n      ${Z(this._value)&&"EDIT_PATTERN"===J.mode?`\n          <div id="levelSettings" class="exerciseInputs">\n              <div style="display:inline-block">\n                <label for="linesPerBeat">Division</label>\n                <input type="number" id="linesPerBeat" value="${this._level.grid.linesPerBeat}" min="1" max="16" step="1" class="numberInput"/>\n              </div>\n              <div style="display:inline-block">\n                <label for="exerciseLength">Bars</label>\n                <input type="number" id="exerciseLength" value="${this._level.length}" min="1" max="8" step="1" class="numberInput"/>\n              </div>\n          </div>\n          `:""}\n      <div class="exerciseInputs">\n        <i id="deleteCustomExercise" class="fa-solid fa-trash" style="padding:5px;display:none"></i>\n        <i id="saveNewCustomExercise" class="fa-solid fa-circle-plus" style="padding:5px"></i>\n      </div>\n    `,document.getElementById("exerciseSelect").value=this._value,document.getElementById("exerciseSelect").addEventListener("change",(e=>{this._value=e.target.value,this.showControls()})),Z(this._value)&&(document.getElementById("linesPerBeat").addEventListener("change",(e=>{this._level.grid.linesPerBeat=e.target.value,Q(this._level),this.setOptions(),this.dispatchEvent(new Event("change"))})),document.getElementById("exerciseLength").addEventListener("change",(e=>{this._level.length=e.target.value,Q(this._level),this.setOptions(),this.dispatchEvent(new Event("change"))}))),document.getElementById("deleteCustomExercise").addEventListener("click",(e=>{!function(e){if(Z(e)){const t=Number(e.substring(10)),n=q();n.splice(t,1),localStorage.setItem("custom_exercises",JSON.stringify(n))}}(this._value),this._value=X,this.setOptions(),this.dispatchEvent(new Event("change"))})),document.getElementById("saveNewCustomExercise").addEventListener("click",(e=>{const t=function(e){const t=q()||[];return t.push(e),localStorage.setItem("custom_exercises",JSON.stringify(t)),t.length-1}(this._level);this._value=`__CUSTOM__${t}`,this.setOptions(),this.dispatchEvent(new Event("change"))})),this.showControls()}get value(){return this._value}get level(){return this._level}set level(e){this._level=e}async loadExercise(){this._level=await async function(e){if(Z(e)){const t=Number(e.substring(10));return q()[t]}{let t=`./arrangements/${e}.json`,n=await fetch(t);return await n.json()}}(this.value),this.setOptions()}showControls(){Z(this._value)?document.getElementById("deleteCustomExercise").style.display="inline":document.getElementById("deleteCustomExercise").style.display="none"}}function q(){const e=localStorage.getItem("custom_exercises");return!!e&&JSON.parse(e)}function Z(e){return 0===e.indexOf("__CUSTOM__")}function Q(e){const t=document.getElementById("exerciseSelect").value;if(Z(t)){const n=Number(t.substring(10)),o=q();o[n]=e,localStorage.setItem("custom_exercises",JSON.stringify(o))}}customElements.define("exercise-settings",Y);const ee=new a.MeshBasicMaterial({color:16777045}),te=new a.MeshBasicMaterial({color:7829503}),ne=new a.MeshBasicMaterial({color:255}),oe=new a.MeshBasicMaterial({color:16711680}),se=new a.MeshBasicMaterial({color:3381555,transparent:!0,opacity:.1}),ie=new W.LineMaterial({color:14540287,linewidth:2,alphaToCoverage:!1,fog:!0}),ae=new W.LineMaterial({color:6710954,linewidth:1,alphaToCoverage:!1,fog:!0});let le=[],re=[],ce=[],de=0,ue=0,me=!1,he=!1;function pe(e,t,n=!1){if(n){for(let n of e)for(let e of n.meshes)t.remove(e);e.length=0}else{let n=0,o=0;for(;n<e.length;){const s=e[n];if(s.time<J.bars-1.77)for(let e of s.meshes)t.remove(e);else e[o++]=s;n++}e.length=o}}function ve(e,t,n){return t.countIn+n*e.length}function ge(e,t,n,o){const s=V(u[t.note].lane),i=e[1]/127,l=e[1]/127,r=[];r.push(.1*l,0,.5),r.push(-.1*l,0,.5),r.push(-.1*l,0,-.5),r.push(.1*l,0,-.5),r.push(.1*l,0,.5);var d=new U.LineGeometry;d.setPositions(r);var m=new z.Line2(d,ie);m.translateX(s),m.translateZ(o),m.scale.z=n.accuracyTime;const h=new a.BoxGeometry(.2*l,.5*i,1),p=new a.Mesh(h,c[t.note]);return p.translateX(s),p.translateY(-i/4),p.translateZ(o),p.scale.z=n.accuracyTime,{mesh:p,line:m}}function be(e,t){for(let n of e.meshes)n.scale.z=t.accuracyTime}function Ee(e,t,n){const o=e;for(let e of t.tracks)for(let s of e.events)if(s[0]<t.length){const t=(s[0]+o)*J.timeScale,{mesh:i,line:a}=ge(s,e,playSettings,t);i.selectableEvent={track:e,time:t,event:s,meshes:[i,a],hit:!1,soft:!1,hard:!1},n.add(i),n.add(a),le.push(i.selectableEvent)}}function fe(e,t,n){const o=1/t.grid.linesPerBeat;for(let a=0;a<=t.grid.linesPerBeat;a++){const l=e+a*o;if(J.modes!==K||l<=t.length){const t=(e+a*o)*J.timeScale;var s=new U.LineGeometry;s.setPositions([1,0,0,-1,0,0]);var i=new z.Line2(s,ae);i.translateZ(t),n.add(i),re.push({meshes:[i],time:t})}}}function ye(e,t,n){const o=J.timeScale,s=J.bars+1.5*o;if(de<e.repeats)for(;ve(e,t,de)*o<=s;){Ee(ve(e,t,de),e,n),de++}const i=(e.repeats*e.length+t.countIn)*o;for(;ue*o<s&&s<i;)fe(ue,e,n),ue++}function _e(e){pe(re,e,!0),pe(le,e,!0),pe(ce,e,!0),de=0,ue=0,J.noteCount=0,J.hitCount=0}function Me(e,t){for(Ee(0,e,t);ue*J.timeScale<e.length*J.timeScale;)fe(ue,e,t),ue++}function Te(e,t,n,o){let s=m[u[t].lane];const i=n.tracks.filter((e=>s.has(e.note))),a=o.accuracyTime/J.timeScale;for(let t of i)for(let n=0;n<t.events.length;n++){const o=t.events[n];if(e>o[0]-a&&e<o[0]+a)return{track:t,event:t.events[n]}}return!1}function Se(e,t,n,o,s){if(t&&n||me&&(t=me.note,n=me.velocity),t&&n){me={note:t,velocity:n};let i=s.tracks.find((e=>e.note===t));if(i||(i={note:t,events:[]},s.tracks.push(i)),!function(e,t,n,o){let s=m[u[t].lane];const i=n.tracks.filter((e=>s.has(e.note))),a=o.accuracyTime/J.timeScale;for(let t of i)for(let n=0;n<t.events.length;n++){const o=t.events[n];if(e>o[0]-a&&e<o[0]+a)return t.events.splice(n,1)}return!1}(e,t,s,playSettings))if(0==i.events.length)i.events.push([e,n]);else for(let t=0;t<i.events.length;t++){if(i.events[t][0]>e){0==t?i.events.unshift([e,n]):i.events.splice(t,0,[e,n]);break}if(t==i.events.length-1){i.events.push([e,n]);break}}_e(o),Me(s,o)}}function Ie(e,t,n,o=!0){return me=!1,_e(n),o?(Me(e,n),function(e,t){const n=8*e.grid.linesPerBeat*e.length,o=8*e.grid.linesPerBeat,s=1/o;for(let i=1;i<=8;i++){const l=V(i);for(let r=0;r<n;r++){let n=r*s;r%o==0&&(n=Math.floor(n));const c=Array.from(m[i]),d=.15/c.length,u=d*c.length;c.forEach(((o,s)=>{const r=s*d-u/2+d/2,c=n*J.timeScale,m=new a.BoxGeometry(d,.01,2/(8*e.grid.linesPerBeat)),h=new a.Mesh(m,se);h.translateX(l+r),h.translateZ(c),h.editHandle={time:n,lane:i,note:o},t.add(h)}))}}}(e,n),{subscribe:()=>{O(B,0,(()=>{if(he){const o=he.editHandle,s="HAT_PEDAL"===o.note?127:me&&"HAT_PEDAL"!==me.note?me.velocity:75;Se(o.time,o.note,s,n,e),Te(o.time,o.note,e,t)&&(he.material=se),Q(e)}})),O(_,0,(()=>{if(he){const o=he.editHandle,s=Te(o.time,o.note,e,t);s.event&&"HAT_PEDAL"!=s.track.note&&(s.event[1]=Math.min(s.event[1]+4,128),me={note:s.track.note,velocity:s.event[1]},t.playSound(me.note,me.velocity),_e(n),Me(e,n),Q(e))}})),O(M,0,(()=>{if(he){const o=he.editHandle,s=Te(o.time,o.note,e,t);s.event&&"HAT_PEDAL"!=s.track.note&&(s.event[1]=Math.max(s.event[1]-4,20),me={note:s.track.note,velocity:s.event[1]},t.playSound(me.note,me.velocity),_e(n),Me(e,n),Q(e))}}))},update:()=>{const n=new a.Raycaster;n.setFromCamera(F,Le.camera);const o=n.intersectObjects(Le.scene.children.filter((e=>e.editHandle)),!1);o.length>0?o.forEach((n=>{he&&n.object!=he&&(he.material=se),he=n.object;const o=he.editHandle;Te(o.time,o.note,e,t)||(he.material=c[he.editHandle.note])})):he&&(he.material=se,he=!1)},addNote:(t,o)=>{Se(J.beats,t,o,n,e),Q(e)}}):(ye(e,t,n),{subscribe:()=>{},checkNoteOn:(e,o)=>{let s=!1,i=1/0,l=!1,r=0,c=!1;for(let d of le){if(e==d.track.note){const e=J.bars-d.time;Math.abs(e)<i?(i=Math.abs(e),r=e,l=d.meshes[0]):c=!0}const m=J.bars>d.time-t.accuracyTime&&J.bars<d.time+t.accuracyTime,h=o>d.event[1]-t.accuracyVelocity&&o<d.event[1]+t.accuracyVelocity;if(e==d.track.note&&m){if(d.hit=!0,h)d.meshes[0].material=new a.MeshLambertMaterial({color:16777215}),ce.push({time:d.time,meshes:[d.meshes[0]]});else{n.remove(d.meshes[0]),o<d.event[1]&&(d.soft=!0),o>d.event[1]&&(d.hard=!0);const e=V(u[d.track.note].lane),s=d.time,i=d.event[1]/127,l=d.event[1]/127,r=new a.BoxGeometry(.2*l,.5*i,t.accuracyTime),c=new a.Mesh(r,d.soft?te:ee);c.translateX(e),c.translateY(-i/4),c.translateZ(s),n.add(c),d.meshes[0]=c}"HAT_CLOSED"!==e&&"HAT_PEDAL"!==e||t.sounds.HAT_OPEN&&t.sounds.HAT_OPEN.isPlaying&&t.sounds.HAT_OPEN.stop(),t.sounds[e]&&t.kitOn&&(t.sounds[e].isPlaying&&t.sounds[e].stop(),t.sounds[e].setVolume(o/128),t.sounds[e].play()),s=!0;break}if(c)break}s||("HAT_PEDAL"===e?t.sounds.HAT_PEDAL&&t.kitOn&&(t.sounds.HAT_PEDAL.isPlaying&&t.sounds.HAT_PEDAL.stop(),t.sounds.HAT_PEDAL.setVolume(o/128),t.sounds.HAT_PEDAL.play()):J.bars>0&&(t.sounds.FAIL&&(t.sounds.FAIL.isPlaying&&t.sounds.FAIL.stop(),t.sounds.FAIL.setVolume(o/128),t.sounds.FAIL.setPlaybackRate(1-r),t.sounds.FAIL.play()),Math.abs(r)<.2&&l&&(l.rotateX(-5*r),l.material=r>0?ne:oe)))},update:()=>{for(let e of re){const n=Math.abs(J.bars-e.time);if(n<=.05){const o=20*(.05-n),s=new a.Color(.5*o,.5*o,.9*o),i=new W.LineMaterial({color:s,linewidth:5,alphaToCoverage:!1});e.meshes[0].material=i,e.triggered||(t.sounds.METRONOME.isPlaying&&t.sounds.METRONOME.stop(),t.metronomeOn&&(e.time%1==0?t.sounds.METRONOME.setPlaybackRate(t.BPM/60*1.5):t.sounds.METRONOME.setPlaybackRate(t.BPM/60),t.sounds.METRONOME.play(Math.floor(n)),e.triggered=!0))}else n<1&&(e.meshes[0].material=ae)}for(let e of ce){const t=J.bars-e.time;if(t>0){const n=1-2*t,o=new a.Color(n,n,n);e.meshes[0].material=new a.MeshBasicMaterial({color:o}),e.meshes[0].translateY(-t/8)}}J.mode===$&&(!function(e){for(let t of e)t.time<J.bars-.2&&(t.checked||(t.checked=!0,J.noteCount++,!t.hit||t.soft||t.hard||J.hitCount++))}(le),pe(re,n),pe(le,n),pe(ce,n)),ye(e,t,n)}})}const we=new a.MeshBasicMaterial({color:14540287});const Le={kit:!1,eventManager:!1,renderer:!1,scene:!1,canvas:!1,camera:!1},Be=document.getElementById("playSettings"),ke=document.getElementById("editSettings"),Oe=document.getElementById("inputSettings"),Ae=document.getElementById("exercise");let Pe=1118532,Ce=window.innerWidth,Ne=window.innerHeight;function xe(){return Math.max(Math.min(-Be.BPM/60,-.7),-2)}function De(){return Math.min(Math.max(Be.BPM/60,1),2)}function Re(){return 2*Math.PI*.62}Le.camera=new a.PerspectiveCamera(70,Ce/Ne,.01,20),Le.camera.position.z=xe(),Le.camera.position.y=De(),Le.camera.rotation.z=Math.PI,Le.camera.rotation.x=Re(),window.onresize=()=>{Ce=window.innerWidth,Ne=window.innerHeight,Le.renderer&&Le.renderer.setSize(Ce,Ne),Le.camera&&(Le.camera.aspect=Ce/Ne,Le.camera.updateProjectionMatrix())};let He=0;function Fe(e){let t=0;J.startTime?(t=e-He,He=e):J.startTime=e,J.mode===$&&(J.bars+=t*(Be.BPM/60)/1e3),Le.kit&&Le.kit.update(Be),Le.eventManager&&Le.eventManager.update(),Le.camera.position.z=xe()+J.bars,Le.camera.position.y=De(),Le.camera.rotation.x=Re(),Le.scene.fog=new a.Fog(Pe,2,4*De()),Le.renderer.render(Le.scene,Le.camera)}async function $e(){J.mode===$&&(J.mode=G),J.startTime=!1,J.bars=0,Le.camera.children.forEach((e=>{Le.camera.remove(e)})),Le.canvas&&(document.body.removeChild(Le.canvas),Le.renderer.dispose()),Le.renderer=new a.WebGLRenderer({antialias:!0}),Le.scene=new a.Scene,J.mode===K?(Pe=1127185,Le.scene.background=new a.Color(Pe)):(Pe=1118532,Le.scene.background=new a.Color(Pe));const e=new a.AmbientLight(10066431,4);Le.scene.add(e);const t=new a.SpotLight(16777215);t.castShadow=!1,t.intensity=8,t.visible=!0,t.distance=10,t.decay=1,t.angle=Math.PI/4,t.penumbra=.1,t.position.set(0,0,1),t.target=Le.camera,Le.camera.add(t),Le.scene.add(Le.camera),h.length=0,O(p,0,(()=>{J.mode=G,$e()})),O(S,0,(()=>{J.mode===G?(J.mode=$,Be.sounds.METRONOME.isPlaying&&Be.sounds.METRONOME.stop(),Be.sounds.METRONOME.setPlaybackRate(Be.BPM/60)):J.mode===$&&J.bars>Ae.level.length*J.timeScale*(Ae.level.repeats+2)&&(J.mode=G,Be.sounds.METRONOME.setPlaybackRate(Be.BPM/60),$e())})),O(v,0,(()=>{J.mode===$?J.mode=G:J.mode===G&&(J.mode=$)})),O(g,0,(()=>{J.mode!==K?J.mode=K:J.mode=G,$e()})),console.log(JSON.stringify(Ae.level)),J.mode===K?Le.eventManager=Ie(Ae.level,Be,Le.scene,!0):Le.eventManager=Ie(Ae.level,Be,Le.scene,!1),ke.subscribe(Ae,Le.eventManager),Oe.subscribe(),Le.kit=function(e,t){const n=[];for(let o=1;o<=8;o++){const s=V(o),i=new a.Mesh(new a.BoxGeometry(.22,1,1),we);i.translateX(s),i.rotation.x=.5*Math.PI,i.scale.x=.05,i.scale.y=e.accuracyTime,i.scale.z=.01;const l={mesh:i,lastTriggered:-1/0,velocity:0};n.push(l),t.add(i)}return{subscribe:e=>{for(let t of Object.keys(u))O(L,u[t].note,((o,s)=>{if(J.mode===K)e.addNote(t,s);else if(J.mode===$){const o=n[u[t].lane-1];o.mesh.scale.z=s/127*.5,o.mesh.position.y=-s/127/4,o.mesh.material=r[t],o.lastTriggered=J.bars,o.velocity=s,e&&e.checkNoteOn(t,s)}}))},update:e=>{for(let t of n){t.mesh.position.z=J.bars,t.mesh.scale.y=e.accuracyTime;const n=5*(J.bars-t.lastTriggered);if(n<1){const e=t.velocity/127*(1-n);t.mesh.scale.z=.5*e,t.mesh.scale.x=Math.max(e,.05),t.mesh.position.y=-e/4}else t.mesh.scale.z=.01,t.mesh.position.y=0,t.mesh.material=we}}}}(Be,Le.scene),Le.kit.subscribe(Le.eventManager),Le.eventManager.subscribe(),Le.renderer.setSize(Ce,Ne),Le.renderer.setAnimationLoop(Fe),Le.canvas=document.body.appendChild(Le.renderer.domElement)}async function Ge(){setTimeout((async()=>{await Ae.loadExercise(),document.getElementById("restart").addEventListener("click",(()=>{$e()})),document.getElementById("exercise").addEventListener("change",(async()=>{await Ae.loadExercise(),await $e()})),document.getElementById("playSettings").addEventListener("change",(async()=>{J.mode===$&&(J.mode=G),J.mode===G&&function(e,t){for(let n of t.children)n.selectableEvent&&be(n.selectableEvent,e)}(Be,Le.scene)})),await $e()}),100)}function Ke(e){const t=1*J.timeScale/e,n=Math.round(J.beats*e)/e*J.timeScale;return{closest:n,previous:n-t,next:n+t}}class je extends HTMLElement{connectedCallback(){this._gameState=!1,this.render()}toggleEdit(e){k(g,0,0),J.mode===K?(document.getElementById("restart").style.display="none",document.getElementById("editButton").style.display="none",document.getElementById("editPanel").style.display="flex",document.getElementById("exercise").setOptions()):(document.getElementById("restart").style.display="inline",document.getElementById("editButton").style.display="inline",document.getElementById("editPanel").style.display="none",document.getElementById("exercise").setOptions())}render(){this.innerHTML='\n        <input id="editButton" type="button" value="Edit"></input>\n        <div id="editPanel" style="display:none;">\n              <table id="editGrid">\n                  <tr>\n                      <td><i id="nudgeBackwards" class="fa-lg fa-solid fa-backward"></i></td>\n                      <td><i id="snapBackwards" class="fa-lg fa-solid fa-backward-step"></i></td>\n                      <td><i id="snapForwards" class="fa-lg fa-solid fa-forward-step"></i></td>\n                      <td><i id="nudgeForwards" class="fa-lg fa-solid fa-forward"></i></td>\n                      <td><i id="repeatNote" class="fa-lg fa-solid fa-clone"></i></td>\n                  </tr>\n              </table>\n              <input id="doneButton" type="button" value="Done"></input>\n        </div>     \n    ',document.getElementById("editButton").addEventListener("click",this.toggleEdit.bind(this)),document.getElementById("doneButton").addEventListener("click",this.toggleEdit.bind(this)),document.getElementById("snapForwards").addEventListener("click",(()=>{k(b,0,0)})),document.getElementById("nudgeForwards").addEventListener("click",(()=>{k(f,0,0)})),document.getElementById("snapBackwards").addEventListener("click",(()=>{k(E,0,0)})),document.getElementById("nudgeBackwards").addEventListener("click",(()=>{k(y,0,0)})),document.getElementById("repeatNote").addEventListener("click",(()=>{k(T,0,0)}))}subscribe(e,t){O(b,0,(()=>{const{next:t}=Ke(e.level.grid.linesPerBeat);J.mode===K&&(t<e.level.length*J.timeScale?J.bars=t:J.bars=0)})),O(E,0,(()=>{const{previous:t}=Ke(e.level.grid.linesPerBeat);J.mode===K&&t>=0&&(J.bars=t)})),O(f,0,(()=>{const{next:t}=Ke(8*e.level.grid.linesPerBeat);J.mode===K&&(t<e.level.length*J.timeScale?J.bars=t:J.bars=0)})),O(y,0,(()=>{const{previous:t}=Ke(8*e.level.grid.linesPerBeat);J.mode===K&&t>=0&&(J.bars=t)})),O(T,0,(()=>{J.mode===K&&t.addNote()}))}}function Ve(e,t){const n=new a.AudioListener;e.add(n);const o=new a.Audio(n);return(new a.AudioLoader).load(t,(function(e){o.setBuffer(e),o.setLoop(!1),o.setVolume(.3)})),o}function ze(e,t){e.children.filter((e=>"AudioListener"==e.type)).forEach((t=>e.remove(t)));return{METRONOME:Ve(e,`sounds/${t}/metronome.mp3`),FAIL:Ve(e,`sounds/${t}/fail.mp3`),KICK_RIGHT:Ve(e,`sounds/${t}/kick.mp3`),CRASH_LEFT:Ve(e,`sounds/${t}/crash_left.mp3`),HAT_CLOSED:Ve(e,`sounds/${t}/hat_closed.mp3`),HAT_OPEN:Ve(e,`sounds/${t}/hat_open.mp3`),HAT_PEDAL:Ve(e,`sounds/${t}/hat_pedal.mp3`),RIDE_EDGE:Ve(e,`sounds/${t}/ride_edge.mp3`),SNARE_CENTER:Ve(e,`sounds/${t}/snare_center.mp3`),SNARE_RIM:Ve(e,`sounds/${t}/snare_rim.mp3`),TOM_FLOOR:Ve(e,`sounds/${t}/tom_floor.mp3`),TOM_ONE:Ve(e,`sounds/${t}/tom_one.mp3`),TOM_TWO:Ve(e,`sounds/${t}/tom_two.mp3`)}}customElements.define("edit-settings",je);class We extends HTMLElement{connectedCallback(){this._bpm=60,this._metronome_on=!1,this._sounds=ze(Le.camera,"kit1"),this.innerHTML='\n        <div style="display:block">  \n          <div style="display:inline-block">\n            <label for="kitSelect">Kit</label>\n            <select id="kitSelect">\n              <option value="none">None</option>\n              <option value="kit1" selected>Kit 1</option>\n              <option value="kit2">Kit 2</option>\n              <option value="kit3">Kit 3</option>\n            </select>\n          </div>\n          <div style="display:inline-block;margin-left:10px">\n            <i id="metronomeIcon" class="fa-xl fa-solid fa-volume-xmark" style="margin-right:10px"></i>\n          </div>\n        </div>\n        <br/>\n        <div>\n            <div style="display:inline-block">\n            <label for="accuracyTime">Time Accuracy</label>\n            <input type="number" id="accuracyTime" value="0.06" min="0.01" max="0.10" step="0.001" class="numberInput"/>  \n            </div>\n            <div style="display:inline-block">  \n            <label for="accuracyVelocity">Velocity</label>\n            <input type="number" id="accuracyVelocity" value="24" min="8" max="64" step="8" class="numberInput"/>\n            </div>\n        </div>\n        <br/>    \n        <div>\n            <div style="display:inline-block">  \n            <label for="countIn">Count In</label>\n            <input type="number" id="countIn" value="1" min="1" max="4" step="1" class="numberInput"/>\n            </div>  \n            <div style="display:inline-block"> \n            <label for="BPM">BPM</label>\n            <input type="number" id="BPM" value="60" min="20" max="400" step="1" class="numberInput"/>\n            </div>\n        </div>      \n        ',document.getElementById("BPM").addEventListener("change",(e=>{const t=Number(e.target.value);t&&NaN!==t&&(this._bpm=t)})),document.getElementById("kitSelect").addEventListener("change",(e=>{"none"!=e.target.value&&(this._sounds=ze(Le.camera,e.target.value))})),document.getElementById("metronomeIcon").addEventListener("click",(e=>{this._metronome_on=!this._metronome_on,document.getElementById("metronomeIcon").className=this._metronome_on?"fa-xl fa-solid fa-volume-high":"fa-xl fa-solid fa-volume-xmark"}))}get accuracyTime(){return Number(document.getElementById("accuracyTime").value)}get accuracyVelocity(){return Number(document.getElementById("accuracyVelocity").value)}get countIn(){return Number(document.getElementById("countIn").value)}get BPM(){return this._bpm}get metronomeOn(){return this._metronome_on}get sounds(){return this._sounds}get kitOn(){return"none"!=document.getElementById("kitSelect").value}playSound(e,t){this.sounds[e]&&this.kitOn&&(this.sounds[e].isPlaying&&this.sounds[e].stop(),t&&this.sounds[e].setVolume(t/128),this.sounds[e].play())}}customElements.define("play-settings",We);class Ue extends HTMLElement{connectedCallback(){this.selected=!1,this.innerHTML='\n        <div style="display: inline-block; margin-left: 1rem"><i id="openInputSettings" class="fa-solid fa-drum"></i></div>\n        <dialog id="inputSettingsDialog">\n          <div id="noteElements"></div>\n          <div>\n          <div class="buttonStrip">\n            <div><input type="button" id="resetInputSettings" value="Reset"></input></div>\n            <div><input type="button" id="closeInputSettings" value="Done"></input></div>\n          </div> \n          </div>\n        </dialog>\n        ',document.getElementById("openInputSettings").addEventListener("click",(()=>{document.getElementById("inputSettingsDialog").showModal(),this.previousMode=J.mode,J.mode=j})),document.getElementById("closeInputSettings").addEventListener("click",(()=>{document.getElementById("inputSettingsDialog").close(),J.mode=i[this.previousMode],"PRACTICE_PAUSED"!==this.previousMode&&"PRACTICE_PLAYING"!==this.previousMode||k(p,0,0)})),document.getElementById("resetInputSettings").addEventListener("click",(()=>{!function(){for(let e in D)H[e]={...D[e]};R()}(),function(){for(let e in l)u[e]={...l[e]};d()}(),this.updateNoteElements()})),this.updateNoteElements()}updateNoteElements(){const e=`<table>${Object.keys(u).reduce(((e,t)=>{let n="";for(let e in H)H[e].label===t&&(n=e);const o=`SETTINGS_${t}`;this.selected||(this.selected=o);const s=n.substring(3),i=-1==u[t].note?"":u[t].note;return e+=`<tr><td id="${o}" class="inputBinding ${this.selected===o?"selected":""}">${u[t].label}</td><td>${s}</td><td>${i}</td></tr>`}),"")}</table>`;document.getElementById("noteElements").innerHTML=e,document.querySelectorAll(".inputBinding").forEach((e=>{e.addEventListener("click",(e=>{this.selected=e.target.id,this.updateNoteElements()}))}))}subscribe(){O(I,0,(e=>{J.mode===j&&0===e.indexOf("Key")&&(!function(e,t){for(let t in H)if(0===t.indexOf("Key")&&H[t].label===e){delete H[t];break}H[t]={command:L,label:e,value:75,lastEvent:""},R()}(this.selected.substring(9),e),this.updateNoteElements())})),O(w,0,((e,t)=>{J.mode===j&&(!function(e,t){for(let e of Object.keys(u))u[e].note===t&&(u[e]={...u[e],note:-1});u[e]={...u[e],note:t},d()}(this.selected.substring(9),e),this.updateNoteElements())}))}}customElements.define("input-settings",Ue),async function(){await Ge()}();