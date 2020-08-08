### how to:
- Add a new post
```bash
bash post_.sh
```
- Overwrite _minima_ theme:
  - Edit **html**:
  ```bash
  bundle show minima
  # /Library/Ruby/Gems/2.6.0/gems/minima-2.5.1
  cd /Library/Ruby/Gems/2.6.0/gems/minima-2.5.1
  ls
  # LICENSE.txt  README.md    _includes/   _layouts/    _sass/       assets/
  cp -r _includes/header.html ~/rakib.github.io/_includes/
  # Edit ~/rakib.github.io/_includes/header.html
  vi ~/rakib.github.io/_includes/header.html
  ```
  - Edit **css**:
  ```bash
  vi ~/rakib.github.io/assets/main.scss
  ```
