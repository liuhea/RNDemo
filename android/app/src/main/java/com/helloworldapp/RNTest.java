package com.helloworldapp;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.concurrent.TimeUnit;

import javax.annotation.Nullable;

import okhttp3.OkHttpClient;

/**
 * @author liuhea
 * @date 2017-01-24</p>
 */

public class RNTest {
    //定义上下文对象
    public static ReactContext sContext;

    //定义发送事件的函数
    public void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        System.out.println("reactContext=" + reactContext);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


    private void requetData() {
        OkHttpClient okHttpClient = new OkHttpClient().newBuilder()
                .connectTimeout(10000L, TimeUnit.MILLISECONDS)
                .readTimeout(10000L, TimeUnit.MILLISECONDS)
                .build();
    }

    public void fun() {
        //在该方法中开启线程，并且延迟3秒，然后向JavaScript端发送事件。
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                //发送事件,事件名为EventName
                WritableMap et = Arguments.createMap();
                sendEvent(sContext, "NativeEvent", et);

            }
        }).start();

    }
}
