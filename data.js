window.BENCHMARK_DATA = {
  "lastUpdate": 1668122237397,
  "repoUrl": "https://github.com/mbrobbel/narrow",
  "entries": {
    "narrow": [
      {
        "commit": {
          "author": {
            "email": "26634292+bors[bot]@users.noreply.github.com",
            "name": "bors[bot]",
            "username": "bors[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "69d6758f40cf521f0964741a47e9eb725f40c5cf",
          "message": "Merge #40\n\n40: Compile using stable Rust r=mbrobbel a=mbrobbel\n\nWith the release of 1.65 we now have GATs on stable Rust.\n\nCo-authored-by: Matthijs Brobbel <m1brobbel@gmail.com>",
          "timestamp": "2022-11-10T23:09:45Z",
          "tree_id": "cba8a8347b50f2cd7156f20abb281a96e5bbefd9",
          "url": "https://github.com/mbrobbel/narrow/commit/69d6758f40cf521f0964741a47e9eb725f40c5cf"
        },
        "date": 1668122236855,
        "tool": "cargo",
        "benches": [
          {
            "name": "Bitmap::from_iter/narrow/12345/0",
            "value": 7300,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Bitmap::from_iter/narrow/12345/0.5",
            "value": 7281,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Bitmap::from_iter/narrow/12345/1",
            "value": 7322,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "Bitmap::into_iter/narrow/12345/0",
            "value": 13106,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Bitmap::into_iter/narrow/12345/0.5",
            "value": 13114,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Bitmap::into_iter/narrow/12345/1",
            "value": 13118,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}