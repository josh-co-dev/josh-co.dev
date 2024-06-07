let selected = 2;
let tl;
const codes = [
    "<p class=\"comment\">// main.cpp</p>" +
    "<span class=\"metadata\">#include</span> <span class=\"string\">\"engine/engine.h\"</span><br>" +
    "<span class=\"metadata\">#include</span> <span class=\"string\">\"test.h\"</span><br><br>" +
    "<span class=\"type\">int</span> <span class=\"function\">main</span><span>() {</span><br>" +
    "&emsp;&emsp;<span class=\"type\">JEGraphicsSettings</span> <span class='var'>graphicsSettings</span><span>{};</span><br>" +
    "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span" + " class=\"property\">vsyncEnabled</span><span> = </span><span" +
    " class=\"boolean\">true</span><span>;</span><br>" + "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span" +
    " class=\"property\">skybox</span><span> = </span><span" + " class=\"boolean\">true</span><span>;</span><br>" +
    "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span" +
    " class=\"number\">0</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>" +
    "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span" +
    " class=\"number\">1</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>" +
    "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span" +
    " class=\"number\">2</span><span>] = </span><span class=\"number\">0.8f</span><span>;</span><br>" +
    "&emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span" + " class=\"property\">msaaSamples</span><span> = </span><span" +
    " class=\"number\">4</span><span>;</span><br>" +
    "&emsp;&emsp;<span class='function'>init</span><span>(</span><span class=\"string\">\"JoshEngine Demo\"</span><span>, </span><span" +
    " class=\"number\">1280</span><span>, </span><span class=\"number\">720</span><span>, </span><span class='var'>graphicsSettings</span><span>);</span><br>" +
    "&emsp;&emsp;<span class='function'>setupTest</span><span>();</span><br>" + "&emsp;&emsp;<span class='function'>mainLoop</span><span>();</span><br>" +
    "&emsp;&emsp;<span class='function'>deinit</span><span>();</span><br>" + "&emsp;&emsp;<span class=\"keyword\">return </span><span class=\"number\">0</span><span>;</span><br><span>}</span>",

    "<p class='comment'>// main.cs</p>" +
    "<span class='keyword'>using </span><span class='namespace'>System</span><span>;</span><br><br>" +
    "<span class='keyword'>class </span><span class='type'>Program</span><span> {</span><br><br>" +
    "&emsp;&emsp;<span class='keyword'>public static </span><span class='type'>void</span><span class='function'> Main</span>" +
    "<span>(</span><span class='type'>string</span><span>[]</span><span class='var'> args</span><span>) {</span><br><br>" +
    "&emsp;&emsp;&emsp;&emsp;<span class='type'>Console</span><span>.</span><span class='func-props'>WriteLine</span><span>(</span><span class='string'>\"Hello World!\"</span><span>);</span><br><br>" +
    "&emsp;&emsp;<span>}</span><br><br>" +
    "<span>}</span>",

    "<p class='comment'># main.py</p>" +
    "<span class='keyword'>import </span><span class='var'>sys</span><br><br>" +
    "<span class='keyword'>class</span><span class='type'> Main</span><span>:</span><br><br>" +
    "&emsp;&emsp;<span class='keyword'>def </span><span class='function'>main</span><span>" + "(</span><span class='var'>self</span><span>, </span><span class='var'>args</span>" +
    "<span>: </span><span class='type'>list</span><span>[</span><span class='type'>str</span><span>]</span><span>):</span><br><br>" +
    "&emsp;&emsp;&emsp;&emsp;<span class='function'>print</span><span>(</span><span class='string'>\"Hello world!\"</span><span>)</span><br><br><br>" +
    "<span class='var'>argv</span><span> = </span><span class='var'>sys</span><span>.</span><span class='property'>argv</span><br><br>" +
    "<span class='var'>argv</span><span>.</span><span class='func-props'>pop</span><span>(</span><span class='number'>0</span><span>)</span><br><br>" +
    "<span class='function'>Main</span><span>().</span><span class='func-props'>main</span><span>(</span><span class='var'>argv</span><span>);</span>"]

function langClick(id) {
    if (id === selected || id > 2) return;
    let first = document.getElementsByClassName(selected.toString());
    let next = document.getElementsByClassName(id.toString());
    first[0].classList.remove("active");
    next[0].classList.add("active");
    selected = id;
    let code = document.getElementsByClassName("padding-code")[0];
    code.innerHTML = codes[id];
    tl.scrollTrigger.kill();
    animateText();
}

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    animateText()
    langClick(0);
});

function animateText() {
    let elems = gsap.utils.toArray(".padding-code span");
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".padding", scrub: true, pin: true, start: "top top", end: "+=300%",
        }
    });
    tl.addLabel("start")
    tl.addLabel('transition', "+=50%")
    tl.addLabel("part-2", "+=55%")
    tl.to('.text', {opacity: 0, duration: 1.5, ease: "none"}, 'transition')
    tl.to(".numb", {text: "Step 2", duration: 3, ease: "none"}, "transition")
    tl.to('.text', {text: "Write Code", duration: 0, ease: "none"}, '>')
    tl.to('.text', {opacity: 1, duration: 1.5, ease: "none"}, '>')
    let times = 0;
    elems.forEach(el => {
        let text = times > 0 ? ">" : "part-2"
        tl.from(el, {text: "", duration: 2 * el.innerHTML.length, ease: "none"}, text);
        times++;
    });
    tl.addLabel('transition-2', "+=60%");
    tl.addLabel('part-3', "transition-2+=5%");
    tl.to('.text', {opacity: 0, duration: 1.5, ease: "none"}, 'transition-2')
    tl.to(".numb", {text: "Step 3", duration: 3, ease: "none"}, "transition-2")
    tl.to('.text', {text: "Run the code", duration: 0, ease: "none"}, '>')
    tl.to('.text', {opacity: 1, duration: 1.5, ease: "none"}, '>')
    tl.to('.code', {opacity: 0, duration: 1.5, ease: "none"}, 'part-3')
    tl.to('.code', {width: 0, height: 0, duration: 0, ease: "none"}, '>')
    tl.to(".img", {width: "85.5%", height: "75%", margin: 10, duration: 0, ease: "none"}, '>')
    tl.to(".img", {opacity: 1, duration: 1.5, ease: "none"}, '>')
    tl.addLabel('end', "+=100%")
    tl.to(".numb", {text: "Step 3", duration: 0, ease: "none"}, "end")
    tl.to(".line", {
        height: 564,
        duration: 1000,
        display: "inline-block",
        ease: "none"
    }, "start")
}