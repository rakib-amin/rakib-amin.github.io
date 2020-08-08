# creates a post 
if [[ $1 == "sublime" ]]; then
	txt_editor='sublime'
else
	txt_editor='vi'	
fi

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
$txt_editor _posts/$post_file

function append_copy_to_clipboard() {
	echo "{% if page.content contains \"pre\" %}" >> _posts/$post_file
	echo "<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>" >> _posts/$post_file
	echo "<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>" >> _posts/$post_file
	echo "<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>" >> _posts/$post_file
	echo "{% endif %}" >> _posts/$post_file
}

echo "Push To Github? (Y/n)"
read response
if [[ "$response" == [Yy]* ]]; then 
	append_copy_to_clipboard
	echo "Publishing post to Github" 
	git config user.name "Rakib Amin" && git config user.email "md.rakib.amin@gmail.com";
	git add _posts/$post_file
	git commit -m "Added $post_file to _posts"
	git push
else
	append_copy_to_clipboard
	exit 1
fi
