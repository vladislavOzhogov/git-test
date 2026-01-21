# Показать список стэшей
git stash list 

# Сохранить изменения, включая untracked, с сообщением
git stash push -u -m "WIP: bugfix"  

# Показать список стэшей
git stash list  

# Применить второй стэш
git stash apply stash@{1} 

# Применить и удалить последний стэш

git stash pop  

git stash drop stash@{0} - удаляет последний стэш

git stash clear - удаляет все стэши