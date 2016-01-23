package com.next.www.abishekvashok;

import android.content.DialogInterface;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.MediaController;
import android.widget.VideoView;

import com.coderefer.androidsplashscreenexample.R;


public class first extends AppCompatActivity{
    VideoView mVideoView;
    Uri uri;
    MediaController mc;
    String LINK = "android.resource://com.next.www.abishekvashok/raw/video";
    Button videop;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);
        videop = (Button) findViewById(R.id.max);
        mVideoView  = (VideoView) findViewById(R.id.videoView);
        mc = new MediaController(this);
        mVideoView.setMediaController(mc);
        uri = Uri.parse(LINK);
        mVideoView.setVideoURI(uri);
        mVideoView.requestFocus();
        videop.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mVideoView.start();
            }
        });
    }
}
