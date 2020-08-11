# creates a post 
MODE="CREATE"
POST_FILE=""

if [[ $1 == [Ss]* ]]; then
	txt_editor='sublime'
else
	txt_editor='vi'	
fi

if [[ $2 == "edit" ]]; then
	MODE="EDIT"
else
	MODE="CREATE"
fi

function append_copy_to_clipboard() {
	if grep -q "<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>" "$1"; then
	  	return
	fi
	echo "{% if page.content contains \"pre\" %}" >> $1
	echo "<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>" >> $1
	echo "<script src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'></script>" >> $1
	echo "<script src='{{site.baseurl}}/assets/js/clipboard.js'></script>" >> $1
	echo "{% endif %}" >> $1
}

if [[ $MODE == "CREATE" ]]; then
	echo "Enter title of post:"
	read title
	echo "Enter categories for this post (space separated):"
	read categories

	title_slug=`echo $title | tr ' ' '-' | tr -cd '[:alnum:]-' | tr '[:upper:]' '[:lower:]'`
	cats="$(echo "$categories" | tr '[:upper:]' '[:lower:]')"

	date=$(date '+%Y-%m-%d')
	formatted_date=$(date '+%Y-%m-%d %H:%M:%S %z')
	POST_FILE="$date-$title_slug.markdown"
	touch $POST_FILE

	echo "---" >> $POST_FILE
	echo "layout: post" >> $POST_FILE
	echo "title:  \"$title\"" >> $POST_FILE
	echo "date:   $formatted_date" >> $POST_FILE
	echo "categories: $cats" >> $POST_FILE
	echo "---" >> $POST_FILE
	echo "[Edit me]" >> $POST_FILE
	echo "<!--- Code Block -->" >> $POST_FILE
	echo "{% highlight Java %}" >> $POST_FILE
	echo "public String huh = \"huh?\";" >> $POST_FILE
	echo "{% endhighlight %}" >> $POST_FILE

	mv $POST_FILE _posts/
	$txt_editor _posts/$POST_FILE

elif [[ $MODE == "EDIT" ]]; then
	ls_post=`ls _posts/`
	options=($ls_post)
	options+=("Quit")

	if [[ ${#options[@]} == 1 ]]; then
		echo "No posts found"
		exit
	fi

	echo "Select a post from list and hit \`return\` (select ${#options[@]} to quit):"
	select opt in "${options[@]}"
	do
	    if [[ $opt == "Quit" ]]; then
	        break
	    fi
	    echo "Opening: ${opt}"
	    POST_FILE=${opt}
	    $txt_editor _posts/${opt}
	done
fi


curr_post_location=_posts/$POST_FILE
echo "Push To Github? (Y/n)"
read response
if [[ "$response" == [Yy]* ]]; then 
	append_copy_to_clipboard "$curr_post_location"
	echo "Publishing post to Github" 
	git config user.name "Rakib Amin" && git config user.email "md.rakib.amin@gmail.com";
	git add _posts/$POST_FILE
	git commit -m "Added $POST_FILE to _posts"
	git push
else
	append_copy_to_clipboard "$curr_post_location"
	exit 1
fi
