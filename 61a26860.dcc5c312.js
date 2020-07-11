(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(9),r=(n(0),n(222)),c={id:"connect-gns3-internet",title:"Connect GNS3 to the Internet (local server)",sidebar_label:"Connect GNS3 to the Internet"},i={id:"using-gns3/connect-gns3-internet",isDocsHomePage:!1,title:"Connect GNS3 to the Internet (local server)",description:"Introduction",source:"@site/docs/using-gns3/connect-gns3-internet.md",permalink:"/gns3-docs/docs/using-gns3/connect-gns3-internet",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/connect-gns3-internet.md",sidebar_label:"Connect GNS3 to the Internet",sidebar:"someSidebar",previous:{title:"Link Control",permalink:"/gns3-docs/docs/using-gns3/link-control"},next:{title:"The NAT node",permalink:"/gns3-docs/docs/using-gns3/the-nat-node"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Local Install",id:"local-install",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document explains how to connect GNS3 topologies to the Internet when using a local GNS3 server."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Use of the NAT node to allow topology nodes to access the internet is also an option. It is simpler than using the Cloud node, but devices on your LAN and the Internet will not be able to access them directly. Instructions on using the NAT node are covered here."))),Object(r.b)("p",null,"The topology created in this document looks as follows:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/1.jpg",alt:"screenshot"}))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Ensure that your PC firewall is not blocking GNS3 traffic. If necessary, turn off your PC\u2019s firewall."))),Object(r.b)("h2",{id:"local-install"},"Local Install"),Object(r.b)("p",null,"The following steps show you how to connect a local GNS3 installation to the Internet. In this document a simple topology of two Cisco routers are used to demonstrate:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Adding a cloud to the GNS3 topology"),Object(r.b)("li",{parentName:"ul"},"Configuring IP addressing"),Object(r.b)("li",{parentName:"ul"},"Configuring DNS resolution"),Object(r.b)("li",{parentName:"ul"},"Configuring NAT on the Cisco router"),Object(r.b)("li",{parentName:"ul"},"Advertising Routes in OSPF"),Object(r.b)("li",{parentName:"ul"},"Testing")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"To create a new GNS3 topology, select a group of devices in the ",Object(r.b)("strong",{parentName:"li"},"Devices Toolbar")," by clicking the ",Object(r.b)("strong",{parentName:"li"},"Browse Routers")," button")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/2.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"The routers available will depend on your GNS3 configuration. In this example both a local router and GNS3 VM router are available.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/3.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Drag and drop a ",Object(r.b)("strong",{parentName:"li"},"local")," router to the GNS3 ",Object(r.b)("strong",{parentName:"li"},"Workspace"),". An instance of the node becomes available in the ",Object(r.b)("strong",{parentName:"li"},"Workspace"),":")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/4.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Drag and drop another ",Object(r.b)("strong",{parentName:"li"},"local server")," router to the GNS3 ",Object(r.b)("strong",{parentName:"li"},"Workspace"),":")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/5.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"End devices")," button:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/6.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Drag and drop a ",Object(r.b)("strong",{parentName:"li"},"Cloud")," node to the ",Object(r.b)("strong",{parentName:"li"},"Workspace"),", select a ",Object(r.b)("strong",{parentName:"li"},"local server"),", and then click ",Object(r.b)("strong",{parentName:"li"},"OK"),":")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/7.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"Cloud")," node will now appear in the ",Object(r.b)("strong",{parentName:"li"},"Workspace"),":")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/8.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Toolbar Device")," button again to collapse the group:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/9.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"Right click on the ",Object(r.b)("strong",{parentName:"li"},"Cloud")," and then click ",Object(r.b)("strong",{parentName:"li"},"Configure"),":")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/10.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},"A list of available Ethernet interfaces is listed:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/11.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Use of physical interfaces is recommended. However, it is possible to use other interfaces, like a bridge interface, or a wireless interface. Configuring those is outside the scope of this article."),Object(r.b)("p",null,"Below are examples of enabling \u201cshow special ethernet interfaces\u201d, and then viewing the dropdown list:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/12.jpg",alt:"screenshot"})),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/13.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:11},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Add a Link")," button to start adding links to your topology. The mouse cursor will change to indicate that links can be added:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/14.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:12},Object(r.b)("li",{parentName:"ol"},"Click on the first router topology to display available interfaces (this is device dependant):")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/15.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:13},Object(r.b)("li",{parentName:"ol"},"Click the interface and then select the cloud in the topology to connect the interface to it. In this example FastEthernet 0/0 on R1 was selected. Next, click on the Cloud node, to see a list of available interfaces:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/16.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"(notice that the listed interfaces on the Cloud node matches what we saw in its properties)"),Object(r.b)("ol",{start:14},Object(r.b)("li",{parentName:"ol"},"Select an interface on the ",Object(r.b)("strong",{parentName:"li"},"Cloud")," to complete the connection. In this example,  ",Object(r.b)("strong",{parentName:"li"},"Ethernet")," on ",Object(r.b)("strong",{parentName:"li"},"Cloud 1")," was selected:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/17.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:15},Object(r.b)("li",{parentName:"ol"},"Add another link between R2 and R1:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/18.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:16},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Add a Link")," button to stop adding links. The mouse cursor will change back to normal to indicate that you have stopped adding links:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/19.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:17},Object(r.b)("li",{parentName:"ol"},"If not already done, click the ",Object(r.b)("strong",{parentName:"li"},"Show/Hide interface labels")," button on the ",Object(r.b)("strong",{parentName:"li"},"GNS3 Toolbar")," to display interface labels in your topology:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/20.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:18},Object(r.b)("li",{parentName:"ol"},"You are now ready to power on your network devices. Click the Start/Resume button on the GNS3 Toolbar to start up your network devices:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/21.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:19},Object(r.b)("li",{parentName:"ol"},"You are now ready to configure your devices. Click the ",Object(r.b)("strong",{parentName:"li"},"Console connect to all devices")," button on the ",Object(r.b)("strong",{parentName:"li"},"Toolbar")," to open a connection to every device in the topology:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/22.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:20},Object(r.b)("li",{parentName:"ol"},"A console connection is opened to each router in the topology:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/23.jpg",alt:"screenshot"}))),Object(r.b)("ol",{start:21},Object(r.b)("li",{parentName:"ol"},"Configure IP addresses:")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Option 1: DHCP"),"\nIf using DHCP, configure R1 as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1# configure terminal\nR1(config)# interface FastEthernet 0/0\nR1(config-if)# ip address dhcp\nR1(config-if)# no shutdown\nR1(config-if)# end\nR1#\n")),Object(r.b)("p",null,"Result: An IP address is allocated to the router by the DHCP server:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1#\n*Mar  1 00:03:14.831: %DHCP-6-ADDRESS_ASSIGN: Interface FastEthernet0/0 assigned DHCP address 192.168.1.29, mask 255.255.255.0, hostname R1\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Option 2: Manual configuration"),"\nIf configuring static IP address, configure R1 with an IP address in the same subnet as your local PC:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1# configure terminal\nR1(config)# interface FastEthernet 0/0\nR1(config-if)# ip address 192.168.1.123 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit\n")),Object(r.b)("p",null,"Configure a default gateway:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.249\nR1(config)# end\n")),Object(r.b)("ol",{start:22},Object(r.b)("li",{parentName:"ol"},"Ping the router\u2019s default gateway:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1# ping 192.168.1.249\n\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 192.168.1.249, timeout is 2 seconds:\n.!!!!\nSuccess rate is 80 percent (4/5), round-trip min/avg/max = 8/17/36 ms\nR1#\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Result")," Pings should succeed."),Object(r.b)("ol",{start:23},Object(r.b)("li",{parentName:"ol"},"Ensure that the router is configured to use the correct DNS server:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1# configure terminal\n\nR1(config)# ip domain-lookup\nR1(config)# ip name-server 8.8.8.8\nR1(config)# end\nR1#\n")),Object(r.b)("ol",{start:24},Object(r.b)("li",{parentName:"ol"},"Ping google.com:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'R1# ping google.com\n\n\nTranslating "google.com"...domain server (8.8.8.8) [OK]\n\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 216.58.198.174, timeout is 2 seconds:\n!!!!!\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 12/19/24 ms\nR1#\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Result")," Pings succeed."),Object(r.b)("p",null,"If your pings don\u2019t succeed, ensure that you have connectivity to your default gateway and ensure that the default gateway is configured for NAT to translate the address allocated to the GNS3 router."),Object(r.b)("ol",{start:25},Object(r.b)("li",{parentName:"ol"},"Configure IP addressing on the Internal GNS3 network:")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/connect-gns3-internet/24.jpg",alt:"screenshot"}))),Object(r.b)("p",null,"Configuration on the routers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1 R1# configure terminal\n\nR1(config)# interface FastEthernet 0/1\nR1(config-if)# ip address 10.1.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# exit\nR1(config)#\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R2R2# configure terminal\nR2(config)# interface FastEthernet 0/0\nR2(config-if)# ip address 10.1.1.2 255.255.255.0\nR2(config-if)# no shutdown\nR2(config-if)# exit\nR2(config)#\n")),Object(r.b)("ol",{start:26},Object(r.b)("li",{parentName:"ol"},"Configure OSPF on R1 and R2 and advertise a default route:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1R1(config)# router ospf 1\nR1(config-router)# network 10.0.0.0 0.255.255.255 area 0\nR1(config-router)# default-information originate\nR1(config-router)# end\nR1#\n\nR2R2(config)# router ospf 1\nR2(config-router)# network 10.0.0.0 0.255.255.255 area 0\nR2(config-router)# end\nR2#\n\nResult OSPF neighbor relationships are established:\n\nR1*Mar  1 00:19:24.431: %OSPF-5-ADJCHG: Process 1, Nbr 10.1.1.2 on FastEthernet0/1 from LOADING to FULL, Loading Done\nR1#\n\nR2*Mar  1 00:19:24.467: %OSPF-5-ADJCHG: Process 1, Nbr 192.168.1.123 on FastEthernet0/0 from LOADING to FULL, Loading Done\nR2#\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the OSPF relationships are not formed, check your configuration. Make sure you have configured IP addresses correctly, enabled the interfaces and cabled the GNS3 network correctly."))),Object(r.b)("ol",{start:27},Object(r.b)("li",{parentName:"ol"},"Configure DNS settings on R2:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R2# configure terminal\n\nR2(config)# ip domain-lookup\nR2(config)# ip name-server 8.8.8.8\nR2(config)# end\nR2#\n")),Object(r.b)("ol",{start:28},Object(r.b)("li",{parentName:"ol"},"R2 will not be able to ping Internet devices until you configure NAT on R1 (or enable routing between R1 and your Internet gateway). In this example, the Internet gateway does not support routing, so NAT will be configured on R1:\nR1# configure terminal")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"R1# configure terminal\nR1(config)# interface FastEthernet 0/0\nR1(config-if)# ip nat outside\nR1(config-if)# interface FastEthernet 0/1\nR1(config-if)# ip nat inside\nR1(config)# ip nat inside source list 1 interface FastEthernet 0/0 overload\nR1(config)# access-list 1 permit 10.0.0.0 0.255.255.255\nR1(config)# end\nR1# write memory\n")),Object(r.b)("ol",{start:29},Object(r.b)("li",{parentName:"ol"},"Test R2 connectivity to the Internet:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'R2# ping google.com\n\nTranslating "google.com"...domain server (8.8.8.8) [OK]\n\nType escape sequence to abort.\nSending 5, 100-byte ICMP Echos to 74.125.140.138, timeout is 2 seconds:\n.!!!!\nSuccess rate is 80 percent (4/5), round-trip min/avg/max = 36/40/44 ms\nR2# write memory\n')),Object(r.b)("p",null,"Result R2 is able to ping devices on the Internet."),Object(r.b)("ol",{start:30},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Congratulations!")," You have configure Internet connectivity from GNS3.")))}s.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||g[m]||r;return n?o.a.createElement(u,i(i({ref:t},b),{},{components:n})):o.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<r;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);