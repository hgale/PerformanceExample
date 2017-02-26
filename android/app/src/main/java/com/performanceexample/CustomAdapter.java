package com.performanceexample;

import android.graphics.Color;
import android.graphics.drawable.Animatable;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequest.RequestLevel;

import java.util.List;

import static android.support.v7.widget.RecyclerView.*;

public class CustomAdapter extends RecyclerView.Adapter<MyViewHolder> {
    String TAG = "react";
    private List<ListViewCell> list;

    public CustomAdapter(List<ListViewCell> list) {
        this.list = list;
    }


    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.image_list_row, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onViewDetachedFromWindow (MyViewHolder holder) {
        if ( holder.gifView.getController() != null) {
            Animatable animatable = holder.gifView.getController().getAnimatable();
            if (animatable != null) {
                Log.d("Test", "animatable has allready been set");
//            animatable.start();
//            // later
                animatable.stop();
            } else {
                Log.d("Test", "animatable has not been set");
            }
        }
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        ListViewCell listViewCell = list.get(position);

        DraweeController controller = Fresco.newDraweeControllerBuilder()
                .setUri(listViewCell.getUri())
                .setAutoPlayAnimations(true)
                .build();
        holder.gifView.setController(controller);

        //holder.gifView.setImageURI(listViewCell.getUri());
        /*
        ImageRequest imageRequest =
                ImageRequestBuilder.newBuilderWithSource(listViewCell.getUri())
                        //.setResizeOptions(new ResizeOptions(350, 200))
                        .setLowestPermittedRequestLevel(RequestLevel.FULL_FETCH)
                        .build();
        DraweeController draweeController = Fresco.newDraweeControllerBuilder()
                .setImageRequest(imageRequest)
                .setOldController(holder.gifView.getController())
                .setAutoPlayAnimations(true)
                .build();
        holder.gifView.setController(draweeController);
        */
    }

    @Override
    public int getItemCount() {
        return list.size();
    }
}