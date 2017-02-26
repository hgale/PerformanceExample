package com.performanceexample;

import android.support.v7.widget.RecyclerView;
import android.view.View;

import com.facebook.drawee.view.SimpleDraweeView;

public class MyViewHolder extends RecyclerView.ViewHolder  {
    public SimpleDraweeView imageView;

    public MyViewHolder(View view) {
        super(view);
        imageView = (SimpleDraweeView) view.findViewById(R.id.my_image_view);

    }
}