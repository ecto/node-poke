#poke

find all local network services being broadcast over mDNS

![evil](http://i.imgur.com/P9G8F.jpg)

##install

    npm install -g poke

##usage

    poke

##result

a list similar to this:

````
60C547073F8C@jasonlbaptiste’s MacBook Air
  tcp raop
  10.0.0.185:5000
  jasonlbaptistes-MacBook-Air.local.


Apple TV (2)
  tcp airplay
  10.0.0.41:7000
  Apple-TV-2.local.


40-27-84-85 TRON’s Mac Pro
  udp sleep-proxy
  10.0.0.8:52395
  TRONs-Mac-Pro.local.

...
````
