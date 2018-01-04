Vagrant.configure("2") do |config|
    config.vm.box = "debian/jessie64"
    config.vm.hostname = "djangoMaps"
    config.vm.network :private_network, ip: "192.168.33.10"
    config.vm.provider :virtualbox do |v|
        v.memory = 512
        v.cpus = 1
    end
    config.vm.provision :shell, :path => "bootstrap.sh"
    config.vm.synced_folder ".", "/vagrant", type: "rsync"
end