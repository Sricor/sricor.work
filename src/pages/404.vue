<template>
  <div class="notion-page-scroller">
    <main class="notion-page notion-page-no-cover notion-page-no-icon notion-page-has-text-icon notion-full-page">
      <h1 class="notion-title">Python 类型注解</h1>
      <div class="notion-page-content notion-page-content-has-aside">
        <article class="notion-page-content-inner">
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-8f396c07bc514b5d9272996ad0ac4434"
            data-id="8f396c07bc514b5d9272996ad0ac4434"><span>
              <div id="8f396c07bc514b5d9272996ad0ac4434" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#8f396c07bc514b5d9272996ad0ac4434"
                title="总结写在前边"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">总结写在前边</span>
            </span></h3>
          <ul class="notion-list notion-list-disc notion-block-fdbcc5f4a91442f9ad48cb33e1f94e64">
            <li>让代码模块的功能更清晰。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-b4dd4a4955bb479d98a3a430f4889397">
            <li>让编辑器可以帮助你尽早发现问题。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-9112b8c44dbf414a86c32bfe9faddca7">
            <li>保持了原有的灵活性，并且兼顾了强类型语言的严谨。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-37cd67ecbd064ec082a4f82095d724c7">
            <li>根据情况而定使用类型注解</li>
          </ul>
          <div class="notion-blank notion-block-7607f903d2244ddba1eabb3e8a3049cb">&nbsp;</div>
          <div class="notion-text notion-block-cc8d549035b7429fbd1b85f2a42f73ef">Python 3.5
            之后的<b>类型注解</b>。理解它将非常有益于优化代码。</div>
          <div class="notion-text notion-block-1d8e206f363d48108b184dc215710692">
            类型注解<b>仅仅</b>是提供给编辑器进行类型检查的机会，也就是起提示的作用，对 Python 程序的运行不会产生任何影响。即使进行了错误的类型赋值，只要不直接引发错误，程序依旧可以运行。</div>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-f8c33eb3167e49149026891b97b9279a"
            data-id="f8c33eb3167e49149026891b97b9279a"><span>
              <div id="f8c33eb3167e49149026891b97b9279a" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#f8c33eb3167e49149026891b97b9279a"
                title="1. 变量注解"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">1. <b>变量注解</b></span>
            </span></h3>
          <div class="notion-text notion-block-29cdfc167fb7432da02275c87a2048ce">Python 中几种基本的变量类型都得到了支持：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python">a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">3</span>
b<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">3.14</span>
c<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">'abc'</span>
d<span class="token punctuation">:</span> <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">False</span></code></pre>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-8eccc84facd3479f82f17809d631bc89"
            data-id="8eccc84facd3479f82f17809d631bc89"><span>
              <div id="8eccc84facd3479f82f17809d631bc89" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#8eccc84facd3479f82f17809d631bc89"
                title="2. 函数注解"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">2. <b>函数注解</b></span>
            </span></h3>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">say_hi</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!'</span></span></code></pre>
          <div class="notion-text notion-block-4636b26295234232b189d8693422bad1">
            你可以很清楚的知道，这个函数<em>应该</em>接收一个字符串参数&nbsp;<code
              class="notion-inline-code">name</code>&nbsp;，并且返回值<em>应该</em>也是字符串。带默认值的函数像这样书写：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>first<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> second<span class="token punctuation">:</span> <span class="token builtin">float</span> <span class="token operator">=</span> <span class="token number">5.5</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">float</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> first <span class="token operator">+</span> second</code></pre>
          <div class="notion-text notion-block-a8f7647be339499b8416f61a182da319">如果函数没有返回值，那么下面两种写法都可以：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
          <div class="notion-text notion-block-11c7b4db4bfb4cf2a183c38643f6a91f">自定义的对象：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name


<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>p<span class="token punctuation">:</span> Person<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">'</span></span></code></pre>
          <div class="notion-text notion-block-1cf41b2b3a3640d7aaad67376f5da8da">
            如果要避免循环导入或者注解早于对象定义的情况，可以用字符串代替类型：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>p<span class="token punctuation">:</span> <span class="token string">'Person'</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f'Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">'</span></span>


