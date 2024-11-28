import*as e from"three";import*as t from"three/addons/lines/Line2.js";import*as n from"three/addons/lines/LineMaterial.js";import*as o from"three/addons/lines/LineGeometry.js";var s={d:(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const a=(e=>{var t={};return s.d(t,e),t})({Audio:()=>e.Audio,AudioListener:()=>e.AudioListener,AudioLoader:()=>e.AudioLoader,BoxGeometry:()=>e.BoxGeometry,Color:()=>e.Color,DoubleSide:()=>e.DoubleSide,Fog:()=>e.Fog,Mesh:()=>e.Mesh,MeshBasicMaterial:()=>e.MeshBasicMaterial,PerspectiveCamera:()=>e.PerspectiveCamera,Raycaster:()=>e.Raycaster,Scene:()=>e.Scene,Vector2:()=>e.Vector2,WebGLRenderer:()=>e.WebGLRenderer}),i={CRASH_LEFT:{label:"Crash Left",lane:1,note:49},HAT_OPEN:{label:"Hat Open",lane:2,note:46},HAT_CLOSED:{label:"Hat Closed",lane:2,note:42},HAT_PEDAL:{label:"Hat Pedal",lane:2,note:44},SNARE_CENTER:{label:"Snare Center",lane:3,note:38},SNARE_RIM:{label:"Snare Rim",lane:3,note:40},TOM_ONE:{label:"Tom High",lane:4,note:48},TOM_TWO:{label:"Tom Medium",lane:5,note:45},TOM_FLOOR:{label:"Tom Floor",lane:6,note:43},KICK_RIGHT:{label:"Kick",lane:7,note:36},RIDE_EDGE:{label:"Ride Edge",lane:8,note:51}},l={CRASH_LEFT:new a.MeshBasicMaterial({color:39321,side:a.DoubleSide}),HAT_OPEN:new a.MeshBasicMaterial({color:4478361,side:a.DoubleSide}),HAT_CLOSED:new a.MeshBasicMaterial({color:7824896,side:a.DoubleSide}),HAT_PEDAL:new a.MeshBasicMaterial({color:10027008,side:a.DoubleSide}),SNARE_CENTER:new a.MeshBasicMaterial({color:8912896,side:a.DoubleSide}),SNARE_RIM:new a.MeshBasicMaterial({color:34816,side:a.DoubleSide}),TOM_ONE:new a.MeshBasicMaterial({color:7829248,side:a.DoubleSide}),TOM_TWO:new a.MeshBasicMaterial({color:5592456,side:a.DoubleSide}),TOM_FLOOR:new a.MeshBasicMaterial({color:34816,side:a.DoubleSide}),KICK_RIGHT:new a.MeshBasicMaterial({color:8934656,side:a.DoubleSide}),RIDE_EDGE:new a.MeshBasicMaterial({color:30583,side:a.DoubleSide})};function r(){localStorage.setItem("note_settings",JSON.stringify(c))}let c={...i};!function(){const e=localStorage.getItem("note_settings");e&&(c=JSON.parse(e))}();const d=Object.keys(c).reduce(((e,t)=>{const n=c[t];return e[n.lane]||(e[n.lane]=new Set),e[n.lane].add(t),e}),{}),u=[],m="reset",h="pause",p="edit",v="snap_forwards",g="snap_backwards",b="nudge_forwards",f="nudge_backwards",E="velocity_up",y="velocity_down",_="repeat_note",M="any_note",T="any_key",S="any_controller",w=153,k="pointer_up";function I(e,t,n){switch(e){case w:if(n>0)for(let o of u)o.command===e&&o.label===t&&o.action(t,n);break;case M:if(n>0)for(let o of u)o.command===e&&o.action(t,n);break;default:for(let o of u)o.command===e&&o.action(t,n)}}function B(e,t,n){u.push({command:e,label:t,action:n})}function L(e){document.getElementById("midi").innerHTML=e}let O=!1;function A(e){O=e}function C(e){L("Failed to get MIDI access")}function P(e){const t=e.data[0],n=e.data[1],o=e.data[2];if(153===t)o>0&&(I(M,n,o),I(w,n,o),I(S,n,o))}setInterval((()=>{if(O){const e=O.inputs;let t="";e.forEach((e=>{t+=e.name+"<br/>"})),e.forEach((e=>{e.onmidimessage=P})),""===t&&(t="No MIDI device"),L(t)}}),1e3),navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(A,C):L("Web MIDI API is not supported in this browser.");const N={Space:{command:m,lastEvent:""},Escape:{command:h,lastEvent:""},ArrowUp:{command:v,lastEvent:""},ArrowDown:{command:g,lastEvent:""},ArrowRight:{command:b,lastEvent:""},ArrowLeft:{command:f,lastEvent:""},Minus:{command:y,lastEvent:""},Equal:{command:E,lastEvent:""},Period:{command:_,lastEvent:""},KeyC:{command:w,label:"SNARE_RIM",value:75,lastEvent:""},KeyV:{command:w,label:"SNARE_CENTER",value:75,lastEvent:""},KeyQ:{command:w,label:"CRASH_LEFT",value:75,lastEvent:""},KeyW:{command:w,label:"HAT_PEDAL",value:100,lastEvent:""},KeyE:{command:w,label:"HAT_OPEN",value:75,lastEvent:""},KeyR:{command:w,label:"HAT_CLOSED",value:75,lastEvent:""},KeyU:{command:w,label:"TOM_ONE",value:75,lastEvent:""},KeyI:{command:w,label:"TOM_TWO",value:75,lastEvent:""},KeyO:{command:w,label:"TOM_FLOOR",value:75,lastEvent:""},KeyN:{command:w,label:"KICK_RIGHT",value:75,lastEvent:""},KeyP:{command:w,label:"RIDE_EDGE",value:75,lastEvent:""}};function x(){localStorage.setItem("key_settings",JSON.stringify(H))}let H={...N};!function(){const e=localStorage.getItem("key_settings");e&&(H=JSON.parse(e))}(),document.addEventListener("keydown",(e=>{if(e.preventDefault(),I(T,e.code),H[e.code]&&"keydown"!=H[e.code].lastEvent){if(H[e.code].lastEvent="keydown",H[e.code].command===w){const t=c[H[e.code].label].note;t>-1&&I(M,t,H[e.code].value)}const t=H[e.code].label?c[H[e.code].label].note:void 0;(void 0===t||t>-1)&&I(H[e.code].command,t,H[e.code].value)}})),document.addEventListener("keyup",(e=>{H[e.code]&&"keyup"!=H[e.code].lastEvent&&(H[e.code].lastEvent="keyup")}));const R=new a.Vector2;document.addEventListener("mousemove",(e=>{R.x=e.clientX/window.innerWidth*2-1,R.y=-e.clientY/window.innerHeight*2+1})),document.addEventListener("pointerup",(e=>{I(k,e.pointerType)}));const D="PRACTICE",F="PRACTICE_PAUSED",$="EDIT_PATTERN",G="EDIT_INPUT_SETTINGS";function K(e){const t=1/8;return 2*(.5625-t*e)}const V=(e=>{var t={};return s.d(t,e),t})({Line2:()=>t.Line2});const j=(e=>{var t={};return s.d(t,e),t})({LineMaterial:()=>n.LineMaterial});const z=(e=>{var t={};return s.d(t,e),t})({LineGeometry:()=>o.LineGeometry});const W=new class{constructor(){this._startTime=!1,this._bars=0,this._noteCount=0,this._hitCount=0,this._timeScale=4,this._mode=F,this.enableSave=!1}get mode(){return this._mode}set mode(e){this._mode=e}get startTime(){return this._startTime}set startTime(e){this._startTime=e}get bars(){return this._bars}set bars(e){this._bars=e}get enableSave(){return this._enableSave}set enableSave(e){this._enableSave=e}get noteCount(){return this._noteCount}set noteCount(e){this._noteCount=e,document.getElementById("hitPercentage").innerHTML=`${this.hitPercentage}`}get hitCount(){return this._hitCount}set hitCount(e){this._hitCount=e,document.getElementById("hitPercentage").innerHTML=`${this.hitPercentage}`}get hitPercentage(){return 0===this.noteCount?"":`${Number(this._hitCount/this._noteCount*100).toFixed(2)}%`}get timeScale(){return this._timeScale}get beats(){return this._bars/this._timeScale}set beats(e){this._bars=e*this._timeScale}},J="grooves/eighth";class U extends HTMLElement{connectedCallback(){this._value=J,this._level=!1,this._enableSave=!1,this.setOptions()}setOptions(){this.innerHTML=`\n      <label for="exerciseSelect">Exercise</label>\n      ${function(e){const t=X();let n="";if(t&&t.length>0){n=`\n        <optgroup label="Custom">\n        ${t.reduce(((e,t,n)=>e+`<option value="__CUSTOM__${n}">Slot ${n+1}</option>`),"")}\n        </optgroup>\n      `}return`\n      <select id="${e}">\n        ${n}\n        <optgroup label="Grooves">\n          <option value="grooves/eighth">Eighth note</option>\n          <option value="grooves/four_to_the_floor">Four to the floor</option>\n          <option value="grooves/shuffle">Shuffle</option>\n          <option value="grooves/sixteenth">Sixteenth note</option>\n          <option value="grooves/twelve_eight">12/8 groove</option>\n          <option value="grooves/twelve_eight_dance">12/8 dance</option>\n          <option value="grooves/twelve_eight_beat_1">12/8 beat 1</option>\n        </optgroup>\n        <optgroup label="Bounces">\n          <option value="bounces/catch_turn">Bounce catch turn</option>\n          <option value="bounces/catch_turn_soft">Bounce catch turn (light)</option>\n          <option value="bounces/triplets">Bounce triplets</option>\n          <option value="bounces/doubles">Bounce doubles</option>\n          <option value="bounces/doubles_reverse">Bounce doubles (reversed)</option>\n        </optgroup>\n        <optgroup label="Cross Stick">\n          <option value="cross_stick/quarters">Cross stick quarters</option>\n          <option value="cross_stick/basic">Cross stick basic</option>\n          <option value="cross_stick/beat_1">Cross stick beat 1</option>\n          <option value="cross_stick/beat_2">Cross stick beat 2</option>\n        </optgroup>\n        <optgroup label="Hats">\n          <option value="hat_openings/eighth_lead_close">8th Hi-hat openings (lead close)</option>\n          <option value="hat_openings/eighth_lead_open">8th Hi-hat openings (lead open)</option>\n          <option value="hat_openings/sixteenth_lead_close">16th Hi-hat openings (lead close)</option>\n          <option value="hat_openings/sixteenth_lead_open">16th Hi-hat openings (lead open)</option>\n          <option value="hat_openings/eighth_beat_1">8th Beat 1</option>\n          <option value="hat_openings/eighth_beat_2">8th Beat 2</option>\n          <option value="hat_openings/sixteenth_bark_1">16th bark 1</option>\n          <option value="hat_openings/sixteenth_bark_2">16th bark 2</option>\n          <option value="hat_openings/sixteenth_bark_3">16th bark 3 (snare)</option>\n          <option value="hat_openings/sixteenth_bark_4">16th bark 4 (snare)</option>\n          <option value="hat_openings/foot_control_1">Foot Control 1</option>\n          <option value="hat_openings/foot_control_2">Foot Control 2</option>\n          <option value="hat_openings/foot_control_3">Foot Control 3</option>\n        </optgroup>\n        <optgroup label="Flams">\n          <option value="flams/flam_basic">Flam Basic</option>\n          <option value="flams/flam_cross">Flam Cross</option>\n        </optgroup>\n        <optgroup label="Templates">\n          <option value="templates/twelve">Twelve</option>\n        </optgroup>\n      </select>   \n    `}("exerciseSelect")}\n      <div>\n        <i id="deleteCustomExercise" class="fa-solid fa-trash" style="padding:5px;display:none"></i>\n        <i id="saveNewCustomExercise" class="fa-solid fa-circle-plus" style="padding:5px"></i>\n      </div>\n    `,document.getElementById("exerciseSelect").value=this._value,document.getElementById("exerciseSelect").addEventListener("change",(e=>{this._value=e.target.value,W.enableSave=!1,this.showControls()})),document.getElementById("deleteCustomExercise").addEventListener("click",(e=>{!function(e){if(q(e)){const t=Number(e.substring(10)),n=X();n.splice(t,1),localStorage.setItem("custom_exercises",JSON.stringify(n))}}(this._value),this._value=J,this.setOptions(),this.dispatchEvent(new Event("change"))})),document.getElementById("saveNewCustomExercise").addEventListener("click",(e=>{const t=function(e){const t=X()||[];return t.push(e),localStorage.setItem("custom_exercises",JSON.stringify(t)),t.length-1}(this._level);this._value=`__CUSTOM__${t}`,this.setOptions(),this.dispatchEvent(new Event("change"))})),this.showControls()}get value(){return this._value}get level(){return this._level}set level(e){this._level=e}async loadExercise(){this._level=await async function(e){if(q(e)){const t=Number(e.substring(10));return X()[t]}{let t=`./arrangements/${e}.json`,n=await fetch(t);return await n.json()}}(this.value)}showControls(){q(this._value)?document.getElementById("deleteCustomExercise").style.display="inline":document.getElementById("deleteCustomExercise").style.display="none"}}function X(){const e=localStorage.getItem("custom_exercises");return!!e&&JSON.parse(e)}function q(e){return 0===e.indexOf("__CUSTOM__")}function Z(e){const t=document.getElementById("exerciseSelect").value;if(q(t)){const n=Number(t.substring(10)),o=X();o[n]=e,localStorage.setItem("custom_exercises",JSON.stringify(o))}}customElements.define("exercise-settings",U);const Y=new a.MeshBasicMaterial({color:16777045}),Q=new a.MeshBasicMaterial({color:7829503}),ee=new a.MeshBasicMaterial({color:255}),te=new a.MeshBasicMaterial({color:16711680}),ne=new a.MeshBasicMaterial({color:3381555,transparent:!0,opacity:.1}),oe=new j.LineMaterial({color:14540287,linewidth:2,alphaToCoverage:!1,fog:!0}),se=new j.LineMaterial({color:6710954,linewidth:1,alphaToCoverage:!1,fog:!0});let ae=[],ie=[],le=[],re=0,ce=0,de=!1,ue=!1;function me(e,t,n=!1){if(n){for(let n of e)for(let e of n.meshes)t.remove(e);e.length=0}else{let n=0,o=0;for(;n<e.length;){const s=e[n];if(s.time<W.bars-1.77)for(let e of s.meshes)t.remove(e);else e[o++]=s;n++}e.length=o}}function he(e,t,n){return t.countIn+n*e.length}function pe(e,t,n,o){const s=K(c[t.note].lane),i=e[1]/127,r=e[1]/127,d=[];d.push(.1*r,0,.5),d.push(-.1*r,0,.5),d.push(-.1*r,0,-.5),d.push(.1*r,0,-.5),d.push(.1*r,0,.5);var u=new z.LineGeometry;u.setPositions(d);var m=new V.Line2(u,oe);m.translateX(s),m.translateZ(o),m.scale.z=n.accuracyTime;const h=new a.BoxGeometry(.2*r,.5*i,1),p=new a.Mesh(h,l[t.note]);return p.translateX(s),p.translateY(-i/4),p.translateZ(o),p.scale.z=n.accuracyTime,{mesh:p,line:m}}function ve(e,t,n){const o=e;for(let e of t.tracks)for(let t of e.events){const s=(t[0]+o)*W.timeScale,{mesh:a,line:i}=pe(t,e,playSettings,s);a.selectableEvent={track:e,time:s,event:t,meshes:[a,i],hit:!1,soft:!1,hard:!1},n.add(a),n.add(i),ae.push(a.selectableEvent)}}function ge(e,t,n){const o=1/t.grid.linesPerBeat;for(let i=0;i<=t.grid.linesPerBeat;i++){const l=e+i*o;if(W.modes!==$||l<=t.length){const t=(e+i*o)*W.timeScale;var s=new z.LineGeometry;s.setPositions([1,0,0,-1,0,0]);var a=new V.Line2(s,se);a.translateZ(t),n.add(a),ie.push({meshes:[a],time:t})}}}function be(e,t,n){const o=W.timeScale,s=W.bars+1.5*o;if(re<e.repeats)for(;he(e,t,re)*o<=s;){ve(he(e,t,re),e,n),re++}const a=(e.repeats*e.length+t.countIn)*o;for(;ce*o<s&&s<a;)ge(ce,e,n),ce++}function fe(e){me(ie,e,!0),me(ae,e,!0),me(le,e,!0),re=0,ce=0,W.noteCount=0,W.hitCount=0}function Ee(e,t){for(ve(0,e,t);ce*W.timeScale<e.length*W.timeScale;)ge(ce,e,t),ce++}function ye(e,t,n,o){let s=d[c[t].lane];const a=n.tracks.filter((e=>s.has(e.note))),i=o.accuracyTime/W.timeScale;for(let t of a)for(let n=0;n<t.events.length;n++){const o=t.events[n];if(e>o[0]-i&&e<o[0]+i)return{track:t,event:t.events[n]}}return!1}function _e(e,t,n,o,s){if(t&&n||de&&(t=de.note,n=de.velocity),t&&n){de={note:t,velocity:n};let a=s.tracks.find((e=>e.note===t));if(a||(a={note:t,events:[]},s.tracks.push(a)),!function(e,t,n,o){let s=d[c[t].lane];const a=n.tracks.filter((e=>s.has(e.note))),i=o.accuracyTime/W.timeScale;for(let t of a)for(let n=0;n<t.events.length;n++){const o=t.events[n];if(e>o[0]-i&&e<o[0]+i)return t.events.splice(n,1)}return!1}(e,t,s,playSettings))if(0==a.events.length)a.events.push([e,n]);else for(let t=0;t<a.events.length;t++){if(a.events[t][0]>e){0==t?a.events.unshift([e,n]):a.events.splice(t,0,[e,n]);break}if(t==a.events.length-1){a.events.push([e,n]);break}}fe(o),Ee(s,o)}}function Me(e,t,n,o=!0){return de=!1,fe(n),o?(Ee(e,n),function(e,t){const n=8*e.grid.linesPerBeat*e.length,o=8*e.grid.linesPerBeat,s=1/o;for(let e=1;e<=8;e++){const i=K(e);for(let l=0;l<n;l++){let n=l*s;l%o==0&&(n=Math.floor(n));const r=Array.from(d[e]),c=.15/r.length,u=c*r.length;r.forEach(((o,s)=>{const l=s*c-u/2+c/2,r=n*W.timeScale,d=new a.BoxGeometry(c,.01,.04),m=new a.Mesh(d,ne);m.translateX(i+l),m.translateZ(r),m.editHandle={time:n,lane:e,note:o},t.add(m)}))}}}(e,n),{subscribe:()=>{B(k,0,(()=>{if(ue){const o=ue.editHandle,s="HAT_PEDAL"===o.note?127:de&&"HAT_PEDAL"!==de.note?de.velocity:75;_e(o.time,o.note,s,n,e),ye(o.time,o.note,e,t)&&(ue.material=ne),Z(e)}})),B(E,0,(()=>{if(ue){const o=ue.editHandle,s=ye(o.time,o.note,e,t);s.event&&"HAT_PEDAL"!=s.track.note&&(s.event[1]=Math.min(s.event[1]+4,128),de={note:s.track.note,velocity:s.event[1]},t.playSound(de.note,de.velocity),fe(n),Ee(e,n),Z(e))}})),B(y,0,(()=>{if(ue){const o=ue.editHandle,s=ye(o.time,o.note,e,t);s.event&&"HAT_PEDAL"!=s.track.note&&(s.event[1]=Math.max(s.event[1]-4,20),de={note:s.track.note,velocity:s.event[1]},t.playSound(de.note,de.velocity),fe(n),Ee(e,n),Z(e))}}))},update:()=>{const n=new a.Raycaster;n.setFromCamera(R,Se.camera);const o=n.intersectObjects(Se.scene.children.filter((e=>e.editHandle)),!1);o.length>0?o.forEach((n=>{ue&&n.object!=ue&&(ue.material=ne),ue=n.object;const o=ue.editHandle;ye(o.time,o.note,e,t)||(ue.material=l[ue.editHandle.note])})):ue&&(ue.material=ne,ue=!1)},addNote:(t,o)=>{_e(W.beats,t,o,n,e),Z(e)}}):(be(e,t,n),{subscribe:()=>{},checkNoteOn:(e,o)=>{let s=!1,i=1/0,l=!1,r=0,d=!1;for(let u of ae){if(e==u.track.note){const e=W.bars-u.time;Math.abs(e)<i?(i=Math.abs(e),r=e,l=u.meshes[0]):d=!0}const m=W.bars>u.time-t.accuracyTime&&W.bars<u.time+t.accuracyTime,h=o>u.event[1]-t.accuracyVelocity&&o<u.event[1]+t.accuracyVelocity;if(e==u.track.note&&m){if(u.hit=!0,h)u.meshes[0].material=new a.MeshBasicMaterial({color:16777215}),le.push({time:u.time,meshes:[u.meshes[0]]});else{n.remove(u.meshes[0]),o<u.event[1]&&(u.soft=!0),o>u.event[1]&&(u.hard=!0);const e=K(c[u.track.note].lane),s=u.time,i=u.event[1]/127,l=u.event[1]/127,r=new a.BoxGeometry(.2*l,.5*i,t.accuracyTime),d=new a.Mesh(r,u.soft?Q:Y);d.translateX(e),d.translateY(-i/4),d.translateZ(s),n.add(d),u.meshes[0]=d}"HAT_CLOSED"!==e&&"HAT_PEDAL"!==e||t.sounds.HAT_OPEN&&t.sounds.HAT_OPEN.isPlaying&&t.sounds.HAT_OPEN.stop(),t.sounds[e]&&t.kitOn&&(t.sounds[e].isPlaying&&t.sounds[e].stop(),t.sounds[e].setVolume(o/128),t.sounds[e].play()),s=!0;break}if(d)break}s||("HAT_PEDAL"===e?t.sounds.HAT_PEDAL&&t.kitOn&&(t.sounds.HAT_PEDAL.isPlaying&&t.sounds.HAT_PEDAL.stop(),t.sounds.HAT_PEDAL.setVolume(o/128),t.sounds.HAT_PEDAL.play()):W.bars>0&&(t.sounds.FAIL&&(t.sounds.FAIL.isPlaying&&t.sounds.FAIL.stop(),t.sounds.FAIL.setVolume(o/128),t.sounds.FAIL.setPlaybackRate(1-r),t.sounds.FAIL.play()),Math.abs(r)<.2&&l&&(l.rotateX(-5*r),l.material=r>0?ee:te)))},update:()=>{for(let e of ie){const n=Math.abs(W.bars-e.time);if(n<=.05){const o=20*(.05-n),s=new a.Color(.5*o,.5*o,.9*o),i=new j.LineMaterial({color:s,linewidth:5,alphaToCoverage:!1});e.meshes[0].material=i,e.triggered||(t.sounds.METRONOME.isPlaying&&t.sounds.METRONOME.stop(),t.metronomeOn&&(e.time%1==0?t.sounds.METRONOME.setPlaybackRate(t.BPM/60*1.5):t.sounds.METRONOME.setPlaybackRate(t.BPM/60),t.sounds.METRONOME.play(Math.floor(n)),e.triggered=!0))}else n<1&&(e.meshes[0].material=se)}for(let e of le){const t=W.bars-e.time;if(t>0){const n=1-2*t,o=new a.Color(n,n,n);e.meshes[0].material=new a.MeshBasicMaterial({color:o}),e.meshes[0].translateY(-t/8)}}W.mode===D&&(!function(e){for(let t of e)t.time<W.bars-.2&&(t.checked||(t.checked=!0,W.noteCount++,!t.hit||t.soft||t.hard||W.hitCount++))}(ae),me(ie,n),me(ae,n),me(le,n)),be(e,t,n)}})}const Te=new a.MeshBasicMaterial({color:14540287});const Se={kit:!1,eventManager:!1,renderer:!1,scene:!1,canvas:!1,camera:!1},we=document.getElementById("playSettings"),ke=document.getElementById("editSettings"),Ie=document.getElementById("inputSettings"),Be=document.getElementById("exercise");let Le=window.innerWidth,Oe=window.innerHeight;function Ae(){return Math.max(Math.min(-we.BPM/60,-.7),-2)}function Ce(){return Math.min(Math.max(we.BPM/60,1),2)}function Pe(){return 2*Math.PI*.62}Se.camera=new a.PerspectiveCamera(70,Le/Oe,.01,20),Se.camera.position.z=Ae(),Se.camera.position.y=Ce(),Se.camera.rotation.z=Math.PI,Se.camera.rotation.x=Pe(),window.onresize=()=>{Le=window.innerWidth,Oe=window.innerHeight,Se.renderer&&Se.renderer.setSize(Le,Oe),Se.camera&&(Se.camera.aspect=Le/Oe,Se.camera.updateProjectionMatrix())};let Ne=0;function xe(e){let t=0;W.startTime?(t=e-Ne,Ne=e):W.startTime=e,W.mode===D&&(W.bars+=t*(we.BPM/60)/1e3),Se.kit&&Se.kit.update(we),Se.eventManager&&Se.eventManager.update(),Se.camera.position.z=Ae()+W.bars,Se.camera.position.y=Ce(),Se.camera.rotation.x=Pe(),Se.scene.fog=new a.Fog(1118532,2,4*Ce()),Se.renderer.render(Se.scene,Se.camera)}async function He(){W.mode===D&&(W.mode=F),W.startTime=!1,W.bars=0,Se.canvas&&(document.body.removeChild(Se.canvas),Se.renderer.dispose()),Se.renderer=new a.WebGLRenderer({antialias:!0}),Se.scene=new a.Scene,W.mode===$?Se.scene.background=new a.Color(1127185):(Se.scene.background=new a.Color(1118532),Se.scene.fog=new a.Fog(1118532,2,4*Ce())),u.length=0,B(m,0,(()=>{W.mode=F,He()})),B(M,0,(()=>{W.mode===F?(W.mode=D,we.sounds.METRONOME.isPlaying&&we.sounds.METRONOME.stop(),we.sounds.METRONOME.setPlaybackRate(we.BPM/60)):W.mode===D&&W.bars>Be.level.length*W.timeScale*(Be.level.repeats+2)&&(W.mode=F,we.sounds.METRONOME.setPlaybackRate(we.BPM/60),He())})),B(h,0,(()=>{W.mode===D?W.mode=F:W.mode===F&&(W.mode=D)})),B(p,0,(()=>{W.mode!==$?W.mode=$:W.mode=F,He()})),console.log(JSON.stringify(Be.level)),W.mode===$?Se.eventManager=Me(Be.level,we,Se.scene,!0):Se.eventManager=Me(Be.level,we,Se.scene,!1),ke.subscribe(Be,Se.eventManager),Ie.subscribe(),Se.kit=function(e,t){const n=[];for(let o=1;o<=8;o++){const s=K(o),i=new a.Mesh(new a.BoxGeometry(.22,1,1),Te);i.translateX(s),i.rotation.x=.5*Math.PI,i.scale.x=.05,i.scale.y=e.accuracyTime,i.scale.z=.01;const l={mesh:i,lastTriggered:-1/0,velocity:0};n.push(l),t.add(i)}return{subscribe:e=>{for(let t of Object.keys(c))B(w,c[t].note,((o,s)=>{if(W.mode===$)e.addNote(t,s);else if(W.mode===D){const o=n[c[t].lane-1];o.mesh.scale.z=s/127*.5,o.mesh.position.y=-s/127/4,o.mesh.material=l[t],o.lastTriggered=W.bars,o.velocity=s,e&&e.checkNoteOn(t,s)}}))},update:e=>{for(let t of n){t.mesh.position.z=W.bars,t.mesh.scale.y=e.accuracyTime;const n=5*(W.bars-t.lastTriggered);if(n<1){const e=t.velocity/127*(1-n);t.mesh.scale.z=.5*e,t.mesh.scale.x=Math.max(e,.05),t.mesh.position.y=-e/4}else t.mesh.scale.z=.01,t.mesh.position.y=0,t.mesh.material=Te}}}}(we,Se.scene),Se.kit.subscribe(Se.eventManager),Se.eventManager.subscribe(),Se.renderer.setSize(Le,Oe),Se.renderer.setAnimationLoop(xe),Se.canvas=document.body.appendChild(Se.renderer.domElement)}function Re(e){const t=1*W.timeScale/e,n=Math.round(W.beats*e)/e*W.timeScale;return{closest:n,previous:n-t,next:n+t}}class De extends HTMLElement{connectedCallback(){this._gameState=!1,this.render()}toggleEdit(e){I(p,0,0),W.mode===$?(document.getElementById("editButton").style.display="none",document.getElementById("editPanel").style.display="inline"):(document.getElementById("editButton").style.display="inline",document.getElementById("editPanel").style.display="none")}render(){this.innerHTML='\n        <input id="editButton" type="button" value="Edit"></input>\n        <div id="editPanel" style="display:none;">\n            <table id="editGrid" style="position: relative;margin-left: auto;">\n                <tr>\n                    <td><i id="nudgeBackwards" class="fa-lg fa-solid fa-backward"></i></td>\n                    <td><i id="snapBackwards" class="fa-lg fa-solid fa-backward-step"></i></td>\n                    <td><i id="snapForwards" class="fa-lg fa-solid fa-forward-step"></i></td>\n                    <td><i id="nudgeForwards" class="fa-lg fa-solid fa-forward"></i></td>\n                    <td><i id="repeatNote" class="fa-lg fa-solid fa-clone"></i></td>\n                </tr>\n            </table>\n            <br/>\n            <input id="doneButton" type="button" value="Done"></input>\n        </div>     \n    ',document.getElementById("editButton").addEventListener("click",this.toggleEdit.bind(this)),document.getElementById("doneButton").addEventListener("click",this.toggleEdit.bind(this)),document.getElementById("snapForwards").addEventListener("click",(()=>{I(v,0,0)})),document.getElementById("nudgeForwards").addEventListener("click",(()=>{I(b,0,0)})),document.getElementById("snapBackwards").addEventListener("click",(()=>{I(g,0,0)})),document.getElementById("nudgeBackwards").addEventListener("click",(()=>{I(f,0,0)})),document.getElementById("repeatNote").addEventListener("click",(()=>{I(_,0,0)}))}subscribe(e,t){B(v,0,(()=>{const{next:t}=Re(e.level.grid.linesPerBeat);W.mode===$&&(t<e.level.length*W.timeScale?W.bars=t:W.bars=0)})),B(g,0,(()=>{const{previous:t}=Re(e.level.grid.linesPerBeat);W.mode===$&&t>=0&&(W.bars=t)})),B(b,0,(()=>{const{next:t}=Re(8*e.level.grid.linesPerBeat);W.mode===$&&(t<e.level.length*W.timeScale?W.bars=t:W.bars=0)})),B(f,0,(()=>{const{previous:t}=Re(8*e.level.grid.linesPerBeat);W.mode===$&&t>=0&&(W.bars=t)})),B(_,0,(()=>{W.mode===$&&t.addNote()}))}}function Fe(e,t){const n=new a.AudioListener;e.add(n);const o=new a.Audio(n);return(new a.AudioLoader).load(t,(function(e){o.setBuffer(e),o.setLoop(!1),o.setVolume(.3)})),o}function $e(e,t){e.children.filter((e=>"AudioListener"==e.type)).forEach((t=>e.remove(t)));return{METRONOME:Fe(e,`sounds/${t}/metronome.mp3`),FAIL:Fe(e,`sounds/${t}/fail.mp3`),KICK_RIGHT:Fe(e,`sounds/${t}/kick.mp3`),CRASH_LEFT:Fe(e,`sounds/${t}/crash_left.mp3`),HAT_CLOSED:Fe(e,`sounds/${t}/hat_closed.mp3`),HAT_OPEN:Fe(e,`sounds/${t}/hat_open.mp3`),HAT_PEDAL:Fe(e,`sounds/${t}/hat_pedal.mp3`),RIDE_EDGE:Fe(e,`sounds/${t}/ride_edge.mp3`),SNARE_CENTER:Fe(e,`sounds/${t}/snare_center.mp3`),SNARE_RIM:Fe(e,`sounds/${t}/snare_rim.mp3`),TOM_FLOOR:Fe(e,`sounds/${t}/tom_floor.mp3`),TOM_ONE:Fe(e,`sounds/${t}/tom_one.mp3`),TOM_TWO:Fe(e,`sounds/${t}/tom_two.mp3`)}}customElements.define("edit-settings",De);class Ge extends HTMLElement{connectedCallback(){this._bpm=90,this._metronome_on=!1,this._sounds=$e(Se.camera,"kit1"),this.innerHTML='\n        <div>\n            <div style="display:inline-block">\n            <label for="accuracyTime">Time Accuracy</label>\n            <input type="number" id="accuracyTime" value="0.06" min="0.01" max="0.10" step="0.001" class="numberInput"/>  \n            </div>\n            <div style="display:inline-block">  \n            <label for="accuracyVelocity">Velocity</label>\n            <input type="number" id="accuracyVelocity" value="32" min="8" max="64" step="8" class="numberInput"/>\n            </div>\n        </div>\n        <br/>    \n        <div>\n            <div style="display:inline-block">  \n            <label for="countIn">Count In</label>\n            <input type="number" id="countIn" value="1" min="1" max="4" step="1" class="numberInput"/>\n            </div>  \n            <div style="display:inline-block"> \n            <label for="BPM">BPM</label>\n            <input type="number" id="BPM" value="90" min="20" max="400" step="1" class="numberInput"/>\n            </div>\n        </div>\n        <br/><br/>\n        <div style="display:block">  \n        <i id="metronomeIcon" class="fa-2xl fa-solid fa-volume-xmark" style="margin-right:10px"></i>\n        <select id="kitSelect">\n          <option value="none">None</option>\n          <option value="kit1" selected>Kit 1</option>\n          <option value="kit2">Kit 2</option>\n          <option value="kit3">Kit 3</option>\n        </select>\n        </div>\n        <br/><br/>\n        <input type="button" id="restart" value="Restart"/>        \n        ',document.getElementById("BPM").addEventListener("change",(e=>{const t=Number(e.target.value);t&&NaN!==t&&(this._bpm=t)})),document.getElementById("kitSelect").addEventListener("change",(e=>{"none"!=e.target.value&&(this._sounds=$e(Se.camera,e.target.value))})),document.getElementById("metronomeIcon").addEventListener("click",(e=>{this._metronome_on=!this._metronome_on,document.getElementById("metronomeIcon").className=this._metronome_on?"fa-2xl fa-solid fa-volume-high":"fa-2xl fa-solid fa-volume-xmark"}))}get accuracyTime(){return Number(document.getElementById("accuracyTime").value)}get accuracyVelocity(){return Number(document.getElementById("accuracyVelocity").value)}get countIn(){return Number(document.getElementById("countIn").value)}get BPM(){return this._bpm}get metronomeOn(){return this._metronome_on}get sounds(){return this._sounds}get kitOn(){return"none"!=document.getElementById("kitSelect").value}playSound(e,t){this.sounds[e]&&this.kitOn&&(this.sounds[e].isPlaying&&this.sounds[e].stop(),t&&this.sounds[e].setVolume(t/128),this.sounds[e].play())}}customElements.define("play-settings",Ge);class Ke extends HTMLElement{connectedCallback(){this.selected=!1,this.innerHTML='\n        <div style="display: inline-block; margin-left: 1rem"><i id="openInputSettings" class="fa-solid fa-drum"></i></div>\n        <dialog id="inputSettingsDialog">\n          <div id="noteElements"></div>\n          <div>\n          <div class="buttonStrip">\n            <div><input type="button" id="resetInputSettings" value="Reset"></input></div>\n            <div><input type="button" id="closeInputSettings" value="Done"></input></div>\n          </div> \n          </div>\n        </dialog>\n        ',document.getElementById("openInputSettings").addEventListener("click",(()=>{document.getElementById("inputSettingsDialog").showModal(),this.previousMode=W.mode,W.mode=G})),document.getElementById("closeInputSettings").addEventListener("click",(()=>{document.getElementById("inputSettingsDialog").close(),W.mode=this.previousMode,I(m,0,0)})),document.getElementById("resetInputSettings").addEventListener("click",(()=>{!function(){for(let e in N)H[e]={...N[e]};x()}(),function(){for(let e in i)c[e]={...i[e]};r()}(),this.updateNoteElements()})),this.updateNoteElements()}updateNoteElements(){const e=`<table>${Object.keys(c).reduce(((e,t)=>{let n="";for(let e in H)H[e].label===t&&(n=e);const o=`SETTINGS_${t}`;this.selected||(this.selected=o);const s=n.substring(3),a=-1==c[t].note?"":c[t].note;return e+=`<tr><td id="${o}" class="inputBinding ${this.selected===o?"selected":""}">${c[t].label}</td><td>${s}</td><td>${a}</td></tr>`}),"")}</table>`;document.getElementById("noteElements").innerHTML=e,document.querySelectorAll(".inputBinding").forEach((e=>{e.addEventListener("click",(e=>{this.selected=e.target.id,this.updateNoteElements()}))}))}subscribe(){B(T,0,(e=>{W.mode===G&&0===e.indexOf("Key")&&(!function(e,t){for(let t in H)if(0===t.indexOf("Key")&&H[t].label===e){delete H[t];break}H[t]={command:w,label:e,value:75,lastEvent:""},x()}(this.selected.substring(9),e),this.updateNoteElements())})),B(S,0,((e,t)=>{W.mode===G&&(!function(e,t){for(let e of Object.keys(c))c[e].note===t&&(c[e]={...c[e],note:-1});c[e]={...c[e],note:t},r()}(this.selected.substring(9),e),this.updateNoteElements())}))}}customElements.define("input-settings",Ke),async function(){await async function(){setTimeout((async()=>{await Be.loadExercise(),document.getElementById("restart").addEventListener("click",(()=>{He()})),document.getElementById("exercise").addEventListener("change",(async()=>{await Be.loadExercise(),await He()})),document.getElementById("playSettings").addEventListener("change",(async()=>{W.mode===D&&(W.mode=F),W.mode===F&&updateEvents(we,Se.scene)})),await He()}),100)}()}();