<template>
  <div class="body-class">
    <div>
        <canvas id="canvas"></canvas>
    </div>
    <Card dis-hover	 class="cardBack">
        <div style="text-align:center">
            <div class="githubDiv" @click="openMyGithub">
                <span style="color:#fff;font-size:20px">开发者：Black_晨</span>
                <span>&nbsp;&nbsp;&copy;Github</span>
            </div>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username" style="width:250">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
                </Form-item>
            </Form>
        </div>
    </Card>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: 'admin',
                    password: '123456'
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted() {
            if(localStorage.loginName !== undefined) {
                localStorage.removeItem("loginName");
            }
            if(localStorage.loginPwd !== undefined) {
                localStorage.removeItem("loginPwd");
            }
            this.showCanvas();
            // window.onresize = () => {
            //     document.addEventListener('click', function(){
            //     })
            // }
        },
        methods: {
            showCanvas(){
                (function (window) {
                    var ctx,
                    hue,
                    logo,
                    form,
                    buffer,
                    target = {},
                    tendrils = [],
                    settings = {};
                    
                    settings.debug = true;
                    settings.friction = 0.5;
                    settings.trails = 20;
                    settings.size = 50;
                    settings.dampening = 0.25;
                    settings.tension = 0.98;
                    
                    Math.TWO_PI = Math.PI * 2;
                
                        // ========================================================================================
                        // Oscillator 浣曢棶璧�
                        // ----------------------------------------------------------------------------------------
                
                    function Oscillator(options) {
                        this.init(options || {});
                    }
                    Oscillator.prototype = (function () {
                        var value = 0;
                        return {
                        
                            init: function (options) {
                                this.phase = options.phase || 0;
                                this.offset = options.offset || 0;
                                this.frequency = options.frequency || 0.001;
                                this.amplitude = options.amplitude || 1;
                            },
                        
                            update: function () {
                                this.phase += this.frequency;
                                value = this.offset + Math.sin(this.phase) * this.amplitude;
                                return value;
                            },
                        
                            value: function () {
                                return value;
                            }
                        };
                    })();
                    // ========================================================================================
                    // Tendril hovertree.com
                    // ----------------------------------------------------------------------------------------
                    function Tendril(options) {
                        this.init(options || {});
                    }
                    Tendril.prototype = (function () {
                        function Node() {
                            this.x = 0;
                            this.y = 0;
                            this.vy = 0;
                            this.vx = 0;
                        }
                        return {
                            init: function (options) {
                                this.spring = options.spring + (Math.random() * 0.1) - 0.05;
                                this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
                                this.nodes = [];
                                for (var i = 0, node; i < settings.size; i++) {
                                    node = new Node();
                                    node.x = target.x;
                                    node.y = target.y;
                                    this.nodes.push(node);
                                }
                            },
                            update: function () {
                                var spring = this.spring,
                                node = this.nodes[0];
                                node.vx += (target.x - node.x) * spring;
                                node.vy += (target.y - node.y) * spring;
                                for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
                                    node = this.nodes[i];
                                    if (i > 0) {
                                        prev = this.nodes[i - 1];
                                        node.vx += (prev.x - node.x) * spring;
                                        node.vy += (prev.y - node.y) * spring;
                                        node.vx += prev.vx * settings.dampening;
                                        node.vy += prev.vy * settings.dampening;
                                    }
                                    node.vx *= this.friction;
                                    node.vy *= this.friction;
                                    node.x += node.vx;
                                    node.y += node.vy;
                                    spring *= settings.tension;
                                }
                            },
                
                            draw: function () {
                                var x = this.nodes[0].x,
                                y = this.nodes[0].y,
                                a, b;
                                ctx.beginPath();
                                ctx.moveTo(x, y);
                                for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
                                    a = this.nodes[i];
                                    b = this.nodes[i + 1];
                                    x = (a.x + b.x) * 0.5;
                                    y = (a.y + b.y) * 0.5;
                                    ctx.quadraticCurveTo(a.x, a.y, x, y);
                                }
                                a = this.nodes[i];
                                b = this.nodes[i + 1];
                                ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
                                ctx.stroke();
                                ctx.closePath();
                            }
                        };
                
                    })();
                
                    // ----------------------------------------------------------------------------------------
                    function init(event) {
                        document.removeEventListener('mousemove', init);
                        document.removeEventListener('touchstart', init);
                        document.addEventListener('mousemove', mousemove);
                        document.addEventListener('touchmove', mousemove);
                        document.addEventListener('touchstart', touchstart);
                        mousemove(event);
                        reset();
                        loop();
                    }
                    function reset() {
                        tendrils = [];
                        for (var i = 0; i < settings.trails; i++) {
                            tendrils.push(new Tendril({
                                spring: 0.45 + 0.025 * (i / settings.trails)
                            }));
                        }
                    }
                    function loop() {
                        if (!ctx.running) return;
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.fillStyle = 'rgba(8,5,16,0.4)';
                        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                        ctx.globalCompositeOperation = 'lighter';
                        ctx.strokeStyle = 'hsla(' + Math.round(hue.update()) + ',90%,50%,0.25)';
                        ctx.lineWidth = 1;
                        if (ctx.frame % 60 == 0) {
                            // console.log(hue.update(), Math.round(hue.update()), hue.phase, hue.offset, hue.frequency, hue.amplitude);
                        }
                        for (var i = 0, tendril; i < settings.trails; i++) {
                            tendril = tendrils[i];
                            tendril.update();
                            tendril.draw();
                        }
                        ctx.frame++;
                        ctx.stats.update();
                        requestAnimFrame(loop);
                    }
                
                    function resize() {
                        ctx.canvas.width = window.innerWidth;
                        ctx.canvas.height = window.innerHeight;
                    }
                
                    function start() {
                        if (!ctx.running) {
                            ctx.running = true;
                            loop();
                        }
                    }
                
                    function stop() {
                        ctx.running = false;
                    }
                
                    function mousemove(event) {
                        if (event.touches) {
                            target.x = event.touches[0].pageX;
                            target.y = event.touches[0].pageY;
                        } else {
                            target.x = event.clientX
                            target.y = event.clientY;
                        }
                        event.preventDefault();
                    }
                
                    function touchstart(event) {
                        if (event.touches.length == 1) {
                            target.x = event.touches[0].pageX;
                            target.y = event.touches[0].pageY;
                        }
                    }
                
                    function keyup(event) {
                        switch (event.keyCode) {
                            case 32:
                                save();
                                break;
                            default:
                        // console.log(event.keyCode); hovertree.com
                        }
                    }
                
                    function letters(id) {
                        var el = document.getElementById(id),
                        letters = el.innerHTML.replace('&amp;', '&').split(''),
                        heading = '';
                        for (var i = 0, n = letters.length, letter; i < n; i++) {
                            letter = letters[i].replace('&', '&amp');
                            heading += letter.trim() ? '<span class="letter-' + i + '">' + letter + '</span>' : '&nbsp;';
                        }
                        el.innerHTML = heading;
                        setTimeout(function () {
                            el.className = 'transition-in';
                        }, (Math.random() * 500) + 500);
                    }
                
                    function save() {
                        if (!buffer) {
                            buffer = document.createElement('canvas');
                            buffer.width = screen.availWidth;
                            buffer.height = screen.availHeight;
                            buffer.ctx = buffer.getContext('2d');
                            form = document.createElement('form');
                            form.method = 'post';
                            form.input = document.createElement('input');
                            form.input.type = 'hidden';
                            form.input.name = 'data';
                            form.appendChild(form.input);
                            document.body.appendChild(form);
                        }
                        buffer.ctx.fillStyle = 'rgba(8,5,16)';
                        buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);
                        buffer.ctx.drawImage(canvas,
                            Math.round(buffer.width / 2 - canvas.width / 2),
                            Math.round(buffer.height / 2 - canvas.height / 2)
                        );
                        buffer.ctx.drawImage(logo,
                            Math.round(buffer.width / 2 - logo.width / 4),
                            Math.round(buffer.height / 2 - logo.height / 4),
                            logo.width / 2,
                            logo.height / 2
                        );
                        window.open(buffer.toDataURL(), 'wallpaper', 'top=0,left=0,width=' + buffer.width + ',height=' + buffer.height);
                        // form.input.value = buffer.toDataURL().substr(22);
                        // form.submit(); hovertree.com
                    }
                
                    window.requestAnimFrame = (function () {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) { window.setTimeout(fn, 1000 / 60) };
                    })();
                
                    window.onload = function () {
                        ctx = document.getElementById('canvas').getContext('2d');
                        ctx.stats = new Stats();
                        ctx.running = true;
                        ctx.frame = 1;
                        logo = new Image();
                        logo.src = 'ht' + 'tp://ho' + 'vertree.c' + 'om/themes/hvtimages/hvtlogo.p' + 'ng';
                        hue = new Oscillator({
                            phase: Math.random() * Math.TWO_PI,
                            amplitude: 85,
                            frequency: 0.0015,
                            offset: 285
                        });
                        //		letters('h1');
                        //		letters('h2');
                        document.addEventListener('mousemove', init);
                        document.addEventListener('touchstart', init);
                        document.body.addEventListener('orientationchange', resize);
                        window.addEventListener('resize', resize);
                        window.addEventListener('keyup', keyup);
                        window.addEventListener('focus', start);
                        window.addEventListener('blur', stop);
                        
                        resize();
                
                        if (window.DEBUG) {
                            var gui = new dat.GUI();
                            // gui.add(settings, 'debug');
                            settings.gui.add(settings, 'trails', 1, 30).onChange(reset);
                            settings.gui.add(settings, 'size', 25, 75).onFinishChange(reset);
                            settings.gui.add(settings, 'friction', 0.45, 0.55).onFinishChange(reset);
                            settings.gui.add(settings, 'dampening', 0.01, 0.4).onFinishChange(reset);
                            settings.gui.add(settings, 'tension', 0.95, 0.999).onFinishChange(reset);
                            document.body.appendChild(ctx.stats.domElement);
                        }
                    };
                
                })(window);
                if(localStorage.load === undefined){
                    window.location.reload();
                }
                if(this.$router.currentRoute.path === '/'){
                    localStorage.load=true;
                }
                console.log(localStorage)
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        localStorage.loginName = this.formInline.user;
                        localStorage.loginPwd = this.formInline.password;
                        this.$router.push({path:'/main/echarts'})
                        localStorage.removeItem("load");
                        console.log(localStorage,"----")
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            openMyGithub(){
                console.log(1)
                window.open('https://github.com/Blackloser');
            }
        }
    }
</script>
<style scoped>
    .cardBack{
        background-image:url('../../../static/img/login.gif');
        width:320px;z-index:1000;
        margin:calc((100vh - 400px)/2) calc((100vw - 318px)/2)
    }
    .body-class >>> .ivu-card-bordered,
    .ivu-card.ivu-card-dis-hover.ivu-card-bordered:hover {
        border-color:rgba(102,102,102,0.45)
    }
    .githubDiv{
        padding-bottom:20px;
        cursor: pointer;
    }
    #canvas {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: none;
    }
    #hovertreecontainer {
        display: table;
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
        text-align: center;
        cursor: none;
        left: 15px;
    }
</style>
