
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //cc.log(size.height/2);

        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer1.ignorAnchor=false;
        layer2.ignorAnchor=false;

        layer1.setPosition(size.width/2-100,size.height/2-100);
        layer2.setPosition(size.width/2,size.height/2);

        layer1.setAnchorPoint(0.5,0.5);
        layer2.setAnchorPoint(0.5,0.5);

        //旋转
        layer1.rotation=45;
        //layer2.rotation=45;

        //缩放
        //layer1.scale=0.5;
        layer2.scale=0.5;

        this.addChild(layer1);
        this.addChild(layer2);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

