git stash list # Показать список стэшей
git stash push -u -m "WIP: bugfix"  # Сохранить изменения, включая untracked, с сообщением
git stash list  # Показать список стэшей
git stash apply stash@{1}  # Применить второй стэш
git stash pop  # Применить и удалить последний стэш
git stash drop stash@{0} - удаляет последний стэш
git stash clear - удаляет все стэши