const data = [
        // {
        //   firstName: "John",
        //   lastName: "Appletree",
        //   grade: 12
        // },
        // {
        //   firstName: "Mighty",
        //   lastName: "Peachtree",
        //   grade: 10
        // },
        // {
        //   firstName: "Kim",
        //   lastName: "Appletree",
        //   grade: 11
        // },
        // {
        //   firstName: "Shooter",
        //   lastName: "Appletree",
        //   grade: 12
        // },
        // {
        //   firstName: "Gigi",
        //   lastName: "Matracucu",
        //   grade: 9
        // },
        // {
        //   firstName: "Mitica",
        //   lastName: "Curescu",
        //   grade: 6
        // },
        // {
        //   firstName: "Alban",
        //   lastName: "Doctor",
        //   grade: 5
        // },
        // {
        //   firstName: "Cocalaru",
        //   lastName: "Zenit",
        //   grade: 8
        // }
      

    {"CountryName":"Aruba","CountryCode":"ABW","GNI":280},
    {"CountryName":"Afghanistan","CountryCode":"ABW","GNI":280},
    {"CountryName":"Angola","CountryCode":"AGO","GNI":280},
    {"CountryName":"Albania","CountryCode":"ALB","GNI":4320},
    {"CountryName":"Arab World","CountryCode":"ARB","GNI":280},
    {"CountryName":"United Arab Emirates","CountryCode":"ARE","GNI":39130},
      //   {"CountryName":"Argentina","CountryCode":"ARG","GNI":13030},{"CountryName":"Armenia","CountryCode":"ARM","GNI":3990},{"CountryName":"American Samoa","CountryCode":"ASM","GNI":280},
      //   {"CountryName":"Antigua and Barbuda","CountryCode":"ATG","GNI":13810},{"CountryName":"Australia","CountryCode":"AUS","GNI":51360},
      //   {"CountryName":"Austria","CountryCode":"AUT","GNI":45440},{"CountryName":"Azerbaijan","CountryCode":"AZE","GNI":4080},{"CountryName":"Burundi","CountryCode":"BDI","GNI":280},
      //   {"CountryName":"Belgium","CountryCode":"BEL","GNI":41790},{"CountryName":"Benin","CountryCode":"BEN","GNI":800},{"CountryName":"Burkina Faso","CountryCode":"BFA","GNI":590},
      //   {"CountryName":"Bangladesh","CountryCode":"BGD","GNI":1470},{"CountryName":"Bulgaria","CountryCode":"BGR","GNI":7860},{"CountryName":"Bahrain","CountryCode":"BHR","GNI":21150},
      //   {"CountryName":"Bosnia and Herzegovina","CountryCode":"BIH","GNI":4910},{"CountryName":"Belarus","CountryCode":"BLR","GNI":5280},
      //  {"CountryName":"Belize","CountryCode":"BLZ","GNI":4390},{"CountryName":"Bolivia","CountryCode":"BOL","GNI":3130},{"CountryName":"Brazil","CountryCode":"BRA","GNI":8600},
      //   {"CountryName":"Barbados","CountryCode":"BRB","GNI":15270},{"CountryName":"Brunei Darussalam","CountryCode":"BRN","GNI":29600},
      //   {"CountryName":"Bhutan","CountryCode":"BTN","GNI":2660},{"CountryName":"Botswana","CountryCode":"BWA","GNI":6730},
      //   {"CountryName":"Central African Republic","CountryCode":"CAF","GNI":390},{"CountryName":"Canada","CountryCode":"CAN","GNI":42870},
      //   {"CountryName":"Central Europe and the Baltics","CountryCode":"CEB","GNI":13009},{"CountryName":"Switzerland","CountryCode":"CHE","GNI":80560},
      //   {"CountryName":"Chile","CountryCode":"CHL","GNI":13610},{"CountryName":"China","CountryCode":"CHN","GNI":8690},{"CountryName":"Cote d'Ivoire","CountryCode":"CIV","GNI":1580},
      //   {"CountryName":"Cameroon","CountryCode":"CMR","GNI":1370},{"CountryName":"Colombia","CountryCode":"COL","GNI":5890},{"CountryName":"Comoros","CountryCode":"COM","GNI":1280},
      //   {"CountryName":"Cabo Verde","CountryCode":"CPV","GNI":3030},{"CountryName":"Costa Rica","CountryCode":"CRI","GNI":11120},
      //   {"CountryName":"Caribbean small states","CountryCode":"CSS","GNI":8909},{"CountryName":"Cyprus","CountryCode":"CYP","GNI":23720},
      //   {"CountryName":"Czech Republic","CountryCode":"CZE","GNI":18160},{"CountryName":"Germany","CountryCode":"DEU","GNI":43490},
      //   {"CountryName":"Djibouti","CountryCode":"DJI","GNI":1880},{"CountryName":"Dominica","CountryCode":"DMA","GNI":6590},{"CountryName":"Denmark","CountryCode":"DNK","GNI":55220},
      //   {"CountryName":"Dominican Republic","CountryCode":"DOM","GNI":6630},{"CountryName":"Algeria","CountryCode":"DZA","GNI":3940},
      //   {"CountryName":"East Asia & Pacific (excluding high income)","CountryCode":"EAP","GNI":6987},{"CountryName":"Early-demographic dividend","CountryCode":"EAR","GNI":3352},
      //   {"CountryName":"East Asia & Pacific","CountryCode":"EAS","GNI":10171},{"CountryName":"Europe & Central Asia (excluding high income)","CountryCode":"ECA","GNI":7375},
      //   {"CountryName":"Europe & Central Asia","CountryCode":"ECS","GNI":22656},{"CountryName":"Ecuador","CountryCode":"ECU","GNI":5920},
      //   {"CountryName":"Euro area","CountryCode":"EMU","GNI":35645},{"CountryName":"Spain","CountryCode":"ESP","GNI":27180},{"CountryName":"Estonia","CountryCode":"EST","GNI":18190},
      //   {"CountryName":"Ethiopia","CountryCode":"ETH","GNI":740},{"CountryName":"European Union","CountryCode":"EUU","GNI":32784},
      //   {"CountryName":"Fragile and conflict affected situations","CountryCode":"FCS","GNI":1510},{"CountryName":"Finland","CountryCode":"FIN","GNI":44580},
      //   {"CountryName":"Fiji","CountryCode":"FJI","GNI":4970},{"CountryName":"France","CountryCode":"FRA","GNI":37970},{"CountryName":"Gabon","CountryCode":"GAB","GNI":6650},
      //   {"CountryName":"United Kingdom","CountryCode":"GBR","GNI":40530},{"CountryName":"Georgia","CountryCode":"GEO","GNI":3780},{"CountryName":"Ghana","CountryCode":"GHA","GNI":1880},
      //   {"CountryName":"Guinea","CountryCode":"GIN","GNI":790},{"CountryName":"Guinea-Bissau","CountryCode":"GNB","GNI":660},
      //   {"CountryName":"Equatorial Guinea","CountryCode":"GNQ","GNI":7050},{"CountryName":"Greece","CountryCode":"GRC","GNI":18090},
      //   {"CountryName":"Grenada","CountryCode":"GRD","GNI":9180},{"CountryName":"Guatemala","CountryCode":"GTM","GNI":4060},{"CountryName":"Guyana","CountryCode":"GUY","GNI":4500},
      //   {"CountryName":"High income","CountryCode":"HIC","GNI":40142},{"CountryName":"Honduras","CountryCode":"HND","GNI":2250},{"CountryName":"Heavily indebted poor countries (HIPC)","CountryCode":"HPC","GNI":904},{"CountryName":"Croatia","CountryCode":"HRV","GNI":12570},{"CountryName":"Haiti","CountryCode":"HTI","GNI":760},{"CountryName":"Hungary","CountryCode":"HUN","GNI":12870},{"CountryName":"IBRD only","CountryCode":"IBD","GNI":5745},{"CountryName":"IDA & IBRD total","CountryCode":"IBT","GNI":4620},{"CountryName":"IDA total","CountryCode":"IDA","GNI":1313},{"CountryName":"IDA blend","CountryCode":"IDB","GNI":1791},
      //   {"CountryName":"Indonesia","CountryCode":"IDN","GNI":3540},{"CountryName":"IDA only","CountryCode":"IDX","GNI":1074},{"CountryName":"India","CountryCode":"IND","GNI":1800},{"CountryName":"Ireland","CountryCode":"IRL","GNI":55290},{"CountryName":"Iraq","CountryCode":"IRQ","GNI":4630},{"CountryName":"Iceland","CountryCode":"ISL","GNI":60830},{"CountryName":"Israel","CountryCode":"ISR","GNI":37270},{"CountryName":"Italy","CountryCode":"ITA","GNI":31020},{"CountryName":"Jamaica","CountryCode":"JAM","GNI":4760},{"CountryName":"Jordan","CountryCode":"JOR","GNI":3980},{"CountryName":"Japan","CountryCode":"JPN","GNI":38550},{"CountryName":"Kazakhstan","CountryCode":"KAZ","GNI":7970},{"CountryName":"Kenya","CountryCode":"KEN","GNI":1460},{"CountryName":"Kyrgyz Republic","CountryCode":"KGZ","GNI":1130},
      //   {"CountryName":"Cambodia","CountryCode":"KHM","GNI":1230},{"CountryName":"Kiribati","CountryCode":"KIR","GNI":3010},{"CountryName":"St. Kitts and Nevis","CountryCode":"KNA","GNI":16240},{"CountryName":"Kuwait","CountryCode":"KWT","GNI":31430},{"CountryName":"Latin America & Caribbean (excluding high income)","CountryCode":"LAC","GNI":7470},{"CountryName":"Lao PDR","CountryCode":"LAO","GNI":2270},{"CountryName":"Lebanon","CountryCode":"LBN","GNI":8400},{"CountryName":"Liberia","CountryCode":"LBR","GNI":620},{"CountryName":"Libya","CountryCode":"LBY","GNI":5500},{"CountryName":"St. Lucia","CountryCode":"LCA","GNI":8830},{"CountryName":"Latin America & Caribbean","CountryCode":"LCN","GNI":8251},{"CountryName":"Least developed countries: UN classification","CountryCode":"LDC","GNI":1011},{"CountryName":"Low income","CountryCode":"LIC","GNI":774},{"CountryName":"Sri Lanka","CountryCode":"LKA","GNI":3850},{"CountryName":"Lower middle income","CountryCode":"LMC","GNI":2118},{"CountryName":"Low & middle income","CountryCode":"LMY","GNI":4455},{"CountryName":"Lesotho","CountryCode":"LSO","GNI":1210},{"CountryName":"Late-demographic dividend","CountryCode":"LTE","GNI":8518},{"CountryName":"Lithuania","CountryCode":"LTU","GNI":15200},{"CountryName":"Luxembourg","CountryCode":"LUX","GNI":70260},{"CountryName":"Latvia","CountryCode":"LVA","GNI":14740},{"CountryName":"Morocco","CountryCode":"MAR","GNI":2860},{"CountryName":"Moldova","CountryCode":"MDA","GNI":2200},{"CountryName":"Madagascar","CountryCode":"MDG","GNI":400},{"CountryName":"Maldives","CountryCode":"MDV","GNI":9760},
      //   {"CountryName":"Middle East & North Africa","CountryCode":"MEA","GNI":7236},{"CountryName":"Mexico","CountryCode":"MEX","GNI":8610},{"CountryName":"Marshall Islands","CountryCode":"MHL","GNI":4840},{"CountryName":"Middle income","CountryCode":"MIC","GNI":4942},{"CountryName":"Mali","CountryCode":"MLI","GNI":770},
      //   {"CountryName":"Malta","CountryCode":"MLT","GNI":24080},{"CountryName":"Myanmar","CountryCode":"MMR","GNI":1210},{"CountryName":"Middle East & North Africa (excluding high income)","CountryCode":"MNA","GNI":3832},{"CountryName":"Montenegro","CountryCode":"MNE","GNI":7400},{"CountryName":"Mongolia","CountryCode":"MNG","GNI":3270},{"CountryName":"Mozambique","CountryCode":"MOZ","GNI":420},{"CountryName":"Mauritania","CountryCode":"MRT","GNI":1100},{"CountryName":"Mauritius","CountryCode":"MUS","GNI":10130},{"CountryName":"Malawi","CountryCode":"MWI","GNI":320},{"CountryName":"Malaysia","CountryCode":"MYS","GNI":9650},{"CountryName":"North America","CountryCode":"NAC","GNI":56721},{"CountryName":"Namibia","CountryCode":"NAM","GNI":4570},{"CountryName":"Niger","CountryCode":"NER","GNI":360},{"CountryName":"Nigeria","CountryCode":"NGA","GNI":2100},
      //   {"CountryName":"Nicaragua","CountryCode":"NIC","GNI":2130},{"CountryName":"Netherlands","CountryCode":"NLD","GNI":46180},{"CountryName":"Norway","CountryCode":"NOR","GNI":75990},{"CountryName":"Nepal","CountryCode":"NPL","GNI":800},{"CountryName":"Nauru","CountryCode":"NRU","GNI":10220},{"CountryName":"New Zealand","CountryCode":"NZL","GNI":38970},{"CountryName":"OECD members","CountryCode":"OED","GNI":37273},{"CountryName":"Oman","CountryCode":"OMN","GNI":14440},{"CountryName":"Other small states","CountryCode":"OSS","GNI":12199},{"CountryName":"Pakistan","CountryCode":"PAK","GNI":1580},{"CountryName":"Panama","CountryCode":"PAN","GNI":13280},{"CountryName":"Peru","CountryCode":"PER","GNI":5960},{"CountryName":"Philippines","CountryCode":"PHL","GNI":3660},{"CountryName":"Palau","CountryCode":"PLW","GNI":12700},{"CountryName":"Papua New Guinea","CountryCode":"PNG","GNI":2340},{"CountryName":"Poland","CountryCode":"POL","GNI":12730},{"CountryName":"Pre-demographic dividend","CountryCode":"PRE","GNI":1379},{"CountryName":"Portugal","CountryCode":"PRT","GNI":19820},{"CountryName":"Paraguay","CountryCode":"PRY","GNI":5470},{"CountryName":"West Bank and Gaza","CountryCode":"PSE","GNI":3180},{"CountryName":"Pacific island small states","CountryCode":"PSS","GNI":3793},{"CountryName":"Post-demographic dividend","CountryCode":"PST","GNI":41609},{"CountryName":"Qatar","CountryCode":"QAT","GNI":60510},{"CountryName":"Romania","CountryCode":"ROU","GNI":10000},{"CountryName":"Russian Federation","CountryCode":"RUS","GNI":9230},{"CountryName":"Rwanda","CountryCode":"RWA","GNI":720},{"CountryName":"South Asia","CountryCode":"SAS","GNI":1729},{"CountryName":"Saudi Arabia","CountryCode":"SAU","GNI":20090},{"CountryName":"Sudan","CountryCode":"SDN","GNI":2380},{"CountryName":"Senegal","CountryCode":"SEN","GNI":1240},{"CountryName":"Singapore","CountryCode":"SGP","GNI":54530},{"CountryName":"Solomon Islands","CountryCode":"SLB","GNI":1920},{"CountryName":"Sierra Leone","CountryCode":"SLE","GNI":510},{"CountryName":"El Salvador","CountryCode":"SLV","GNI":3560},{"CountryName":"Serbia","CountryCode":"SRB","GNI":5180},{"CountryName":"Sub-Saharan Africa (excluding high income)","CountryCode":"SSA","GNI":1485},{"CountryName":"Sub-Saharan Africa","CountryCode":"SSF","GNI":1486},{"CountryName":"Small states","CountryCode":"SST","GNI":11099},{"CountryName":"Sao Tome and Principe","CountryCode":"STP","GNI":1770},{"CountryName":"Suriname","CountryCode":"SUR","GNI":5150},{"CountryName":"Slovak Republic","CountryCode":"SVK","GNI":16610},{"CountryName":"Slovenia","CountryCode":"SVN","GNI":22000},{"CountryName":"Sweden","CountryCode":"SWE","GNI":52590},{"CountryName":"Eswatini","CountryCode":"SWZ","GNI":2950},{"CountryName":"Seychelles","CountryCode":"SYC","GNI":14170},{"CountryName":"Chad","CountryCode":"TCD","GNI":640},{"CountryName":"East Asia & Pacific (IDA & IBRD countries)","CountryCode":"TEA","GNI":7061},
      //   {"CountryName":"Europe & Central Asia (IDA & IBRD countries)","CountryCode":"TEC","GNI":7866},{"CountryName":"Togo","CountryCode":"TGO","GNI":610},{"CountryName":"Thailand","CountryCode":"THA","GNI":5950},{"CountryName":"Tajikistan","CountryCode":"TJK","GNI":990},{"CountryName":"Turkmenistan","CountryCode":"TKM","GNI":6380},{"CountryName":"Latin America & the Caribbean (IDA & IBRD countries)","CountryCode":"TLA","GNI":8179},{"CountryName":"Timor-Leste","CountryCode":"TLS","GNI":1790},{"CountryName":"Middle East & North Africa (IDA & IBRD countries)","CountryCode":"TMN","GNI":3839},{"CountryName":"Tonga","CountryCode":"TON","GNI":4010},{"CountryName":"South Asia (IDA & IBRD)","CountryCode":"TSA","GNI":1729},
      //   {"CountryName":"Sub-Saharan Africa (IDA & IBRD countries)","CountryCode":"TSS","GNI":1486},{"CountryName":"Trinidad and Tobago","CountryCode":"TTO","GNI":15340},{"CountryName":"Tunisia","CountryCode":"TUN","GNI":3490},{"CountryName":"Turkey","CountryCode":"TUR","GNI":10940},{"CountryName":"Tuvalu","CountryCode":"TUV","GNI":4970},{"CountryName":"Tanzania","CountryCode":"TZA","GNI":910},{"CountryName":"Uganda","CountryCode":"UGA","GNI":600},{"CountryName":"Ukraine","CountryCode":"UKR","GNI":2390},{"CountryName":"Upper middle income","CountryCode":"UMC","GNI":8197},{"CountryName":"Uruguay","CountryCode":"URY","GNI":15250},{"CountryName":"United States","CountryCode":"USA","GNI":58270},{"CountryName":"Uzbekistan","CountryCode":"UZB","GNI":2000},{"CountryName":"St. Vincent and the Grenadines","CountryCode":"VCT","GNI":7390},{"CountryName":"Vietnam","CountryCode":"VNM","GNI":2160},{"CountryName":"Vanuatu","CountryCode":"VUT","GNI":2920},{"CountryName":"World","CountryCode":"WLD","GNI":10371},{"CountryName":"Samoa","CountryCode":"WSM","GNI":4090},{"CountryName":"Kosovo","CountryCode":"XKX","GNI":3900},
      //   {"CountryName":"South Africa","CountryCode":"ZAF","GNI":5430},{"CountryName":"Zambia","CountryCode":"ZMB","GNI":1290},{"CountryName":"Zimbabwe","CountryCode":"ZWE","GNI":1170},
      //   {"CountryName":"Zimbabwe","CountryCode":"ZWE","GNI":1171}
    ];

    const sortMethod = sortMethodWithDirectionMultiColumn(
        [
            { column: "GNI", direction: "des" },
            { column: "CountryName", direction: "des" },
            { column: "CountryCode", direction: "des" }
            // {column: "lastName", direction: "asc"},
            // {column: "firstName", direction: "asc"},
            // {column: "grade", direction: "desc"}
        ]
    );
    let sortedData = data.sort(sortMethod)
    console.table(sortedData);
