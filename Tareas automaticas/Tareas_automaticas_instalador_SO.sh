#!/bin/bash
#

apt-get install aptitude
#aptitude install htop docdiff rsync postgresql rpm rar unrar pgadmin3 terminator git odbc-postgresql bzip2 ssh kompare qmmp tar gimp openjdk-11-jdk handbrake picard vlc brasero k3b gparted duff maven fdupes software-properties-common libreoffice kdenlive k3b audacity nemo curl rarcrack
wget https://www.syntevo.com/downloads/smartgit/smartgit-linux-21_2_3.tar.gz
tar -xvf smartgit-linux-21_2_3.tar.gz
cd smartgit/bin/
chmod +x ./smartgit.sh 
chmod +x ./add-menuitem.sh
./smartgit.sh 
./add-menuitem.sh
add-apt-repository ppa:musicbrainz-developers/stable
aptitude update
aptitude install picard 
curl -o google-chrome-stable_current_amd64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
#https://ubunlog.com/ciano-conversor-archivos-multimedia-simple/
wget https://github.com/robertsanseries/ciano/releases/download/0.1.4/com.github.robertsanseries.ciano_0.1.4_amd64.deb
dpkg -i google-chrome-stable_current_amd64.deb
aptitude install imagemagick
dpkg -i com.github.robertsanseries.ciano_0.1.4_amd64.deb
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
aptitude update
sudo mkdir /data/db
sudo apt install mongodb-org
mongo -version
sudo sed -i -e '$a127.0.0.1       cucacuca2.com' /etc/hosts
sudo chown -R alisira:root /opt/
wget https://dl.teamviewer.com/download/linux/version_15x/teamviewer_15.31.5_amd64.deb
aptitude install libminizip1
sudo dpkg -i teamviewer_15.31.5_amd64.deb 
sudo aptitude install libgconf-2-4
wget https://downloads.mongodb.com/compass/mongodb-compass_1.32.2_amd64.deb
dpkg -i mongodb-compass_1.32.2_amd64.deb
aptitude install  deepin-image-viewer
#Fuente Nodejs https://github.com/nodesource/distributions/blob/master/README.md
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo aptitude install nodejs
#Instalar ultima version del cliente de angular en forma global
sudo npm install -g @angular/cli
ng version
/etc/init.d/apache2 stop
systemctl disable apache2
