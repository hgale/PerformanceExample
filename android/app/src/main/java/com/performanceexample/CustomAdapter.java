package com.performanceexample;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import java.util.List;

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
    public void onBindViewHolder(MyViewHolder holder, int position) {
        ListViewCell listViewCell = list.get(position);
        holder.imageView.setImageURI(listViewCell.getUri());
    }

    @Override
    public int getItemCount() {
        return list.size();
    }
}