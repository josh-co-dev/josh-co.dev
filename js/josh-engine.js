let selected = 2;
let tl;
const codes=  [
    "<p class=\"comment\">// main.cpp</p>\n" +
    "                        <span class=\"metadata\">#include</span> <span class=\"string\">\"engine/engine.h\"</span><br>\n" +
    "                        <span class=\"metadata\">#include</span> <span class=\"string\">\"test.h\"</span><br><br>\n" +
    "                        <span class=\"type\">int</span> <span class=\"function\">main</span><span>() {</span><br>\n" +
    "                        &emsp;&emsp;<span class=\"type\">JEGraphicsSettings</span> <span class='var'>graphicsSettings</span><span>{};</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span\n" +
    "                            class=\"property\">vsyncEnabled</span><span> = </span><span\n" +
    "                            class=\"boolean\">true</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span\n" +
    "                            class=\"property\">skybox</span><span> = </span><span\n" +
    "                            class=\"boolean\">true</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">0</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">1</span><span>] = </span><span class=\"number\">0.75f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span class=\"property\">clearColor</span><span>[</span><span\n" +
    "                            class=\"number\">2</span><span>] = </span><span class=\"number\">0.8f</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='var'>graphicsSettings</span><span>.</span><span\n" +
    "                            class=\"property\">msaaSamples</span><span> = </span><span\n" +
    "                            class=\"number\">4</span><span>;</span><br>\n" +
    "                        &emsp;&emsp;<span class='function'>init</span><span>(</span><span class=\"string\">\"JoshEngine Demo\"</span><span>, </span><span\n" +
    "                            class=\"number\">1280</span><span>, </span><span class=\"number\">720</span><span>, </span><span class='var'>graphicsSettings</span><span>);</span><br>\n" +
    "                        &emsp;&emsp;<span class='function'>setupTest</span><span>();</span><br>\n" +
    "                        &emsp;&emsp;<span class='function'>mainLoop</span><span>();</span><br>\n" +
    "                        &emsp;&emsp;<span class='function'>deinit</span><span>();</span><br>\n" +
    "                        &emsp;&emsp;<span class=\"keyword\">return </span><span class=\"number\">0</span><span>;</span><br>\n" +
    "                        <span>}</span>\n",

    "<p class='comment'>// main.cs</p>" +
    "<span class='comment'>// Eventually, there will be something here</span><br>" +
    "<span class='comment'>// JoshEngine does not have C# support yet</span><br>" +
    "<span class='comment'>// But it will be added in the future (hopefully)</span><br>" +
    "<span class='comment'>// For now, you can use C++, or port it to C# yourself</span><br>" +
    "<span class='comment'>// Here is some lorem ipsum for you:</span><br>" +
    "<span class='comment'>// Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br>" +
    "<span class='comment'>// Donec quis aliquam eros. Mauris vitae fermentum nisl.</span><br>" +
    "<span class='comment'>// Maecenas posuere velit sed augue pellentesque, id blandit mi euismod.</span><br>" +
    "<span class='comment'>// Suspendisse accumsan nunc in arcu eleifend accumsan nec a dui.</span><br>" +
    "<span class='comment'>// Integer condimentum urna posuere leo ultricies pulvinar.</span><br>" +
    "<span class='comment'>// In consequat egestas interdum.</span><br>" +
    "<span class='comment'>// Curabitur gravida maximus.</span><br><br>",

    "<p class='comment'># main.py</p>" +
    "<span class='comment'># Eventually, there will be something here</span><br>" +
    "<span class='comment'># JoshEngine does not have C# support yet</span><br>" +
    "<span class='comment'># But it will be added in the future (hopefully)</span><br>" +
    "<span class='comment'># For now, you can use C++, or port it to C# yourself</span><br>" +
    "<span class='comment'># Here is some lorem ipsum for you:</span><br>" +
    "<span class='comment'># Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br>" +
    "<span class='comment'># Donec quis aliquam eros. Mauris vitae fermentum nisl.</span><br>" +
    "<span class='comment'># Maecenas posuere velit sed augue pellentesque, id blandit mi euismod.</span><br>" +
    "<span class='comment'># Suspendisse accumsan nunc in arcu eleifend accumsan nec a dui.</span><br>" +
    "<span class='comment'># Integer condimentum urna posuere leo ultricies pulvinar.</span><br>" +
    "<span class='comment'># In consequat egestas interdum.</span><br>" +
    "<span class='comment'># Curabitur gravida maximus.</span><br><br>",
]

function langClick(id) {
    if(id === selected || id > 2) return;
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

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    animateText()
    langClick(0);
});

function animateText() {
    let elems = gsap.utils.toArray(".padding-code span");
    tl = gsap.timeline({scrollTrigger: {
            trigger: ".padding",
            scrub: true ,
            pin: true,
            start: "top top",
            end: "+=300%",
        }});
    tl.addLabel('transition', "+=20%")
    tl.addLabel("part-2", "+=25%")
    tl.to('.text', {opacity: 0, duration: 1.5, ease: "none"}, 'transition')
    tl.to(".numb", {text: "Step 2", duration: 3, ease: "none"}, "transition")
    tl.to('.text', {text: "Write Code", duration: 0, ease: "none"}, '>')
    tl.to('.text', {opacity: 1, duration: 1.5, ease: "none"}, '>')
    let times = 0;
    elems.forEach(el => {
        let text = times > 0 ? ">" : "part-2"
        tl.from(el, {text: "", duration: 2*el.innerHTML.length, ease: "none"}, text);
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
}