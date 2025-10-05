#!/bin/bash

mkdir -p build/rss

cat > public/feed.xml <<EOF
<rss version="2.0">
  <channel>
    <title>Ava Silver</title>
    <description>
      i'm ava silver (she/her). welcome to my corner of the internet!
    </description>
    <link>https://avasilver.dev</link>
    <lastBuildDate>$(date +"%d %b %Y 00:00:00 %z")</lastBuildDate>
EOF


ls src/Blog/posts/*.md | while read -r file; do
    filename=$(basename "$file" .md)
    htmlfile="./build/rss/${filename}.html"
    pandoc "$file" -f markdown -t html -o "$htmlfile"

    post_link="https://avasilver.dev/blog/$(cut -d'-' -f4- <<<"$filename")"
    cat >> public/feed.xml <<EOF
    <item>
      <title>$(grep '# ' "$file" | cut -d'#' -f2 | xargs)</title>
      <link>${post_link}</link>
      <guid isPermaLink="true">${post_link}</guid>
      <pubDate>$(cut -d'-' -f1-3 <<<"$filename" | xargs -I{} date -d {} +"%d %b %Y 00:00:00 %z")</pubDate>
      <description><![CDATA[$(cat "$htmlfile")]]></description>
    </item>
EOF
done

echo '  </channel>
</rss>' >> public/feed.xml
