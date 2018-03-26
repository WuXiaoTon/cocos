
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        // 1. super init first
        this._super();

        var size = cc.winSize;

        var labelTTF=new CC.LabelTTF("WWW","",60);
        labelTTF.x=100;
        labelTTF.y=size.height/2-50;
        labelTTF.setAnchorPoint(0,1);

        labelTTF.setFontFillColor(cc.color.RED);
        labelTTF.setSize(50);
        labelTTF.enableStroke(cc.color.WHITE,5);
        labelTTF.enableShadow(cc.color.YELLOW,15,15,15);

        this.schedule(this.,1,cc.)


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

