// function whichProvinceFuncToCall(ProvinceName,ProvinceEchartsId){
//     var=list= ['河北省','黑龙江省' '辽宁省' '内蒙古自治区' '山东省' '山西省' '上海市' '天津市' '新疆维吾尔自治区' '吉林省'
//  '甘肃省' '湖北省' '江西省' '福建省' '青海省' '陕西省' '四川省' '云南省' '河南省' '贵州省' '湖南省' '台湾省'
//  '江苏省' '西藏自治区' '重庆市' '安徽省' '宁夏回族自治区' '北京市' '广西壮族自治区' '广东省' '海南省' '浙江省'
//  '澳门' '香港' '苏鲁交界']
//     if(ProvinceName=='北京'){
//         BeiJing(ProvinceEchartsId);
//     }
// }
function BeiJing(ProvinceEchartsId) {
        // alert("js文件掉用");
        // <script>
        // var echartId='0067ad531eda45179a458918ebf0c47f';
        var  echartId=ProvinceEchartsId;
        var chart = echarts.init(
            document.getElementById(echartId), 'white', {renderer: 'canvas'});
        var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "map3D",
            "map": "map3D",
            "coordinateSystem": "geo3D",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "data": [],
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "visualMap": {
        "show": false,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo3D": {
        "map": "\u5317\u4eac",
        "boxWidth": 100,
        "boxHeight": 10,
        "regionHeight": 3,
        "groundPlane": {
            "show": false,
            "color": "#aaa"
        },
        "instancing": false,
        "itemStyle": {
            "color": "rgb(135,206,255)",
            "borderColor": "rgb(62,215,213)",
            "borderWidth": 0.8,
            "opacity": 1
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "medium",
                "alpha": 55,
                "beta": 10
            },
            "ambient": {
                "color": "#fff",
                "intensity": 0.3
            },
            "ambientCubemap": {
                "diffuseIntensity": 0.5,
                "specularIntensity": 0.5
            }
        },
        "temporalSuperSampling": {
            "enable": "auto"
        },
        "zlevel": -10,
        "left": "auto",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto"
    },
    "title": [
        {
            "text": "\u5168\u56fd\u884c\u653f\u533a\u5212\u5730\u56fe-Base",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.clear();
        chart.setOption(option);
    // </script>
}

function HeBei(ProvinceEchartsId){

        var  echartId=ProvinceEchartsId;
        var chart = echarts.init(
            document.getElementById(echartId), 'white', {renderer: 'canvas'});
        var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "map3D",
            "map": "map3D",
            "coordinateSystem": "geo3D",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "data": [],
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "visualMap": {
        "show": false,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo3D": {
        "map": "\u6cb3\u5317",
        "boxWidth": 100,
        "boxHeight": 10,
        "regionHeight": 3,
        "groundPlane": {
            "show": false,
            "color": "#aaa"
        },
        "instancing": false,
        "itemStyle": {
            "color": "rgb(135,206,255)",
            "borderColor": "rgb(62,215,213)",
            "borderWidth": 0.8,
            "opacity": 1
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "medium",
                "alpha": 55,
                "beta": 10
            },
            "ambient": {
                "color": "#fff",
                "intensity": 0.3
            },
            "ambientCubemap": {
                "diffuseIntensity": 0.5,
                "specularIntensity": 0.5
            }
        },
        "temporalSuperSampling": {
            "enable": "auto"
        },
        "zlevel": -10,
        "left": "auto",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto"
    },
    "title": [
        {
            "text": "\u5168\u56fd\u884c\u653f\u533a\u5212\u5730\u56fe-Base",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.clear();
        chart.setOption(option);

}

function ShangHai(ProvinceEchartsId){
    var  echartId=ProvinceEchartsId;
    var chart = echarts.init(
            document.getElementById(echartId), 'white', {renderer: 'canvas'});
        var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "map3D",
            "map": "map3D",
            "coordinateSystem": "geo3D",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "data": [],
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "visualMap": {
        "show": false,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo3D": {
        "map": "\u4e0a\u6d77",
        "boxWidth": 100,
        "boxHeight": 10,
        "regionHeight": 3,
        "groundPlane": {
            "show": false,
            "color": "#aaa"
        },
        "instancing": false,
        "itemStyle": {
            "color": "rgb(135,206,255)",
            "borderColor": "rgb(62,215,213)",
            "borderWidth": 0.8,
            "opacity": 1
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "medium",
                "alpha": 55,
                "beta": 10
            },
            "ambient": {
                "color": "#fff",
                "intensity": 0.3
            },
            "ambientCubemap": {
                "diffuseIntensity": 0.5,
                "specularIntensity": 0.5
            }
        },
        "temporalSuperSampling": {
            "enable": "auto"
        },
        "zlevel": -10,
        "left": "auto",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto"
    },
    "title": [
        {
            "text": "\u5168\u56fd\u884c\u653f\u533a\u5212\u5730\u56fe-Base",
            "padding": 5,
            "itemGap": 10
        }
    ]
};

        chart.clear();
        chart.setOption(option);
}

