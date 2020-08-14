# adds a solution to `probs.html`
echo "Input Problem No:"
read prob
line=`grep -n "id=\"$prob\"" _includes/probs.html | grep -Eow '[0-9]+:'`
if [[ -z $line ]]; then
	echo "Problem Not Found"
	exit 1
fi
line=${line%:}

if [[ $1 == [Ss]* ]]; then
	sublime _includes/probs.html:$line
else
	vi +$line _includes/probs.html
fi