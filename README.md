# Installing

# Installing linux

```powershell
 wsl --install
```

**_GET list of distributers_**

```powershell
wsl -l -v
```

//Expected output \

```powershell
NAME                            FRIENDLY NAME
AlmaLinux-8                     AlmaLinux OS 8
AlmaLinux-9                     AlmaLinux OS 9
AlmaLinux-Kitten-10             AlmaLinux OS Kitten 10
Debian                          Debian GNU/Linux
SUSE-Linux-Enterprise-15-SP5    SUSE Linux Enterprise 15 SP5
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
Ubuntu                          Ubuntu
Ubuntu-24.04                    Ubuntu 24.04 LTS
kali-linux                      Kali Linux Rolling
openSUSE-Tumbleweed             openSUSE Tumbleweed
openSUSE-Leap-15.6              openSUSE Leap 15.6
Ubuntu-18.04                    Ubuntu 18.04 LTS
Ubuntu-20.04                    Ubuntu 20.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_7                 Oracle Linux 8.7
OracleLinux_9_1                 Oracle Linux 9.1
```

// DownLoad Distributer

```powershell
 wsl.exe --install Ubuntu
```

## Launching Lunix

```powershell
wsl.exe -d Ubuntu
```

## Download Redis

```powershell
sudo apt-get install redis
```

# Start Server

```powershell
redis-server
```

# Basic Redis Commands

Launching redis cli

```powershell
redis-cli
```

Quit cli

```powershell
quit
```

## Basics

```powershell
SET <key> <value>
GET <key>
DEL <key> //delete
EXISTS <key>
KEYS *  // get all keys
FLUSHALL //clear database
expire <key> <seconds> //set expire for a key
setex <key> <seconds> <value> //set value with expireseconds
ttl <key> // check time remain before expire
```

## Arrays

```powershell
lpush <key> <value> // push at start of array
rpush <key> <value> //push at end of array
lrange <key>  0 -1 // GEt array

lpop //remove from start
rpop //remove from end

```

## Sets

```
 SADD <key> <value> // add to set
 SMEMBERS <key> // GET set
 SREM <key> <value> //remove from set
```

## Hashes

Hashes are ways to store key value pair to a redis key

```
 HSET <key> <field> <value>
 HGET  <key> <field> /// HGET person name --->"dhuruv"
 HGETALL <key> // EXPECTED OUTCOME 1) "name"
                                   2) "dhuruv"
                                   3) "age"
                                   4) "23
 HDEL <key> <field>  // 0 or 1
 HEXITS <key> <field> // 0 or 1

```
