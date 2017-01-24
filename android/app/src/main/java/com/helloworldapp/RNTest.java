package com.helloworldapp;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.IOException;

import javax.annotation.Nullable;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * @author liuhea
 * @date 2017-01-24</p>
 */

public class RNTest {

    private static final String SHEJIJIA_URL = "http://cp-plan.shejijia.com/api/v1/projects/1579534/patrols";
    private static final String KEY_NATIVE_EVENT = "KEY_NATIVE_EVENT";
    private static final String KEY_SEND_TO_RN = "success";

    //
    //定义上下文对象
    public static ReactContext sReactContext;

    //定义发送事件的函数
    public void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


    private void requestData() {
        OkHttpClient okHttpClient = new OkHttpClient();

        // Create request for remote resource.
        Request request = new Request.Builder()
                .url(SHEJIJIA_URL)
                .addHeader("X-AFC", "HW1ON1")
                .addHeader("X-SESSION", "5B1B9A7F-197B-4D78-BB35-CEEEBC4165B6")
                .addHeader("X-Token", "8ce8d467-e2f5-485a-b43e-5eef8eaca403")
                .build();

        // Execute the request and retrieve the response.
        try {
            Response response = okHttpClient.newCall(request).execute();
            if (response.isSuccessful()) {
                String string = response.body().string();
                Log.d("RNTest", string);

                //发送事件,事件名为EventName
                WritableMap writableMap = Arguments.createMap();
                writableMap.putString(KEY_SEND_TO_RN, string);
                sendEvent(sReactContext, KEY_NATIVE_EVENT, writableMap);
            } else {
                Toast.makeText(sReactContext, "response:" + response, Toast.LENGTH_SHORT).show();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void fun() {
        Log.d("RNTest", "fun===");

        requestData();
        //在该方法中开启线程，并且延迟3秒，然后向JavaScript端发送事件。
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                try {
//                    Thread.sleep(3000);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//                //发送事件,事件名为EventName
//                WritableMap et = Arguments.createMap();
//                sendEvent(sReactContext, "NativeEvent", et);
//
//            }
//        }).start();
    }
}
