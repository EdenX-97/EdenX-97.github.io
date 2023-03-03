import{_ as a,W as t,X as e,Y as n,Z as p,$ as o,a1 as c,E as l}from"./framework-5afa3ebb.js";const i={},u={href:"https://leetcode.com/problems/valid-palindrome/description/",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><ul><li>We can use two pointers, in the loop, first pointer go from start to last character, and second pointer is oppoiste. When the pointer meet a non-alphanumeric character, just continure to go to next round and move the pointer. When the two pointers all find alphanumeric character, wo transfer it to lower case and compare if they are same.</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Character</span> start <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Character</span> last <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            i<span class="token operator">++</span><span class="token punctuation">;</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(d,v){const s=l("ExternalLinkIcon");return t(),e("div",null,[n("p",null,[n("a",u,[p("Leetcode: Easy"),o(s)])]),r])}const b=a(i,[["render",k],["__file","valid-palindrome.html.vue"]]);export{b as default};