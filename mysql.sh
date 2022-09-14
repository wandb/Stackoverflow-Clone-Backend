mysql_img="mysql"

docker run --rm --name so-mysql --mount source=stackoverflow-mysql,target=/var/lib/mysql \
  -p 3306:3306 -e MYSQL_USER=wandb -e MYSQL_PASSWORD=wandb -e MYSQL_DATABASE=stackoverflow -e MYSQL_ALLOW_EMPTY_PASSWORD=true -d $mysql_img