git revert HEAD  # Отменить последний коммит, создав новый
git reset HEAD^^
git revert <commit-hash>  # Отменить конкретный коммит по хэшу
git revert HEAD~2..HEAD  # Отменить диапазон последних двух коммитов
git revert -m 1 <merge-commit>  # Ревертировать мерж-коммит, сохраняя изменения из первого родителя