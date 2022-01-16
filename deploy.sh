#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git add .
git commit -am 'updated'

# 如果你想要部署到 https://USERNAME.github.io
git push origin master
