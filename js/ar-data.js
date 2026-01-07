// AR Data - Contributed Answer Records for Ethernet
const arData = [
    {
        number: "AR# 000035449",
        title: "2022.2/2023.1 Versal PetaLinux: DTG fails to build with MRMAC IP",
        description: "Device Tree Generator (DTG) build failures when using MRMAC IP in Versal designs with PetaLinux 2022.2/2023.1.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "DT", "PetaLinux"],
        link: ""
    },
    {
        number: "AR# 000035491",
        title: "QSGMII uses default GT REFCLK of 125MHz and is not configurable",
        description: "QSGMII configuration is locked to 125MHz GT reference clock with no option to configure alternative clock frequencies.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["PS-GEM", "Config", "QSGMII"],
        link: ""
    },
    {
        number: "AR# 000035618",
        title: "2019.2 Zynq UltraScale+ MPSoC: PetaLinux TSU-Related Clock Problem in GEM0",
        description: "Ethernet link issues at 100/10Mbps speeds due to TSU (Time Stamp Unit) related clock problems in GEM0.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["PS-GEM", "Driver", "Performance"],
        link: ""
    },
    {
        number: "AR# 000036029",
        title: "AXI 1G/2.5G Ethernet - 2.5G Issues in Versal",
        description: "Known issues and workarounds for 2.5G operation of AXI Ethernet Subsystem in Versal devices.",
        category: "AXI Ethernet",
        tags: ["AXI", "Versal", "Config"],
        link: ""
    },
    {
        number: "AR# 000036222",
        title: "2023.1: 1G/10G/25G Ethernet Subsystem: 32 Bit PCS only - Clause 37 AN Never Complete",
        description: "Auto-negotiation (Clause 37) fails to complete when using 32-bit PCS configuration in the Ethernet Subsystem.",
        category: "AXI Ethernet",
        tags: ["AXI", "Config", "Auto-Negotiation"],
        link: ""
    },
    {
        number: "AR# 000036260",
        title: "Disable WDT in 10G/25G Ethernet",
        description: "Instructions for disabling the Watchdog Timer (WDT) in 10G/25G Ethernet designs to prevent false timeouts.",
        category: "AXI Ethernet",
        tags: ["AXI", "Config", "Debug"],
        link: ""
    },
    {
        number: "AR# 000036449",
        title: "2023.2/2024.1 AXIENET Driver mishandles device-tree attribute: xlnx,addrwidth",
        description: "Linux AXIENET driver incorrectly processes the xlnx,addrwidth device tree attribute, causing DMA addressing issues.",
        category: "AXI Ethernet",
        tags: ["AXI", "Driver", "DT"],
        link: ""
    },
    {
        number: "AR# 000036641",
        title: "10G/25G High Speed Ethernet Subsystem - Example design fails timing in 2023.2/2024.1",
        description: "Timing closure failures in the provided example designs for 10G/25G High Speed Ethernet Subsystem.",
        category: "AXI Ethernet",
        tags: ["AXI", "Performance", "Timing"],
        link: ""
    },
    {
        number: "AR# 000036838",
        title: "202X.X: EmbeddedSW LwIP UDP Perf Server stuck in Windows iperf test",
        description: "LwIP UDP performance server hangs during iperf testing from Windows clients in embedded software designs.",
        category: "Software & Drivers",
        tags: ["Driver", "Performance", "Debug"],
        link: ""
    },
    {
        number: "AR# 000036847",
        title: "VCK190 Ethernet TRD does not use LPMODE in QSFP",
        description: "VCK190 Ethernet Target Reference Design missing LPMODE (Low Power Mode) control for QSFP modules.",
        category: "Reference Designs",
        tags: ["Config", "Hardware", "VCK190"],
        link: ""
    },
    {
        number: "AR# 000036943",
        title: "2024.1/2024.2: Versal MRMAC: Timing Arcs Disabled When Using Flex Interface",
        description: "Timing arcs are automatically disabled when using flexible interface mode in MRMAC and need manual re-enabling.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "Timing"],
        link: ""
    },
    {
        number: "AR# 000036973",
        title: "Part 1: Building a Versal MRMAC 4x25G Baremetal Ethernet Design",
        description: "Step-by-step guide for creating a baremetal Ethernet design using MRMAC with 4x25G configuration on Versal.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "Tutorial"],
        link: ""
    },
    {
        number: "AR# 000036974",
        title: "Part 2: Building a Versal MRMAC 4x25G Ethernet Design - Vivado HW Design",
        description: "Hardware design tutorial covering Vivado block design creation for MRMAC 4x25G Ethernet implementation.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "Tutorial"],
        link: ""
    },
    {
        number: "AR# 000037047",
        title: "Issue with dynamic rate switching on VCK190 Ethernet Target Reference Design - MRMAC",
        description: "Problems encountered when dynamically switching data rates in the VCK190 MRMAC Ethernet reference design.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "VCK190"],
        link: ""
    },
    {
        number: "AR# 000037069",
        title: "2023.2 PS-GTR GEM Connected to a Device with Auto-Negotiation Requires a Driver Patch",
        description: "Linux driver patch required when using PS-GTR with GEM interface connecting to devices with auto-negotiation enabled.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["PS-GEM", "Driver", "Auto-Negotiation"],
        link: ""
    },
    {
        number: "AR# 000037255",
        title: "Versal MRMAC 2023.1 and Prior - Design Issue due to Capped Number of GPIO pins",
        description: "GPIO pin limitations in MRMAC designs for Versal devices in 2023.1 and earlier versions causing design constraints.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "Hardware"],
        link: ""
    },
    {
        number: "AR# 000037256",
        title: "Part 3: Building a Versal MRMAC 4x25G Ethernet Design - PetaLinux",
        description: "PetaLinux configuration and build instructions for MRMAC 4x25G Ethernet design on Versal devices.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "PetaLinux", "Tutorial"],
        link: ""
    },
    {
        number: "AR# 000037257",
        title: "2024.2: Versal/UltraScale+: Modifying Device Tree Compatibility for MCDMA in Ethernet Designs",
        description: "Device tree modifications required for MCDMA compatibility in Versal and UltraScale+ Ethernet implementations.",
        category: "Software & Drivers",
        tags: ["DT", "Driver", "MCDMA"],
        link: ""
    },
    {
        number: "AR# 000037281",
        title: "AXI 2.5G Ethernet SGMII mode requires AN to be disabled manually",
        description: "Auto-negotiation must be manually disabled in device tree for proper operation of AXI 2.5G Ethernet in SGMII mode.",
        category: "AXI Ethernet",
        tags: ["AXI", "Config", "SGMII"],
        link: ""
    },
    {
        number: "AR# 000037561",
        title: "1G/2.5G Ethernet PCS/PMA has wrong clock for reclock_encommaalign",
        description: "Clock configuration error in PCS/PMA core affecting comma alignment functionality in 1G/2.5G Ethernet designs.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["Config", "Hardware", "PCS/PMA"],
        link: ""
    },
    {
        number: "AR# 000037638",
        title: "TFTP Failures in U-Boot with Certain Ethernet Cores",
        description: "TFTP file transfers fail in U-Boot when using specific Ethernet IP cores due to buffer management issues.",
        category: "Software & Drivers",
        tags: ["Driver", "U-Boot", "Debug"],
        link: ""
    },
    {
        number: "AR# 000037665",
        title: "U-Boot GEM MACB driver issues when using DPLL clock source",
        description: "GEM MACB driver in U-Boot has timing issues when configured to use DPLL as the clock source.",
        category: "Software & Drivers",
        tags: ["PS-GEM", "Driver", "U-Boot"],
        link: ""
    },
    {
        number: "AR# 000037910",
        title: "AXI 1G/2.5G Ethernet Subsystem - Vivado Example Design - Run in Versal HW",
        description: "Instructions for running the Vivado example design for AXI 1G/2.5G Ethernet Subsystem on Versal hardware.",
        category: "AXI Ethernet",
        tags: ["AXI", "Tutorial", "Versal"],
        link: ""
    },
    {
        number: "AR# 000038505",
        title: "MRMAC - Block lock issue in Linux",
        description: "MRMAC fails to achieve or maintain block lock in Linux due to reset sequence or configuration timing issues.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Driver", "Debug"],
        link: ""
    },
    {
        number: "AR# 000038506",
        title: "Ethernet - Using different subnets for multiple interfaces in Linux",
        description: "Configuration guide for setting up multiple Ethernet interfaces on different subnets in Linux environments.",
        category: "Software & Drivers",
        tags: ["Config", "Linux", "Network"],
        link: ""
    },
    {
        number: "AR# 000038548",
        title: "Versal MRMAC - How to Use Custom Number of Lanes in a System-Level Design",
        description: "Design guidelines for implementing MRMAC with non-standard lane configurations in Versal system designs.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "Tutorial"],
        link: ""
    },
    {
        number: "AR# 000038610",
        title: "Versal MRMAC with GTY Does Not Provide a Near-End PCS Loopback-Compatible Example Design",
        description: "Limitation in provided example designs - no near-end PCS loopback configuration available for MRMAC with GTY.",
        category: "MRMAC & DCMAC",
        tags: ["MRMAC", "Config", "GTY"],
        link: ""
    },
    {
        number: "AR# 000038625",
        title: "PetaLinux SDT Flow using XSCT",
        description: "Guide for using System Device Tree (SDT) flow in PetaLinux with XSCT (Xilinx Software Command-Line Tool).",
        category: "Software & Drivers",
        tags: ["PetaLinux", "DT", "Tutorial"],
        link: ""
    },
    {
        number: "AR# 000038645",
        title: "Linux-Compatible Ethernet: Reference Designs and Evaluation Board Details",
        description: "Comprehensive list of Linux-compatible Ethernet reference designs with supported evaluation boards and configurations.",
        category: "Reference Designs",
        tags: ["Config", "Linux", "Reference"],
        link: ""
    },
    {
        number: "AR# 000038666",
        title: "AXI_Ethernet_Buffer IP Patch to Resolve AXI_STR_RXD_VALID/LAST issue in 2020.2",
        description: "Patch for AXI Ethernet Buffer IP to fix stream valid/last signal timing issues in version 2020.2.",
        category: "AXI Ethernet",
        tags: ["AXI", "Driver", "Debug"],
        link: ""
    },
    {
        number: "AR# 000038805",
        title: "Ethernet - Support for 1000Base-KX",
        description: "Implementation details and support information for 1000Base-KX Ethernet standard on AMD devices.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["Config", "1000Base-KX", "Standard"],
        link: ""
    },
    {
        number: "AR# 000039394",
        title: "2023.2 VPK120 1x100G CAUI-4 DCMAC Reference Design: A DCMAC Survival Guide",
        description: "Complete guide for implementing and debugging 100G DCMAC design with CAUI-4 interface on VPK120 board.",
        category: "MRMAC & DCMAC",
        tags: ["DCMAC", "Tutorial", "VPK120"],
        link: ""
    },
    {
        number: "AR# 000039613",
        title: "2025.2 and prior - 1G/2.5G Ethernet PCS/PMA with PS-GEM running at 100M - Failure Due to Missing XDC",
        description: "Missing timing constraints (XDC) cause failures when running 1G/2.5G PCS/PMA with PS-GEM at 100Mbps speeds.",
        category: "PS-GEM & Low-Speed Ethernet",
        tags: ["PS-GEM", "Config", "PCS/PMA"],
        link: ""
    }
];
