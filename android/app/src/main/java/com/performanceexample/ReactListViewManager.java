package com.performanceexample;

import android.support.annotation.Nullable;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;

import com.facebook.drawee.backends.pipeline.Fresco;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import static com.facebook.react.common.ReactConstants.TAG;

/**
 * Created by root on 25/10/16.
 */

public class ReactListViewManager extends SimpleViewManager<RecyclerView> {
    private List<ListViewCell> list = new ArrayList<>();
    private RecyclerView recyclerView;
    private CustomAdapter mAdapter;

    @Override
    public String getName() {
         return "RCTListView";
    }

    @Override
    protected RecyclerView createViewInstance(ThemedReactContext reactContext) {
        // This probably needs to happen in another place or maybe not at all because of react native, consider commenting out
        Fresco.initialize(reactContext);
        mAdapter = new CustomAdapter(list);
        return new RecyclerView(reactContext);
    }

    @ReactProp(name = "src")
    public void setSrc(RecyclerView view,@Nullable ReadableMap src) {
        view.setHasFixedSize(true);
            RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(view.getContext());
            view.setLayoutManager(mLayoutManager);
            view.setItemAnimator(new DefaultItemAnimator());
            view.setAdapter(mAdapter);
            prepareMovieData(src);



    }

    private void prepareMovieData(ReadableMap map){

        ReadableArray obj = map.getArray("images");
        for(int i = 0; i <obj.size() ; i++){
            ReadableMap objMap = obj.getMap(i);
            ListViewCell cell = new ListViewCell(objMap.getString("uri"));
            list.add(cell);
        }


        mAdapter.notifyDataSetChanged();
    }



}
