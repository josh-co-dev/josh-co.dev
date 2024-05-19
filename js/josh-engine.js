let selected = 0;
let tl;
const codes=  [
    "<p class=\"comment\">// main.cpp</p>\n" +
    "                        <span class=\"metadata\">#include</span> <span class=\"string\">\"engine/engine.h\"</span><br>\n" +
    "                        <span class=\"metadata\">#include</span> <span class=\"string\">\"test.h\"</span><br><br>\n" +
    "                        <span class=\"keyword\">int</span> <span class=\"function\">main</span><span>() {</span><br>\n" +
    "                        &emsp;&emsp;<span class=\"type\">JEGraphicsSettings</span> <span>graphicsSettings{};</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span\n" +
    "                            class=\"property\">vsyncEnabled</span><span> = </span><span\n" +
    "                            class=\"keyword\">true</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span\n" +
    "                            class=\"property\">skybox</span><span> = </span><span\n" +
    "                            class=\"keyword\">true</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">0</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">1</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">2</span><span>] = </span><span class=\"number\">0.8f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>graphicsSettings.</span><span\n" +
    "                            class=\"property\">msaaSamples</span><span> = </span><span\n" +
    "                            class=\"number\">4</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span>init(</span><span class=\"string\">\"JoshEngine Demo\"</span><span>, </span><span\n" +
    "                            class=\"number\">1280</span><span>, </span><span class=\"number\">720</span><span>, graphicsSettings);</span><br>\n" +
    "                        &emsp;&emsp;<span>setupTest();</span><br>\n" +
    "                        &emsp;&emsp;<span>mainLoop();</span><br>\n" +
    "                        &emsp;&emsp;<span>deinit();</span><br>\n" +
    "                        &emsp;&emsp;<span class=\"keyword\">return </span><span class=\"number\">0</span><span>;</span><br>\n" +
    "                        <span>}</span>\n",

    "<p class='comment'>// main.cs</p>" +
    "<span class='comment'// Eventually, there will be something here></span><br>" +
    "<span class='comment'>// JoshEngine does not have C# support yet</span><br>" +
    "<span class='comment'>// But it will be added in the future</span><br>" +
    "<span class='comment'>// For now, you can use C++, or port it to C# your self</span><br>",

    "<p class='comment'># main.py</p>" +
    "<span class='comment'># Eventually, there will be something here</span><br>" +
    "<span class='comment'># JoshEngine does not have python support yet</span><br>" +
    "<span class='comment'># But it will be added in the future</span><br>" +
    "<span class='comment'># For now, you can use C++, or port it to python your self</span><br>",
]
let canSwitch = true;
function langClick(id) {
    if(id === selected || id > 2 || !canSwitch) return;
    let first = document.getElementsByClassName(selected.toString());
    let next = document.getElementsByClassName(id.toString());
    first[0].classList.remove("active");
    next[0].classList.add("active");
    selected = id;
    let code = document.getElementsByClassName("code")[0];
    code.innerHTML = codes[id];
    tl.kill();
    animateText();
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    animateText()
});
function disableSwitch() {
    canSwitch = false;
}

function animateText() {
    let elems = gsap.utils.toArray(".code span");
    ScrollTrigger.create({
        trigger: ".padding",
        start: "top top",
        end: "+=200%",
        onEnter: disableSwitch,
    })
    tl = gsap.timeline({scrollTrigger: {
            trigger: ".padding",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=200%",
        }});
    elems.forEach(el => {
        tl.from(el, {text: "", duration: el.innerHTML.length * 2, ease: "none"});
    });
}