function GanSu(ProvinceEchartsId){

        var  echartId=ProvinceEchartsId;
        var chart = echarts.init(
            document.getElementById(echartId), 'white', {renderer: 'canvas'});
        var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "map3D",
            "map": "map3D",
            "coordinateSystem": "geo3D",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "data": [],
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "visualMap": {
        "show": false,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo3D": {
        "map": "\u7518\u8083",
        "boxWidth": 100,
        "boxHeight": 10,
        "regionHeight": 3,
        "groundPlane": {
            "show": false,
            "color": "#aaa"
        },
        "instancing": false,
        "itemStyle": {
            "color": "rgb(135,206,255)",
            "borderColor": "rgb(62,215,213)",
            "borderWidth": 0.8,
            "opacity": 1
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "medium",
                "alpha": 55,
                "beta": 10
            },
            "ambient": {
                "color": "#fff",
                "intensity": 0.3
            },
            "ambientCubemap": {
                "diffuseIntensity": 0.5,
                "specularIntensity": 0.5
            }
        },
        "temporalSuperSampling": {
            "enable": "auto"
        },
        "zlevel": -10,
        "left": "auto",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto"
    },
    "title": [
        {
            "text": "\u5168\u56fd\u884c\u653f\u533a\u5212\u5730\u56fe-Base",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.clear();
        chart.setOption(option);

}
function ShanXi(ProvinceEchartsId){
     // <script>
    var echartId=ProvinceEchartsId;
        var chart = echarts.init(
            document.getElementById(echartId), 'white', {renderer: 'canvas'});
        var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "map3D",
            "map": "map3D",
            "coordinateSystem": "geo3D",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "data": [],
            "showLegendSymbol": true,
            "emphasis": {}
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
    "visualMap": {
        "show": false,
        "type": "continuous",
        "min": 0,
        "max": 100,
        "inRange": {
            "color": [
                "#50a3ba",
                "#eac763",
                "#d94e5d"
            ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "orient": "vertical",
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
    },
    "geo3D": {
        "map": "\u9655\u897f",
        "boxWidth": 100,
        "boxHeight": 10,
        "regionHeight": 3,
        "groundPlane": {
            "show": false,
            "color": "#aaa"
        },
        "instancing": false,
        "itemStyle": {
            "color": "rgb(135,206,255)",
            "borderColor": "rgb(62,215,213)",
            "borderWidth": 0.8,
            "opacity": 1
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "medium",
                "alpha": 55,
                "beta": 10
            },
            "ambient": {
                "color": "#fff",
                "intensity": 0.3
            },
            "ambientCubemap": {
                "diffuseIntensity": 0.5,
                "specularIntensity": 0.5
            }
        },
        "temporalSuperSampling": {
            "enable": "auto"
        },
        "zlevel": -10,
        "left": "auto",
        "top": "auto",
        "right": "auto",
        "bottom": "auto",
        "width": "auto",
        "height": "auto"
    },
    "title": [
        {
            "text": "\u5168\u56fd\u884c\u653f\u533a\u5212\u5730\u56fe-Base",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.setOption(option);
    // </script>

}