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

    pandoc "$file" -f markdown -t html -o $htmlfile
    
    post_date=$(cut -d'-' -f1-3 <<<"$filename")
    post_date=$(date -d "$post_date" +"%d %b %Y 00:00:00 %z")
    post_title=$(grep '# ' $file | cut -d'#' -f2 | xargs)
    post_id=$(cut -d'-' -f4- <<<"$filename")
    post_link="https://avasilver.dev/blog/${post_id}"
    cat >> public/feed.xml <<EOF
    <item>
      <title>${post_title}</title>
      <link>${post_link}</link>
      <guid isPermaLink="true">${post_link}</guid>
      <pubDate>${post_date}</pubDate>
      <description><![CDATA[$(cat $htmlfile)]]></description>
    </item>
EOF
done

echo '  </channel>
</rss>' >> public/feed.xml
