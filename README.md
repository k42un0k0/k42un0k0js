## メモ

- パブリッシュのためのパーソナルトークンはある程度の権限が必要
- スコープは owner の名前である必要がある

yarn babel packages/react/lib --out-dir packages/react/dist --extensions ".ts" --extensions ".tsx" --config-file ./bable.config.json

## .npmrc

@k42un0k0:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:\_authToken=token

## メモ

npm login していないと publish できません

- version up -> build -> release の手順で公開してください
