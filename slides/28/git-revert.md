# Отменить последний коммит, создав новый
git revert HEAD  

# Отменить реверт коммит
git reset --hard HEAD~1 

# Отменить конкретный коммит по хэшу
git revert <commit-hash>  

# Отменить диапазон последних двух коммитов
git revert HEAD~2..HEAD  