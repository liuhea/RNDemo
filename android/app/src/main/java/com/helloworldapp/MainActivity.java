package com.helloworldapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;


public class MainActivity extends Activity implements View.OnClickListener {

    private Button mBtnJumpToRN;
    private Button mBtnReceiveRN;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initView();
        initListener();
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.btn_main_jump:
                startActivity(RNActivity.class, false);
                break;
            case R.id.btn_main_receive:
                Toast.makeText(this, "接收RN发送的信息", Toast.LENGTH_SHORT).show();
                break;
            default:
                break;
        }
    }

    private void startActivity(Class clazz, boolean isFinished) {
        startActivity(new Intent(MainActivity.this, clazz));
        if (isFinished) {
            finish();
        }
    }

    private void initListener() {
        mBtnJumpToRN.setOnClickListener(this);
        mBtnReceiveRN.setOnClickListener(this);
    }

    private void initView() {
        mBtnJumpToRN = (Button) findViewById(R.id.btn_main_jump);
        mBtnReceiveRN = (Button) findViewById(R.id.btn_main_receive);
    }
}
