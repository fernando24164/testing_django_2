#!/bin/bash

apt-get update

cd /tmp
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh

debconf-set-selections <<< 'mysql-server mysql-server/root_password password test'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password test'
apt-get install -y build-essential python3-dev python3-pip mysql-server libmysqlclient-dev vim nodejs

ln -s $(which nodejs) /usr/bin/node

#Dependencies to build python 3.6
apt-get install -y libssl-dev zlib1g-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev
apt-get install -y libgdbm-dev libdb5.3-dev libbz2-dev libexpat1-dev liblzma-dev tk-dev

#install python 3.6
wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tar.xz
tar xf Python-3.6.1.tar.xz
cd Python-3.6.1
./configure
make -j 8
sudo make altinstall

cd /vagrant
pip3.6 install -r requirements.txt

mysql -u root -ptest -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION; FLUSH PRIVILEGES;"
mysql -u root -ptest -e "CREATE DATABASE django_maps;"