<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name</code></pre>
          <div class="notion-text notion-block-dd8935e6d9d545059dfe04a8caf08676">
            相比变量类型注解，函数里的类型注解更加有用，并且可能是最频繁用到注解的地方。</div>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-650816f69bb449e58641b8ed6e23bf77"
            data-id="650816f69bb449e58641b8ed6e23bf77"><span>
              <div id="650816f69bb449e58641b8ed6e23bf77" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#650816f69bb449e58641b8ed6e23bf77"
                title="3. 容器类型"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">3. <b>容器类型</b></span>
            </span></h3>
          <div class="notion-text notion-block-f5c2d40b35c448328b5fa6301e162a96">列表、字典、元组等包含元素的复合类型，用简单的
            list，dict，tuple 不能够明确说明内部元素的具体类型。</div>
          <div class="notion-text notion-block-d3c3094205c4474582605f90704d8593">因此要用到&nbsp;<code
              class="notion-inline-code">typing</code>&nbsp;模块提供的<b>复合注解</b>功能：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> List<span class="token punctuation">,</span> Dict<span class="token punctuation">,</span> Tuple

<span class="token comment"># 参数1: 元素为 int 的列表</span>
<span class="token comment"># 参数2: 键为字符串，值为 int 的字典</span>
<span class="token comment"># 返回值: 包含两个元素的元组</span>
<span class="token keyword">def</span> <span class="token function">mix</span><span class="token punctuation">(</span>scores<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ages<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
          <div class="notion-text notion-block-d98a2467e17e48b9ac3bb05b2c75873c">如果你用的是 Python 3.9+
            版本，内置的容器类型就支持了复合注解：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">mix</span><span class="token punctuation">(</span>scores<span class="token punctuation">:</span> <span class="token builtin">list</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ages<span class="token punctuation">:</span> <span class="token builtin">dict</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">tuple</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></code></pre>
          <div class="notion-text notion-block-bbc1aa6daa064053bd753ded3a97fb9d">
            在某些情况下，不需要严格区分参数到底是列表还是元组（这种情况还蛮多的）。这时候就可以将它们的特征抽象为更泛化的类型（泛型），比如 Sequence（序列）。</div>
          <div class="notion-text notion-block-b029c0b3fa6948849406dfb1b470f471">下面是例子：</div>
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
          <div class="notion-text notion-block-9b357a6ee0da45eb8a41dde45033b49f">
            例子中函数的参数不对容器的类型做具体要求，只要它是个序列（比如列表和元组）就可以。</div>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-2de4efc9c3cb4cefa731e451fc29f7b3"
            data-id="2de4efc9c3cb4cefa731e451fc29f7b3"><span>
              <div id="2de4efc9c3cb4cefa731e451fc29f7b3" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#2de4efc9c3cb4cefa731e451fc29f7b3"
                title="4. 类型别名"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">4. <b>类型别名</b></span>
            </span></h3>
          <div class="notion-text notion-block-062ba44d406f496ab0f60f038d0a3029">
            有时候对象的类型可能会非常复杂，或者希望给类型赋予一个有意义的名称，那么可以这样定义类型的别名：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Tuple

<span class="token comment"># 类型别名</span>
Vector2D <span class="token operator">=</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>vector<span class="token punctuation">:</span> Vector2D<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span>

foo<span class="token punctuation">(</span>vector<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Output: (1, 2)</span></code></pre>
          <div class="notion-text notion-block-b434d653189c415c9e6eb0e43425d629"><code
              class="notion-inline-code">Vector2D</code>&nbsp;这个名称清晰的表达了这个对象是一个二维的向量。</div>
          <div class="notion-text notion-block-d94185e9b5d146f49aca64977311fcb0">与类型别名有点类似的，是用&nbsp;<code
              class="notion-inline-code">NewType</code>&nbsp;创建自定义类型：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> NewType
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Tuple

<span class="token comment"># 创建新类型</span>
Vector3D <span class="token operator">=</span> NewType<span class="token punctuation">(</span><span class="token string">'Vector3D'</span><span class="token punctuation">,</span> Tuple<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">bar</span><span class="token punctuation">(</span>vector<span class="token punctuation">:</span> Vector3D<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>vector<span class="token punctuation">)</span></code></pre>
          <div class="notion-text notion-block-524f33ba9d4b4aaf99fe9638911a5536">不同的是&nbsp;<code
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
          <div class="notion-text notion-block-7541fda0f4a842df97351c0ee495132e">具体用哪种，得根据情况而定。</div>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-225e5db84513437db7d94ff2d29d2807"
            data-id="225e5db84513437db7d94ff2d29d2807"><span>
              <div id="225e5db84513437db7d94ff2d29d2807" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#225e5db84513437db7d94ff2d29d2807"
                title="5. 更多类型"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5. <b>更多类型</b></span>
            </span></h3>
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-337ce8ba32804682a8c24bc067048618"
            data-id="337ce8ba32804682a8c24bc067048618"><span>
              <div id="337ce8ba32804682a8c24bc067048618" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#337ce8ba32804682a8c24bc067048618"
                title="5.1 NoReturn"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.1 <b>NoReturn</b></span>
            </span></h4>
          <div class="notion-text notion-block-1f6b9f3dbbd74537848d81ee9db4f05b">如果函数没有返回值，那么可以这样写：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> NoReturn

<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NoReturn<span class="token punctuation">:</span>
    <span class="token keyword">raise</span> RuntimeError<span class="token punctuation">(</span><span class="token string">'oh no'</span><span class="token punctuation">)</span></code></pre>
          <div class="notion-text notion-block-3c3b3bf1df9a44a79956d1490190082b">注意下面这样写是错误的：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NoReturn<span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
          <div class="notion-text notion-block-47544d1c07694ffd8e8df5ecbda5aed0">因为 Python 的函数运行结束时隐式返回&nbsp;<code
              class="notion-inline-code">None</code>&nbsp;，这和真正的无返回值是有区别的。</div>
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-3163fea6d9ee4293abdb7f3ce0527253"
            data-id="3163fea6d9ee4293abdb7f3ce0527253"><span>
              <div id="3163fea6d9ee4293abdb7f3ce0527253" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#3163fea6d9ee4293abdb7f3ce0527253"
                title="5.2 Optional"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.2 <b>Optional</b></span>
            </span></h4>
          <div class="notion-text notion-block-38027f8ab77b46728d18b7701f8e3c27">函数既有可能返回&nbsp;<code
              class="notion-inline-code">None</code>&nbsp;，也有可能返回&nbsp;<code
              class="notion-inline-code">str</code>&nbsp;。单凭返回值注解为&nbsp;<code
              class="notion-inline-code">str</code>&nbsp;是不能准确表达此情况的。</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">'Yeah'</span></code></pre>
          <div class="notion-text notion-block-0b8de0c1938c4e2b843e686ae5805e28">
            这种“可能有也可能没有”的状态被称为<b>可选值</b>，在某些项目中非常常见。比如 web 应用中某个函数接受账号和密码作为参数，如果匹配则返回用户对象，若不匹配则返回&nbsp;<code
              class="notion-inline-code">None</code>&nbsp;。</div>
          <div class="notion-text notion-block-2411c7098326490bb0572dbfe5f6abe3">因此，有专门的可选值类型注解可以处理这种情况：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">'Yeah'</span></code></pre>
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-8e4aa8149bd3470a874c28760c4c6c94"
            data-id="8e4aa8149bd3470a874c28760c4c6c94"><span>
              <div id="8e4aa8149bd3470a874c28760c4c6c94" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#8e4aa8149bd3470a874c28760c4c6c94"
                title="5.3 Union"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.3 <b>Union</b></span>
            </span></h4>
          <div class="notion-text notion-block-5eb7ccf4fe3549eca300c1c29c237009">比&nbsp;<code
              class="notion-inline-code">Optional</code>&nbsp;涵盖面更广的是&nbsp;<code
              class="notion-inline-code">Union</code>&nbsp;。</div>
          <div class="notion-text notion-block-c023cb0260674dbb93ec671463078d43">如果函数的返回值是多种类型中的一种时，可以这样写：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Union

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token comment"># ....</span>
    <span class="token comment"># some code here</span></code></pre>
          <div class="notion-text notion-block-4cec434c84b24a4fa2f6491e061fb2e8">上面这个函数可以返回字符串、整型、浮点型中的任意一种类型。
          </div>
          <div class="notion-text notion-block-e245f3069f4c48b188b5cfa9cbcdc807">可以发现&nbsp;<code
              class="notion-inline-code">Optional</code>&nbsp;实际上是&nbsp;<code
              class="notion-inline-code">Union</code>&nbsp;的特例：<code
              class="notion-inline-code">Optional[X]</code>&nbsp;和&nbsp;<code class="notion-inline-code">Union[X,
              None]</code>&nbsp;是等价的。</div>
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-805e0818272f4064aa200a1a914b9394"
            data-id="805e0818272f4064aa200a1a914b9394"><span>
              <div id="805e0818272f4064aa200a1a914b9394" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#805e0818272f4064aa200a1a914b9394"
                title="5.4 Callable"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.4 <b>Callable</b></span>
            </span></h4>
          <div class="notion-text notion-block-715920dee4fd4862b972ada3edf7d2a1">Python
            中的函数和类的区别并不明显。只要实现了对应的接口，类实例也可以是<b>可调用的</b>。</div>
          <div class="notion-text notion-block-499bfd78141c4c27b78973b20ddc93d6">如果不关心对象的具体类型，只要求是可调用的，那么可以这样写：
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
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-77e3ae9900f04b389b2227c342659b85"
            data-id="77e3ae9900f04b389b2227c342659b85"><span>
              <div id="77e3ae9900f04b389b2227c342659b85" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#77e3ae9900f04b389b2227c342659b85"
                title="5.5 Literal"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.5 <b>Literal</b></span>
            </span></h4>
          <div class="notion-text notion-block-3e453e68cc064c42a25e366c5415b671">即字面量。它在定义简单的枚举值时非常好用，比如：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Literal

MODE <span class="token operator">=</span> Literal<span class="token punctuation">[</span><span class="token string">'r'</span><span class="token punctuation">,</span> <span class="token string">'rb'</span><span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">,</span> <span class="token string">'wb'</span><span class="token punctuation">]</span>
<span class="token keyword">def</span> <span class="token function">open_helper</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> mode<span class="token punctuation">:</span> MODE<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

open_helper<span class="token punctuation">(</span><span class="token string">'/some/path'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span>  <span class="token comment"># 成功</span>
open_helper<span class="token punctuation">(</span><span class="token string">'/other/path'</span><span class="token punctuation">,</span> <span class="token string">'typo'</span><span class="token punctuation">)</span>  <span class="token comment"># 失败</span></code></pre>
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-2ef500c6ed55465bb53d2d0329dd2636"
            data-id="2ef500c6ed55465bb53d2d0329dd2636"><span>
              <div id="2ef500c6ed55465bb53d2d0329dd2636" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#2ef500c6ed55465bb53d2d0329dd2636"
                title="5.6 Protocol"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.6 <b>Protocol</b></span>
            </span></h4>
          <div class="notion-text notion-block-eb206785f3914a42a253560201dd0a18">
            即<b>协议</b>。我们通常说一个对象遵守了某个”协议“，意思是这个对象实现了”协议“中规定的属性或者方法。</div>
          <div class="notion-text notion-block-e5425be1ae3248ebb1e4fea46a37e4d5">比如下面这个例子：</div>
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
          <h4 class="notion-h notion-h3 notion-h-indent-1 notion-block-967f7e77e9a84f4db5eaa38c395069ad"
            data-id="967f7e77e9a84f4db5eaa38c395069ad"><span>
              <div id="967f7e77e9a84f4db5eaa38c395069ad" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#967f7e77e9a84f4db5eaa38c395069ad"
                title="5.7 Any"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">5.7 <b>Any</b></span>
            </span></h4>
          <div class="notion-text notion-block-caae3663de214ff88f6c2857e02beb51">任何类型都与&nbsp;<code
              class="notion-inline-code">Any</code>&nbsp;兼容。当然如果你把所有的类型都注解为&nbsp;<code
              class="notion-inline-code">Any</code>&nbsp;将毫无意义，因此&nbsp;<code
              class="notion-inline-code">Any</code>&nbsp;应当尽量少使用。</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Any

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Any<span class="token punctuation">:</span>
    <span class="token keyword">pass</span></code></pre>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-90d5236bb71a4d62aee658cc5799088f"
            data-id="90d5236bb71a4d62aee658cc5799088f"><span>
              <div id="90d5236bb71a4d62aee658cc5799088f" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#90d5236bb71a4d62aee658cc5799088f"
                title="6. 泛型"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">6. <b>泛型</b></span>
            </span></h3>
          <div class="notion-text notion-block-d41f14eeecbb4063a5940df2db07de82">要理解<b>泛型</b>，首先得知道没有它时所遇到的麻烦。
          </div>
          <div class="notion-text notion-block-82d64acf52bd4c358b25d1bef31fa0fa">
            假设有一个函数，要求它既能够处理字符串，又能够处理数字。那么你可能很自然地想到了&nbsp;<code class="notion-inline-code">Union</code>&nbsp;。
          </div>
          <div class="notion-text notion-block-cc754ee6eb134f538deb45260fcefd30">于是写出第一版代码：</div>
          <pre class="notion-code language-python"
            tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">from</span> typing <span class="token keyword">import</span> Union<span class="token punctuation">,</span> List

U <span class="token operator">=</span> Union<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> U<span class="token punctuation">,</span> b<span class="token punctuation">:</span> U<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>U<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span></code></pre>
          <div class="notion-text notion-block-3cfabc4d4f084522901e1a32b24b6800">
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
          <div class="notion-text notion-block-ec7c532646394c09ae027872219cb48c"><b>泛型</b>就可以解决此问题。来看第二版代码：</div>
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
          <div class="notion-text notion-block-9828005a4e9e460c961e0f5a0c3eb525">
            可以看出，泛型类似于某种模板（或者占位符），它可以很精确地将对象限定在你真正需要的类型。</div>
          <div class="notion-text notion-block-1aba7c81e63d4ad390352994bd65113b">让我们再看看下面这个对泛型的应用：</div>
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
          <ul class="notion-list notion-list-disc notion-block-783f5022101d475b8ab86571f28bbd29">
            <li>代码中定义了两个泛型 K 和 V，对它两的类型没有做任何限制，也就是说可以是任意类型。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-a50fe9bd8db848469f1522b5419bacfb">
            <li>函数&nbsp;<code class="notion-inline-code">get_item()</code>&nbsp;接受两个参数。这个函数不关心参数&nbsp;<code
                class="notion-inline-code">container</code>&nbsp;字典的键是什么类型，或者字典的值是什么类型；但它的参数&nbsp;<code
                class="notion-inline-code">container</code>&nbsp;必须是字典，参数&nbsp;<code
                class="notion-inline-code">key</code>&nbsp;必须与字典的键为同类型，并且返回值和字典的值必须为同类型。仅仅通过查看函数的类型注解，就可以获得所有这些信息。
            </li>
          </ul>
          <div class="notion-text notion-block-fc94696ef544402282392c7ddfa86ad3">
            重点来看下<em>例3</em>的类型检查为什么会<b>失败</b>：</div>
          <ul class="notion-list notion-list-disc notion-block-bf0d67ffce9f47c8a50200b6e552ee94">
            <li><code class="notion-inline-code">dict_2</code>&nbsp;定义时，其键被定义为整型。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-fa47218ee3fe46a989c2d8fe9f20c57c">
            <li><code class="notion-inline-code">get_item("name", dict_2)</code>&nbsp;调用时，<code
                class="notion-inline-code">"name"</code>&nbsp;为字符串，而&nbsp;<code
                class="notion-inline-code">dict_2</code>&nbsp;的键为整型，类型不一致。而类型注解中清楚表明它两应该为同一个类型&nbsp;<code
                class="notion-inline-code">K</code>&nbsp;，产生冲突。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-3e913224740f499f90874f4f50e693d5">
            <li>编辑器察觉到冲突，友好地提示你，这里可能出错了。</li>
          </ul>
          <div class="notion-text notion-block-7376bc4b32d94eb3a2096308c874c05e">
            泛型很巧妙地<b>对类型进行了参数化</b>，同时又保留了函数处理不同类型时的灵活性。</div>
          <div class="notion-text notion-block-e6418920098c4d3e9a1a651bd04a1ccd">再回过头来看看类型注解的作用：</div>
          <pre class="notion-code language-python" tabindex="0"><div class="notion-code-copy"><div class="notion-code-copy-button"><svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></div></div><code class="language-python"><span class="token keyword">def</span> <span class="token function">get_item</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> K<span class="token punctuation">,</span> container<span class="token punctuation">:</span> Dict<span class="token punctuation">[</span>K<span class="token punctuation">,</span> V<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> V<span class="token punctuation">:</span>
    <span class="token comment"># ...</span>

<span class="token keyword">def</span> <span class="token function">get_item</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span></code></pre>
          <div class="notion-text notion-block-ff5414cbfdf642e1b3c0c081966a8d43">
            上面两个函数功能完全相同，但是没有类型注解的那个，显然需要花更多的时间阅读函数内部的代码，去确认函数到底干了什么。并且它也无法利用编辑器的类型检查，在早期帮助排除一些低级错误。</div>
          <h3 class="notion-h notion-h2 notion-h-indent-0 notion-block-9d8c7034124747a7b5400028fed8af3e"
            data-id="9d8c7034124747a7b5400028fed8af3e"><span>
              <div id="9d8c7034124747a7b5400028fed8af3e" class="notion-header-anchor"></div><a class="notion-hash-link"
                href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#9d8c7034124747a7b5400028fed8af3e"
                title="7. 总结"><svg viewBox="0 0 16 16" width="16" height="16">
                  <path fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
                  </path>
                </svg></a><span class="notion-h-title">7. <b>总结</b></span>
            </span></h3>
          <div class="notion-text notion-block-f8ce91c0c4334fbfaa68fec232ba76cf">Python
            社区为什么花了很大力气，去实现了类型注解这个仅仅起”提示作用“的功能：</div>
          <ul class="notion-list notion-list-disc notion-block-061f25f416864dafb8617f7a463d0229">
            <li>让代码模块的功能更清晰。</li>
          </ul>
          <ul class="notion-list notion-list-disc notion-block-30dbbed97ec94d229e6ef5064a953107">
            <li>让编辑器可以帮助你尽早发现问题。</li>
          </ul>
          <div class="notion-text notion-block-ecab46f720fc4e9d94819e349fd4d0d3">什么时候用类型注解要根据情况而定。但总体来说是推荐尽量多用，它让
            Python 保持了原有的灵活性，并且兼顾了强类型语言的严谨。</div>
        </article>
        <aside class="notion-aside">
          <div class="PageSocial_pageSocial__2q72j"><a class="PageSocial_action__l2jzO PageSocial_twitter__Q7LHY"
              href="https://twitter.com/transitive_bs" title="Twitter @transitive_bs" target="_blank"
              rel="noopener noreferrer">
              <div class="PageSocial_actionBg__VdO2Y">
                <div class="PageSocial_actionBgPane__iaA3V"></div>
              </div>
              <div class="PageSocial_actionBg__VdO2Y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z">
                  </path>
                </svg></div>
            </a><a class="PageSocial_action__l2jzO PageSocial_github___g2RK"
              href="https://github.com/transitive-bullshit" title="GitHub @transitive-bullshit" target="_blank"
              rel="noopener noreferrer">
              <div class="PageSocial_actionBg__VdO2Y">
                <div class="PageSocial_actionBgPane__iaA3V"></div>
              </div>
              <div class="PageSocial_actionBg__VdO2Y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                  </path>
                </svg></div>
            </a><a class="PageSocial_action__l2jzO PageSocial_linkedin__24DsJ" href="https://www.linkedin.com/in/fisch2"
              title="LinkedIn Travis Fischer" target="_blank" rel="noopener noreferrer">
              <div class="PageSocial_actionBg__VdO2Y">
                <div class="PageSocial_actionBgPane__iaA3V"></div>
              </div>
              <div class="PageSocial_actionBg__VdO2Y"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z">
                  </path>
                </svg></div>
            </a></div>
        </aside>
      </div>
    </main>
    <footer class="styles_footer__RBpyk">
      <div class="styles_copyright__nhL_k">Copyright 2022
        <!-- -->Travis Fischer</div>
      <div class="styles_settings__GyEhi"><a class="styles_toggleDarkMode__QfgK_"
          href="https://nextjs-notion-sricor.vercel.app/python-%E7%B1%BB%E5%9E%8B%E6%B3%A8%E8%A7%A3#" role="button"
          title="Toggle dark mode"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94">
            </path>
            <circle cx="256" cy="256" r="80" fill="none" stroke-linecap="round" stroke-miterlimit="10"
              stroke-width="32"></circle>
          </svg></a></div>
      <div class="styles_social__ptL3p"><a class="styles_twitter__3YoqL" href="https://twitter.com/transitive_bs"
          title="Twitter @transitive_bs" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
            </path>
          </svg></a><a class="styles_github__0JN7a" href="https://github.com/transitive-bullshit"
          title="GitHub @transitive-bullshit" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
            </path>
          </svg></a><a class="styles_linkedin__bgwDi" href="https://www.linkedin.com/in/fisch2"
          title="LinkedIn Travis Fischer" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor"
            fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
            </path>
          </svg></a></div>
    </footer>
  </div>
</template>

<style scoped>

</style>