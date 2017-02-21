package com.performanceexample;

import android.graphics.Color;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.drawee.interfaces.DraweeController;

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
                .inflate(R.layout.movie_list_row, parent, false);
        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        ListViewCell listViewCell = list.get(position);
        DraweeController controller = Fresco.newDraweeControllerBuilder()
                .setUri(listViewCell.getUri())
                .setAutoPlayAnimations(true)
        .build();
        holder.gifView.setController(controller);
    }

    @Override
    public int getItemCount() {
        return list.size();
    }


}
