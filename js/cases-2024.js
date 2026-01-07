const cases2024 = [
  {
    "number": "00438364",
    "subject": "MRMAC Timing using both clk and clk2x",
    "company": "Teradyne, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "1/3/2024",
    "year": "2024"
  },
  {
    "number": "00438895",
    "subject": "Issue with VCK190-ethernet-TRD",
    "company": "Aja Video Systems, Inc.",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "1/4/2024",
    "year": "2024"
  },
  {
    "number": "00440175",
    "subject": "DCMAC Flex IF backpressure question",
    "company": "Ciena Corporation",
    "priority": "Urgent",
    "device": "VERSAL_PREMIUM Family",
    "date": "1/8/2024",
    "year": "2024"
  },
  {
    "number": "00441637",
    "subject": "Is there an example of MRMAC in the vck190-ethernet-trd for uboot?",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "1/11/2024",
    "year": "2024"
  },
  {
    "number": "00446985",
    "subject": ". After petalinux comes up the ethernet has overrun errors and neither SD card or eMMC work",
    "company": "Aja Video Systems, Inc.",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "1/25/2024",
    "year": "2024"
  },
  {
    "number": "00448213",
    "subject": "VPK180 MRMAC bring up issues",
    "company": "General Dynamics Mission Systems, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "1/29/2024",
    "year": "2024"
  },
  {
    "number": "00448304",
    "subject": "Looking for Versal-ACAP LAB to illustrate and simulate an MRMAC ethernet link",
    "company": "Canon Medical Research Usa, Inc.",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "1/29/2024",
    "year": "2024"
  },
  {
    "number": "00448352",
    "subject": "MRMAC 100G IP ports clocking question",
    "company": "Palo Alto Networks Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "1/29/2024",
    "year": "2024"
  },
  {
    "number": "00449270",
    "subject": "10G/25G Ethernet Subsystem",
    "company": "National Institute of Standards & Technology",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "1/31/2024",
    "year": "2024"
  },
  {
    "number": "00453407",
    "subject": "ZCU102 SFP Ethernet",
    "company": "Viasat",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "2/13/2024",
    "year": "2024"
  },
  {
    "number": "00455198",
    "subject": "How do I enable SNMP within lwIP?",
    "company": "General Dynamics Mission Systems, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "2/19/2024",
    "year": "2024"
  },
  {
    "number": "00456626",
    "subject": "AXI 10G/25G Ethernet Subsystem returns SLVERR when reading status registers",
    "company": "Extron Electronics",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "2/22/2024",
    "year": "2024"
  },
  {
    "number": "00457242",
    "subject": "help on usxgmii core",
    "company": "Teledyne",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "2/23/2024",
    "year": "2024"
  },
  {
    "number": "00458039",
    "subject": "ESP_XACE Have issues configuring 10G MRMAC (VCK190 Eval Board)",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "2/26/2024",
    "year": "2024"
  },
  {
    "number": "00458489",
    "subject": "Switch Ethernet Speed with AN Enabled",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "2/27/2024",
    "year": "2024"
  },
  {
    "number": "00458533",
    "subject": "Is the AXI Ethernet Lite IP compatible with PL GEM2 on the KD240?",
    "company": "KLA Corporation",
    "priority": "High",
    "device": "Kria SOM Family",
    "date": "2/27/2024",
    "year": "2024"
  },
  {
    "number": "00459400",
    "subject": "LwIP not working on custom hardware",
    "company": "Viasat, Inc.",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "2/29/2024",
    "year": "2024"
  },
  {
    "number": "00459815",
    "subject": "40G/50G Ethernet Subsystem (3.2) loopback test issue",
    "company": "LitePoint Corporation",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "3/1/2024",
    "year": "2024"
  },
  {
    "number": "00460512",
    "subject": "AXI DMA/Ethernet Issue",
    "company": "Sandia National Laboratories",
    "priority": "High",
    "device": "VIRTEX-7 Family",
    "date": "3/4/2024",
    "year": "2024"
  },
  {
    "number": "00461453",
    "subject": "ptp_1588_timer_syncer and Renesas 8a34001 clock IC used on the VCK190/VMK180 board",
    "company": "Aja Video Systems, Inc.",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "3/6/2024",
    "year": "2024"
  },
  {
    "number": "00463137",
    "subject": "[ESP_XACE] 1G/10G Switching Ethernet PCS - Clock Domain Issues",
    "company": "L-3 Communications Corporation",
    "priority": "High",
    "device": "Kintex-UP Family",
    "date": "3/11/2024",
    "year": "2024"
  },
  {
    "number": "00465215",
    "subject": "Cannot add more than 3 Multicast ports with LwIP",
    "company": "L3Harris",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "3/15/2024",
    "year": "2024"
  },
  {
    "number": "00466171",
    "subject": "Versal GEM0 TxFrame_Octet registers",
    "company": "Keysight Technologies, Inc.",
    "priority": "High",
    "device": "VERSAL_HBM Family",
    "date": "3/18/2024",
    "year": "2024"
  },
  {
    "number": "00466538",
    "subject": "[ESP_XACE] 1G/10G Switching Ethernet Subsystem Clause 37 not working",
    "company": "L-3 Communications Corporation",
    "priority": "High",
    "device": "Kintex-UP Family",
    "date": "3/19/2024",
    "year": "2024"
  },
  {
    "number": "00466651",
    "subject": "Customer found potential bug in our petalinux axienet device driver",
    "company": "Xilinx, Inc",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "3/19/2024",
    "year": "2024"
  },
  {
    "number": "00467241",
    "subject": "gem0 not able to ping suspect device tree binding or cfg",
    "company": "Lockheed Martin",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "3/20/2024",
    "year": "2024"
  },
  {
    "number": "00469025",
    "subject": "RPU/APU Question",
    "company": "Aja Video Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "3/25/2024",
    "year": "2024"
  },
  {
    "number": "00470345",
    "subject": "ZU+\" detailed questions on GEM PTP 1588 timestamping",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "3/28/2024",
    "year": "2024"
  },
  {
    "number": "00470364",
    "subject": "swap ethernet 0 and ethernet 1",
    "company": "Teradyne, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "3/28/2024",
    "year": "2024"
  },
  {
    "number": "00470662",
    "subject": "MRMAC Support in Linux 6.1",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "3/29/2024",
    "year": "2024"
  },
  {
    "number": "00473582",
    "subject": "ESP_XACE Kernel panic when trying to read MRMAC status registers (petalinux build)",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "4/8/2024",
    "year": "2024"
  },
  {
    "number": "00474759",
    "subject": "TCP/IP client-server application",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "4/11/2024",
    "year": "2024"
  },
  {
    "number": "00475896",
    "subject": "2023.2: ERROR: [Hsi 55-1545] Problem running tcl command ::sw_mrmac::generate : can't read \"tx_serde...",
    "company": "Mercury Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "4/15/2024",
    "year": "2024"
  },
  {
    "number": "00476875",
    "subject": "Versal PTP IEEE1588 Mac",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "4/17/2024",
    "year": "2024"
  },
  {
    "number": "00480081",
    "subject": "IEEE1588 PTP TX timestamp FIFO empty",
    "company": "Mavenir Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "4/23/2024",
    "year": "2024"
  },
  {
    "number": "00481442",
    "subject": "AXI ENET driver mishandles device tree attribute",
    "company": "Designlinx Hardware Solutions, LLC",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "4/26/2024",
    "year": "2024"
  },
  {
    "number": "00482335",
    "subject": "Linux driver issue with MRMAC and GT PLL resource",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "4/29/2024",
    "year": "2024"
  },
  {
    "number": "00482689",
    "subject": "1G, 10G, 25G PTP TStamp doesn't have same clock domain",
    "company": "L3Harris",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "4/30/2024",
    "year": "2024"
  },
  {
    "number": "00482949",
    "subject": "MRMAC PLL lock not complete!",
    "company": "Designlinx Hardware Solutions, LLC",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "5/1/2024",
    "year": "2024"
  },
  {
    "number": "00483348",
    "subject": "Seeing spurious packets after 10G xilinx driver come up (Petalinux)",
    "company": "General Dynamics",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "5/2/2024",
    "year": "2024"
  },
  {
    "number": "00484560",
    "subject": "10Gb Ethernet submodule very slow performance over SFP connector on ZC706 dev. board",
    "company": "L3Harris",
    "priority": "High",
    "device": "Zynq-7000 Family",
    "date": "5/6/2024",
    "year": "2024"
  },
  {
    "number": "00485011",
    "subject": "AXI 1G/10G/25G Switching Ethernet capabilities",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "Kintex-UP Family",
    "date": "5/7/2024",
    "year": "2024"
  },
  {
    "number": "00485681",
    "subject": "Gigabit ethernet support",
    "company": "Sierra Nevada Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "5/8/2024",
    "year": "2024"
  },
  {
    "number": "00486023",
    "subject": "Data not getting transmitted nor received over ethernet link",
    "company": "Bae Systems Information and Electronic Systems Integration Inc.",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "5/9/2024",
    "year": "2024"
  },
  {
    "number": "00487725",
    "subject": "Ethernet 10G/25G IP intermittent hardware failures",
    "company": "Curtiss-Wright Defense Solutions",
    "priority": "High",
    "device": "Artix-UP Family",
    "date": "5/14/2024",
    "year": "2024"
  },
  {
    "number": "00490968",
    "subject": "Versal GEM 1588 TSU",
    "company": "BAE Systems",
    "priority": "High",
    "device": "VERSAL_AI_EDGE Family",
    "date": "5/22/2024",
    "year": "2024"
  },
  {
    "number": "00493367",
    "subject": "Unable to Disable PCS/PMA IP MDIO Management Interface on Versal",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "5/29/2024",
    "year": "2024"
  },
  {
    "number": "00495435",
    "subject": "1G TSN IP 802.1Qbv fails to separate ST and BE traffic",
    "company": "General Dynamics Land Systems - Canada Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/4/2024",
    "year": "2024"
  },
  {
    "number": "00498592",
    "subject": "1G/2.5G Ethernet PCS/PMA compatible 2.5G SFP+ transceiver module",
    "company": "Raytheon Technologies",
    "priority": "High",
    "device": "Kintex-UP Family",
    "date": "6/12/2024",
    "year": "2024"
  },
  {
    "number": "00499415",
    "subject": "Ethernet 10G/25G example design fails timing.",
    "company": "General Dynamics Mission Systems, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "6/14/2024",
    "year": "2024"
  },
  {
    "number": "00500178",
    "subject": "PTP IEEE-1588 ethernet",
    "company": "Lockheed",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/17/2024",
    "year": "2024"
  },
  {
    "number": "00501132",
    "subject": "Versal PTP IEEE1588 Mac (XCVC1902-2MSEVSVA2197)",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "6/19/2024",
    "year": "2024"
  },
  {
    "number": "00501234",
    "subject": "AXI 1G/2.5G Ethernet Subsystem IP PTP Support",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "6/19/2024",
    "year": "2024"
  },
  {
    "number": "00502735",
    "subject": "Zynq UltraScale+ PS GEM to Marvell PHY 88E1512 Failed to Negotiate",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/24/2024",
    "year": "2024"
  },
  {
    "number": "00503630",
    "subject": "vitis error creating bsp from xsa",
    "company": "NASA",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "6/26/2024",
    "year": "2024"
  },
  {
    "number": "00508084",
    "subject": "GMII-to-SGMII bridge - GMII_ISOLATE Register",
    "company": "L3Harris",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "7/9/2024",
    "year": "2024"
  },
  {
    "number": "00508975",
    "subject": "lwip echo server example : no route to host error when telnet",
    "company": "NASA",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "7/11/2024",
    "year": "2024"
  },
  {
    "number": "00510306",
    "subject": "gmii to rgmii broken with any release after 2022.2",
    "company": "AWS Elemental",
    "priority": "Urgent",
    "device": "VERSAL_PREMIUM Family",
    "date": "7/15/2024",
    "year": "2024"
  },
  {
    "number": "00510354",
    "subject": "Ethernet driver axienet does not detect link status is down - like PCS no longer able to blocklock",
    "company": "Mavenir",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "7/15/2024",
    "year": "2024"
  },
  {
    "number": "00510859",
    "subject": "AXI ENET driver clobbers MRMAC MTU Configuration Register when the interface is taken down.",
    "company": "Designlinx Hardware Solutions, LLC",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "7/16/2024",
    "year": "2024"
  },
  {
    "number": "00510923",
    "subject": "SGMII IP Simulation Speed-Up",
    "company": "Ciena Canada Inc",
    "priority": "High",
    "device": "KINTEX-7 Family",
    "date": "7/16/2024",
    "year": "2024"
  },
  {
    "number": "00513917",
    "subject": "Xilinx baremetal or SoC options for TCP/IP stack",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "7/24/2024",
    "year": "2024"
  },
  {
    "number": "00514523",
    "subject": "ESP_SpaceX_Starlink: Versal Tri-Mode Ethernet MAC LogiCORE IP Information",
    "company": "SpaceX",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "7/25/2024",
    "year": "2024"
  },
  {
    "number": "00514859",
    "subject": "device tree generator fails with - Failed to find amba_pl node",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "7/26/2024",
    "year": "2024"
  },
  {
    "number": "00517371",
    "subject": "Petalinux 2023.1 Kernel Panic using AXI Ethernet Device",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "7/31/2024",
    "year": "2024"
  },
  {
    "number": "00517860",
    "subject": "Using ORAN IP v2.3 Vivado 2022.1.1 - sometime when transmitting PTP delay_req packet we don't see ti...",
    "company": "Mavenir",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "8/1/2024",
    "year": "2024"
  },
  {
    "number": "00519103",
    "subject": "When booting from SD card having GT quad ref clk PLL locking error",
    "company": "Boeing",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "8/5/2024",
    "year": "2024"
  },
  {
    "number": "00519849",
    "subject": "unable to alloc pbuf in recv_handler for udp_perf_server example on kcu105 standalone",
    "company": "NASA",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "8/7/2024",
    "year": "2024"
  },
  {
    "number": "00520485",
    "subject": "Juniper - 7 Series MAC 1/10G link up/down debug",
    "company": "Juniper Networks",
    "priority": "High",
    "device": "KINTEX-7 Family",
    "date": "8/8/2024",
    "year": "2024"
  },
  {
    "number": "00520933",
    "subject": "Juniper - Kintex-7 GT DRP Questions",
    "company": "Juniper Networks",
    "priority": "High",
    "device": "KINTEX-7 Family",
    "date": "8/9/2024",
    "year": "2024"
  },
  {
    "number": "00521571",
    "subject": "AXI ENET driver MRMAC PLL Lock Polling",
    "company": "Designlinx Hardware Solutions, LLC",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "8/12/2024",
    "year": "2024"
  },
  {
    "number": "00523572",
    "subject": "Vitis 2023.2 and ZC706 examples - Ethernet issue",
    "company": "Spirent Communications of Eatontown LP",
    "priority": "High",
    "device": "Zynq-7000 Family",
    "date": "8/16/2024",
    "year": "2024"
  },
  {
    "number": "00524177",
    "subject": "PHY bring up and \"1G/2.5G Ethernet PCS/PMA or SGMII\" IP example on VCU118",
    "company": "BAE Systems inc",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "8/18/2024",
    "year": "2024"
  },
  {
    "number": "00524504",
    "subject": "ZC102: Gem 3 PTP communication axi read timesptam in seconds",
    "company": "Lockheed",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "8/19/2024",
    "year": "2024"
  },
  {
    "number": "00524549",
    "subject": "Generated example design file not matching specified option.",
    "company": "Matrox Graphics Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "8/19/2024",
    "year": "2024"
  },
  {
    "number": "00526472",
    "subject": "Reference Design for Versal w/10-25G Ethernet (at 10G) running Petalinux",
    "company": "Raytheon Company",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "8/23/2024",
    "year": "2024"
  },
  {
    "number": "00528860",
    "subject": "10/25G Ethernet Licenses",
    "company": "Northrop Grumman Corporation",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "8/29/2024",
    "year": "2024"
  },
  {
    "number": "00531767",
    "subject": "Can't see link up",
    "company": "GE Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/5/2024",
    "year": "2024"
  },
  {
    "number": "00533792",
    "subject": "Issues getting 4 1G Ethernet interfaces on a QSFP bank",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "9/10/2024",
    "year": "2024"
  },
  {
    "number": "00534064",
    "subject": "10G/25G ethernet IP - are customized configurations carried into the example design? Enable Timestam...",
    "company": "CommScope Inc",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "9/10/2024",
    "year": "2024"
  },
  {
    "number": "00534977",
    "subject": "Two independent xxv_ethernet instances in one quad",
    "company": "Abaco Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/12/2024",
    "year": "2024"
  },
  {
    "number": "00535389",
    "subject": "ESP_XACE Kernel MRMAC status registers read (petalinux)",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "9/13/2024",
    "year": "2024"
  },
  {
    "number": "00536476",
    "subject": "Versal MRMAC 2x50GAUI-1",
    "company": "Adtech, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/17/2024",
    "year": "2024"
  },
  {
    "number": "00537002",
    "subject": "Setting MRMAC port rates",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/18/2024",
    "year": "2024"
  },
  {
    "number": "00537540",
    "subject": "TSN IP Datasheet",
    "company": "Jet Propulsion Laboratory",
    "priority": "High",
    "device": "Versal_Alveo Family",
    "date": "9/19/2024",
    "year": "2024"
  },
  {
    "number": "00538022",
    "subject": "4 x 25 Ethernet Configuration",
    "company": "Grass Valley Usa, LLC",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "9/20/2024",
    "year": "2024"
  },
  {
    "number": "00539363",
    "subject": "Will reconfiguring DCMAC from 4x100 to 1x400 affect the other 2 ports running 1x100?",
    "company": "Xilinx, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/24/2024",
    "year": "2024"
  },
  {
    "number": "00539916",
    "subject": "10G/25G Ethernet device does not report link speed",
    "company": "FIDUS SYSTEMS INC",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/25/2024",
    "year": "2024"
  },
  {
    "number": "00540365",
    "subject": "KRIA TSN Demo issues and questions",
    "company": "Jet Propulsion Laboratory",
    "priority": "High",
    "device": "OTHER_BOARDS Family",
    "date": "9/26/2024",
    "year": "2024"
  },
  {
    "number": "00542867",
    "subject": "RE: EXT :RE: Issues getting 4 1G Ethernet interfaces on a QSFP bank C00533792",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": " ",
    "date": "10/3/2024",
    "year": "2024"
  },
  {
    "number": "00543847",
    "subject": "UltraScale Plus PS GEM interrupts questions",
    "company": "Pratt & Whitney Engine Services, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/7/2024",
    "year": "2024"
  },
  {
    "number": "00545068",
    "subject": "1G EMAC Example Design Link Issues",
    "company": "Northrop Grumman Space & Mission Systems Corp.",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "10/9/2024",
    "year": "2024"
  },
  {
    "number": "00545488",
    "subject": "GEM SGMII MAC to MAC configuration",
    "company": "BAE Systems",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/10/2024",
    "year": "2024"
  },
  {
    "number": "00547495",
    "subject": "US+ GTY AMI simulation not matching expected results",
    "company": "Hrl Laboratories, LLC",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "10/15/2024",
    "year": "2024"
  },
  {
    "number": "00548120",
    "subject": "MRMAC PTP Questions",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "10/16/2024",
    "year": "2024"
  },
  {
    "number": "00548176",
    "subject": "How to run fabric logic from recovered clock",
    "company": "LitePoint Corporation",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "10/16/2024",
    "year": "2024"
  },
  {
    "number": "00549072",
    "subject": "Data Transfer Rate too slow when MTU is above 880",
    "company": "KLA Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/18/2024",
    "year": "2024"
  },
  {
    "number": "00549137",
    "subject": "MACB issue with petalinux 2023.2",
    "company": "Qualcomm Technologies, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/18/2024",
    "year": "2024"
  },
  {
    "number": "00552010",
    "subject": "LWIP220 with Vitis Unified IDE does not appear to enable jumbo frames",
    "company": "NASA",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/25/2024",
    "year": "2024"
  },
  {
    "number": "00554087",
    "subject": "RE: device tree generator fails with - Failed to find amba_pl node C00514859",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": " ",
    "date": "10/30/2024",
    "year": "2024"
  },
  {
    "number": "00554094",
    "subject": "RE: device tree generator fails with - Failed to find amba_pl node C00514859",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": " ",
    "date": "10/30/2024",
    "year": "2024"
  },
  {
    "number": "00554866",
    "subject": "MRMAC Example Design PTP 1588 Timer and Syncer IP",
    "company": "General Dynamics Mission Systems, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "11/1/2024",
    "year": "2024"
  },
  {
    "number": "00554896",
    "subject": "Ethernet 1G/2.5G PCS/PMA not syncing with external PHY",
    "company": "Raytheon Company",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/1/2024",
    "year": "2024"
  },
  {
    "number": "00559389",
    "subject": "Questions about Timestamping in Series7 10G MAC",
    "company": "Ciena Canada Inc.",
    "priority": "High",
    "device": "KINTEX-7 Family",
    "date": "11/12/2024",
    "year": "2024"
  },
  {
    "number": "00559504",
    "subject": "DFE AGC Migrate to RF Gen 3 Issues",
    "company": "Sandia National Laboratories",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "11/12/2024",
    "year": "2024"
  },
  {
    "number": "00560425",
    "subject": "PTP Timestamps",
    "company": "General Dynamics Mission Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "11/14/2024",
    "year": "2024"
  },
  {
    "number": "00560538",
    "subject": "HiTechGlobal SGMII FMC to Alpha Data Board w/ Kintex UltraScale Connection",
    "company": "Northrop Grumman",
    "priority": "High",
    "device": "Kintex-UP Family",
    "date": "11/14/2024",
    "year": "2024"
  },
  {
    "number": "00562505",
    "subject": "IP connection",
    "company": "Raytheon Technologies",
    "priority": "High",
    "device": "VERSAL_HBM Family",
    "date": "11/19/2024",
    "year": "2024"
  },
  {
    "number": "00563019",
    "subject": "USXGMII IP with PTP 1588 enabled, is there a testbench with TOD clock?",
    "company": "Raytheon - McKinney",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "11/20/2024",
    "year": "2024"
  },
  {
    "number": "00563602",
    "subject": "Issues Establishing Point-to-Point Link Between Two MRMACs",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "11/21/2024",
    "year": "2024"
  },
  {
    "number": "00565352",
    "subject": "ESP Amazon_Kuiper: Ethernet drops packets",
    "company": "Amazon.com Services LLC",
    "priority": "Urgent",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/26/2024",
    "year": "2024"
  },
  {
    "number": "00567608",
    "subject": "ZC102 board: PTP-1588 through transceivers",
    "company": "Lockheed",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/2/2024",
    "year": "2024"
  },
  {
    "number": "00567662",
    "subject": "PTP 1588: 250 ns delay on scope vs 20 ns on terminal",
    "company": "Lockheed",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/2/2024",
    "year": "2024"
  },
  {
    "number": "00568152",
    "subject": "Re: PTP 1588: 250 ns delay on scope vs 20 ns on terminal C00567662",
    "company": " ",
    "priority": "Normal",
    "device": " ",
    "date": "12/3/2024",
    "year": "2024"
  },
  {
    "number": "00568778",
    "subject": "MRMAC device tree generated from SDT is missing properties.",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "12/4/2024",
    "year": "2024"
  },
  {
    "number": "00568789",
    "subject": "ZC102: SFP plug fiber optics issue",
    "company": "Lockheed",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/4/2024",
    "year": "2024"
  },
  {
    "number": "00568916",
    "subject": "10G KR device tree issues",
    "company": "Curtiss-Wright Defense Solutions",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "12/4/2024",
    "year": "2024"
  },
  {
    "number": "00569450",
    "subject": "Rx Alignment failure when configuring design with two MRMACs",
    "company": "Northrop Grumman Corporation (NGC)",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "12/5/2024",
    "year": "2024"
  },
  {
    "number": "00570479",
    "subject": "Eth XXV - Timer Syncer v2.0 Usage and Configuration",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/8/2024",
    "year": "2024"
  },
  {
    "number": "00573043",
    "subject": "Proper way to assign timing constraints for GEM TSU EMIO clocking when registering tsu_timer_cnt in ...",
    "company": "Vadatech Incorporated",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/13/2024",
    "year": "2024"
  },
  {
    "number": "00576144",
    "subject": "7-Series 2.5G PCS/PMA Reset Sync To Wrong Clock",
    "company": "Evertz Microsystems Ltd",
    "priority": "High",
    "device": "Zynq-7000 Family",
    "date": "12/20/2024",
    "year": "2024"
  },
  {
    "number": "00576164",
    "subject": "ZU+ PTP TSU clock and data to PL are not timed",
    "company": "Vadatech Incorporated",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/20/2024",
    "year": "2024"
  }
];