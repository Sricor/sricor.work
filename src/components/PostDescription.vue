<script setup>
const imagePath = 'https://data-1304997866.cos.ap-guangzhou.myqcloud.com/images/cat.jpg'
const title = 'Sricor'
</script>

<template>
    <div class="notion-page-icon-hero notion-page-icon-image">
    <span
      style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
      <span
        style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
        <img :alt="name" :src="imagePath"
          style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
      </span>
    </span>
  </div>
  <h1 class="notion-title">{{ title }}</h1>
      <div class="notion-collection-page-properties">
      <div class="notion-collection-row">
        <div class="notion-collection-row-body">
          <div class="notion-collection-row-property">
            <div class="notion-collection-column-title"><svg viewBox="0 0 14 14"
                class="notion-collection-column-title-icon">
                <path
                  d="M4 3a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zM2 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z">
                </path>
              </svg>
              <div class="notion-collection-column-title-body">Tags</div>
            </div>
            <div class="notion-collection-row-value"><span
                class="notion-property notion-property-multi_select"><a
                  href="https://transitivebullsh.it/tags/web-dev">
                  <div class="notion-property-multi_select-item notion-item-purple">Web Dev</div>
                </a><a href="https://transitivebullsh.it/tags/nodejs">
                  <div class="notion-property-multi_select-item notion-item-green">Node.js</div>
                </a><a href="https://transitivebullsh.it/tags/software-development">
                  <div class="notion-property-multi_select-item notion-item-blue">Software Development</div>
                </a><a href="https://transitivebullsh.it/tags/typescript">
                  <div class="notion-property-multi_select-item notion-item-yellow">TypeScript</div>
                </a><a href="https://transitivebullsh.it/tags/javascript">
                  <div class="notion-property-multi_select-item notion-item-yellow">JavaScript</div>
                </a></span></div>
          </div>
          <div class="notion-collection-row-property">
            <div class="notion-collection-column-title"><svg viewBox="0 0 14 14"
                class="notion-collection-column-title-icon">
                <path
                  d="M10.889 5.5H3.11v1.556h7.778V5.5zm1.555-4.444h-.777V0H10.11v1.056H3.89V0H2.333v1.056h-.777c-.864 0-1.548.7-1.548 1.555L0 12.5c0 .856.692 1.5 1.556 1.5h10.888C13.3 14 14 13.356 14 12.5V2.611c0-.855-.7-1.555-1.556-1.555zm0 11.444H1.556V3.944h10.888V12.5zM8.556 8.611H3.11v1.556h5.445V8.61z">
                </path>
              </svg>
              <div class="notion-collection-column-title-body">Published</div>
            </div>
            <div class="notion-collection-row-value"><span
                class="notion-property notion-property-date">Published March 31, 2022</span></div>
          </div>
          <div class="notion-collection-row-property">
            <div class="notion-collection-column-title"><svg viewBox="0 0 14 14"
                class="notion-collection-column-title-icon">
                <path
                  d="M7 4.568a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v1.046a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V4.568zM.5 1a.5.5 0 00-.5.5v1.045a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V1.5a.5.5 0 00-.5-.5H.5zM0 8.682a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7.636a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v1.046zm0 3.068a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-1.045a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v1.045z">
                </path>
              </svg>
              <div class="notion-collection-column-title-body">Author</div>
            </div>
            <div class="notion-collection-row-value"><span class="notion-property notion-property-text"><b><a
                    target="_blank" rel="noopener noreferrer" class="notion-link"
                    href="https://twitter.com/transitive_bs">Travis Fischer</a></b></span></div>
          </div>
        </div>
      </div>
    </div>
</template>