const cases2023 = [
  {
    "number": "00310156",
    "subject": "ARM lock up issue",
    "company": "Aja Video Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "1/18/2023",
    "year": "2023"
  },
  {
    "number": "00325176",
    "subject": "Register description out of date?",
    "company": "Avellan Space Technology & Science LLC (AST)",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "2/27/2023",
    "year": "2023"
  },
  {
    "number": "00325395",
    "subject": "Ethernet auto negotiation",
    "company": "General Dynamics Corporation",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "2/27/2023",
    "year": "2023"
  },
  {
    "number": "00325396",
    "subject": "Ethernet auto negotiation",
    "company": "General Dynamics Corporation",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "2/27/2023",
    "year": "2023"
  },
  {
    "number": "00326321",
    "subject": "USXGMII stat_tx_local_fault doc bug",
    "company": "General Dynamics Canada Ltd",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "3/1/2023",
    "year": "2023"
  },
  {
    "number": "00331506",
    "subject": "AXI 1G/2.5G Ethernet Subsystem v7.1 - Setting Example Design to 100mbps?",
    "company": "General Dynamics Mission Systems, Inc.",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "3/15/2023",
    "year": "2023"
  },
  {
    "number": "00333712",
    "subject": "Issues with Ethernet communication on Spartan 7",
    "company": "Keysight Technologies, Inc.",
    "priority": "High",
    "device": "Spartan-7 Family",
    "date": "3/21/2023",
    "year": "2023"
  },
  {
    "number": "00338690",
    "subject": "Versal IBERT: ERROR: [BD 5-390] IP definition not found for VLNV: xilinx.com:ip:versal_cips:3.1",
    "company": "Advantest America, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "4/4/2023",
    "year": "2023"
  },
  {
    "number": "00340451",
    "subject": "Question on Versal PL PCIe PHY TX_DRIVE_MODE",
    "company": "Xilinx, Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "4/10/2023",
    "year": "2023"
  },
  {
    "number": "00342208",
    "subject": "DCMAC does not have an STAT_RX_ALIGNED outpu like the MRMAC",
    "company": "Pentek, Incorporated",
    "priority": "High",
    "device": "VERSAL_HBM Family",
    "date": "4/14/2023",
    "year": "2023"
  },
  {
    "number": "00342887",
    "subject": "ESP SpaceX_Starlink: MRMAC BIP error counters always report 0",
    "company": "Spacex",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "4/17/2023",
    "year": "2023"
  },
  {
    "number": "00343522",
    "subject": "ZCU111: 10Ge clocking issues",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "4/18/2023",
    "year": "2023"
  },
  {
    "number": "00343960",
    "subject": "ESP Amazon_Kuiper: Versal PS GEM ref design in 2022.1",
    "company": "Amazon.com Services LLC",
    "priority": "Urgent",
    "device": "VERSAL_PRIME Family",
    "date": "4/19/2023",
    "year": "2023"
  },
  {
    "number": "00345655",
    "subject": "Renesas - petalinux 2022.2: skb_panic from xaxienet_rx_poll",
    "company": "Renesas Electronics Canada Limited",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "4/25/2023",
    "year": "2023"
  },
  {
    "number": "00345711",
    "subject": "VCK190 ES MDIO using GEM0 EMIO + GEM1 MIO Ethernet",
    "company": "Lockheed Martin Corporation (LMCO)",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "4/25/2023",
    "year": "2023"
  },
  {
    "number": "00346619",
    "subject": "10G/25G subsystem with microblaze",
    "company": "Lockheed Martin Coherent Technologies, Inc.",
    "priority": "High",
    "device": "VIRTEX-U Family",
    "date": "4/27/2023",
    "year": "2023"
  },
  {
    "number": "00353862",
    "subject": "ZCU102-Ethernet PL Ethernet examples not working",
    "company": "Point Grey Research Inc",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "5/18/2023",
    "year": "2023"
  },
  {
    "number": "00354983",
    "subject": "Petalinux build failure with Versal MRMAC",
    "company": "General Dynamics Mission Systems, Inc.",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "5/22/2023",
    "year": "2023"
  },
  {
    "number": "00358038",
    "subject": "Tri-Mode Ethernet MAC LogiCORE IP Linux Driver",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VIRTEX-7 Family",
    "date": "5/31/2023",
    "year": "2023"
  },
  {
    "number": "00359685",
    "subject": "ZCU102 10G Ethernet TRD: Block Lock issue",
    "company": "General Dynamics Mission Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/5/2023",
    "year": "2023"
  },
  {
    "number": "00363290",
    "subject": "Write Bitstream Error after enabling Auto Negotiation on Ethernet IP w/Vivado 2022.1",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/15/2023",
    "year": "2023"
  },
  {
    "number": "00363328",
    "subject": "Ethernet does not run after loading another image from RAM",
    "company": "Northrop Grumman Space & Mission Systems Corp.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/15/2023",
    "year": "2023"
  },
  {
    "number": "00363389",
    "subject": "unable to attain board communication",
    "company": "Raytheon",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "6/15/2023",
    "year": "2023"
  },
  {
    "number": "00363689",
    "subject": "GD has questions about 10/25 G Ethernet Subsystem",
    "company": "General Dynamics Mission Systems, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "6/16/2023",
    "year": "2023"
  },
  {
    "number": "00364337",
    "subject": "Versal GEM clock source",
    "company": "Fidus Systems Inc",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "6/19/2023",
    "year": "2023"
  },
  {
    "number": "00370344",
    "subject": "MDIO Bus Rate",
    "company": "BAE SYSTEMS PLC",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "7/11/2023",
    "year": "2023"
  },
  {
    "number": "00371931",
    "subject": "Versal PS GEM0 EMIO with GMII-RGMII IP with External Marvell PHY",
    "company": "Synopsys, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "7/14/2023",
    "year": "2023"
  },
  {
    "number": "00374581",
    "subject": "Zynq7020-2 GEM1 Interface lock-up issue",
    "company": "Honeywell Process Solutions",
    "priority": "High",
    "device": "Zynq-7000 Family",
    "date": "7/20/2023",
    "year": "2023"
  },
  {
    "number": "00374586",
    "subject": "VCK190 DEV kit GTY 200 REFCLK connection issue",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "7/20/2023",
    "year": "2023"
  },
  {
    "number": "00376278",
    "subject": "Zynq MPSoC + PetaLinux MDIO support",
    "company": "Raytheon - McKinney",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "7/25/2023",
    "year": "2023"
  },
  {
    "number": "00377710",
    "subject": "US+ 10GbE Far End Loopback Issue",
    "company": "Raytheon - McKinney",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "7/28/2023",
    "year": "2023"
  },
  {
    "number": "00377781",
    "subject": "Ethernet \"BOARD_INTERFACE\" significance",
    "company": "Tesla Motors Inc",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "7/28/2023",
    "year": "2023"
  },
  {
    "number": "00377801",
    "subject": "MRMAC AXIS clocking rates and data width conversion.",
    "company": "Northrop Grumman Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "7/28/2023",
    "year": "2023"
  },
  {
    "number": "00382777",
    "subject": "CMAC 1588v2 Timestamping questions",
    "company": "Qualcomm Technologies Inc",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "8/9/2023",
    "year": "2023"
  },
  {
    "number": "00383175",
    "subject": "MRMAC FEC Only Unable to be Configured for GTM + PAM4",
    "company": "Woodward McCoach, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "8/10/2023",
    "year": "2023"
  },
  {
    "number": "00384337",
    "subject": "Need VCK190 Ethernet example design",
    "company": "Harris Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "8/14/2023",
    "year": "2023"
  },
  {
    "number": "00384346",
    "subject": "Versal DCMAC AXI4-lite bus read timeout hang",
    "company": "Keysight Technologies Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "8/14/2023",
    "year": "2023"
  },
  {
    "number": "00385151",
    "subject": "100M operation of gig_ethernet_pcs_pma",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "8/16/2023",
    "year": "2023"
  },
  {
    "number": "00385220",
    "subject": "How to interface with Segmented AXI4 Stream Interfaces?",
    "company": "Seakr Engineering, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "8/16/2023",
    "year": "2023"
  },
  {
    "number": "00387126",
    "subject": "USXGMII support on Versal VCK190 eval board",
    "company": "Vadatech Incorporated",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "8/21/2023",
    "year": "2023"
  },
  {
    "number": "00388719",
    "subject": "ESP Amazon_Kuiper: Ethernet Bringup in uboot/initramfs for embedded Linux application running on Xil...",
    "company": "Amazon",
    "priority": "Urgent",
    "device": "VERSAL_PRIME Family",
    "date": "8/24/2023",
    "year": "2023"
  },
  {
    "number": "00392027",
    "subject": "Requesting documentation for registers in MCAP VSEC",
    "company": "National Instruments",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/1/2023",
    "year": "2023"
  },
  {
    "number": "00393334",
    "subject": "1G/10G/25G Switching Ethernet Subsystem",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/5/2023",
    "year": "2023"
  },
  {
    "number": "00393437",
    "subject": "10G/25G Ethernet Subsystem with AXI DMA IP",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/5/2023",
    "year": "2023"
  },
  {
    "number": "00394425",
    "subject": "1G/2.5G Ethernet PCS/PMA or SGMII (16.2) IP and MDIO interface.",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/7/2023",
    "year": "2023"
  },
  {
    "number": "00396724",
    "subject": "Ethernet MDIO connections",
    "company": "Xilinx, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/13/2023",
    "year": "2023"
  },
  {
    "number": "00398834",
    "subject": "1G/2.5G Ethernet PCS/PMA or SGMII IP transceiver PLL not locked",
    "company": "Ciena Corporation",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "9/19/2023",
    "year": "2023"
  },
  {
    "number": "00399576",
    "subject": "10G/25G High Speed Ethernet Subsystem does not bring out gt_loopback_in*/gt_loopback_out* ports",
    "company": "Woodward Mccoach, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/21/2023",
    "year": "2023"
  },
  {
    "number": "00399992",
    "subject": "Deterministic Assignment of Ethernet Interfaces for AXI Ethernet Driver",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/22/2023",
    "year": "2023"
  },
  {
    "number": "00399993",
    "subject": "Deterministic Assignment of Ethernet Interfaces for AXI Ethernet Driver",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "9/22/2023",
    "year": "2023"
  },
  {
    "number": "00400121",
    "subject": "Interlaken 600G Lane Decommissioning",
    "company": "Boeing Satellite Systems International, Inc.",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "9/22/2023",
    "year": "2023"
  },
  {
    "number": "00402640",
    "subject": "dcmac IP for 100G Ethernet, CAUIx4 interface question",
    "company": "Tesla, Inc.",
    "priority": "High",
    "device": "VERSAL_HBM Family",
    "date": "9/28/2023",
    "year": "2023"
  },
  {
    "number": "00404770",
    "subject": "SEL : Ultrascale+ GEM lack of synchronization between TxGO and TxComplete",
    "company": "SEL",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/4/2023",
    "year": "2023"
  },
  {
    "number": "00404798",
    "subject": "Ciena 800G Ethernet PCS IP - certain builds fail to align",
    "company": "Ciena Corporation",
    "priority": "Urgent",
    "device": "VERSAL_PREMIUM Family",
    "date": "10/4/2023",
    "year": "2023"
  },
  {
    "number": "00406231",
    "subject": "does 1G/10G/25G/ switching ethernet system support auto-negotiation for 1000Base-X mode?",
    "company": "Xilinx, Inc",
    "priority": "High",
    "device": "Artix-UP Family",
    "date": "10/8/2023",
    "year": "2023"
  },
  {
    "number": "00407774",
    "subject": "Ethernet 400g IP packet errors",
    "company": "F5 Networks, Inc.",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "10/11/2023",
    "year": "2023"
  },
  {
    "number": "00408130",
    "subject": "U-Boot hangs in gmii2rgmii driver",
    "company": "BAE Systems Inc",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/12/2023",
    "year": "2023"
  },
  {
    "number": "00408294",
    "subject": "Versal AXI ethernet 2500base-x will not work",
    "company": "Lockheed Martin",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "10/12/2023",
    "year": "2023"
  },
  {
    "number": "00409634",
    "subject": "Problem with tx_local_fault on shipping product",
    "company": "Cerebras Systems",
    "priority": "High",
    "device": "VIRTEX-UP Family",
    "date": "10/16/2023",
    "year": "2023"
  },
  {
    "number": "00410057",
    "subject": "Need to set ethernet mac address from EEPROM that is not connected to I2C bus",
    "company": "Teradyne, Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "10/17/2023",
    "year": "2023"
  },
  {
    "number": "00411196",
    "subject": "AXI Ethernet Subsystem PLL Configuration Options",
    "company": "Lockheed Martin Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "10/19/2023",
    "year": "2023"
  },
  {
    "number": "00414191",
    "subject": "AXIENET Kernel Crash on Dual ETH MAC System",
    "company": "Jabil, Inc",
    "priority": "High",
    "device": "Zynq-UP-RFSoC Family",
    "date": "10/27/2023",
    "year": "2023"
  },
  {
    "number": "00416280",
    "subject": "Trouble Running VPK180 MRMAC Example Design",
    "company": "Annapolis Micro Systems",
    "priority": "High",
    "device": "VERSAL_PREMIUM Family",
    "date": "11/2/2023",
    "year": "2023"
  },
  {
    "number": "00417455",
    "subject": "Bring up 2 x Ethernet Interface using 10/25G AXI Ethernet MAC + MCDMA",
    "company": "Mavenir Systems, Inc.",
    "priority": "Urgent",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/6/2023",
    "year": "2023"
  },
  {
    "number": "00417568",
    "subject": "ESP SpaceX_Starlink: SGMII Bridge (PG047) Intermittent Failure on Powerup",
    "company": "SPACE EXPLORATION TECHNOLOGIES CORP.",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "11/6/2023",
    "year": "2023"
  },
  {
    "number": "00417897",
    "subject": "UltraScale+ Devices Integrated 100G Ethernet Subsystem Debugging",
    "company": "Collins Aerospace",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/7/2023",
    "year": "2023"
  },
  {
    "number": "00419903",
    "subject": "ESP_XACE MRMAC setup issue",
    "company": "Northrop Grumman Systems Corporation",
    "priority": "High",
    "device": "VERSAL_AI_CORE Family",
    "date": "11/13/2023",
    "year": "2023"
  },
  {
    "number": "00421202",
    "subject": "Does Versal HDIO support 3.3V RGMII",
    "company": "General Dynamics Corporation",
    "priority": "High",
    "device": "VERSAL_PRIME Family",
    "date": "11/16/2023",
    "year": "2023"
  },
  {
    "number": "00422449",
    "subject": "Ethernet in u-boot",
    "company": "Mavenir Systems, Inc.",
    "priority": "Urgent",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/20/2023",
    "year": "2023"
  },
  {
    "number": "00422563",
    "subject": "Kintex ultrascale kcu105 Ethernet Example",
    "company": "LLNL",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "11/20/2023",
    "year": "2023"
  },
  {
    "number": "00422941",
    "subject": "ESP Amazon_Kuiper: 2500 speed doesn't show up in the ethtool supported speed",
    "company": "Amazon Corporate LLC",
    "priority": "Urgent",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/21/2023",
    "year": "2023"
  },
  {
    "number": "00422988",
    "subject": "Ethernet",
    "company": "LLNL",
    "priority": "High",
    "device": "KINTEX-U Family",
    "date": "11/21/2023",
    "year": "2023"
  },
  {
    "number": "00425161",
    "subject": "10G Ethernet Driver Questions",
    "company": "Viavi Solutions Inc.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "11/27/2023",
    "year": "2023"
  },
  {
    "number": "00425468",
    "subject": "dual rate 1G/2.5G GTY using RPLL",
    "company": "Ciena Canada Inc.",
    "priority": "Urgent",
    "device": "VERSAL_PRIME Family",
    "date": "11/28/2023",
    "year": "2023"
  },
  {
    "number": "00431181",
    "subject": "\"AXI 1G Ethernet\" core's MDIO read data register (0x0000050C) sometime returns wrong Link Status",
    "company": "Curtiss-Wright Corporation",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/12/2023",
    "year": "2023"
  },
  {
    "number": "00432544",
    "subject": "Zynq UltraScale+ GEM EMIO PetaLinux Issue",
    "company": "BARCO,INC.",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/15/2023",
    "year": "2023"
  },
  {
    "number": "00434191",
    "subject": "SEL : Ultrascale+ GEM lack of synchronization between TxGO and TxComplete (REOPEN)",
    "company": "SEL",
    "priority": "High",
    "device": "Zynq-UP-MPSoC Family",
    "date": "12/20/2023",
    "year": "2023"
  }
];