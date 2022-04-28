<template>
  <aside class="notion-aside">
  <div class="PageSocial_pageSocial__2q72j">
    <a class="PageSocial_action__l2jzO PageSocial_twitter__Q7LHY" href="https://twitter.com/transitive_bs" title="Twitter @transitive_bs" target="_blank" rel="noopener noreferrer">
      <div class="PageSocial_actionBg__VdO2Y">
        <div class="PageSocial_actionBgPane__iaA3V"></div>
      </div>
      <div class="PageSocial_actionBg__VdO2Y">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path>
        </svg>
      </div>
    </a>
    <a class="PageSocial_action__l2jzO PageSocial_github___g2RK" href="https://github.com/transitive-bullshit" title="GitHub @transitive-bullshit" target="_blank" rel="noopener noreferrer">
      <div class="PageSocial_actionBg__VdO2Y">
        <div class="PageSocial_actionBgPane__iaA3V"></div>
      </div>
      <div class="PageSocial_actionBg__VdO2Y">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </div>
    </a>
    <a class="PageSocial_action__l2jzO PageSocial_linkedin__24DsJ" href="https://www.linkedin.com/in/fisch2" title="LinkedIn Travis Fischer" target="_blank" rel="noopener noreferrer">
      <div class="PageSocial_actionBg__VdO2Y">
        <div class="PageSocial_actionBgPane__iaA3V"></div>
      </div>
      <div class="PageSocial_actionBg__VdO2Y">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
          <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
        </svg>
      </div>
    </a>
  </div>
  </aside>
</template>

<style scoped>
.PageSocial_pageSocial__2q72j {
	display:flex;
	flex-direction:column;
	align-items:center;
	text-align:center;
	color:var(--fg-color)
}
.PageSocial_action__l2jzO {
	position:relative;
	border-radius:50%;
	border:2px solid var(--fg-color-6);
	transition:all .3s ease-out;
	width:3.5em;
	height:3.5em;
	margin:0 0 1em;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	text-decoration:none!important;
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
	cursor:pointer
}
.PageSocial_action__l2jzO:last-child {
	margin-bottom:0
}
.PageSocial_actionBg__VdO2Y {
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center
}
.PageSocial_actionBg__VdO2Y svg {
	width:50%;
	height:50%;
	fill:var(--fg-color-6)
}
.PageSocial_actionBgPane__iaA3V {
	transition:all .3s ease-out;
	border-radius:50%;
	width:0;
	height:0
}
.PageSocial_action__l2jzO:hover {
	transition:all .1s ease-out
}
.PageSocial_action__l2jzO:hover .PageSocial_actionBgPane__iaA3V {
	width:100%;
	height:100%;
	transition:all .1s ease-out
}
.PageSocial_action__l2jzO:hover svg {
	transition:fill .1s ease-out;
	fill:var(--bg-color)
}
[data-theme=dark] .PageSocial_action__l2jzO:hover svg {
	fill:var(--fg-color)
}
.PageSocial_facebook__ShnKd .PageSocial_actionBgPane__iaA3V {
	background:#3b5998
}
.PageSocial_facebook__ShnKd:hover {
	border-color:#3b5998
}
.PageSocial_twitter__Q7LHY .PageSocial_actionBgPane__iaA3V {
	background:#2795e9
}
.PageSocial_twitter__Q7LHY:hover {
	border-color:#2795e9
}
.PageSocial_linkedin__24DsJ .PageSocial_actionBgPane__iaA3V {
	background:#0077b5
}
.PageSocial_linkedin__24DsJ:hover {
	border-color:#0077b5
}
.PageSocial_github___g2RK .PageSocial_actionBgPane__iaA3V {
	background:#c9510c
}
.PageSocial_github___g2RK:hover {
	border-color:#c9510c
}
.PageSocial_medium__fa8tD .PageSocial_actionBgPane__iaA3V {
	background:#00ab6c
}
.PageSocial_medium__fa8tD:hover {
	border-color:#00ab6c
}
.PageSocial_email__9d8lS .PageSocial_actionBgPane__iaA3V {
	background:#777
}
.PageSocial_email__9d8lS:hover {
	border-color:#777
}
@media only screen and (max-width:768px) {
	.PageSocial_links__q1XwB {
	position:relative;
	left:.5em;
	flex-wrap:wrap
}
.PageSocial_action__l2jzO:last-child {
	margin-right:1em
}
}
</style>