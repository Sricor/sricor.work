<script setup>
import Catalogue from '~/components/Catalogue.vue'
const emits = defineEmits(['setWrapper', 'setPostDescription', 'setMainType'])
emits('setWrapper', 'banner.svg')
emits('setMainType', '')
emits(
  'setPostDescription', {
    title: 'Python 学习笔记',
    author: 'Sricor',
    image: 'cat.webp',
    published: 'Published March 31, 2022',
    tag: {
      blue: 'Blog',
      purple: 'Python',
      pink: 'Tech'
    }
  }
)

/* <div class="notion-page-content notion-page-content-has-aside" id="article">
  <article>
    
  </article>
  <aside class="notion-aside">
  <div class="notion-aside-table-of-contents">
    <Catalogue selector="#article" />
  </div>
</aside>
</div> */
</script>

<template>
    <div class="notion-page-content notion-page-content-has-aside" id="article">
      <article class="notion-page-content-inner">
        <h2 class="notion-h notion-h1 notion-h-indent-0 notion-block-c0e5370e6a004fedaff53513e2cb65a2"
          data-id="c0e5370e6a004fedaff53513e2cb65a2"><span>
            <div id="c0e5370e6a004fedaff53513e2cb65a2" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#c0e5370e6a004fedaff53513e2cb65a2" title="一. 类型注解"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">一. 类型注解</span>
          </span></h2>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-c23d1871d8944c4d91e26b5dc3e75d7f"
          data-id="c23d1871d8944c4d91e26b5dc3e75d7f"><span>
            <div id="c23d1871d8944c4d91e26b5dc3e75d7f" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#c23d1871d8944c4d91e26b5dc3e75d7f" title="总结写在前边"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">总结写在前边</span>
          </span></h3>
        <ul class="notion-list notion-list-disc notion-block-c6c5a0577148415aa8f4c563667dfb49">
          <li>让代码模块的功能更清晰。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-03b4323910d545b79bfe78c5d9eaf5d5">
          <li>让编辑器可以帮助你尽早发现问题。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-bcddaa5115984f0a8ba6621a343a8891">
          <li>保持了原有的灵活性，并且兼顾了强类型语言的严谨。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-51138337680d43a799f5a20478ea4992">
          <li>根据情况而定使用类型注解</li>
        </ul>
        <div class="notion-blank notion-block-b181f5203d39425a9f5ced92403ab325">&nbsp;</div>
        <div class="notion-text notion-block-9d1eae2928b54a8cb9d20b13f2790d1b">Python 3.5
          之后的<b>类型注解</b>。理解它将非常有益于优化代码。</div>
        <div class="notion-text notion-block-03f50f663a504391ad4c7c5bc91c42f4">
          类型注解<b>仅仅</b>是提供给编辑器进行类型检查的机会，也就是起提示的作用，对 Python 程序的运行不会产生任何影响。即使进行了错误的类型赋值，只要不直接引发错误，程序依旧可以运行。</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-e6fa1c5f8a9a4adfbae5be818087590a"
          data-id="e6fa1c5f8a9a4adfbae5be818087590a"><span>
            <div id="e6fa1c5f8a9a4adfbae5be818087590a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#e6fa1c5f8a9a4adfbae5be818087590a" title="1. 变量注解"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">1. <b>变量注解</b></span>
          </span></h3>
        <div class="notion-text notion-block-26500fa92c324836a8c8827ddbebb01c">Python 中几种基本的变量类型都得到了支持：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python">a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">3</span>
b<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">3.14</span>
c<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">'abc'</span>
d<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-34287798fc934082b6e324508c6231dc"
          data-id="34287798fc934082b6e324508c6231dc"><span>
            <div id="34287798fc934082b6e324508c6231dc" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#34287798fc934082b6e324508c6231dc" title="2. 函数注解"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">2. <b>函数注解</b></span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!'</span></span></code></pre>
        <div class="notion-text notion-block-e42fceadb4d04262aec32f67e93a9028">
          你可以很清楚的知道，这个函数<em>应该</em>接收一个字符串参数&nbsp;<code
            class="notion-inline-code">name</code>&nbsp;，并且返回值<em>应该</em>也是字符串。带默认值的函数像这样书写：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>first<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> second<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">5.5</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> first <span class="token operator">+</span> second</code></pre>
        <div class="notion-text notion-block-86d8c091fcf947579797166d93c57b9b">如果函数没有返回值，那么下面两种写法都可以：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
        <div class="notion-text notion-block-9bd749e23690445785776460d1050615">自定义的对象：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name


<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>p<span class="token punctuation">:</span> Person<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">'</span></span></code></pre>
        <div class="notion-text notion-block-c4e4f625e9144e9dbe599904cacf7a63">
          如果要避免循环导入或者注解早于对象定义的情况，可以用字符串代替类型：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>p<span class="token punctuation">:</span> <span class="token string">'Person'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">'</span></span>


<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</code></pre>
        <div class="notion-text notion-block-fe95f8476d0f4837bc3c6961e62f0554">
          相比变量类型注解，函数里的类型注解更加有用，并且可能是最频繁用到注解的地方。</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-423b0e19fe6b48eaa3645578aec7c32a"
          data-id="423b0e19fe6b48eaa3645578aec7c32a"><span>
            <div id="423b0e19fe6b48eaa3645578aec7c32a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#423b0e19fe6b48eaa3645578aec7c32a" title="3. 容器类型"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">3. <b>容器类型</b></span>
          </span></h3>
        <div class="notion-text notion-block-ff9f8b37408c4eeab3a55fb110b36340">列表、字典、元组等包含元素的复合类型，用简单的
          list，dict，tuple 不能够明确说明内部元素的具体类型。</div>
        <div class="notion-text notion-block-1f81e7c9a8cc435a934cc7375bd05a42">因此要用到&nbsp;<code
            class="notion-inline-code">typing</code>&nbsp;模块提供的<b>复合注解</b>功能：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Dict<span class="token punctuation">,</span> Tuple

