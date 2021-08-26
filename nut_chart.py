import pyecharts.options as opts
from flask import json
from pyecharts.charts import Pie
from back_end.controller import AreaPercent


#前端选择省/直辖市  城市/区
#传值
def pieEcharts(prov,city):
    provienceName = prov
    areaName = city

    areaPercent = AreaPercent(provienceName)

    # print(areaPercent)

    if areaName in areaPercent:
        a = json.loads(areaPercent)
        if '0-50' in a[areaName]:
            percent050 = float(a[areaName]['0-50'].strip('%'))
        else:
            percent050 = 0

        if '50-100' in a[areaName]:
            percent50100 = float(a[areaName]['50-100'].strip('%'))
        else:
            percent50100 = 0;

        if '100-150' in a[areaName]:
            percent100150 = float(a[areaName]['100-150'].strip('%'))
        else:
            percent100150 = 0;

        if '150-200' in a[areaName]:
            percent150200 = float(a[areaName]['150-200'].strip('%'))
        else:
            percent150200 = 0;

        if '200以上' in a[areaName]:
            percent200 = float(a[areaName]['200以上'].strip('%'))
        else:
            percent200 = 0;

        pass
    else:
        percent050 = percent50100 = percent100150 = percent150200 = percent200 = 0
        pass

    ###全部面积分类饼图

    x_data = ["0-50", "50-100", "100-150", "150-200", "200以上"]
    y_data = [percent050, percent50100, percent100150, percent150200, percent200]

    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data, y_data)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_all.html")
    )

    ###单面积分类饼图

    # 0-50

    x_data1 = ["0-50", "其他"]
    y_data1 = [percent050, (100 - percent050)]
    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data1, y_data1)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_0_50.html")
    )

    # 50-100

    x_data2 = ["50-100", "其他"]
    y_data2 = [percent50100, (100 - percent50100)]
    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data2, y_data2)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_50_100.html")
    )

    # 100-150

    x_data3 = ["100-150", "其他"]
    y_data3 = [percent100150, (100 - percent100150)]
    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data3, y_data3)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_100_150.html")
    )

    # 150-200

    x_data4 = ["150-200", "其他"]
    y_data4 = [percent150200, (100 - percent150200)]
    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data4, y_data4)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_150_200.html")
    )

    # 200以上

    x_data5 = ["200以上", "其他"]
    y_data5 = [percent200, (100 - percent200)]
    (
        Pie()
            .add(
            series_name="面积占比",
            data_pair=[list(z) for z in zip(x_data5, y_data5)],
            radius=["50%", "70%"],
            label_opts=opts.LabelOpts(is_show=False, position="center"),
        )
            # .set_global_opts(legend_opts=opts.LegendOpts(pos_left="legft", orient="vertical"))
            .set_series_opts(
            tooltip_opts=opts.TooltipOpts(
                # trigger="item", formatter="{a} <br/>{b}: {c} ({d}%)"
            ),
            # label_opts=opts.LabelOpts(formatter="{b}: {c}")
        )
            .render("nut_200_.html")
    )









