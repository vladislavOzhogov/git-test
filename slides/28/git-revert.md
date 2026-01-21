git revert HEAD  # Отменить последний коммит, создав новый
git reset --hard HEAD~1 # Отменить реверт коммит
git revert <commit-hash>  # Отменить конкретный коммит по хэшу
git revert HEAD~2..HEAD  # Отменить диапазон последних двух коммитов