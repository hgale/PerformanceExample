package com.performanceexample;

import android.net.Uri;

public class ListViewCell {
    private Uri uri;

    public ListViewCell(String uri) {
        this.uri = Uri.parse(uri);
    }


    public Uri getUri() {
        return uri;
    }

}