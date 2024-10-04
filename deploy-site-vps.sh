BUILD_DIR="/home/bartek/portfolio-website-svelte/dist"
DEPLOY_DIR="/var/www/bartoszbak.org"

git pull

sudo cp -R $BUILD_DIR/* $DEPLOY_DIR/

sudo chown -R www-data:www-data $DEPLOY_DIR
sudo chmod -R 755 $DEPLOY_DIR

echo "Deployment completed successfully."
