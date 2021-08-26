var data={
	"code":0,
	"timeStepAnalysis":{
		"channelTime":[
			"2",
			"2.3",
			"2.4",
			"2.8",
			"3",
			"3.3",
			"3.5",
			"4"
		],
		"categoryArr":[
			"1980~1985",
			"1986~1990",
			"1991~1995",
			"1996~2000",
			"2001~2005",
			"2006~2010",
			"2011~2015",
			"2015~2021"
		],
		"legendArr":[
			"区平均房价",
			"市平均房价"
		],
		"provinceTime":[
			"2.5",
			"2.8",
			"2.9",
			"3.2",
			"3.5",
			"3.7",
			"4.0",
			"5"
		]
	},
}
$(function () {
echarts_4();
progress1char();
loadTimeStepDetail(data.timeStepAnalysis);
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['北京','上海','河北'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: {
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,



    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '北京',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [3, 4, 3, 4, 3, 4, 3, 6, ]

    },
{
        name: '上海',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

            normal: {
				color: '#00d887',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [5, 3, 5, 6, 1, 5, 3, 5]

    },
	{
        name: '河北',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {

            normal: {
				color: '#0184d5',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#0184d5',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [ 3, 4, 3, 6, 2, 4, 2, 4]

    },
		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function progress1char() {
		var progress1chart = echarts.init(document.getElementById('progress1_chart'));
		var baifenbi = [0.111, 0.222, 0.333, 0.444, 0.555, 0.666, 0.777, 0.888, 0.920, 0.960];
		var grayBar = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		var paiming = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		var xingm = ['字段名称10', '字段名称9', '字段名称8', '字段名称7', '字段名称6', '字段名称5', '字段名称4', '字段名称3', '字段名称2', '字段名称1'];
		// var xingm2 = ['字段名称10', '字段名称9', '字段名称8', '字段名称7', '字段名称6', '字段名称5', '字段名称4', '字段名称3', '字段名称2', '字段名称1'];

		option = {
			grid: {
				left: '5%', //如果离左边太远就用这个......
				right: '5%',
				bottom: '-2%',
				top: '5%',
				containLabel: true
			},
			xAxis: [{
					show: false,
				},
				{
					show: false,
				}
			],
			yAxis: {
				type: 'category',
				axisLabel: {
					show: true, //让Y轴数据不显示
				},

				axisTick: {
					show: false, //隐藏Y轴刻度
				},
				axisLine: {
					show: false, //隐藏Y轴线段
				},
			},
			series: [
				//背景色
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度
					itemStyle: {
						normal: {
							barBorderRadius: 50,
							color: 'rgba(41, 55, 94)'
						},
					},
					z: 1,
					data: grayBar,
				},
				//蓝条
				{
					show: true,
					type: 'bar',
					barGap: '-100%',
					barWidth: '15%', //统计条宽度
					itemStyle: {
						normal: {
							barBorderRadius: 50, //统计条弧度
							color: {
								colorStops: [{
									offset: 0,
									color: '#5d29f7' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#5093fb' // 100% 处的颜色
								}],
								globalCoord: false, // 缺省为 false

							}
						},
					},
					max: 1,
					label: {
						normal: {
							show: true,
							textStyle: {
								color: '#ccc', //百分比颜色
								fontSize: 18
							},
							position: [0, '-20'],
							rich: { //富文本
								green: {
									color: '#70DDA7',
									fontSize: 18
								},
								yellow: {
									color: '#CCB877',
									fontSize: 18
								},
								red: {
									color: '#B916DE',
									fontSize: 18
								}
							},
							formatter: function(data) {
								//富文本固定格式{colorName|这里填你想要写的内容}
								//富文本固定格式{colorName|这里填你想要写的内容}
								if(paiming[data.dataIndex] == 1) {
									return '{start1|}{red|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 2) {
									return '{start1|}{yellow|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else if(paiming[data.dataIndex] == 3) {
									return '{start1|}{green|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return '{start2|}{white|' + ' ' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								}
								if(paiming[data.dataIndex] == 1 || paiming[data.dataIndex] == 2 || paiming[data.dataIndex] == 3) {
									return '{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
								} else {
									return paiming[data.dataIndex] + '  ' + xingm[data.dataIndex]
								}
							},

						}
					},
					data: baifenbi,
				},

			]
		};

		progress1chart.setOption(option)
	}

function loadTimeStepDetail(data){
	var option = {
		    tooltip: {trigger: 'axis',},
		    grid: {left:'6%',right: '5%',bottom:'10%'},
		    legend: {
		    	icon: 'rect',
		        itemWidth: 14,itemHeight: 5,itemGap:10,
		        data:data.legendArr,
		        left: '10px',top: '0px',
		        textStyle: {fontSize: 12,color: '#fff'}
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#fff',}},
		            data:data.categoryArr
		        }
		    ],
		    yAxis: [{
        		type: 'value',
 		        axisTick: {
 		            show: false
 		        },
 		        axisLine: {lineStyle: {color: '#57617B'}},
 		        axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}万/㎡'},
 		        splitLine: {
 	                show: true,
 	                lineStyle:{
 	                    type:'dashed',
 	                    color: ['#25CEF3']
 	                }
 	            }

		     }],
		    series: [
		        {
		            name:'区平均房价',
		            type:'bar',
		            barWidth:8,
		            itemStyle : {
		            	normal: {
				        	barBorderRadius:[10, 10, 0, 0],
				            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                offset: 0,
				                color: "#009AFD"
				            }, {
				                offset: 0.8,
				                color: "#33DAFF"
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
		            },
		            data:data.channelTime
		        },
		        {
		            name:'市平均房价',
		            type:'bar',
		            barWidth:8,
		            barGap:2,
		            itemStyle : {
		            	normal: {
				        	barBorderRadius:[10, 10, 0, 0],
				            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                offset: 0,
				                color: "#E57230"
				            }, {
				                offset: 0.8,
				                color: "#D8AE22"
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
		            },
		            data:data.provinceTime
		        }
		    ]
	};
	var myChart = echarts.init(document.getElementById('time-step-detial'));
	myChart.setOption(option);
}

})