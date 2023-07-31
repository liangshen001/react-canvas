import ReactCanvas from "../src";
import React from "react";
import Notice from "./Notice";

const items: any[] = [{
    title: '公告1',
    content: '<div style="text-align: center;">公告内容</div><br>公告内容1公告内容1公告内容1公告内容1公告内容1<br>test test test test test test test test <br>测试换行1测试换行1测试换行1测试换行1测试换行1测试换行1测试换行1',
    unselected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/unselect.png',
    selected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/select.png'
}, {
    title: '公告2',
    content: '公告内容2',
    unselected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/unselect.png',
    selected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/select.png'
}, {
    title: '公告3',
    content: '公告内容3',
    unselected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/unselect.png',
    selected: 'http://cdn-sdk.longtugame.cn/notice/20000062-01/notice/menu_247/select.png'
}];
const canvas = document.getElementsByTagName('canvas')[0];

ReactCanvas.render(canvas,
    <React.StrictMode>
        <Notice items={items}/>
    </React.StrictMode>
);
