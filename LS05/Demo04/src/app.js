
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var redLayer=new cc.LayerColor(cc.color.RED,200,200);
        redLayer.ignorAnchor=false;
        redLayer.setPosition(0,size.height/2-100);
        redLayer.setAnchorPoint(0.5,0.5);
        this.redLayer=redLayer;
        this.addChild(this.redLayer);

        //this.scheduleUpdate();
       this.schedule(this.myCallBack,0.2,cc.REPEAT_FOEVER,2);


        return true;
    },
    update:function(dt){
     //   cc.log(dt);
    this.redLayer.x+=1;
    },
    myCallBack:function(){
        this.redLayer.x+=10;
        if(this.redLayer.x>400){
            this.unschedule(this.myCallBack);
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