<span class="token comment"># 参数1: 元素为 int 的列表</span>
<span class="token comment"># 参数2: 键为字符串，值为 int 的字典</span>
<span class="token comment"># 返回值: 包含两个元素的元组</span>
<span class="token keyword">def</span> <span class="token function">mix</span><span class="token punctuation">(</span>scores<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ages<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-5050b8481feb43e792aefff8bedad570">如果你用的是 Python 3.9+
          版本，内置的容器类型就支持了复合注解：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">mix</span><span class="token punctuation">(</span>scores<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ages<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-a4a54ce5b2854b828f69db4e4a95919f">
          在某些情况下，不需要严格区分参数到底是列表还是元组（这种情况还蛮多的）。这时候就可以将它们的特征抽象为更泛化的类型（泛型），比如 Sequence（序列）。</div>
        <div class="notion-text notion-block-d2c922e750bc4c12916fb9f3d29428d7">下面是例子：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token comment"># Python 3.8 之前的版本</span>
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Sequence <span class="token keyword">as</span> Seq1

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>seq<span class="token punctuation">:</span> Seq1<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> seq<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>


<span class="token comment"># Python 3.9+ 也可以这么写</span>
<span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Sequence <span class="token keyword">as</span> Seq2

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>seq<span class="token punctuation">:</span> Seq2<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> seq<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-00b6f4c9a34b4139a581898f82a9d099">
          例子中函数的参数不对容器的类型做具体要求，只要它是个序列（比如列表和元组）就可以。</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-3a95db0bff314bbfaf69e8a866d71448"
          data-id="3a95db0bff314bbfaf69e8a866d71448"><span>
            <div id="3a95db0bff314bbfaf69e8a866d71448" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#3a95db0bff314bbfaf69e8a866d71448" title="4. 类型别名"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">4. <b>类型别名</b></span>
          </span></h3>
        <div class="notion-text notion-block-35176f8e68b544c7990031a903e7be18">
          有时候对象的类型可能会非常复杂，或者希望给类型赋予一个有意义的名称，那么可以这样定义类型的别名：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Tuple

<span class="token comment"># 类型别名</span>
Vector2D <span class="token operator">=</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>vector<span class="token punctuation">:</span> Vector2D<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span>

foo<span class="token punctuation">(</span>vector<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Output: (1, 2)</span></code></pre>
        <div class="notion-text notion-block-6fa091b993214288bd0a17567efc95ba"><code
            class="notion-inline-code">Vector2D</code>&nbsp;这个名称清晰的表达了这个对象是一个二维的向量。</div>
        <div class="notion-text notion-block-ed02843b50954729b2145b461d035301">与类型别名有点类似的，是用&nbsp;<code
            class="notion-inline-code">NewType</code>&nbsp;创建自定义类型：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> NewType
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Tuple

<span class="token comment"># 创建新类型</span>
Vector3D <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">'Vector3D'</span><span class="token punctuation">,</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>vector<span class="token punctuation">:</span> Vector3D<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-8fa1650d823345bd951050362467b937">不同的是&nbsp;<code
            class="notion-inline-code">NewType</code>&nbsp;创建了原始类型的“子类”：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token comment"># 类型检查成功</span>
<span class="token comment"># 类型别名和原始类型是等价的</span>
foo<span class="token punctuation">(</span>vector<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 类型检查失败</span>
<span class="token comment"># NewType创建的是原始类型的“子类”</span>
bar<span class="token punctuation">(</span>vector<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 类型检查成功</span>
<span class="token comment"># 传入参数必须是 Vector3D 的“实例”</span>
v_3d <span class="token operator">=</span> Vector3D<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
bar<span class="token punctuation">(</span>vector<span class="token operator">=</span>v_3d<span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-af3eb7fd3fe544628a45a38693eef275">具体用哪种，得根据情况而定。</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-d37f959b546249be814702c0846a791a"
          data-id="d37f959b546249be814702c0846a791a"><span>
            <div id="d37f959b546249be814702c0846a791a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#d37f959b546249be814702c0846a791a" title="5. 更多类型"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5. <b>更多类型</b></span>
          </span></h3>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-e7e73304f04f457a8e40c6d875722f4f"
          data-id="e7e73304f04f457a8e40c6d875722f4f"><span>
            <div id="e7e73304f04f457a8e40c6d875722f4f" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#e7e73304f04f457a8e40c6d875722f4f" title="5.1 NoReturn"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.1 <b>NoReturn</b></span>
          </span></h4>
        <div class="notion-text notion-block-14fe46f58b134cc690e299ccee9d0d8e">如果函数没有返回值，那么可以这样写：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> NoReturn

<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NoReturn<span class="token punctuation">:</span>
    <span class="token keyword">raise</span> RuntimeError<span class="token punctuation">(</span><span class="token string">'oh no'</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-36fb4cc1d5b7417d9c07f84f72db5412">注意下面这样写是错误的：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NoReturn<span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
        <div class="notion-text notion-block-39f8a8afe99c4c98adef739003fd3811">因为 Python 的函数运行结束时隐式返回&nbsp;<code
            class="notion-inline-code">None</code>&nbsp;，这和真正的无返回值是有区别的。</div>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-5be59e53e81a4b5baa502e9fa8d7bad6"
          data-id="5be59e53e81a4b5baa502e9fa8d7bad6"><span>
            <div id="5be59e53e81a4b5baa502e9fa8d7bad6" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#5be59e53e81a4b5baa502e9fa8d7bad6" title="5.2 Optional"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.2 <b>Optional</b></span>
          </span></h4>
        <div class="notion-text notion-block-0dd7675726524c36a6b91338587ef9de">函数既有可能返回&nbsp;<code
            class="notion-inline-code">None</code>&nbsp;，也有可能返回&nbsp;<code
            class="notion-inline-code">str</code>&nbsp;。单凭返回值注解为&nbsp;<code
            class="notion-inline-code">str</code>&nbsp;是不能准确表达此情况的。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">'Yeah'</span></code></pre>
        <div class="notion-text notion-block-0f7c70baa10f43dea9c0a4ea7e2dc1e5">
          这种“可能有也可能没有”的状态被称为<b>可选值</b>，在某些项目中非常常见。比如 web 应用中某个函数接受账号和密码作为参数，如果匹配则返回用户对象，若不匹配则返回&nbsp;<code
            class="notion-inline-code">None</code>&nbsp;。</div>
        <div class="notion-text notion-block-71c51af42d8a4d5590e885cd577642c0">因此，有专门的可选值类型注解可以处理这种情况：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">'Yeah'</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-231b7d7a2f73446393d5f71385ed170a"
          data-id="231b7d7a2f73446393d5f71385ed170a"><span>
            <div id="231b7d7a2f73446393d5f71385ed170a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#231b7d7a2f73446393d5f71385ed170a" title="5.3 Union"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.3 <b>Union</b></span>
          </span></h4>
        <div class="notion-text notion-block-1ab6011e675d475a8aa330932c383b0c">比&nbsp;<code
            class="notion-inline-code">Optional</code>&nbsp;涵盖面更广的是&nbsp;<code
            class="notion-inline-code">Union</code>&nbsp;。</div>
        <div class="notion-text notion-block-04ea702d346f4a5eb24bd72e24e2abf5">如果函数的返回值是多种类型中的一种时，可以这样写：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Union

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token comment"># ....</span>
    <span class="token comment"># some code here</span></code></pre>
        <div class="notion-text notion-block-e18f1780a69c4bb4982202e2afb62de6">上面这个函数可以返回字符串、整型、浮点型中的任意一种类型。
        </div>
        <div class="notion-text notion-block-20ce7aa361ea4aeab35129d1e214ce07">可以发现&nbsp;<code
            class="notion-inline-code">Optional</code>&nbsp;实际上是&nbsp;<code
            class="notion-inline-code">Union</code>&nbsp;的特例：<code
            class="notion-inline-code">Optional[X]</code>&nbsp;和&nbsp;<code class="notion-inline-code">Union[X,
            None]</code>&nbsp;是等价的。</div>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-d086452448844ce5abaee1a679413192"
          data-id="d086452448844ce5abaee1a679413192"><span>
            <div id="d086452448844ce5abaee1a679413192" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#d086452448844ce5abaee1a679413192" title="5.4 Callable"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.4 <b>Callable</b></span>
          </span></h4>
        <div class="notion-text notion-block-a87e5ad5adbf458da3520ddf0729c463">Python
          中的函数和类的区别并不明显。只要实现了对应的接口，类实例也可以是<b>可调用的</b>。</div>
        <div class="notion-text notion-block-407413b36ac34996865a3f06140cea86">如果不关心对象的具体类型，只要求是可调用的，那么可以这样写：
        </div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Callable

<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I am foo'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I am bar'</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> Callable<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 类型检查通过</span>
hello<span class="token punctuation">(</span>Foo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 同样通过</span>
hello<span class="token punctuation">(</span>bar<span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-9a6f5f3028404c9e9aca562ea5e99f88"
          data-id="9a6f5f3028404c9e9aca562ea5e99f88"><span>
            <div id="9a6f5f3028404c9e9aca562ea5e99f88" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#9a6f5f3028404c9e9aca562ea5e99f88" title="5.5 Literal"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.5 <b>Literal</b></span>
          </span></h4>
        <div class="notion-text notion-block-dff3ee3c339a460e8c4e498893e066ac">即字面量。它在定义简单的枚举值时非常好用，比如：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Literal

MODE <span class="token operator">=</span> Literal<span class="token punctuation">[</span><span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">open_helper</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> mode<span class="token punctuation">:</span> MODE<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

open_helper<span class="token punctuation">(</span><span class="token string">'/some/path'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>  <span class="token comment"># 成功</span>
open_helper<span class="token punctuation">(</span><span class="token string">'/other/path'</span><span class="token punctuation">,</span> <span class="token string">'typo'</span><span class="token punctuation">)</span>  <span class="token comment"># 失败</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-6155a8c5ffc74c23be4fcd3a948e1e8b"
          data-id="6155a8c5ffc74c23be4fcd3a948e1e8b"><span>
            <div id="6155a8c5ffc74c23be4fcd3a948e1e8b" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#6155a8c5ffc74c23be4fcd3a948e1e8b" title="5.6 Protocol"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.6 <b>Protocol</b></span>
          </span></h4>
        <div class="notion-text notion-block-fb98119cd9c64c79ab4186a91f6e21e8">
          即<b>协议</b>。我们通常说一个对象遵守了某个”协议“，意思是这个对象实现了”协议“中规定的属性或者方法。</div>
        <div class="notion-text notion-block-769a54e720724efe98603372e612fa3f">比如下面这个例子：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Protocol

<span class="token keyword">class</span> <span class="token class-name">Proto</span><span class="token punctuation">(</span>Protocol<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I am proto'</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I am A'</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'I am B'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">yeah</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> Proto<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token comment"># 通过，A 实现了协议中的 foo() 方法</span>
yeah<span class="token punctuation">(</span>A<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 不通过，B 未实现 foo()</span>
yeah<span class="token punctuation">(</span>B<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-2abafb6c6fd34a1995458e8c92a28b32"
          data-id="2abafb6c6fd34a1995458e8c92a28b32"><span>
            <div id="2abafb6c6fd34a1995458e8c92a28b32" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#2abafb6c6fd34a1995458e8c92a28b32" title="5.7 Any"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.7 <b>Any</b></span>
          </span></h4>
        <div class="notion-text notion-block-51542a2f8c9341f6911891608ea06ae4">任何类型都与&nbsp;<code
            class="notion-inline-code">Any</code>&nbsp;兼容。当然如果你把所有的类型都注解为&nbsp;<code
            class="notion-inline-code">Any</code>&nbsp;将毫无意义，因此&nbsp;<code
            class="notion-inline-code">Any</code>&nbsp;应当尽量少使用。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Any

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Any<span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-c07ce29fe6e648a983a4bc7a6808dc00"
          data-id="c07ce29fe6e648a983a4bc7a6808dc00"><span>
            <div id="c07ce29fe6e648a983a4bc7a6808dc00" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#c07ce29fe6e648a983a4bc7a6808dc00" title="6. 泛型"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">6. <b>泛型</b></span>
          </span></h3>
        <div class="notion-text notion-block-34fd92f82ae5448696decfea8bfa823e">要理解<b>泛型</b>，首先得知道没有它时所遇到的麻烦。
        </div>
        <div class="notion-text notion-block-399e44ebd12d47c586c6091982749024">
          假设有一个函数，要求它既能够处理字符串，又能够处理数字。那么你可能很自然地想到了&nbsp;<code class="notion-inline-code">Union</code>&nbsp;。
        </div>
        <div class="notion-text notion-block-aa54a4a7e50b41998aefc776128fa27b">于是写出第一版代码：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Union<span class="token punctuation">,</span> List

U <span class="token operator">=</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> U<span class="token punctuation">,</span> b<span class="token punctuation">:</span> U<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>U<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span></code></pre>
        <div class="notion-text notion-block-e185f04bdc194362b342e6065ce334a5">
          这样写有个很大的弊端，就是参数的类型可以混着用（比如&nbsp;<code class="notion-inline-code">a: int</code>&nbsp;且&nbsp;<code
            class="notion-inline-code">b:str</code>&nbsp;），即便你并不想具有这样的特性。看下面这个就明白了：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token comment"># 类型检查通过</span>
<span class="token comment"># 因为 Union[str, int] 可以是其中任意一种类型</span>
<span class="token comment"># 即便你并不想将 str 和 int 混用</span>
foo<span class="token punctuation">(</span><span class="token string">'Joe'</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span>

<span class="token comment"># 通过</span>
foo<span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>

<span class="token comment"># 通过</span>
foo<span class="token punctuation">(</span><span class="token string">'Joe'</span><span class="token punctuation">,</span> <span class="token string">'David'</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-51d3598a0a4344b693f6fd7093b5246d"><b>泛型</b>就可以解决此问题。来看第二版代码：</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> TypeVar<span class="token punctuation">,</span> List

<span class="token comment"># 定义泛型 T</span>
<span class="token comment"># T 必须是 str 或 int 其中一种</span>
T <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">'T'</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> T<span class="token punctuation">,</span> b<span class="token punctuation">:</span> T<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>

<span class="token comment"># 类型检查不通过</span>
<span class="token comment"># 函数的参数必须为同一个类型"T"</span>
bar<span class="token punctuation">(</span><span class="token string">'Joe'</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span>

<span class="token comment"># 通过</span>
bar<span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span>

<span class="token comment"># 通过</span>
bar<span class="token punctuation">(</span><span class="token string">'Joe'</span><span class="token punctuation">,</span> <span class="token string">'David'</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-02344537d6434921bc4c353a74074c40">
          可以看出，泛型类似于某种模板（或者占位符），它可以很精确地将对象限定在你真正需要的类型。</div>
        <div class="notion-text notion-block-facabf5007fb4690add3db9e9717052f">让我们再看看下面这个对泛型的应用：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Dict<span class="token punctuation">,</span> TypeVar

<span class="token comment"># 定义泛型 K 和 V</span>
<span class="token comment"># K 和 V 的具体类型没有限制</span>
K <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">"K"</span><span class="token punctuation">)</span>
V <span class="token operator">=</span> TypeVar<span class="token punctuation">(</span><span class="token string">"V"</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_item</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> K<span class="token punctuation">,</span> container<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span>K<span class="token punctuation">,</span> V<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> V<span class="token punctuation">:</span>
    <span class="token keyword">return</span> container<span class="token punctuation">[</span>key<span class="token punctuation">]</span>


dict_1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span>
dict_2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">:</span> <span class="token string">"dusai"</span><span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>get_item<span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> dict_1<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 例1</span>
<span class="token comment"># 类型检查通过，输出: 10</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>get_item<span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">,</span> dict_2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 例2</span>
<span class="token comment"># 类型检查通过，输出: dusai</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>get_item<span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> dict_2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 例3</span>
<span class="token comment"># 类型检查失败</span>
<span class="token comment"># 因为"name"是字符串，而dict_2的键为整型</span></code></pre>
        <ul class="notion-list notion-list-disc notion-block-b93daf4da9f046d9bacb472c01727acd">
          <li>代码中定义了两个泛型 K 和 V，对它两的类型没有做任何限制，也就是说可以是任意类型。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-ba52c31113a442849850b823123e303d">
          <li>函数&nbsp;<code class="notion-inline-code">get_item()</code>&nbsp;接受两个参数。这个函数不关心参数&nbsp;<code
              class="notion-inline-code">container</code>&nbsp;字典的键是什么类型，或者字典的值是什么类型；但它的参数&nbsp;<code
              class="notion-inline-code">container</code>&nbsp;必须是字典，参数&nbsp;<code
              class="notion-inline-code">key</code>&nbsp;必须与字典的键为同类型，并且返回值和字典的值必须为同类型。仅仅通过查看函数的类型注解，就可以获得所有这些信息。
          </li>
        </ul>
        <div class="notion-text notion-block-6460ea82832243acb6bc6bd6994e37e0">
          重点来看下<em>例3</em>的类型检查为什么会<b>失败</b>：</div>
        <ul class="notion-list notion-list-disc notion-block-dff0789fb20d4cff89ed96ed8ad95bb2">
          <li><code class="notion-inline-code">dict_2</code>&nbsp;定义时，其键被定义为整型。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-46b2d6207c214359a9aa72a0d1bd6f99">
          <li><code class="notion-inline-code">get_item("name", dict_2)</code>&nbsp;调用时，<code
              class="notion-inline-code">"name"</code>&nbsp;为字符串，而&nbsp;<code
              class="notion-inline-code">dict_2</code>&nbsp;的键为整型，类型不一致。而类型注解中清楚表明它两应该为同一个类型&nbsp;<code
              class="notion-inline-code">K</code>&nbsp;，产生冲突。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-85f2b37075d44449b37e03e02cb882ed">
          <li>编辑器察觉到冲突，友好地提示你，这里可能出错了。</li>
        </ul>
        <div class="notion-text notion-block-aaa90d64b3b144b787a4af47815e6e66">
          泛型很巧妙地<b>对类型进行了参数化</b>，同时又保留了函数处理不同类型时的灵活性。</div>
        <div class="notion-text notion-block-5dee347719d047028898449c672b4880">再回过头来看看类型注解的作用：</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">get_item</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> K<span class="token punctuation">,</span> container<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span>K<span class="token punctuation">,</span> V<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> V<span class="token punctuation">:</span>
    <span class="token comment"># ...</span>

<span class="token keyword">def</span> <span class="token function">get_item</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span></code></pre>
        <div class="notion-text notion-block-4af5436109004ce6aaabfb9c4a825270">
          上面两个函数功能完全相同，但是没有类型注解的那个，显然需要花更多的时间阅读函数内部的代码，去确认函数到底干了什么。并且它也无法利用编辑器的类型检查，在早期帮助排除一些低级错误。</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-7ee4845af6754f7ea46b019c93f56790"
          data-id="7ee4845af6754f7ea46b019c93f56790"><span>
            <div id="7ee4845af6754f7ea46b019c93f56790" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#7ee4845af6754f7ea46b019c93f56790" title="7. 总结"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">7. <b>总结</b></span>
          </span></h3>
        <div class="notion-text notion-block-7760b419ed984d02a4a536c241d9e2ce">Python
          社区为什么花了很大力气，去实现了类型注解这个仅仅起”提示作用“的功能：</div>
        <ul class="notion-list notion-list-disc notion-block-e5df7892a1f545bb88a173d9809729c0">
          <li>让代码模块的功能更清晰。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-475bd766b24244fa9d1a0a32229eff56">
          <li>让编辑器可以帮助你尽早发现问题。</li>
        </ul>
        <div class="notion-text notion-block-8068a22511544151bd842b6fa734ab2a">什么时候用类型注解要根据情况而定。但总体来说是推荐尽量多用，它让
          Python 保持了原有的灵活性，并且兼顾了强类型语言的严谨。</div>
        <h2 class="notion-h notion-h1 notion-h-indent-0 notion-block-ba3458dafb874000b1a5ec7ae2a89ced"
          data-id="ba3458dafb874000b1a5ec7ae2a89ced"><span>
            <div id="ba3458dafb874000b1a5ec7ae2a89ced" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#ba3458dafb874000b1a5ec7ae2a89ced" title="二. 装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">二. 装饰器</span>
          </span></h2>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-dac71a625ce54d508775848022036bd2"
          data-id="dac71a625ce54d508775848022036bd2"><span>
            <div id="dac71a625ce54d508775848022036bd2" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#dac71a625ce54d508775848022036bd2" title="1. 函数"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">1. <b>函数</b></span>
          </span></h3>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-9ada7047b2bb499f8f50a6a3cbe7049b"
          data-id="9ada7047b2bb499f8f50a6a3cbe7049b"><span>
            <div id="9ada7047b2bb499f8f50a6a3cbe7049b" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#9ada7047b2bb499f8f50a6a3cbe7049b"
              title="1.1 函数是python中的一等对象"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>1.1 函数是python中的一等对象</b></span>
          </span></h4>
        <div class="notion-text notion-block-14a7298bd4454f4e86150d962ccfd4c2">
          函数可以作为别的函数的参数、函数的返回值，赋值给变量或存储在数据结构中。</div>
        <div class="notion-text notion-block-11c5cce0715e404f9d9980567b244607"><b>函数作为参数</b></div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">say_hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span>

<span class="token keyword">def</span> <span class="token function">be_awesome</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Yo </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, together we are the awesomest!"</span></span>

<span class="token keyword">def</span> <span class="token function">greet_bob</span><span class="token punctuation">(</span>greeter_func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> greeter_func<span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>greet_bob<span class="token punctuation">(</span>say_hello<span class="token punctuation">)</span>
<span class="token string">'Hello Bob'</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet_bob<span class="token punctuation">(</span>be_awesome<span class="token punctuation">)</span>
<span class="token string">'Yo Bob, together we are the awesomest!'</span></code></pre>
        <div class="notion-text notion-block-3c7dc7a4466f451c956bf0af9864f0f7"><b>函数作为返回值</b></div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">parent</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">first_child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"Hi, I am Emma"</span>

    <span class="token keyword">def</span> <span class="token function">second_child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">"Call me Liam"</span>

    <span class="token keyword">if</span> num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> first_child
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> second_child</code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-34e72f2a9a7d487abc792f9d60e80209"
          data-id="34e72f2a9a7d487abc792f9d60e80209"><span>
            <div id="34e72f2a9a7d487abc792f9d60e80209" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#34e72f2a9a7d487abc792f9d60e80209" title="1.2 内置函数"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>1.2 内置函数</b></span>
          </span></h4>
        <div class="notion-text notion-block-01a1c64a4e664e0aa4f8ff01aaf620b8">在一个函数里面定义的函数称为<b>内置函数</b>（inner
          Functions）。内置函数只能在父函数内使用，不能在函数外使用。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Printing from the parent() function"</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">first_child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Printing from the first_child() function"</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">second_child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Printing from the second_child() function"</span><span class="token punctuation">)</span>

    second_child<span class="token punctuation">(</span><span class="token punctuation">)</span>
    first_child<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-3cdae8a0a8414235b7e920d4ce5ce935"
          data-id="3cdae8a0a8414235b7e920d4ce5ce935"><span>
            <div id="3cdae8a0a8414235b7e920d4ce5ce935" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#3cdae8a0a8414235b7e920d4ce5ce935" title="2. 装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2. 装饰器</b></span>
          </span></h3>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-bb4db51dab1541c4b4dcdb0593f758a5"
          data-id="bb4db51dab1541c4b4dcdb0593f758a5"><span>
            <div id="bb4db51dab1541c4b4dcdb0593f758a5" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#bb4db51dab1541c4b4dcdb0593f758a5" title="2.1 装饰器实现"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.1 装饰器实现</b></span>
          </span></h4>
        <div class="notion-text notion-block-1bfbe2f54bd14fc9bf8f6d47d26c4dc9">如下是一个简单的装饰器实现代码，函数<code
            class="notion-inline-code">my_decorator</code>传入一个函数<code class="notion-inline-code">func</code>再返回函数<code
            class="notion-inline-code">wrapper</code>，<code class="notion-inline-code">wrapper</code>对<code
            class="notion-inline-code">func</code>的功能进行了增加。通过代码<code class="notion-inline-code">say_whee =
            my_decorator(say_whee)</code>进行了装饰。所以简单来说，装饰器对一个函数进行包装，来修改他的功能。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Something is happening before the function is called."</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Something is happening after the function is called."</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token keyword">def</span> <span class="token function">say_whee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Whee!"</span><span class="token punctuation">)</span>

say_whee <span class="token operator">=</span> my_decorator<span class="token punctuation">(</span>say_whee<span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_whee<span class="token punctuation">(</span><span class="token punctuation">)</span>
Something <span class="token keyword">is</span> happening before the function <span class="token keyword">is</span> called<span class="token punctuation">.</span>Whee!
Something <span class="token keyword">is</span> happening after the function <span class="token keyword">is</span> called<span class="token punctuation">.</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-04375292bc324d85b7e3f711e9639bc0"
          data-id="04375292bc324d85b7e3f711e9639bc0"><span>
            <div id="04375292bc324d85b7e3f711e9639bc0" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#04375292bc324d85b7e3f711e9639bc0"
              title="2.2 语法糖（Syntactic Sugar）"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.2 语法糖（Syntactic Sugar）</b></span>
          </span></h4>
        <div class="notion-text notion-block-43e1c4d8436c4785b7788c19d208653e">通过<code
            class="notion-inline-code">say_whee = my_decorator(say_whee)</code>进行装饰有一点麻烦，所以在函数定义时通过<code
            class="notion-inline-code">@</code>进行修饰，如下。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Something is happening before the function is called."</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Something is happening after the function is called."</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">say_whee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Whee!"</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-8d5860a0c829452c8fc82420fa88d2c7"></div>
        <div class="notion-text notion-block-51c99effcb2e42848123fe1bd33efe67"><code
            class="notion-inline-code">@my_decorator</code>可以看作<code class="notion-inline-code">say_whee =
            my_decorator(say_whee)</code></div>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-28c58b1403324e74a306e2b4227cf31f"
          data-id="28c58b1403324e74a306e2b4227cf31f"><span>
            <div id="28c58b1403324e74a306e2b4227cf31f" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#28c58b1403324e74a306e2b4227cf31f" title="2.2.3 带参数的装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.2.3 带参数的装饰器</b></span>
          </span></h4>
        <div class="notion-text notion-block-54425cd995724e6d9b435b0b684ead55">内置装饰函数<code
            class="notion-inline-code">wrapper_do_twice</code>使用<code class="notion-inline-code">*args,
            **kwargs</code>获取任意数量的参数，再传给<code class="notion-inline-code">func</code>。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">do_twice</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_do_twice</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_do_twice
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_whee<span class="token punctuation">(</span><span class="token punctuation">)</span>
Whee!
Whee!

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> greet<span class="token punctuation">(</span><span class="token string">"World"</span><span class="token punctuation">)</span>
Hello World
Hello World</code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-55624728fce44626b399a4997592f7c3"
          data-id="55624728fce44626b399a4997592f7c3"><span>
            <div id="55624728fce44626b399a4997592f7c3" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#55624728fce44626b399a4997592f7c3" title="2.2.4 装饰器的返回值"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.2.4 装饰器的返回值</b></span>
          </span></h4>
        <div class="notion-text notion-block-fb4d0b8f4f074efea36e36d7e438279c">以上定义的修饰器<code
            class="notion-inline-code">wrapper_do_twice</code>并没有返回值，所以如果装饰的函数有返回值就无法得到返回的结果。通过一下修改使修饰后的函数返回值和之前的一致。
        </div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">do_twice</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_do_twice</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_do_twice
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> return_greeting<span class="token punctuation">(</span><span class="token string">"Adam"</span><span class="token punctuation">)</span>
Creating greeting
Creating greeting
<span class="token string">'Hi Adam'</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-bb0aadffaeaa4447b76d7e0eb69e00fc"
          data-id="bb0aadffaeaa4447b76d7e0eb69e00fc"><span>
            <div id="bb0aadffaeaa4447b76d7e0eb69e00fc" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#bb0aadffaeaa4447b76d7e0eb69e00fc" title="2.2.5 保留函数的信息"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.2.5 保留函数的信息</b></span>
          </span></h4>
        <div class="notion-text notion-block-c166343987c94a28adbe04ab5be67060">由于包装后的函数是<code
            class="notion-inline-code">wrapper_do_twice</code>，函数名的等信息都修改为<code
            class="notion-inline-code">wrapper_do_twice</code>的信息。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> say_whee
<span class="token operator">&lt;</span>function do_twice<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token builtin">locals</span><span class="token operator">&gt;</span><span class="token punctuation">.</span>wrapper_do_twice at <span class="token number">0x7f43700e52f0</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span> say_whee<span class="token punctuation">.</span>__name__
<span class="token string">'wrapper_do_twice'</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">help</span><span class="token punctuation">(</span>say_whee<span class="token punctuation">)</span>
Help on function wrapper_do_twice <span class="token keyword">in</span> module decorators<span class="token punctuation">:</span>

wrapper_do_twice<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-7d9ab4f1079b418b9266ff79591fc638">为了解决这个问题，使用<code
            class="notion-inline-code">functools.wraps</code>修饰修饰器，这将保留有关原始功能的信息。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">do_twice</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_do_twice</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_do_twice</code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-2e127baca78d4669b3c5665a8dcab939"
          data-id="2e127baca78d4669b3c5665a8dcab939"><span>
            <div id="2e127baca78d4669b3c5665a8dcab939" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#2e127baca78d4669b3c5665a8dcab939" title="2. 装饰器的高级使用方法"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2. 装饰器的高级使用方法</b></span>
          </span></h3>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-193a0e85e8104c11a6502bd8e2e4d042"
          data-id="193a0e85e8104c11a6502bd8e2e4d042"><span>
            <div id="193a0e85e8104c11a6502bd8e2e4d042" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#193a0e85e8104c11a6502bd8e2e4d042" title="2.1 类中的装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.1 类中的装饰器</b></span>
          </span></h4>
        <div class="notion-text notion-block-88aa6ae361e04c8080a36858ea068367">
          一、类中修饰器的一种用法是<b>装饰类中的函数</b>，有一些常用的python内置的修饰器。</div>
        <div class="notion-text notion-block-1b9a9ea0e8eb467699dd30f9aa10a11f">1、<code
            class="notion-inline-code">@property</code></div>
        <div class="notion-text notion-block-30a2b82ced034bddb064596ce81b464b">
          修饰函数可以作为属性使用，与所定义的属性配合使用，这样可以防止属性被修改。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">House</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_price <span class="token operator">=</span> price

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">price</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_price

    <span class="token decorator annotation punctuation">@price<span class="token punctuation">.</span>setter</span>
    <span class="token keyword">def</span> <span class="token function">price</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> new_price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> new_price <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">and</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>new_price<span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_price <span class="token operator">=</span> new_price
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Please enter a valid price"</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@price<span class="token punctuation">.</span>deleter</span>
    <span class="token keyword">def</span> <span class="token function">price</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">del</span> self<span class="token punctuation">.</span>_price</code></pre>
        <blockquote class="notion-quote notion-block-2440880f67ae4c659fd76344bfe8dfee">
          按照惯例，在python中当在变量名前加一个下划线时，意味着告诉其他开发人员不应直接在类外访问或者修改改变量。</blockquote>
        <ul class="notion-list notion-list-disc notion-block-fd6a9c5e8cdb4eb4a57448c52414aae7">
          <li><code class="notion-inline-code">@property</code>&nbsp;获取属性。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-3b0183c96d814de398459e9b23c248ab">
          <li><code class="notion-inline-code">@price.setter</code>&nbsp;属性设定，可以用来限制属性的范围等等。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-9d484335eef24012a10b37b3cf73749a">
          <li><code class="notion-inline-code">@price.deleter</code>&nbsp;定义属性的删除，在<code class="notion-inline-code">del
              house.price</code>时被执行。</li>
        </ul>
        <div class="notion-text notion-block-2bc7576446394abcbb6577bdb40369e2">2、<code
            class="notion-inline-code">@abstractmethod</code></div>
        <div class="notion-text notion-block-4207e7a570a841aca0504a905f5a328d">
          抽象方法表示基类的一个方法，没有实现，所以基类不能实例化，<b>子类实现了该抽象方法才能被实例化</b>。</div>
        <div class="notion-text notion-block-9629c5e58f624961b20078e676d6a23d">3、<code
            class="notion-inline-code">@classmethod</code></div>
        <div class="notion-text notion-block-1fe1e722affe467ca43c08ff16ea4ed4">classmethod声明方法为<b>类方法</b>,直接通过
          类||实例.类方法（）调用。经过@classmethod修饰的方法，不需要self参数，但是需要一个标识类本身的cls参数。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">T</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">class_test</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token comment">#必须有cls参数print "i am a class method"</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span>
    T<span class="token punctuation">.</span>class_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
    T<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>class_test<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-295d930e4d304e26905aa30e40c9a562">4、<code
            class="notion-inline-code">@staticmethoed</code></div>
        <div class="notion-text notion-block-23fb7d6e4518411cbf12809b316d9d1c">声明方法为<b>静态方法</b>，直接通过
          类||实例.静态方法（）调用。经过@staticmethod修饰的方法，不需要self参数，其使用方法和直接调用函数一样。</div>
        <div class="notion-text notion-block-98b01356537e490491fed9b54f37ec6e">
          二、另一种用法是<b>装饰整个类</b>，装饰器接收的是一个类而不是一个函数，如下装饰器等同于<code class="notion-inline-code">PlayingCard =
            dataclass(PlayingCard)</code>。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> dataclasses <span class="token keyword">import</span> dataclass

<span class="token decorator annotation punctuation">@dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">PlayingCard</span><span class="token punctuation">:</span>
    rank<span class="token punctuation">:</span> <span class="token builtin">str</span>
    suit<span class="token punctuation">:</span> <span class="token builtin">str</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-75dcdcc723c04b5ca118738e9d4046a5"
          data-id="75dcdcc723c04b5ca118738e9d4046a5"><span>
            <div id="75dcdcc723c04b5ca118738e9d4046a5" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#75dcdcc723c04b5ca118738e9d4046a5"
              title="2.2 多个装饰器装饰一个函数"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.2 多个装饰器装饰一个函数</b></span>
          </span></h4>
        <div class="notion-text notion-block-f10c89668d4d4c4f829c33d2bac67e92">
          可以将几个装饰器堆叠在一起，将它们叠在一起，从而将它们应用到一个函数上。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> decorators <span class="token keyword">import</span> debug<span class="token punctuation">,</span> do_twice

<span class="token decorator annotation punctuation">@debug</span>
<span class="token decorator annotation punctuation">@do_twice</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-022fd1de58714198902893f8992b2000"
          data-id="022fd1de58714198902893f8992b2000"><span>
            <div id="022fd1de58714198902893f8992b2000" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#022fd1de58714198902893f8992b2000" title="2.3 带参数的装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.3 带参数的装饰器</b></span>
          </span></h4>
        <div class="notion-text notion-block-7cc779aafdee44e5ae7e827a2d0a6ec0">能将参数传递给装饰器是很有用的，比如我们可以给<code
            class="notion-inline-code">@do_twice</code>扩展为<code
            class="notion-inline-code">@repeat(num_times)</code>。注意代码多内置了一层函数传参，可以理解为<code
            class="notion-inline-code">repeat(num_times)</code>返回的函数再来装饰<code class="notion-inline-code">func</code>。
        </div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">repeat</span><span class="token punctuation">(</span>num_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorator_repeat</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper_repeat</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
                value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token keyword">return</span> wrapper_repeat
    <span class="token keyword">return</span> decorator_repeat

<span class="token decorator annotation punctuation">@repeat</span><span class="token punctuation">(</span>num_times<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-2f340aee6a9e4be1ac9ebb043cca09bc"
          data-id="2f340aee6a9e4be1ac9ebb043cca09bc"><span>
            <div id="2f340aee6a9e4be1ac9ebb043cca09bc" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#2f340aee6a9e4be1ac9ebb043cca09bc"
              title="2.4 带参数和不带参数共存的装饰器"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.4 带参数和不带参数共存的装饰器</b></span>
          </span></h4>
        <div class="notion-text notion-block-d5bbb55f4388417aabef3adffe33d35c">为了让装饰器既可以带参数，又可以不带参数。通过<code
            class="notion-inline-code">*</code>号使除了<code class="notion-inline-code">func</code>以外的所有参数都仅限为关键字。
        </div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">name</span><span class="token punctuation">(</span>_func<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">,</span> kw1<span class="token operator">=</span>val1<span class="token punctuation">,</span> kw2<span class="token operator">=</span>val2<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 1def decorator_name(func):</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  <span class="token comment"># Create and return a wrapper function.if _func is None:</span>
        <span class="token keyword">return</span> decorator_name                      <span class="token comment"># 2else:</span>
        <span class="token keyword">return</span> decorator_name<span class="token punctuation">(</span>_func<span class="token punctuation">)</span>               <span class="token comment"># 3def repeat(_func=None, *, num_times=2):</span>
    <span class="token keyword">def</span> <span class="token function">decorator_repeat</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper_repeat</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
                value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token keyword">return</span> wrapper_repeat

    <span class="token keyword">if</span> _func <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> decorator_repeat
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> decorator_repeat<span class="token punctuation">(</span>_func<span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-6353044c104141709ce998e9bd0fb11d"
          data-id="6353044c104141709ce998e9bd0fb11d"><span>
            <div id="6353044c104141709ce998e9bd0fb11d" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#6353044c104141709ce998e9bd0fb11d" title="2.5 记录状态的装饰器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>2.5 记录状态的装饰器</b></span>
          </span></h4>
        <div class="notion-text notion-block-43b21f802a804fa5916c6a8e8d020dc8">
          装饰器可以跟踪函数的状态，如下是一个记录函数调用次数的装饰器，通过函数属性来计数。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">count_calls</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_count_calls</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        wrapper_count_calls<span class="token punctuation">.</span>num_calls <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Call </span><span class="token interpolation"><span class="token punctuation">{</span>wrapper_count_calls<span class="token punctuation">.</span>num_calls<span class="token punctuation">}</span></span><span class="token string"> of </span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    wrapper_count_calls<span class="token punctuation">.</span>num_calls <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> wrapper_count_calls

<span class="token decorator annotation punctuation">@count_calls</span>
<span class="token keyword">def</span> <span class="token function">say_whee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Whee!"</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-ff459aca2c0145b3b749cb90acc62b0b">
          记录状态的最好的方式是使用<b>类作为装饰器</b>，只需要实现<code class="notion-inline-code">__init__()</code>和<code
            class="notion-inline-code">__call__()</code>。使用<code
            class="notion-inline-code">functools.update_wrapper(self, func)</code>保留信息。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">class</span> <span class="token class-name">CountCalls</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        functools<span class="token punctuation">.</span>update_wrapper<span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func
        self<span class="token punctuation">.</span>num_calls <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>num_calls <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Call </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>num_calls<span class="token punctuation">}</span></span><span class="token string"> of </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>func<span class="token punctuation">.</span>__name__<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@CountCalls</span>
<span class="token keyword">def</span> <span class="token function">say_whee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Whee!"</span><span class="token punctuation">)</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-07884e08fbd940f6a7b27ae821660db0"
          data-id="07884e08fbd940f6a7b27ae821660db0"><span>
            <div id="07884e08fbd940f6a7b27ae821660db0" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#07884e08fbd940f6a7b27ae821660db0" title="3. 修饰器的一些实际应用"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3. 修饰器的一些实际应用</b></span>
          </span></h3>
        <div class="notion-text notion-block-ef42fc273e99407dba066135ab95dc29">修饰器的模板</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_decorator</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Do something beforevalue = func(*args, **kwargs)</span>
        <span class="token comment"># Do something afterreturn value</span>
    <span class="token keyword">return</span> wrapper_decorator</code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-a7dcb9a35f2645f29f7619b15180f941"
          data-id="a7dcb9a35f2645f29f7619b15180f941"><span>
            <div id="a7dcb9a35f2645f29f7619b15180f941" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#a7dcb9a35f2645f29f7619b15180f941"
              title="3.1 Timing Functions"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.1 Timing Functions</b></span>
          </span></h4>
        <div class="notion-text notion-block-ee44850e93eb4bb3919cc248a9dc6315"><code
            class="notion-inline-code">@timer</code>装饰器，记录函数执行的时间。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">timer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Print the runtime of the decorated function"""</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_timer</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 1value = func(*args, **kwargs)</span>
        end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>      <span class="token comment"># 2run_time = end_time - start_time    # 3print(f"Finished {func.__name__!r} in {run_time:.4f} secs")</span>
        <span class="token keyword">return</span> value
    <span class="token keyword">return</span> wrapper_timer

<span class="token decorator annotation punctuation">@timer</span>
<span class="token keyword">def</span> <span class="token function">waste_some_time</span><span class="token punctuation">(</span>num_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span>i<span class="token operator">**</span><span class="token number">2</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> waste_some_time<span class="token punctuation">(</span><span class="token number">999</span><span class="token punctuation">)</span>
Finished <span class="token string">'waste_some_time'</span> <span class="token keyword">in</span> <span class="token number">0.3260</span> secs</code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-8bf89b7201e54244bcf85bbcc4a57916"
          data-id="8bf89b7201e54244bcf85bbcc4a57916"><span>
            <div id="8bf89b7201e54244bcf85bbcc4a57916" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#8bf89b7201e54244bcf85bbcc4a57916"
              title="3.2 Debugging Code"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.2 Debugging Code</b></span>
          </span></h4>
        <div class="notion-text notion-block-d5f5f91e5053441180bfdef18c1d1d7e"><code
            class="notion-inline-code">@debug</code>装饰器，输出函数的输入和输出。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">debug</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Print the function signature and return value"""</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_debug</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        args_repr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">repr</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">for</span> a <span class="token keyword">in</span> args<span class="token punctuation">]</span>                      <span class="token comment"># 1kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]  # 2signature = ", ".join(args_repr + kwargs_repr)           # 3print(f"Calling {func.__name__}({signature})")</span>
        value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string"> returned </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>           <span class="token comment"># 4return value</span>
    <span class="token keyword">return</span> wrapper_debug

<span class="token decorator annotation punctuation">@debug</span>
<span class="token keyword">def</span> <span class="token function">make_greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> age <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Howdy </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!"</span></span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Whoa </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">! </span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string"> already, you are growing up!"</span></span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> make_greeting<span class="token punctuation">(</span><span class="token string">"Benjamin"</span><span class="token punctuation">)</span>
Calling make_greeting<span class="token punctuation">(</span><span class="token string">'Benjamin'</span><span class="token punctuation">)</span>
<span class="token string">'make_greeting'</span> returned <span class="token string">'Howdy Benjamin!'</span>
<span class="token string">'Howdy Benjamin!'</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-0054e8c473bd4bca8d406be661be3d08"
          data-id="0054e8c473bd4bca8d406be661be3d08"><span>
            <div id="0054e8c473bd4bca8d406be661be3d08" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#0054e8c473bd4bca8d406be661be3d08"
              title="3.3 Registering Plugins"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.3 Registering Plugins</b></span>
          </span></h4>
        <div class="notion-text notion-block-aba659bf3ad54b86ab995b14d51fc84c">
          装饰器不必包装他们正在装饰的功能，它们还可以简单地注册一个函数的存在，并将其解封返回。如下是创建轻量级插件架构的代码。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> random
PLUGINS <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">register</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Register a function as a plug-in"""</span>
    PLUGINS<span class="token punctuation">[</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">]</span> <span class="token operator">=</span> func
    <span class="token keyword">return</span> func

<span class="token decorator annotation punctuation">@register</span>
<span class="token keyword">def</span> <span class="token function">say_hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">"</span></span>

<span class="token decorator annotation punctuation">@register</span>
<span class="token keyword">def</span> <span class="token function">be_awesome</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f"Yo </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">, together we are the awesomest!"</span></span>

<span class="token keyword">def</span> <span class="token function">randomly_greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    greeter<span class="token punctuation">,</span> greeter_func <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>PLUGINS<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Using </span><span class="token interpolation"><span class="token punctuation">{</span>greeter<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> greeter_func<span class="token punctuation">(</span>name<span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-f565b94305964105abd489b3a0157726"
          data-id="f565b94305964105abd489b3a0157726"><span>
            <div id="f565b94305964105abd489b3a0157726" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#f565b94305964105abd489b3a0157726"
              title="3.4 创建单例（Singletons）"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.4 创建单例（Singletons）</b></span>
          </span></h4>
        <div class="notion-text notion-block-df794657845247318356a87bf637d4fe">
          单例是一种<b>设计模式</b>，单例模式保证了在程序的不同位置都<b>可以且仅可以取到同一个对象实例</b>。通过保存实例使得每次返回的是同一个对象实例。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Make a class a Singleton class (only one instance)"""</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_singleton</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> wrapper_singleton<span class="token punctuation">.</span>instance<span class="token punctuation">:</span>
            wrapper_singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper_singleton<span class="token punctuation">.</span>instance
    wrapper_singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">return</span> wrapper_singleton

<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">TheOne</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-eb536b9d88fa47f78cf84a8126c26d46"
          data-id="eb536b9d88fa47f78cf84a8126c26d46"><span>
            <div id="eb536b9d88fa47f78cf84a8126c26d46" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#eb536b9d88fa47f78cf84a8126c26d46" title="3.4 实现缓存和记忆机制"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.4 实现缓存和记忆机制</b></span>
          </span></h4>
        <div class="notion-text notion-block-3175144fb92c4546942860d6a747460a">通过记录状态来保存之前的计算结果。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">import</span> functools
<span class="token keyword">from</span> decorators <span class="token keyword">import</span> count_calls

<span class="token keyword">def</span> <span class="token function">cache</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Keep a cache of previous function calls"""</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper_cache</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        cache_key <span class="token operator">=</span> args <span class="token operator">+</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>kwargs<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> cache_key <span class="token keyword">not</span> <span class="token keyword">in</span> wrapper_cache<span class="token punctuation">.</span>cache<span class="token punctuation">:</span>
            wrapper_cache<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>cache_key<span class="token punctuation">]</span> <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper_cache<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>cache_key<span class="token punctuation">]</span>
    wrapper_cache<span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper_cache

<span class="token decorator annotation punctuation">@cache</span>
<span class="token decorator annotation punctuation">@count_calls</span>
<span class="token keyword">def</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> num
    <span class="token keyword">return</span> fibonacci<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> fibonacci<span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span></code></pre>
        <h4 class="notion-h notion-h3 notion-h-indent-2 notion-block-4edf026decac4809b00352fd9f950fbc"
          data-id="4edf026decac4809b00352fd9f950fbc"><span>
            <div id="4edf026decac4809b00352fd9f950fbc" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#4edf026decac4809b00352fd9f950fbc" title="3.5 添加额外的信息"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>3.5 添加额外的信息</b></span>
          </span></h4>
        <div class="notion-text notion-block-aa787964dbc5466e8493e588969d8d5b">通过在装饰函数时给函数附加属性来添加信息。</div>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">set_unit</span><span class="token punctuation">(</span>unit<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""Register a unit on a function"""</span>
    <span class="token keyword">def</span> <span class="token function">decorator_set_unit</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        func<span class="token punctuation">.</span>unit <span class="token operator">=</span> unit
        <span class="token keyword">return</span> func
    <span class="token keyword">return</span> decorator_set_unit

<span class="token keyword">import</span> math

<span class="token decorator annotation punctuation">@set_unit</span><span class="token punctuation">(</span><span class="token string">"cm^3"</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">volume</span><span class="token punctuation">(</span>radius<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> math<span class="token punctuation">.</span>pi <span class="token operator">*</span> radius<span class="token operator">**</span><span class="token number">2</span> <span class="token operator">*</span> height

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> volume<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token number">141.3716694115407</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> volume<span class="token punctuation">.</span>unit
<span class="token string">'cm^3'</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-e071c6aa26dc4e5dacb6808a55d2d99d"
          data-id="e071c6aa26dc4e5dacb6808a55d2d99d"><span>
            <div id="e071c6aa26dc4e5dacb6808a55d2d99d" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#e071c6aa26dc4e5dacb6808a55d2d99d" title="4. 补充知识"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>4. 补充知识</b></span>
          </span></h3>
        <div class="notion-text notion-block-85e1a080161140aea01eb89d2284cf6b"><b>1、语法糖</b></div>
        <div class="notion-text notion-block-951126372463467baaa79314543bd595">Syntactic
          sugar，是由英国计算机科学家彼得·兰丁发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能没有影响，但是更方便程序员使用。语法糖让程序更加简洁，有更高的可读性。</div>
        <div class="notion-text notion-block-92b0b016c41442f692f572c089588dd4"><b>2、闭包</b></div>
        <div class="notion-text notion-block-308ac312b49a4089bcd18e943a230257">
          在计算机科学中，闭包（英语：Closure），又称词法闭包（Lexical Closure）或函数闭包（function
          closures），是在支持头等函数的编程语言中实现词法绑定的一种技术。闭包在实现上是一个结构体，它存储了一个函数（通常是其入口地址）和一个关联的环境（相当于一个符号查找表）。环境里是若干对符号和值的对应关系，它既要包括约束变量（该函数内部绑定的符号），也要包括自由变量（在函数外部定义但在函数内被引用），有些函数也可能没有自由变量。闭包跟函数最大的不同在于，当捕捉闭包的时候，它的自由变量会在捕捉时被确定，这样即便脱离了捕捉时的上下文，它也能照常运行。捕捉时对于值的处理可以是值拷贝，也可以是名称引用，这通常由语言设计者决定，也可能由用户自行指定（如C++）。
        </div>
        <div class="notion-text notion-block-db473cc414554e05b1abdfaf8614b086"><b>3、Python中的一等对象</b></div>
        <div class="notion-text notion-block-5c7fde09881540678319bd6ab8e988c3">头等函数（first-class
          function）是指在程序设计语言中，函数被当作头等公民。这意味着，函数可以作为别的函数的参数、函数的返回值，赋值给变量或存储在数据结构中。</div>
        <div class="notion-text notion-block-2e7f87ff24e041b4aa4f4eaa2f6a4897"><b>4、面向切面编程</b></div>
        <div class="notion-text notion-block-6f3ef2410bdb4af898023000ca1afe19">面向切面的程序设计（Aspect-oriented
          programming，AOP，又译作面向方面的程序设计、剖面导向程序设计）是计算机科学中的一种程序设计思想，旨在将横切关注点与业务主体进行进一步分离，以提高程序代码的模块化程度。通过在现有代码基础上增加额外的通知（Advice）机制，能够对被声明为“切点（Pointcut）”的代码块进行统一管理与装饰，如“对所有方法名以‘set*’开头的方法添加后台日志”。该思想使得开发人员能够将与代码核心业务逻辑关系不那么密切的功能（如日志功能）添加至程序中，同时又不降低业务代码的可读性。面向切面的程序设计思想也是面向切面软件开发的基础。
        </div>
        <div class="notion-text notion-block-361ef42e3f454eb4b61316be95c9a758"><b>5、高阶函数（Higher-order
            function）</b></div>
        <div class="notion-text notion-block-480e389dc44a4584a58f2bf65a6e0989">如果返回的结果也是函数的函数。</div>
        <div class="notion-text notion-block-cc60fb814083464d91b4545c6c6e2916"><b>6、</b><code
            class="notion-inline-code"><b>*args, **kwargs</b></code></div>
        <ul class="notion-list notion-list-disc notion-block-f6ee0b9109b948ce974ca0278bcae4d5">
          <li><code class="notion-inline-code">args</code>接受参数，<code class="notion-inline-code">*kwargs</code>接收键值对的参数。
          </li>
        </ul>
        <div class="notion-text notion-block-e8304388e2b94b0dba109f263e8dfe0a"><b>7、单例模式</b></div>
        <div class="notion-text notion-block-32ee2cc5e4f34339ae34c22f420bbe65">A singleton is a class with only
          one instance.</div>
        <div class="notion-text notion-block-f2ba334a289a4c648dd52b108a8c8fbd"><b>8、实例方法、类方法、静态方法</b></div>
        <div class="notion-text notion-block-a0df1848c5634c349b43ed7f0406b770">
          实例方法需要传入self，类方法需要传入cls参数，静态方法无需传入self参数或者是cls参数。</div>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 实例方法def instance_method(self):</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'instance method called'</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>

    <span class="token comment"># 类方法@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">class_method</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'class method called'</span><span class="token punctuation">,</span> cls<span class="token punctuation">)</span>

    <span class="token comment"># 静态方法@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">static_method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'static method called'</span><span class="token punctuation">)</span></code></pre>
        <ul class="notion-list notion-list-disc notion-block-612f722587ba40f1bc9b4d1abd05dd89">
          <li>实例方法，self参数指向的是实例化出的实例对象。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-d38ada5b6d5b48e78c09c86afbd1c690">
          <li>类方法，cls参数指向的是一开始定义的类对象，不是实例对象。</li>
        </ul>
        <ul class="notion-list notion-list-disc notion-block-00ae2f30b41b484a8ee109683c766c2f">
          <li>静态方法，调用时并不需要传递类或者实例，不会与类或者实例绑定。</li>
        </ul>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-88057fa5fe074e48963d4ffb5f154820"
          data-id="88057fa5fe074e48963d4ffb5f154820"><span>
            <div id="88057fa5fe074e48963d4ffb5f154820" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#88057fa5fe074e48963d4ffb5f154820" title="Reference"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title"><b>Reference</b></span>
          </span></h3>
        <div class="notion-text notion-block-284f8b6b18ff4ba18e85df66358aba2d">[1]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link" href="https://zhuanlan.zhihu.com/p/39093542">Python装饰器详解 - 知乎
            (zhihu.com)</a></div>
        <div class="notion-text notion-block-11e604ad045c43bc8dc3de470493f4e2">[2]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/ee82b941772a">理解Python装饰器(Decorator)
            - 简书 (jianshu.com)</a></div>
        <div class="notion-text notion-block-cee4a818d0984621978a674de97551ba">[3]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//www.liaoxuefeng.com/wiki/1016959663602400/1017451662295584">装饰器
            - 廖雪峰的官方网站 (liaoxuefeng.com)</a></div>
        <div class="notion-text notion-block-2fc72d4daa6d4285bf1dc60db45378b7">[4]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E9%2597%25AD%25E5%258C%2585_%28%25E8%25AE%25A1%25E7%25AE%2597%25E6%259C%25BA%25E7%25A7%2591%25E5%25AD%25A6%29">闭包
            (计算机科学) - 维基百科，自由的百科全书 (wikipedia.org)</a></div>
        <div class="notion-text notion-block-e395df5726e543ebac9329a90cc47620">[5]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//zh.wikipedia.org/wiki/%25E9%259D%25A2%25E5%2590%2591%25E5%2588%2587%25E9%259D%25A2%25E7%259A%2584%25E7%25A8%258B%25E5%25BA%258F%25E8%25AE%25BE%25E8%25AE%25A1">面向切面的程序设计
            - 维基百科，自由的百科全书 (wikipedia.org)</a></div>
        <div class="notion-text notion-block-e5b85285b2a34ee8bfea11a4b34c079d">[6]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//www.freecodecamp.org/news/python-property-decorator/">The
            @property Decorator in Python: Its Use Cases, Advantages, and Syntax (freecodecamp.org)</a></div>
        <div class="notion-text notion-block-ff84908debae46f49ea7c2c8f802e5b9">[7]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//realpython.com/primer-on-python-decorators/">Primer
            on Python Decorators – Real Python</a></div>
        <div class="notion-text notion-block-56dce2d191f34ecf8982bb426c996b25">[8]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Higher-order_function">Higher-order
            function - Wikipedia</a></div>
        <div class="notion-text notion-block-42162673d87640e9b4a4b4e159b541a5">[9]&nbsp;<a target="_blank"
            rel="noopener noreferrer" class="notion-link" href="https://zhuanlan.zhihu.com/p/148972378">Python
            常用装饰器 - 知乎 (zhihu.com)</a></div>
        <div class="notion-text notion-block-1a812fd1720749c586ca77f153c677de">[10] [<a target="_blank"
            rel="noopener noreferrer" class="notion-link"
            href="https://zhuanlan.zhihu.com/p/40162669">Python]实例方法、类方法、静态方法 - 知乎 (zhihu.com)</a></div>
        <h2 class="notion-h notion-h1 notion-h-indent-0 notion-block-fe2b13d1949a41c389d458e7cda7ea85"
          data-id="fe2b13d1949a41c389d458e7cda7ea85"><span>
            <div id="fe2b13d1949a41c389d458e7cda7ea85" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#fe2b13d1949a41c389d458e7cda7ea85" title="三. 装饰器练习"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">三. 装饰器练习</span>
          </span></h2>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-9fb1b5fa0d41468fac6f6e3447d47ae9"
          data-id="9fb1b5fa0d41468fac6f6e3447d47ae9"><span>
            <div id="9fb1b5fa0d41468fac6f6e3447d47ae9" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#9fb1b5fa0d41468fac6f6e3447d47ae9" title="1. 单例模式"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">1. 单例模式</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">def</span> <span class="token function">_singleton</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> _instance<span class="token punctuation">:</span>
            _instance<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> _instance<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>
    <span class="token keyword">return</span> _singleton

<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>x <span class="token operator">=</span> x


a1 <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
a2 <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-dee7f41d529945bd93c0623b64ad8fa9"
          data-id="dee7f41d529945bd93c0623b64ad8fa9"><span>
            <div id="dee7f41d529945bd93c0623b64ad8fa9" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#dee7f41d529945bd93c0623b64ad8fa9" title="2. Debug"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">2. Debug</span>
          </span></h3>
        <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Debug</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    Debug decorator

    :param level: 
    :param func_time:
    :param func_info: 

    """</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> level<span class="token operator">=</span>logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">,</span> func_time<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> func_info<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_func_timer <span class="token operator">=</span> func_time
        self<span class="token punctuation">.</span>_level <span class="token operator">=</span> level
        self<span class="token punctuation">.</span>_func_info <span class="token operator">=</span> func_info

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@self<span class="token punctuation">.</span>func_time</span>
        <span class="token decorator annotation punctuation">@self<span class="token punctuation">.</span>func_info</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            LOG_FORMAT <span class="token operator">=</span> <span class="token string">"%(asctime)s - %(levelname)s - %(message)s"</span>
            DATE_FORMAT <span class="token operator">=</span> <span class="token string">"%m/%d/%Y %H:%M:%S %p"</span>
            logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>level<span class="token operator">=</span>self<span class="token punctuation">.</span>_level<span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span>LOG_FORMAT<span class="token punctuation">,</span> datefmt<span class="token operator">=</span>DATE_FORMAT<span class="token punctuation">)</span>
            value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token keyword">return</span> wrapper

    <span class="token keyword">def</span> <span class="token function">func_time</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""Print the runtime of the decorated function"""</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>_func_timer <span class="token operator">!=</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> func
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment"># before func</span>
            value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token comment"># after func</span>
            end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
            run_time <span class="token operator">=</span> end_time <span class="token operator">-</span> start_time
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Finished </span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string"> in </span><span class="token interpolation"><span class="token punctuation">{</span>run_time<span class="token punctuation">:</span><span class="token format-spec">.4f</span><span class="token punctuation">}</span></span><span class="token string"> secs"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token keyword">return</span> wrapper

    <span class="token keyword">def</span> <span class="token function">func_info</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""Print the function signature and return value"""</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>_func_info <span class="token operator">!=</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> func
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            args_repr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">repr</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">for</span> a <span class="token keyword">in</span> args<span class="token punctuation">]</span>
            kwargs_repr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>k<span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span>v<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span> <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> kwargs<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            signature <span class="token operator">=</span> <span class="token string">", "</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>args_repr <span class="token operator">+</span> kwargs_repr<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Calling </span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token punctuation">{</span>signature<span class="token punctuation">}</span></span><span class="token string">)"</span></span><span class="token punctuation">)</span>
            <span class="token comment"># before func</span>
            value <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token comment"># after func</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>func<span class="token punctuation">.</span>__name__<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string"> returned </span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token keyword">return</span> wrapper</code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-75b22f5e9ea842f59221b8e5afc50023"
          data-id="75b22f5e9ea842f59221b8e5afc50023"><span>
            <div id="75b22f5e9ea842f59221b8e5afc50023" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#75b22f5e9ea842f59221b8e5afc50023" title="3. 线程多开"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">3. 线程多开</span>
          </span></h3>
        <pre class="notion-code language-bash" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-bash"><span class="token function">import</span> <span class="token function">time</span>
<span class="token function">import</span> threading
def threadDecorator<span class="token punctuation">(</span>func<span class="token punctuation">)</span>:
    def wrapper<span class="token punctuation">(</span>*args, **kwargs<span class="token punctuation">)</span>:
        thread <span class="token operator">=</span> threading.Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>func, <span class="token assign-left variable">args</span><span class="token operator">=</span>args, <span class="token assign-left variable">kwargs</span><span class="token operator">=</span>kwargs<span class="token punctuation">)</span>
        thread.start<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">return</span> thread
    <span class="token builtin class-name">return</span> wrapper

@threadDecorator
def demoFunc<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>:
        print<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        time.sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


@threadDecorator
def demoFunc02<span class="token punctuation">(</span><span class="token punctuation">)</span>:
    <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> range<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>:
        print<span class="token punctuation">(</span>time.time<span class="token punctuation">(</span><span class="token punctuation">))</span>
        time.sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token builtin class-name">:</span>
    demoFunc<span class="token punctuation">(</span><span class="token punctuation">)</span>
    demoFunc02<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-d0957c9827234fe8a56ba2e736ec0c1a"
          data-id="d0957c9827234fe8a56ba2e736ec0c1a"><span>
            <div id="d0957c9827234fe8a56ba2e736ec0c1a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#d0957c9827234fe8a56ba2e736ec0c1a" title="4. 消息推送"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">4. 消息推送</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">WechatAppPush</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    WechatAppPush decorator
    Push the msg of the decorated function

    Example:
    @WechatAppPush(corpid, corpsecret, agentid)
    def func():
        return 'xxx'

    Also:
    def func():
        return 'xxx'
    WechatAppPush(corpid, corpsecret, agentid)(func())()

    Also:
    WechatAppPush(corpid, corpsecret, agentid)('xxx')()

    Final:
    Then wechat app will push xxx

    :param corpid: wechat app corpid
    :param corpsecret: wechat app corpsecret
    :param agentid: wechat app agentid
    :param touser: (optional) default: @all
    :param message: (optional) default: wechat push message
    :return func:
    docs: https://developer.work.weixin.qq.com/document/path/90236

    """</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> corpid<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> corpsecret<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> agentid<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> touser<span class="token operator">=</span><span class="token string">'@all'</span><span class="token punctuation">,</span> message<span class="token operator">=</span><span class="token string">'Wechat push message'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_corpid <span class="token operator">=</span> corpid
        self<span class="token punctuation">.</span>_corpsecret <span class="token operator">=</span> corpsecret
        self<span class="token punctuation">.</span>_agentid <span class="token operator">=</span> agentid
        self<span class="token punctuation">.</span>_touser <span class="token operator">=</span> touser
        self<span class="token punctuation">.</span>_message <span class="token operator">=</span> message

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># before func</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>_message <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">except</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> func <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    self<span class="token punctuation">.</span>_message <span class="token operator">=</span> func
            <span class="token comment"># after func</span>
            response <span class="token operator">=</span> self<span class="token punctuation">.</span>send_text<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> response <span class="token operator">!=</span> <span class="token string">"ok"</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'Wechat push error: </span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>_message
        <span class="token keyword">return</span> wrapper
    
    <span class="token keyword">def</span> <span class="token function">get_access_token</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        send_url <span class="token operator">=</span> <span class="token string">"https://qyapi.weixin.qq.com/cgi-bin/gettoken"</span>
        send_values <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">"corpid"</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>_corpid<span class="token punctuation">,</span>
            <span class="token string">"corpsecret"</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>_corpsecret<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>send_url<span class="token punctuation">,</span> params<span class="token operator">=</span>send_values<span class="token punctuation">)</span><span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> response<span class="token punctuation">[</span><span class="token string">"access_token"</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">send_text</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        send_url <span class="token operator">=</span> <span class="token punctuation">(</span>
            <span class="token string">"https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token="</span>
            <span class="token operator">+</span> self<span class="token punctuation">.</span>get_access_token<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        send_values <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">"touser"</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>_touser<span class="token punctuation">,</span>
            <span class="token string">"msgtype"</span><span class="token punctuation">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span>
            <span class="token string">"agentid"</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>_agentid<span class="token punctuation">,</span>
            <span class="token string">"text"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"content"</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>_message<span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">"safe"</span><span class="token punctuation">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        send_msges <span class="token operator">=</span> <span class="token builtin">bytes</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>send_values<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span>
        respone <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>send_url<span class="token punctuation">,</span> send_msges<span class="token punctuation">)</span>
        respone <span class="token operator">=</span> respone<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> respone<span class="token punctuation">[</span><span class="token string">"errmsg"</span></code></pre>
        <div class="notion-blank notion-block-297f874444e74fe09fa5535b418637d0">&nbsp;</div>
        <h2 class="notion-h notion-h1 notion-h-indent-0 notion-block-68f909a5b653428289a63f442d28b702"
          data-id="68f909a5b653428289a63f442d28b702"><span>
            <div id="68f909a5b653428289a63f442d28b702" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#68f909a5b653428289a63f442d28b702" title="四. 斐波那契数列"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">四. 斐波那契数列</span>
          </span></h2>
        <div class="notion-text notion-block-74e8288956c64667b072e282a0e35622"><b>斐波那契数列（Fibonacci
            sequence）</b>，又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda
          Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列以如下被以递归的方法定义：F(1)=1，F(2)=1,
          F(n)=F(n-1)+F(n-2)（n&gt;=2，n∈N*）</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-b0fb236817a0412ebb4cfbc0da9f9208"
          data-id="b0fb236817a0412ebb4cfbc0da9f9208"><span>
            <div id="b0fb236817a0412ebb4cfbc0da9f9208" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#b0fb236817a0412ebb4cfbc0da9f9208" title="1. 递归方法"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">1. 递归方法</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">fib_recur</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> fib_recur<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span>fib_recur<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
 
<span class="token keyword">def</span> <span class="token function">ex</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
 
X<span class="token operator">=</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
N<span class="token operator">=</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> a<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> X<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>fib_recur<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-4bc352f5d6054dc3970522642ee5ae8a">
          写法最简洁，但是效率最低，会出现大量的重复计算，时间复杂度O（1.618^n），而且最深度1000</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-f3345ff4aa4e47dc9d0b84b57868abe8"
          data-id="f3345ff4aa4e47dc9d0b84b57868abe8"><span>
            <div id="f3345ff4aa4e47dc9d0b84b57868abe8" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#f3345ff4aa4e47dc9d0b84b57868abe8" title="2.递推方法"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">2.递推方法</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">fib_loop</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span>b<span class="token operator">=</span>b<span class="token punctuation">,</span>a<span class="token operator">+</span>b
    <span class="token keyword">return</span> a
    
 
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>fib_loop<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-f279cb100dd2451d82cbc5202247a719">递推法，就是递增法，时间复杂度是
          O(n)，呈线性增长，如果数据量巨大，速度会越拖越慢</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-00204a524bdf40ef92ad82b9d62e0102"
          data-id="00204a524bdf40ef92ad82b9d62e0102"><span>
            <div id="00204a524bdf40ef92ad82b9d62e0102" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#00204a524bdf40ef92ad82b9d62e0102" title="3.生成器"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">3.生成器</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">fib_loop_while</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a<span class="token punctuation">,</span>b<span class="token operator">=</span>b<span class="token punctuation">,</span>a<span class="token operator">+</span>b
        <span class="token keyword">yield</span> a
    
 
<span class="token keyword">for</span> i <span class="token keyword">in</span> fib_loop_while<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-b9a3ad88e2d84e6891fdee44b5f86038">1、带有yield关键字的函数对象
          他是返回一个列表list，list中的每个元素 都是 yield返回的每一个值 （每次执行yield输出值构成的列表）</div>
        <div class="notion-text notion-block-df97e4311b254b26a7501de23bc9e465">
          2、带有yield的函数都被看成生成器，生成器是可迭代对象，且具备__iter__ 和 __next__方法， 可以遍历获取元素</div>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-eea15e9bcbb640349e8fe8f9ec80a17a"
          data-id="eea15e9bcbb640349e8fe8f9ec80a17a"><span>
            <div id="eea15e9bcbb640349e8fe8f9ec80a17a" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#eea15e9bcbb640349e8fe8f9ec80a17a" title="4.类实现内部魔法方法
"><svg viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">4.类实现内部魔法方法
            </span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""斐波那契数列迭代器"""</span>
 
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>n<span class="token operator">=</span>n
        self<span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token number">0</span>
        self<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">1</span>
        self<span class="token punctuation">.</span>cur<span class="token operator">=</span><span class="token number">0</span>
 
    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""当使用next()函数调用时，就会获取下一个数"""</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>cur<span class="token operator">&lt;</span>self<span class="token punctuation">.</span>n<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>a<span class="token punctuation">,</span>self<span class="token punctuation">.</span>b<span class="token operator">=</span>self<span class="token punctuation">.</span>b<span class="token punctuation">,</span>self<span class="token punctuation">.</span>a<span class="token operator">+</span>self<span class="token punctuation">.</span>b
            self<span class="token punctuation">.</span>cur<span class="token operator">=</span>self<span class="token punctuation">.</span>cur<span class="token operator">+</span><span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>a
 
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> StopIteration <span class="token comment">#让他异常停止</span>
 
    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""迭代器的__iter__ 返回自身即可"""</span>
        <span class="token keyword">return</span> self
 
 
 
<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">"__main__"</span><span class="token punctuation">:</span>
    lst<span class="token operator">=</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    M<span class="token operator">=</span>lst<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    
    fib<span class="token operator">=</span>Fibonacci<span class="token punctuation">(</span>M<span class="token punctuation">)</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> fib<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></code></pre>
        <h3 class="notion-h notion-h2 notion-h-indent-1 notion-block-84fb164ebda14775baa5e68898a15bdc"
          data-id="84fb164ebda14775baa5e68898a15bdc"><span>
            <div id="84fb164ebda14775baa5e68898a15bdc" class="notion-header-anchor"></div><a class="notion-hash-link"
              href="https://notion.sricor.work/python-notes#84fb164ebda14775baa5e68898a15bdc" title="5.矩阵"><svg
                viewBox="0 0 16 16" width="16" height="16">
                <path fill-rule="evenodd"
                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                </path>
              </svg></a><span class="notion-h-title">5.矩阵</span>
          </span></h3>
        <pre class="notion-code language-python"
          tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token comment">### method 1</span>
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
 
<span class="token keyword">def</span> <span class="token function">fib_matrix</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    res <span class="token operator">=</span> <span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>mat<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">*</span> np<span class="token punctuation">.</span>mat<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#使用mat方法直接定义矩阵</span>
    <span class="token keyword">return</span> res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
 
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>fib_matrix<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">)</span>
 
 
<span class="token comment">### method 2</span>
<span class="token comment"># 使用矩阵计算斐波那契数列</span>
<span class="token keyword">def</span> <span class="token function">Fibonacci_Matrix_tool</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    Matrix <span class="token operator">=</span> np<span class="token punctuation">.</span>matrix<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#matrix和mat函数等效</span>
    <span class="token comment"># 返回是matrix类型</span>
    <span class="token keyword">return</span> <span class="token builtin">pow</span><span class="token punctuation">(</span>Matrix<span class="token punctuation">,</span> n<span class="token punctuation">)</span>  <span class="token comment"># pow函数速度快于 使用双星好 **</span>
 
<span class="token keyword">def</span> <span class="token function">Fibonacci_Matrix</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        result_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>np<span class="token punctuation">.</span>array<span class="token punctuation">(</span>Fibonacci_Matrix_tool<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result_list
 
<span class="token comment"># 调用</span>
result<span class="token operator">=</span>Fibonacci_Matrix<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> r <span class="token keyword">in</span> result<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></code></pre>
        <div class="notion-text notion-block-e87da143381b4ba58f8fb3c89f193a0b">因为幂运算可以使用二分加速，所以矩阵法的时间复杂度为 O(log
          n)</div>
        <div class="notion-blank notion-block-36441a8614124238b48f9ae6efbb952a">&nbsp;</div>
      </article>
      <aside class="notion-aside">
        <div class="notion-aside-table-of-contents">
          <Catalogue selector="#article" />
        </div>
      </aside>
    </div>
</template>