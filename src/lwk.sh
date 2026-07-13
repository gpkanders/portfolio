cd 4gallery
for f in *.JPG; do
  mv "$f" "$(echo "$f" | sed 's/\.JPG$/.jpg/')"
done
