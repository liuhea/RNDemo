package com.helloworldapp.module;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.helloworldapp.Test;

/**
 * @author liuhea
 * @date 2017-01-24</p>
 */

public class MyModule extends ReactContextBaseJavaModule {

    public MyModule(ReactApplicationContext reactContext) {

        super(reactContext);

        //给上下文对象赋值
        Test.sContext = reactContext;
    }

    @Override
    public String getName() {

        return "MyModule";
    }


    @ReactMethod
    public void NativeMethod() {
        //调用Test类中的原生方法。
        new Test().fun();
    }
}
