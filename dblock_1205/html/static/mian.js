const path = require('path')
const os = require('os')
const modulars = [{
        name: "传感器",
        title: "",
        mode: [{
                name: "LED灯",
                title: "",
                img: "./static/img/led1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="font-family: 宋体; font-size: 16px;">LED<span style="font-family: 宋体;">灯（</span><span style="font-family: Calibri;">Light Emitting Diode</span><span style="font-family: 宋体;">），发光二极管，是一种能够将电能转化为可见光的固态的半导体器件，它可以直接把电转化为光。</span><span style="font-family: Calibri;">LED</span><span style="font-family: 宋体;">的心脏是一个半导体的晶片，晶片的一端附在一个支架上，一端是负极，另一端连接电源的正极，使整个晶片被环氧树脂封装起来。</span></span></strong></span>
</p>
<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;"><span style="color: rgb(0, 0, 0); font-family: 宋体;">将</span>LED<span style="color: rgb(0, 0, 0); font-family: 宋体;">灯用</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">3</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">芯数据线连接到数字口</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">02</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">号引脚，使用零件及连线方式如下图：</span></span></strong></span>
</p>
<p>
    <br/>
</p>`,
                        img: "./static/img/ledcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/LEDmodel.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/ledcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/LED1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="font-size: 16px; font-family: 宋体;">本程序中用到了控制器的模拟引脚、数字引脚和时间延迟函数。</span></strong></span>
</p>
<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;"><span style="color: rgb(0, 0, 0); font-family: 宋体;">数字信号是以</span>0<span style="color: rgb(0, 0, 0); font-family: 宋体;">、</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">1</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">表示的电平不连续变化的信号，也就是以二进制的形式表示的信号。 在控制器中数字信号通过高低电平来表示，高电平则为数字信号</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">1</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">，低电平则为数字信号</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">0</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">。</span></span></strong></span>
</p>
<p>
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;"><span style="color: rgb(0, 0, 0); font-family: 宋体;">对数字</span>IO<span style="color: rgb(0, 0, 0); font-family: 宋体;">配置函数为</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">pinMode()</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">，将指定的引脚配置成输出或输入</span></span></strong></span>
</p>
<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;">pinMode(pin, mode)</span> <span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;">&nbsp;pin:<span style="color: rgb(0, 0, 0); font-family: 宋体;">要设置模式的引脚 &nbsp;</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">mode:INPUT</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">或</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">OUTPUT</span></span></strong></span>
</p>
<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;"><span style="color: rgb(0, 0, 0); font-family: 宋体;">模拟输入引脚可以将外部输入的模拟信号转换为芯片运算时可以识别的数字信号，从而实现读入模拟值的功能。控制器模拟输入功能有</span>10<span style="color: rgb(0, 0, 0); font-family: 宋体;">位精度，即可以将</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">0</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">～</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">5V</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">的电压信号转换为</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">0</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">～</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">1023</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">的整数形式表示。模拟输入功能需要使用</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">analogRead()</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">函数。</span></span></strong></span>
</p>
<p style="text-indent:28px">
    <span style="color: rgb(0, 0, 0);"><strong><span style="color: rgb(0, 0, 0); font-family: 宋体; font-size: 16px;"><span style="color: rgb(0, 0, 0); font-family: 宋体;">时间延迟函</span>delay()<span style="color: rgb(0, 0, 0); font-family: 宋体;">，使程序暂停设定的时间（单位毫秒）。（一秒等于</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">1000</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">毫秒），参数：</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">ms</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">：暂停的毫秒数（</span><span style="color: rgb(0, 0, 0); font-family: Calibri;">unsigned long</span><span style="color: rgb(0, 0, 0); font-family: 宋体;">）</span></span></strong></span>
</p>
<p>
    <br/>
</p>`
                }
            },
            {
                name: "蜂鸣器",
                title: "",
                img: "./static/img/logo/Buzzer1.png",
                rightcon: {
                    explain: {
                        text: `<p>
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">蜂鸣器是一种一体化结构的电子讯响器，采用直流电压供电，广泛应用于计算机、打印机、复印机、报警器、电子玩具、汽车电子设备、电话机、定时器等电子产品中作发声器件。</span></strong>
      </p>
      <p>
          <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">找到印有蜂鸣器字样的传感器，用</span>3<span style="font-family:宋体">芯数据线将蜂鸣器与控制器</span><span style="font-family:Calibri">02</span><span style="font-family:宋体">号引脚相连，使用零件及连线方式如下图：</span></span></strong>
      </p>
      <p>
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span><br/>
      </p>
      <p>
          <br/>
      </p>`,
                        img: "./static/img/Buzzercontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Buzzer1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: './static/img/buzzercode1.png',
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Buzzer1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">程序代码中用到了</span><strong>tone()</strong><span style="font-family:宋体">函数，其作用为在一个引脚上产生一个特定频率的方波（</span><span style="font-family:Calibri">50%</span><span style="font-family:宋体">占空比）。持续时间可以设定，否则波形会一直产生直到调用</span><strong><span style="font-family:Calibri">noTone()</span></strong><span style="font-family:宋体">函数。该引脚可以连接压电蜂鸣器或其他喇叭播放声音。具体使用方法如下：</span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">tone(pin, frequency) </span></strong>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">tone(pin, frequency, duration)</span></strong>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">pin</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">：要产生声音的引脚 </span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">frequency</span></strong><span style=";font-family:宋体;font-size:16px">: <span style="font-family:宋体">产生声音的频率，单位</span><span style="font-family:Calibri">Hz</span><span style="font-family:宋体">，类型</span><strong><span style="font-family:Calibri">unsigned int</span></strong></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">duration</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">：声音持续的时间，单位毫秒（可选），类型</span><span style="font-family:Calibri">unsigned long</span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style="font-family: 宋体;">noTone()：</span></strong><span style="font-family: 宋体;">停止由<strong><span style="font-family:Calibri">tone()</span></strong>产生的方波，如果没有使用<span style="font-family:Calibri">tone()</span>将不会有效果。</span>
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "IMU(加速度计)",
                title: "",
                img: "./static/img/logo/IMU1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">加速度计即惯性测量单元（英文：</span>Inertial measurement unit<span style="font-family:宋体">，简称</span><span style="font-family:Calibri">IMU</span><span style="font-family:宋体">）是测量物体三轴姿态角</span><span style="font-family:Calibri">(</span><span style="font-family:宋体">或角速率</span><span style="font-family:Calibri">)</span><span style="font-family:宋体">以及加速度的装置。一般的，一个</span><span style="font-family:Calibri">IMU</span><span style="font-family:宋体">包含了三个单轴的加速度计和三个单轴的陀螺，加速度计检测物体在载体坐标系统独立三轴的加速度信号，而陀螺检测载体相对于导航坐标系的角速度信号，测量物体在三维空间中的角速度和加速度，并以此解算出物体的姿态。在导航中有着很重要的应用价值。</span></span></strong>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">为了提高可靠性，还可以为每个轴配备更多的传感器。一般而言</span>IMU<span style="font-family:宋体">要安装在被测物体的重心上。</span></span></strong>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">IMU<span style="font-family:宋体">大多用在需要进行运动控制的设备，如汽车和机器人上。也被用在需要用姿态进行精密位移推算的场合，如潜艇、飞机、导弹和航天器的惯性导航设备等。</span></span></strong>
        </p>
            <br/>
        </p>`,
                        img: "./static/img/IMUcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/IMU1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/IMUcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Accelerometer1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">程序中使用到了</span>IMU<span style="font-family:宋体">加速度计的库函数，在代码页可以看到</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">#include &quot;MMA8653Library.h&quot;</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">，该语句引用了所使用加速度计的库函数，可以完成对</span><span style="font-family:Calibri">IMU</span><span style="font-family:宋体">角度和加速度的获取，例程中就是通过获取加速度计的角度值从而控制舵机的转角。</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">MMA8653_x_angle()</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">；</span></span> <span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">获取</span><span style="font-family:Calibri">x</span><span style="font-family:宋体">轴角度值</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">MMA8653_x_Gdata()</span></strong><span style=";font-family:宋体;font-size:16px">;</span> <span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">获取</span><span style="font-family:Calibri">x</span><span style="font-family:宋体">轴加加速度，其他轴同理</span></span>
        </p>
        <p>
            <br/>
        </p>`
                }
            },
            {
                name: "触碰开关",
                title: "",
                img: "./static/img/logo/Touchswitch1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">触碰开关又叫按键开关，最早出现在日本，使用时以满足操作力的条件向开关操作方向施压开关功能闭合接通，当撤销压力时开关即断开，其内部结构是靠金属弹片受力变化来实现通断的。</span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">找到触碰开关和</span>LED<span style="font-family:宋体">灯，使用零件及连线方式如下图：</span></span></strong>
        </p>
        <p>
            <br/>
        </p>`,
                        img: "./static/img/Touchswitchcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Touchswitch1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Touchswitchcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/button.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">程序中使用到</span><strong>if</strong><span style="font-family:宋体">条件判断和布尔常量赋值功能。</span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">BOOL</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">常量</span><strong><span style="font-family:Calibri">true/ false</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">true</span></strong><span style="font-family:宋体">为真，</span><strong><span style="font-family:Calibri">false</span></strong><span style="font-family:宋体">为假，赋值方式</span><strong><span style="font-family:Calibri">variate=true/false</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">variate</span></strong><span style="font-family:宋体">为用户可以声明的自定义变量。</span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">if</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">条件判断语句，当满足程序设定条件是执行程序，否则执行</span><strong><span style="font-family:Calibri">else</span></strong><span style="font-family:宋体">语句下的程序。</span></span>
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "拾音传感器",
                title: "",
                img: "./static/img/logo/Pickupthesound1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">拾音传感器的作用相当于一个话筒（麦克风）。它用来接收声波，显示声音的振动图象，但不能对噪声的强度进行测量。该传感器内置一个对声音敏感的电容式驻极体话筒。声波使话筒内的驻极体薄膜振动，导致电容的变化，而产生与之对应变化的微小电压。这一电压随后被转化成</span>0-5V<span style="font-family:宋体">的电压，经过</span><span style="font-family:Calibri">A/D</span><span style="font-family:宋体">转换被数据采集器接受，并传送给计算机。</span></span></strong>
        </p>
            <br/>
        </p>`,
                        img: "./static/img/Pickupthesoundcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Pickupthesound1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Pickupthesoundcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/sound1.xml')
                        }]
                    },
                    knowledge: `<p>
            <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; ">拾音传感器是一种靠接收声音震动，将声音进行降噪、放大的</span>电声学<span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px;">仪器。PeakFire系列分为主动式和被动式两种，在过去几年中，伴随着</span>驻极体<span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; ">的广泛应用，“主动式”拾音头逐渐超越“被动式”拾音头，日趋流行。只有大约95%的普通吉他使用的是磁性拾音头。</span>
        </p>`
                }
            },
            {
                name: "灰度传感器",
                title: "",
                img: "./static/img/logo/graylevel1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">灰度传感器是模拟传感器。灰度传感器利用不同颜色的检测面对光的反射程度不同，光敏电阻对不同检测面返回的光其阻值也不同的原理进行颜色深浅检测。在环境光干扰不是很严重的情况下，用于区别黑色与其它颜色。它还有比较宽的工作电压范围，在电源电压波动比较大的情况下仍能正常工作。它输出的是连续的模拟信号，因而能很容易地通过</span>A/D<span style="font-family:宋体">转换器或简单的比较器实现对物体反射率的判断，是一种实用的机器人巡线传感器，在光线较好的情况下，可以识别不同颜色的积木块。</span></span></strong>
      </p>
          <br/>
      </p>`,
                        img: "./static/img/graylevelcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/graylevel1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/graylevelcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/graylevel1.xml')
                        }]
                    },
                    knowledge: `<p>
          <span style="font-family: tahoma, Verdana, Arial, 宋体; font-size: 14px;">&nbsp; &nbsp; 灰度传感器是模拟传感器。灰度传感器利用不同颜色的检测面对光的反射程度不同，光敏电阻对不同检测面返回的光其阻值也不同的原理进行颜色深浅检测。在环境光干扰不是很严重的情况下，用于区别黑色与其它颜色。它还有比较宽的工作电压范围，在电源电压波动比较大的情况下仍能正常工作。它输出的是连续的模拟信号，因而能很容易地通过A/D转换器或简单的比较器实现对物体反射率的判断，是一种实用的机器人巡线传感器。</span>
      </p>`
                }
            },
            {
                name: "光敏传感器",
                title: "",
                img: "./static/img/logo/photosensitive1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">光敏传感器是对外界光信号或光辐射有响应或转换功能的敏感装置。光敏传感器是最常见的传感器之一，它的种类繁多，主要有：光电管、光电倍增管、光敏电阻、光敏三极管、太阳能电池、红外线传感器、紫外线传感器、光纤式光电传感器、色彩传感器、</span>CCD<span style="font-family:宋体">和</span><span style="font-family:Calibri">CMOS</span><span style="font-family:宋体">图像传感器等。</span></span></strong>
      </p>
      <p>
          <br/>
      </p>`,
                        img: "./static/img/photosensitivecontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/photosensitive1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/photosensitivecode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/photosensitive1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
          <span style=";font-family:宋体;color:rgb(51,51,51);font-size:16px;"><span style="font-family:宋体">光敏传感器是利用光敏元件将光信号转换为电信号的传感器，它的敏感波长在可见光波长附近，包括红外线波长和紫外线波长。光传感器不只局限于对光的探测，它还可以作为探测元件组成其他传感器，对许多非电量进行检测，只要将这些非电量转换为光信号的变化即可。</span></span>
      </p>
      <p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px">程序中使用到了串口打印函数</span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">serial.print(val);</span></strong><span style=";font-family:宋体;font-size:16px"> </span> &nbsp;<span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">通过串口打印出读取的变量或串口数值</span></span>
      </p>
      <p style="text-indent:28px">
          <span style="font-family: 宋体;"><strong>serial.println(val);</strong> </span> &nbsp;<span style="font-family: 宋体;">//通过串口助手换行打印出读取的变量或串口数值</span>
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "人体红外传感器",
                title: "",
                img: "./static/img/logo/Humaninfrared1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px">人体感应类开关又叫热释人体感应开关或红外智能开关。它是基于红外线技术的自动控制产品，当人进入感应范围时，专用传感器探测到人体红外光谱的变化，自动接通负载，人不离开感应范围，将持续接通；人离开后，延时自动关闭负载。</span></strong>
      </p>
      <p>
          <br/>
      </p>`,
                        img: "./static/img/Humaninfraredcontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Humaninfrared1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Humaninfraredcode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Infra-red1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span>
      </p>
      <p style="text-indent:28px">
          <strong><span style=";font-family:宋体;font-size:16px"></span></strong>
      </p>
      <p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">自然界中任何有温度的物体都会辐射红外线，只不过辐射的红外线波长不同而已。根据实验表明，人体辐射的红外线（能量）波长主要集中在约</span>10000nm<span style="font-family:宋体">左右。根据人体红外线波长的这个特性，如果用一种探测装置，能够探测到人体辐射的红外线而去除不需要的其他光波。就能实现检测人体活动信息的目的。因此，就出现了探测人体红外线的传感器产品。人体红外线传感器是根据热释电原理制作而成的。</span></span>
      </p>
      <p style="text-indent:28px">
          <br/>
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "光电开关",
                title: "",
                img: "./static/img/logo/Photoelectricity1.png",
                rightcon: {
                    explain: {
                        text: `<p>
          <strong><span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光电开关（</span>光电传感器<span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px;">）是光电接近开关的简称，它是利用被检测物对光束的遮挡或反射，由同步回路接通电路，从而检测物体的有无。物体不限于金属，所有能反射光线（或者对光线有遮挡作用）的物体均可以被检测。光电开关将输入电流在发射器上转换为光信号射出，接收器再根据接收到的光线的强弱或有无对目标物体进行探测。安防系统中常见的光电开关烟雾报警器，工业中经常用它来计数机械臂的运动次数。</span></strong>
      </p>`,
                        img: "./static/img/Photoelectricitycontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Photoelectricity1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Photoelectricitycode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Photoelectricity1.xml')
                        }]
                    },
                    knowledge: `<p>
          光电开关是传感器的一种，它把发射端和接收端之间光的强光电开关
      </p>
      <p>
          弱变化转化为电流的变化以达到探测的目的。由于光电开关输出回路和输入回路是电隔离的（即电绝缘），所以它可以在许多场合得到应用。采用集成电路技术和SMT表面安装工艺而制造的新一代光电开关器件，具有延时、展宽、外同步、抗相互干扰、可靠性高、工作区域稳定和自诊断等智能化功能。这种新颖的光电开关是一种采用脉冲调制的主动式光电探测系统型电子开关，它所使用的冷光源有红外光、红色光、绿色光和蓝色光等，可非接触，无损伤地迅速和控制各种固体、液体、透明体、黑体、柔软体和烟雾等物质的状态和动作。具有体积小、功能多、寿命长、精度高、响应速度快、检测距离远以及抗光、电、磁干扰能力强的优点。
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "温度传感器",
                title: "",
                img: "./static/img/logo/temperature1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">温度传感器（</span>temperature transducer<span style="font-family:宋体">）是指能感受温度并转换成可用输出信号的传感器。温度传感器是温度测量仪表的核心部分，品种繁多。按测量方式可分为接触式和非接触式两大类，按照传感器材料及电子元件特性分为热电阻和热电偶两类。</span></span></strong>
        </p>

        <p>
            <br/>
        </p>`,
                        img: "./static/img/temperaturecontent1.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/temperature1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/temperature1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/temperature1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px">A0<span style="font-family:宋体">口出来的值是电压值，如果以</span><span style="font-family:Calibri">mV</span><span style="font-family:宋体">表示的话，就是：</span></span><strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:Calibri">V=V</span></span><sub><span style=";font-family:等线;font-size:16px;vertical-align:sub">ref</span></sub><span style=";font-family:宋体;font-size:16px">*val/1024</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">，这里</span><span style="font-family:Calibri">val</span><span style="font-family:宋体">是转换后的数值，是整形。</span><span style="font-family:Calibri">LM35</span><span style="font-family:宋体">输出电压与温度关系是：</span><span style="font-family:Calibri">V=10mV*T</span><span style="font-family:宋体">，所以有换算公式：</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">10mV*T=V</span><sub><span style=";font-family:等线;font-size:16px;vertical-align:sub">ref</span></sub><span style=";font-family:宋体;font-size:16px">*val/1024</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">，这里</span></span><strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:Calibri">V</span></span><sub><span style=";font-family:等线;font-size:16px;vertical-align:sub">ref</span></sub><span style=";font-family:宋体;font-size:16px">=5000mV</span></strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">，可以根据输出模拟值计算温度值。</span></span>
        </p>
        <p style="text-indent:28px">
            <br/>
        </p>
        <p>
            <br/>
        </p>`
                }
            },
            {
                name: "火焰传感器",
                title: "",
                img: "./static/img/logo/flame1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">火焰的热辐射具有离散光谱的气体辐射和连续光谱的固体辐射。不同燃烧物的火焰辐射强度、波长分布有所差异，但总体来说，其对应火焰温度的</span> 1~2<span style="font-family:宋体">微米近红外波长域具有最大的辐射强度。例如汽油燃烧时的火焰辐射强度的波长。</span></span></strong>
        </p>
        <p style="text-indent: 28px;">
            <br/>
        </p>`,
                        img: "./static/img/flamecontent1.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/flame1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/flame1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/flame1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">火焰传感器原理：火焰传感器是由各种燃烧生成物、中间物、高温气体、碳氢物质以及无机物质为主体的高温固体微粒构成的。火焰的热辐射具有离散光谱的气体辐射和连续光谱的固体辐射。不同燃烧物的火焰辐射强度、波长分布有所差异，但总体来说，其对应火焰温度的近红外波长域及紫外光域具有很大的辐射强度</span>,<span style="font-family:宋体">根据这种特性可制成火焰传感器</span><span style="font-family:Calibri">.</span></span>
        </p>
        <p style="text-indent: 28px;">
            <br/>
        </p>`
                }
            },
            {
                name: "震动传感器",
                title: "",
                img: "./static/img/logo/shock1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">火焰的热辐射具有离散光谱的气体辐射和连续光谱的固体辐射。不同燃烧物的火焰辐射强度、波长分布有所差异，但总体来说，其对应火焰温度的</span> 1~2<span style="font-family:宋体">微米近红外波长域具有最大的辐射强度。例如汽油燃烧时的火焰辐射强度的波长。</span></span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">准备好火焰传感器两个</span>LED<span style="font-family:宋体">灯，将火焰传感器与模拟口</span><span style="font-family:Calibri">A0</span><span style="font-family:宋体">引脚连接，将红色</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">灯与数字口</span><span style="font-family:Calibri">D13</span><span style="font-family:宋体">引脚连接，将另一个</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">灯与数字口</span><span style="font-family:Calibri">D3</span><span style="font-family:宋体">引脚连接，使用传感器及整体连线方式如下图：</span></span></strong>
        </p>
        <p style="text-indent: 28px;">
            <br/>
        </p>`,
                        img: "./static/img/shockcontent1.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/shock1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/shock1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/shock1.xml')
                        }, ]
                    },
                    knowledge: `<p>
            <span style="color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; text-indent: 28px; ">&nbsp; &nbsp; 振动传感器并不是直接将原始要测的机械量转变为电量，而是将原始要测的机械量做为振动传感器的输入量，然后由机械接收部分加以接收，形成另一个适合于变换的机械量，最后由机电变换部分再将变换为电量。因此一个传感器的工作性能是由机械接收部分和机电变换部分的工作性能来决定的。</span>
        </p>`
                }
            },
            {
                name: "磁力传感器",
                title: "",
                img: "./static/img/logo/magneticforce1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">火焰的热辐射具有离散光谱的气体辐射和连续光谱的固体辐射。不同燃烧物的火焰辐射强度、波长分布有所差异，但总体来说，其对应火焰温度的</span> 1~2<span style="font-family:宋体">微米近红外波长域具有最大的辐射强度。例如汽油燃烧时的火焰辐射强度的波长。</span></span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">准备好火焰传感器两个</span>LED<span style="font-family:宋体">灯，将火焰传感器与模拟口</span><span style="font-family:Calibri">A0</span><span style="font-family:宋体">引脚连接，将红色</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">灯与数字口</span><span style="font-family:Calibri">D13</span><span style="font-family:宋体">引脚连接，将另一个</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">灯与数字口</span><span style="font-family:Calibri">D3</span><span style="font-family:宋体">引脚连接，使用传感器及整体连线方式如下图：</span></span></strong>
        </p>
        <p style="text-indent: 28px;">
            <br/>
        </p>`,
                        img: "./static/img/magneticforcecontent1.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/magneticforce1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/magneticforce1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/magneticforce1.xml')
                        }]
                    },
                    knowledge: `<p>
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">&nbsp; &nbsp; 磁力传感器中用到的主要部件为干簧管，它是干式舌簧管的简称，是一种有触点的无源电子开关元件，具有结构简单，体积小便于控制等优点，其外壳一般是一根密封的玻璃管，管中装有两个铁质的弹性簧片电板，还灌有一种叫金属铑的惰性气体。平时，玻璃管中的两个由特殊材料制成的簧片是分开的。当有磁性物质靠近玻璃管时，在磁场磁力线的作用下，管内的两个簧片被磁化而互相吸引接触，簧片就会吸合在一起，使结点所接的电路连通。外磁力消失后，两个簧片由于本身的弹性而分开，线路也就断开了。因此，作为一种利用磁场信号来控制的线路开关器件，干簧管可以作为传感器用，用于计数，限位等等（在安防系统中主要用于门磁、窗磁的制作），同时还被广泛使用于各种通信设备中。在实际运用中，通常用磁铁控制这两根金属片的接通与否，所以又被称为</span>“磁控管”。</span>
        </p>
        <p>
            <br/>
        </p>`
                }
            }

        ]
    },
    {
        name: "执行器",
        title: "",
        mode: [{
                name: "舵机",
                title: "",
                img: "./static/img/logo/Steeringengine1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">舵机是一种位置（角度）伺服的驱动器，适用于那些需要角度不断变化并可以保持的控制系统。目前，在高档遥控玩具，如飞机、潜艇模型，遥控机器人中已经得到了普遍应用。</span> </span></strong>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">舵机是船舶上的一种大甲板机械。舵机的大小由外舾装按照船级社的规范决定，选型时主要考虑扭矩大小。</span></strong>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">在航天方面，舵机应用广泛。航天方面，导弹姿态变换的俯仰、偏航、滚转运动都是靠舵机相互配合完成的。舵机在许多工程上都有应用，不仅限于船舶。</span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px">使用方法：</span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">将舵机延伸出来的</span>3<span style="font-family:宋体">芯数据线连接到数字口</span><span style="font-family:Calibri">3</span><span style="font-family:宋体">号引脚，使用零件及连线方式如下图：</span></span></strong>
        </p>
        <p>
            <br/>
        </p>`,
                        img: "./static/img/Steeringenginecontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Steeringengine1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Steeringenginecode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Steeringengine1.xml')
                        }]
                    },
                    knowledge: `<p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">舵机控制函数对应代码及其作用，</span>servo<span style="font-family:宋体">类下有以下成员函数</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">attach()</span></strong> &nbsp; &nbsp;<span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">连接舵机</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">write()</span></strong> &nbsp; &nbsp;<span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">角度控制</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">writeMicroseconds()</span></strong><span style=";font-family:宋体;font-size:16px"> </span> <span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">控制舵机初始角度</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">read()</span></strong> &nbsp; &nbsp;<span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">读上一次舵机转动角度</span></span>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px">detach()</span></strong> &nbsp; &nbsp;<span style=";font-family:宋体;font-size:16px">//<span style="font-family:宋体">断开舵机连接</span></span>
        </p>
        <p>
            <br/>
        </p>`
                }
            },
            {
                name: "电机",
                title: "",
                img: "./static/img/logo/Electricmachinery1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">电机在电路中是用字母</span>M<span style="font-family:宋体">表示，它的主要作用是产生驱动转矩，作为用电器或各种机械的动力源。</span></span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">将电机延伸出来的连线连接到控制器的</span>MOTOR<span style="font-family:宋体">孔的</span><span style="font-family:Calibri">A</span><span style="font-family:宋体">或</span><span style="font-family:Calibri">B</span><span style="font-family:宋体">端口，使用零件及连线方式如下图：</span></span></strong>
        </p>
        <p>
            <br/>
        </p>`,
                        img: "./static/img/Electricmachinerycontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Electricmachinery1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Electricmachinerycode.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Electricmachinery1.xml')
                        }]
                    },
                    knowledge: `<p>
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">本程序用到了</span>analogWrite<span style="font-family:宋体">（</span><span style="font-family:Calibri">pin,value</span><span style="font-family:宋体">）函数</span></span>
      </p>
      <p style="text-indent:28px">
          <span style=";font-family:宋体;font-size:16px">pin<span style="font-family:宋体">：用于输入数值的引脚。 </span></span>
      </p>
      <p>
          <span style=";font-family:宋体;font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;value<span style="font-family:宋体">：占空比：</span><span style="font-family:Calibri">0</span><span style="font-family:宋体">（完全关闭）到</span><span style="font-family:Calibri">255</span><span style="font-family:宋体">（完全打开）之间。</span></span>
      </p>
      <p>
          <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">其作用为从一个引脚输出模拟值（</span>PWM<span style="font-family:宋体">）。可用于让</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">以不同的亮度点亮或驱动电机以不同的速度旋转。</span><span style="font-family:Calibri">analogWrite()</span><span style="font-family:宋体">输出结束后，该引脚将产生一个稳定的特殊占空比方波，直到下次调用</span><span style="font-family:Calibri">analogWrite()</span><span style="font-family:宋体">（或在同一引脚调用</span><span style="font-family:Calibri">digitalRead()</span><span style="font-family:宋体">或</span><span style="font-family:Calibri">digitalWrite()</span><span style="font-family:宋体">）。</span><span style="font-family:Calibri">PWM</span><span style="font-family:宋体">信号的频率大约是</span><span style="font-family:Calibri">490</span><span style="font-family:宋体">赫兹。在逗包控制器的数字口，只有引脚</span><span style="font-family:Calibri">3</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">5</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">6</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">9</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">10</span><span style="font-family:宋体">和</span><span style="font-family:Calibri">11</span><span style="font-family:宋体">可以实现该功能</span></span>
      </p>
      <p>
          <br/>
      </p>`
                }
            },
            {
                name: "螺旋桨",
                title: "",
                img: "./static/img/logo/Propeller1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">电机在电路中是用字母</span>M<span style="font-family:宋体">表示，它的主要作用是产生驱动转矩，作为用电器或各种机械的动力源。</span></span></strong>
        </p>
        <p>
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">将电机延伸出来的连线连接到控制器的</span>MOTOR<span style="font-family:宋体">孔的</span><span style="font-family:Calibri">A</span><span style="font-family:宋体">或</span><span style="font-family:Calibri">B</span><span style="font-family:宋体">端口，使用零件及连线方式如下图：</span></span></strong>
        </p>
        <p>
            <br/>
        </p>`,
                        img: "./static/img/Propellercontent.png"
                    },
                    video: "https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/Propeller1.mp4",
                    study: {
                        code: [{
                            title: 'LED灯亮灭控制：',
                            img: "./static/img/Propellercode1.png",
                            footer: "LED灯亮暗程序",
                            xml: path.join(__dirname, '../sample/Propeller1.xml')
                        }]
                    },
                    knowledge: `<p>
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">本程序用到了</span><strong>analogWrite<span style="font-family:宋体">（</span><span style="font-family:Calibri">pin,value</span><span style="font-family:宋体">）</span></strong><span style="font-family:宋体">函数</span></span>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px">pin<span style="font-family:宋体">：用于输入数值的引脚。 </span></span>
        </p>
        <p>
            <span style=";font-family:宋体;font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;value<span style="font-family:宋体">：占空比：</span><span style="font-family:Calibri">0</span><span style="font-family:宋体">（完全关闭）到</span><span style="font-family:Calibri">255</span><span style="font-family:宋体">（完全打开）之间。</span></span>
        </p>
        <p style="text-indent:28px">
            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">其作用为从一个引脚输出模拟值（</span>PWM<span style="font-family:宋体">）。可用于让</span><span style="font-family:Calibri">LED</span><span style="font-family:宋体">以不同的亮度点亮或驱动电机以不同的速度旋转。</span><strong><span style="font-family:Calibri">analogWrite()</span></strong><span style="font-family:宋体">输出结束后，该引脚将产生一个稳定的特殊占空比方波，直到下次调用</span><span style="font-family:Calibri">analogWrite()</span><span style="font-family:宋体">（或在同一引脚调用</span><strong><span style="font-family:Calibri">digitalRead()</span></strong><span style="font-family:宋体">或</span><strong><span style="font-family:Calibri">digitalWrite()</span></strong><span style="font-family:宋体">）。</span><span style="font-family:Calibri">PWM</span><span style="font-family:宋体">信号的频率大约是</span><span style="font-family:Calibri">490</span><span style="font-family:宋体">赫兹。在逗包控制器的数字口，只有引脚</span><span style="font-family:Calibri">3</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">5</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">6</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">9</span><span style="font-family:宋体">，</span><span style="font-family:Calibri">10</span><span style="font-family:宋体">和</span><span style="font-family:Calibri">11</span><span style="font-family:宋体">可以实现该功能。</span></span>
        </p>
        <p>
            <br/>
        </p>`
                }
            }
        ]
    },
    {
        name: "结构模块",
        title: "",
        mode: [{
                name: "PIX-1",
                title: "",
                img: "./static/img/logo/pix-1.png",
                rightcon: {

                }
            },
            {
                name: "PIX-2",
                title: "",
                img: "./static/img/logo/pix-2.png",
                rightcon: {

                }
            },
            {
                name: "PIX-3",
                title: "",
                img: "./static/img/logo/pix-3.png",
                rightcon: {

                }
            },
            {
                name: "PIX-4",
                title: "",
                img: "./static/img/logo/pix-4.png",
                rightcon: {

                }
            },
            {
                name: "PIX-5",
                title: "",
                img: "./static/img/logo/pix-5.png",
                rightcon: {

                }
            },
            {
                name: "PIX-6",
                title: "",
                img: "./static/img/logo/pix-6.png",
                rightcon: {

                }
            },
            {
                name: "多空板",
                title: "",
                img: "./static/img/logo/Multicontrolboard1.png",
                rightcon: {

                }
            },
            {
                name: "电源",
                title: "",
                img: "./static/img/logo/PowerSupply1.png",
                rightcon: {

                }
            },
            {
                name: "起件器",
                title: "",
                img: "./static/img/logo/tool1.png",
                rightcon: {

                }
            },
            {
                name: "铰链",
                title: "",
                img: "./static/img/logo/Hinge.png",
                rightcon: {

                }
            },
            {
                name: "联轴器",
                title: "",
                img: "./static/img/logo/coupling1.png",
                rightcon: {

                }
            },
            {
                name: "联轴器",
                title: "",
                img: "./static/img/logo/coupling1.png",
                rightcon: {

                }
            },
            {
                name: "齿轮",
                title: "",
                img: "./static/img/logo/gear30.png",
                rightcon: {

                }
            },
            {
                name: "浆叶",
                title: "",
                img: "./static/img/logo/PaddleBlade1.png",
                rightcon: {

                }
            },
            {
                name: "Mirco USB",
                title: "",
                img: "./static/img/logo/mircoUSB1.png",
                rightcon: {

                }
            },
            {
                name: "3芯数据线",
                title: "",
                img: "./static/img/logo/Dataline1.png",
                rightcon: {

                }
            },
            {
                name: "4芯数据线",
                title: "",
                img: "./static/img/logo/Dataline2.png",
                rightcon: {

                }
            },
            {
                name: "万向轮",
                title: "",
                img: "./static/img/logo/Universalwheel1.png",
                rightcon: {

                }
            },
            {
                name: "轮子",
                title: "",
                img: "./static/img/logo/wheel1.png",
                rightcon: {

                }
            }
        ],
        allimgs: `
    <video src="https://htrrobot-kvideo.oss-cn-qingdao.aliyuncs.com/video/model/model1.mp4"  controls="controls" width="60%"></video>
    <p style="text-indent:28px;line-height:150%">
    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">DouBao<span style="font-family:宋体">智能积木是一款通过榫卯配合、模块化组合的积木，用户可以自由搭建自己的机器人和工程创新平台，让思维和想象发生碰撞。</span></span>
</p>
<table style="margin:0 auto;" class="table-bordered " width="524">
    <tbody>
        <tr style="height:31px" class="firstRow">
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">名称</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">形状</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">名称</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">形状</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-1</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="71" height="64" src="./static/img/mode/pix-1.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-2</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/pix-2.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-3</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/pix-3.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-4</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/pix-4.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-5</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/pix-5.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">PIX-6</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-width: initial; border-style: none; border-color: initial;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/pix-6.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">多孔板</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="117" height="76" src="./static/img/mode/Multicontrolboard1.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">起件器</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="38" height="75" src="./static/img/mode/tool1.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">齿轮</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="64" height="64" src="./static/img/mode/gear30.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="53" height="53" src="./static/img/mode/gear50.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;  ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">铰链</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;   ">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="127" height="82" src="./static/img/mode/Hinge.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
        <tr style="height:82px">
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">联轴器</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="77" height="82" src="./static/img/mode/coupling1.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px;border-style: none;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">万向球</span>
                </p>
            </td>
            <td width="131" valign="top" style="padding: 0px 7px; border-style: none;">
                <p style="text-align:center;line-height:150%">
                    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><img width="71" height="71" src="./static/img/mode/Universalwheel1.png"/></span><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p style="text-indent:28px;line-height:150%">
    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">积木块之间可以进行相互拼接，下面就拼接过程中的一些常用技巧做一下说明：</span>
</p>
<p style="text-indent:28px;line-height:150%">
    <span style="font-family: 宋体;line-height: 150%;font-size: 16px"><span style="font-family:宋体">下面以</span>PIX-2<span style="font-family:宋体">之间相互拼插为例，有以下三种方式：</span></span>
</p>
<p style="text-align:center">
    <img width="178" height="176" src="./static/img/pix/1.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span><img width="178" height="176" src="./static/img/pix/2.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span><img width="180" height="177" src="./static/img/pix/3.png"/>
</p>
<p>
    <span style="font-family: 宋体;font-size: 14px">PIX-2<span style="font-family:宋体">和</span><span style="font-family:Calibri">PIX-3</span><span style="font-family:宋体">之间拼插有以下两种方式</span></span>
</p>
<p>
    <span style="font-family: Calibri;font-size: 14px"><br/></span>
</p>
<p style="text-align:center">
    <img width="175" height="173" src="./static/img/pix/4.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img width="170" height="168" src="./static/img/pix/5.png"/>
</p>
<p>
    <span style="font-family: 宋体;font-size: 14px">PIX-3<span style="font-family:宋体">和</span><span style="font-family:Calibri">PIX-5</span><span style="font-family:宋体">之间拼接</span></span>
</p>
<p style="text-align:center">
    <img width="213" height="210" src="./static/img/pix/6.png"/><span style="font-family: Calibri;font-size: 14px">&nbsp;</span>
</p>
<p>
    <span style="font-family: 宋体;font-size: 14px">PIX-2<span style="font-family:宋体">和</span><span style="font-family:Calibri">PIX-3</span><span style="font-family:宋体">拼接</span></span>
</p>
<p style="text-align:center">
    <img width="179" height="176" src="./static/img/pix/7.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p>
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">用</span>PIX-5<span style="font-family:宋体">加固</span></span>
</p>
<p style="text-indent:28px;line-height:150%">
    <span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="177" height="175" src="./static/img/pix/8.png"/><span style="font-family: 宋体;line-height: 150%;font-size: 16px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">齿轮的使用</span></span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="179" height="177" src="./static/img/pix/9.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;&nbsp;</span><img width="177" height="175" src="./static/img/pix/10.png"/>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">起件器的使用</span></span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="180" height="178" src="./static/img/pix/11.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;&nbsp;</span><img width="179" height="177" src="./static/img/pix/12.png"/>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">全向轮的使用</span></span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="180" height="178" src="./static/img/pix/13.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">铰链的使用</span></span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="180" height="178" src="./static/img/pix/14.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p style="line-height: 150%">
    <span style="font-family: 宋体;font-size: 14px"><span style="font-family:宋体">联轴器的使用</span></span>
</p>
<p style="text-align:center;line-height:150%">
    <img width="180" height="178" src="./static/img/pix/15.png"/><span style="font-family: 宋体;font-size: 14px">&nbsp;</span>
</p>
<p>
    <br/>
</p>
    `
    },
    {
        name: "控制器",
        title: "",
        mode: [{
                name: "控制器(Duino)",
                title: "",
                img: "./static/img/logo/controller1.png",
                rightcon: {
                    explain: {
                        text: `<p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong>
        </p>
        <p>
            <span style=";font-family:&#39;Times New Roman&#39;;font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DouBao</span><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">控制器是一种针对</span></span><span style=";font-family:&#39;Times New Roman&#39;;font-size:14px">DouBao</span><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">智能积木的专属控制器，我们可以很方便的使用它，控制器兼容</span></span><span style=";font-family:&#39;Times New Roman&#39;;font-size:14px">Arduino UNO</span><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">主板接口，并且同像素积木无缝结合，快速拼接，利用</span></span><span style=";font-family:&#39;Times New Roman&#39;;font-size:14px">DouBao</span><span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">控制器就像人的大脑一样可以对输入信息进行处理和控制并输出信息。</span></span>
        </p>
        <p>
            <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体"></span></span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">①　</span><span style="font-family: 宋体;font-size: 16px">数字口</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">0-13</span><span style="font-family: 宋体;font-size: 16px">，共</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">14</span><span style="font-family: 宋体;font-size: 16px"><span style="font-family:宋体">个</span>(<span style="font-family:宋体">程序下载接口和数字口</span></span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">0<span style="font-family:宋体">、</span><span style="font-family:Times New Roman">1</span></span><span style="font-family: 宋体;font-size: 16px"><span style="font-family:宋体">号公用，使用时注意</span>)</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">②　</span><span style="font-family: 宋体;font-size: 16px">模拟口为</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">A0-A5</span><span style="font-family: 宋体;font-size: 16px">，共</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">6</span><span style="font-family: 宋体;font-size: 16px">个</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">③　</span><span style="font-family: 宋体;font-size: 16px">电机控制输出口</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">A<span style="font-family:宋体">、</span><span style="font-family:Times New Roman">B</span></span><span style="font-family: 宋体;font-size: 16px">两个</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">④　</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">IIC</span><span style="font-family: 宋体;font-size: 16px">接口两个</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">⑤　</span><span style="font-family: 宋体;font-size: 16px">板载</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">LED</span><span style="font-family: 宋体;font-size: 16px">灯，</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">Status</span><span style="font-family: 宋体;font-size: 16px">指示灯</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">⑥　</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">MicroUSB</span><span style="font-family: 宋体;font-size: 16px">下载接口</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">⑦　</span><span style="font-family: 宋体;font-size: 16px">外接电源接口</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px"></span>
        </p>
        <p style="text-indent:28px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">豆包控制主板体积小，重量轻，便于携带，接口丰富，易开发。豆包控制器的使用大大降低了人们创新的门槛，它非常适合教师教学和互动产品的制作或者是机器人的研发。</span>
        </p>
        <p style="text-indent:28px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px">豆包控制器在使用的时要安装</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">USB</span><span style="font-family: 宋体;font-size: 16px">驱动，默认情况下，电脑会自动安装驱动，将控制器连接到电脑后，会在</span><span style="font-family: &#39;Times New Roman&#39;;font-size: 16px">D-Blockly</span><span style="font-family: 宋体;font-size: 16px">选择串口一栏中显示增加的端口号，如下图，如果没有增加相应的串口，驱动可能未安装。</span>
        </p>
        <p style="margin-left:0;text-indent:27px;line-height:150%">
            <span style="font-family: 宋体;font-size: 16px"><br/></span><br/>
        </p>
        <p>
            <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体"><br/></span></span><br/>
        </p>
        <p style="text-indent:28px">
            <strong><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体"></span></span></strong><br/>
        </p>
        <p>
            <img src="./static/img/controller1.jpg" style="max-width:100%" >
        </p>`,
                        img: "./static/img/controllercontent1.png"
                    }
                }
            },

        ]
    }
];

const paradises = [{
        name: '初级',
        mode: [{
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
        ]
    },
    {
        name: '中级',
        mode: [{
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
        ]
    },
    {
        name: '高级',
        mode: [{
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
            {
                name: 'text1',
                img: "",
            },
        ]
    }
]
const mediapath = './media/'
const ardu_start = [
    '--verify', //验证
    '--upload', //上传
    '--board', //板子的名称
    '--port', //板子的串口号
    '--pref', //首选项
    '-v|--verbose', //详细信息
    '--preserve-temp-files', //保存 .hex 文件
    'FILE.ino' //文件路径
]
const apppack = path.join(os.homedir(), ".hterobotapp/")

let arduino_cmd_guesses = path.join(apppack, './Arduino/arduino_debug.exe')
console.log(__dirname)
const textIno = path.join(apppack, './ino/text.ino');
const arduino_path = path.join(apppack, './Arduino');
const build_path = path.join(apppack, './cache')
if (process.platform === "darwin") {
    arduino_cmd_guesses = path.join(apppack, '/Arduino.app/Contents/MacOS/Arduino')
}
const geiArduinoCmd = function(build, board = 'arduino:avr:uno', port) {
    if (port == null) {
        return `"${arduino_cmd_guesses}" ${build} ${ardu_start[2]} ${board}    -v --pref "build.path=${build_path}"  --preserve-temp-files "${textIno}"`
    } else {
        return `"${arduino_cmd_guesses}" ${build} ${ardu_start[2]} ${board} ${ardu_start[3]} ${port} -v --pref "build.path=${build_path}" --preserve-temp-files "${textIno}"`
    }
}

const Official = `

-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
----------------------**------**--------**********--------**********---------------------------------------
----------------------**------**------------**------------**-----------------------------------------------
----------------------**------**------------**------------**-----------------------------------------------
----------------------**********------------**------------*********----------------------------------------
----------------------**------**------------**------------**-----------------------------------------------
----------------------**------**------------**------------**-----------------------------------------------
----------------------**------**------------**------------**********---------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------

`