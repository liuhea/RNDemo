package com.helloworldapp;


import com.facebook.react.ReactActivity;

/**
 * @author liuhea
 * @date 2017-01-22</p>
 */

public class RNActivity extends ReactActivity {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HelloWorldApp";
    }
}
