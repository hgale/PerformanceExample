package com.performanceexample;

import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import com.facebook.drawee.view.SimpleDraweeView;

public class MyViewHolder extends RecyclerView.ViewHolder  {
    public SimpleDraweeView gifView;

    public MyViewHolder(View view) {
        super(view);
        gifView = (SimpleDraweeView) view.findViewById(R.id.my_image_view);

    }
}