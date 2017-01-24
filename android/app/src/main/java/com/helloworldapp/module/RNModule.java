package com.helloworldapp.module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.helloworldapp.RNTest;

/**
 * @author liuhea
 * @date 2017-01-24</p>
 */

public class RNModule extends ReactContextBaseJavaModule {

    public RNModule(ReactApplicationContext reactContext) {

        super(reactContext);

        //给上下文对象赋值
        RNTest.sReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNModule";
    }

    @ReactMethod
    public void NativeMethod() {
        //调用Test类中的原生方法。
        new RNTest().fun();
    }
}
