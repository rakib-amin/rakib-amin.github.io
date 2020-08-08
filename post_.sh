# creates a post and opens it in vi

echo "Enter title of post:"
read title
echo "Enter categories for this post (space separated):"
read categories

title_slug=`echo $title | tr ' ' '-' | tr -cd '[:alnum:]-' | tr '[:upper:]' '[:lower:]'`
cats="$(echo "$categories" | tr '[:upper:]' '[:lower:]')"

date=$(date '+%Y-%m-%d')
formatted_date=$(date '+%Y-%m-%d %H:%M:%S %z')
post_file="$date-$title_slug.markdown"
touch $post_file

echo "---" >> $post_file
echo "layout: post" >> $post_file
echo "title:  \"$title\"" >> $post_file
echo "date:   $formatted_date" >> $post_file
echo "categories: $cats" >> $post_file
echo "---" >> $post_file
echo "[Edit me]" >> $post_file
echo "<!--- Code Block -->" >> $post_file
echo "{% highlight Java %}" >> $post_file
echo "public String huh = \"huh?\";" >> $post_file
echo "{% endhighlight %}" >> $post_file

mv $post_file _posts/
vi _posts/$post_file
