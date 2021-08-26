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
            "type": "bar3D",
            "name": "\u5e73\u5747\u623f\u4ef7",
            "coordinateSystem": "geo3D",
            "grid3DIndex": 0,
            "geo3DIndex": 0,
            "globeIndex": 0,
            "barSize": 1,
            "bevelSize": 0,
            "bevelSmoothness": 2,
            "minHeight": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8,
                "formatter": function(data){return data.name + ' ' + data.value[2];}
            },
            "emphasis": {},
            "data": [
                {
                    "name": "\u5f90\u6c47",
                    "value": [
                        121.43,
                        31.18,
                        93253.39
                    ]
                },
                {
                    "name": "\u6768\u6d66",
                    "value": [
                        121.52,
                        31.27,
                        50322.15
                    ]
                },
                {
                    "name": "\u95f5\u884c",
                    "value": [
                        121.38,
                        31.13,
                        48403.6
                    ]
                },
                {
                    "name": "\u5d07\u660e",
                    "value": [
                        121.4,
                        31.62,
                        48403.6
                    ]
                }
            ],
            "zlevel": -10,
            "silent": false,
            "animation": true,
            "animationDurationUpdate": 100,
            "animationEasingUpdate": "cubicOut"
        }
    ],
    "legend": [
        {
            "data": [
                "\u5e73\u5747\u623f\u4ef7"
            ],
            "selected": {
                "\u5e73\u5747\u623f\u4ef7": true
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
        "label": {
            "show": false,
            "formatter": function(data){return data.name +  + data.value[2];}
        },
        "emphasis": {
            "label": {
                "show": false,
                "position": "top",
                "color": "#fff",
                "margin": 8,
                "fontSize": 10,
                "backgroundColor": "rgba(0,23,11,0)"
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "high",
                "alpha": 40,
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
            "text": "Map3D-Bar3D",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.clear();
        chart.setOption(option);
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
            "type": "bar3D",
            "name": "\u5e73\u5747\u623f\u4ef7",
            "coordinateSystem": "geo3D",
            "grid3DIndex": 0,
            "geo3DIndex": 0,
            "globeIndex": 0,
            "barSize": 1,
            "bevelSize": 0,
            "bevelSmoothness": 2,
            "minHeight": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8,
                "formatter": function(data){return data.name + ' ' + data.value[2];}
            },
            "emphasis": {},
            "data": [
                {
                    "name": "\u6ca7\u5dde",
                    "value": [
                        116.83,
                        38.33,
                        25151.67
                    ]
                },
                {
                    "name": "\u5eca\u574a",
                    "value": [
                        116.7,
                        39.53,
                        23629.56
                    ]
                },
                {
                    "name": "\u627f\u5fb7",
                    "value": [
                        117.93,
                        40.97,
                        23067.62
                    ]
                },
                {
                    "name": "\u5510\u5c71",
                    "value": [
                        118.02,
                        39.63,
                        23057.79
                    ]
                },
                {
                    "name": "\u4fdd\u5b9a",
                    "value": [
                        115.48,
                        38.85,
                        20904.74
                    ]
                },
                {
                    "name": "\u5927\u5382\u56de\u65cf\u81ea\u6cbb\u53bf",
                    "value": [
                        116.98,
                        39.98,
                        19703.0
                    ]
                }
            ],
            "zlevel": -10,
            "silent": false,
            "animation": true,
            "animationDurationUpdate": 100,
            "animationEasingUpdate": "cubicOut"
        }
    ],
    "legend": [
        {
            "data": [
                "\u5e73\u5747\u623f\u4ef7"
            ],
            "selected": {
                "\u5e73\u5747\u623f\u4ef7": true
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
        "label": {
            "show": false,
            "formatter": function(data){return data.name +  + data.value[2];}
        },
        "emphasis": {
            "label": {
                "show": false,
                "position": "top",
                "color": "#fff",
                "margin": 8,
                "fontSize": 10,
                "backgroundColor": "rgba(0,23,11,0)"
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "high",
                "alpha": 40,
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
            "text": "Map3D-Bar3D",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart.clear();
        chart.setOption(option);
}

function BeiJing(ProvinceEchartsId){
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
            "type": "bar3D",
            "name": "\u5e73\u5747\u623f\u4ef7",
            "coordinateSystem": "geo3D",
            "grid3DIndex": 0,
            "geo3DIndex": 0,
            "globeIndex": 0,
            "barSize": 1,
            "bevelSize": 0,
            "bevelSmoothness": 2,
            "minHeight": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8,
                "formatter": function(data){return data.name + ' ' + data.value[2];}
            },
            "emphasis": {},
            "data": [
                {
                    "name": "\u4e1c\u57ce",
                    "value": [
                        116.38,
                        39.9,
                        102023.07
                    ]
                },
                {
                    "name": "\u897f\u57ce",
                    "value": [
                        116.37,
                        39.92,
                        108363.03
                    ]
                },
                {
                    "name": "\u5d07\u6587",
                    "value": [
                        116.43,
                        39.88,
                        84504.94
                    ]
                },
                {
                    "name": "\u671d\u9633",
                    "value": [
                        116.43,
                        39.92,
                        67507.36
                    ]
                },
                {
                    "name": "\u4e30\u53f0",
                    "value": [
                        116.28,
                        39.85,
                        52126.54
                    ]
                },
                {
                    "name": "\u6d77\u6dc0",
                    "value": [
                        116.3,
                        39.95,
                        78334.08
                    ]
                },
                {
                    "name": "\u623f\u5c71",
                    "value": [
                        116.13,
                        39.75,
                        27318.86
                    ]
                },
                {
                    "name": "\u987a\u4e49",
                    "value": [
                        116.65,
                        40.13,
                        36412.55
                    ]
                },
                {
                    "name": "\u660c\u5e73",
                    "value": [
                        116.23,
                        40.22,
                        37257.42
                    ]
                },
                {
                    "name": "\u5927\u5174",
                    "value": [
                        116.33,
                        39.73,
                        42082.71
                    ]
                },
                {
                    "name": "\u6000\u67d4",
                    "value": [
                        116.63,
                        40.32,
                        27556.0
                    ]
                },
                {
                    "name": "\u5e73\u8c37",
                    "value": [
                        117.12,
                        40.32,
                        15487.47
                    ]
                },
                {
                    "name": "\u5ef6\u5e86",
                    "value": [
                        115.97,
                        40.45,
                        9898.95
                    ]
                },
                {
                    "name": "\u5bc6\u4e91",
                    "value": [
                        116.83,
                        40.37,
                        21548.67
                    ]
                }
            ],
            "zlevel": -10,
            "silent": false,
            "animation": true,
            "animationDurationUpdate": 100,
            "animationEasingUpdate": "cubicOut"
        }
    ],
    "legend": [
        {
            "data": [
                "\u5e73\u5747\u623f\u4ef7"
            ],
            "selected": {
                "\u5e73\u5747\u623f\u4ef7": true
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
        "label": {
            "show": false,
            "formatter": function(data){return data.name +  + data.value[2];}
        },
        "emphasis": {
            "label": {
                "show": false,
                "position": "top",
                "color": "#fff",
                "margin": 8,
                "fontSize": 10,
                "backgroundColor": "rgba(0,23,11,0)"
            }
        },
        "light": {
            "main": {
                "color": "#fff",
                "intensity": 1.2,
                "shadow": false,
                "shadowQuality": "high",
                "alpha": 40,
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
            "text": "Map3D-Bar3D",
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