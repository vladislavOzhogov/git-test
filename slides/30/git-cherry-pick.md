git cherry-pick <commit-hash>  # Применить изменения из одного коммита
git cherry-pick commit1..commit2  # Применить диапазон коммитов
git cherry-pick -n <commit-hash>  # Применить без создания коммита
git cherry-pick --continue  # Продолжить после разрешения конфликтов