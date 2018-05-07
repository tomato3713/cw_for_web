"use strict";
const loadText = (call_type) => {
	if (call_type == 'Basic') {
		g_calldata = [
			['A'], ['B'], ['C'], ['D'], ['E'], ['F'], ['G'],
			['H'], ['I'], ['J'], ['K'], ['L'], ['M'], ['N'],
			['O'], ['P'], ['Q'], ['R'], ['S'], ['T'], ['U'],
			['V'], ['W'], ['X'], ['Y'], ['Z'], ['/'], ['?'],
			['1'], ['2'], ['3'], ['4'], ['5'],
			['6'], ['7'], ['8'], ['9'], ['0']
		];
	}
	if (call_type == 'Ja') {
		g_calldata = [
			['JA1ZGP'],
			['JH1XEX'],
			['JG1MJZ'],
			['JJ1KKX'],
			['JA3KL/2'],
			['JI8IS'],
			['JH3ANU'],
			['JJ1XZW'],
			['JA1YPZ'],
			['JL7XBN/1'],
			['JO1VAP'],
			['JR1GMK'],
			['7N3LRM/1'],
			['JA1YFG'],
			['7N4XCA'],
			['JN1DIF'],
			['JI1IMB/1'],
			['JN1IZK'],
			['JA1YJF'],
			['JI1YED'],
			['JA0YDD'],
			['JA1KVT'],
			['JM1THS'],
			['JP1JFG/1'],
			['7L3NOO'],
			['JG1IEB/1'],
			['7K1NAQ'],
			['JQ1XBY'],
			['JA1RRA'],
			['JK1OTP'],
			['JO1ZRT'],
			['JA1OTT/1'],
			['JR1ZTI'],
			['JH1HPH'],
			['JA1OQ'],
			['JO1ZRT'],
			['JE1FHF'],
			['JO1NLN'],
			['JO1ZRT'],
			['7K4MSS/1'],
			['JH1DHV/1'],
			['JA1YDI'],
			['7N4FDN'],
			['7N2UQC'],
			['JA1YDH'],
			['JH1YWJ'],
			['JR1YYT/1'],
			['JI1DLW'],
			['JG7IGQ'],
			['JQ1XBY'],
			['JA1BHH/1'],
			['JA1YPZ'],
			['JG7WOX'],
			['7M1IHV/1'],
			['JA1XRH'],
			['JN1SPR'],
			['JO1ZLT'],
			['JA1YFA'],
			['JA1YAD'],
			['JQ2MYH/2'],
			['JA7EFR'],
			['JJ1YAF'],
			['JJ1YAF'],
			['JA1YDU'],
			['7N4TNU/1'],
			['JA1ZGP'],
			['JA1NZN/0'],
			['JG7NOD'],
			['JA1YFA'],
			['JA3AJS'],
			['JM1GII'],
			['JN1CJS/1'],
			['JF3DOK'],
			['JA1YDH'],
			['JA1DTS'],
			['JA1FY'],
			['JR7LVK'],
			['7M3PDB'],
			['JH7GKD'],
			['JP1GAC/1'],
			['JF1UYZ/1'],
			['JR4ICK'],
			['JH1UKI'],
			['JF1LAU'],
			['JA9VEZ'],
			['JH1ACA'],
			['JE7TUT'],
			['JH1CRL'],
			['JH1VVW'],
			['JH1PCJ'],
			['JM7JMG'],
			['JO1VVT'],
			['JA7WXL/1'],
			['7L2NGD'],
			['JA1DKL'],
			['JA1YNX'],
			['JA1YNX'],
			['7M3FGK'],
			['JA3MXP'],
			['JJ1YAF'],
			['JG1NDM/1'],
			['JA1WNZ'],
			['JF3JDE'],
			['JA1KK'],
			['JA1YDH'],
			['JA1YLR'],
			['JR0YKP/0'],
			['JE1SLP'],
			['JA1TLT'],
			['JA8GDD'],
			['JA1NUD'],
			['JR1ZTI'],
			['7M3EXA'],
			['JR1SLM'],
			['JA1YLB'],
			['JH1RJN'],
			['JA1FVZ'],
			['JF1DMQ'],
			['JA1YAD'],
			['7M4XWP'],
			['JM1BMM'],
			['JH4NHF'],
			['JO1LSA'],
			['JK1NAF'],
			['JG1GFU'],
			['JF2CLU'],
			['JA1YGM'],
			['JE1NZZ/1'],
			['JA1YJF'],
			['JH1YHS'],
			['JA1ISJ'],
			['JP2BOQ'],
			['JP2BOQ'],
			['JP2VOQ'],
			['JG1TVK'],
			['JA1DXU'],
			['JN1VNW'],
			['JA2FSM'],
			['JF2OSM'],
			['JL2VZJ'],
			['JG1TDV'],
			['JA1EDK'],
			['JA4RWN'],
			['JR0GKG'],
			['JS1LCB'],
			['JR1MXX'],
			['JI2YUF'],
			['JA6LTX/1'],
			['JA1YGC'],
			['JD1BIA'],
			['JA5YAU'],
			['7L1RNE'],
			['JA1YGM'],
			['JA0YAW'],
			['JA1YLB'],
			['JA6FN/1'],
			['JA2YCF'],
			['7L4QIT'],
			['7N1QMC'],
			['JR1CCP/1'],
			['JE6VRL'],
			['JA3LKE/7'],
			['7M2VZX'],
			['JH1YWJ'],
			['JG1RFS'],
			['JM1LPN/1'],
			['JE1COB'],
			['JE9UZB'],
			['JM1JIV'],
			['JA1KVT'],
			['JA5CPO'],
			['7K1NAQ'],
			['JA1YCR'],
			['JL1EJO'],
			['JA1EEG'],
			['JK1OLI/1'],
			['JR1CKU'],
			['JA1YPZ'],
			['JQ6UWK'],
			['7N4UTW'],
			['JA1YJU'],
			['JA1YDU'],
			['JN1IEJ'],
			['JF1BBI'],
			['JA0YAG'],
			['7L4XXR'],
			['JK1DMT'],
			['JP1VVA'],
			['7M4BZX'],
			['JA0IIJ'],
			['7N4IDP'],
			['JA2YCF'],
			['JL4BLD'],
			['JA1RRA'],
			['JM4UJY'],
			['JR4ZUZ'],
			['JA1YNX'],
			['JE1OOV'],
			['JS1UVH/2'],
			['JN7GQC'],
			['JA1YEW'],
			['JH0YPZ'],
			['JA1ALO/1'],
			['JA1YJF'],
			['7K2XEA'],
			['JA0YDD'],
			['JA1IKA'],
			['JH1WFK'],
			['JF2KRH/2'],
			['JQ1XBY'],
			['JH1YDT'],
			['7M1ISY'],
			['JA1BNT'],
			['JA1YGC'],
			['JA1YFA'],
			['JA3WFQ'],
			['JA7LMU/1'],
			['JA2FMN'],
			['JH1EMH'],
			['JI1YED'],
			['JH2BAX'],
			['JA1BRN'],
			['JH7VVR/1'],
			['JA1ZGO'],
			['JM1LAW'],
			['JA7YAF'],
			['JA1RRA'],
			['JJ1KZZ'],
			['JA0EO'],
			['JA1PTO'],
			['JR1ZTI'],
			['JO1FWF'],
			['JR0GSJ'],
			['JM1ZOR'],
			['JA1YCR'],
			['JE1SLP'],
			['JN1SPR'],
			['JJ0GEB'],
			['JA1XLX'],
			['JK1OLI/1'],
			['JA1PYP'],
			['JA4BOV'],
			['JA1XUY'],
			['JR1YYT/1'],
			['7N4NUC'],
			['JA7PH'],
			['JH1GTV'],
			['JF1PSS'],
			['JM1RPV/1'],
			['JS1VWU'],
			['JR4ZUZ'],
			['JN1SPR'],
			['7N1QMC'],
			['JE2NXB'],
			['JA1YEW'],
			['JA1YAD'],
			['JF1WQO'],
			['JJ1YAF'],
			['JR1DLX/1'],
			['JA2YDE/2'],
			['JH1KMV'],
			['JA1DXF'],
			['JR1ZTT'],
			['JA1FBH'],
			['JN1KOO'],
			['JN2KRG'],
			['JA1OBF'],
			['JA1YAD'],
			['JN1NDK'],
			['JE2ASO'],
			['7M4NIV'],
			['JA1IQK'],
			['7N3UKH'],
			['JH1VVW'],
			['JA1YLB'],
			['JA2JTN/2'],
			['JA1LQV'],
			['JM1GII'],
			['7L3IUE'],
			['JA0CIH'],
			['JH4RCK/1'],
			['JA1YEW'],
			['JN7EGV/1'],
			['JH9VUU'],
			['JF9JCX'],
			['JA1XPU'],
			['JE7YEQ/7'],
			['JA1YCX'],
			['7N3AKG'],
			['7M4QOA'],
			['JA4YHX'],
			['JA8QWT'],
			['JG2REJ'],
			['7L4JCO'],
			['JA1YGH'],
			['7N4FGM/1'],
			['7L3XKN'],
			['7K2GMJ'],
			['JH1HFH/2'],
			['JR4OTP/1'],
			['7N4HXO'],
			['JJ4RAG'],
			['JJ1YAF'],
			['JA1YNX'],
			['JE1AMR'],
			['JA1ZGP'],
			['JA1ZGO'],
			['JH4EMK'],
			['JN1SPR'],
			['7N4QID'],
			['7L3IUE'],
			['JL3YHX'],
			['JH1FVE'],
			['JG8QXB'],
			['JR1RKY'],
			['JR1GML'],
			['JR1GMK'],
			['JA1DXU'],
			['JA1WHG'],
			['JA1YFA'],
			['7N4TWL'],
			['JA0IZT/1'],
			['JF8DLU/1'],
			['JA1LOG/1'],
			['JH3BGO/1'],
			['JN1ZQW/1'],
			['JA1EGP/1'],
			['JI5OCD/1'],
			['JF1GIX/1'],
			['7N2JFU/1'],
			['JP2MYG/1'],
			['JH0NSV/1'],
			['JF1ABZ/1'],
			['JH1YDT'],
			['JA6LIM'],
			['JR1XQF'],
			['JA1GSG'],
			['JH1EMH'],
			['JJ1ANW'],
			['JA1YFL'],
			['JQ1GDK'],
			['JN1ALL'],
			['JK1HAK'],
			['JO1VRL'],
			['JA1YCR'],
			['JA1YCG'],
			['JA1YXX'],
			['JN1IEJ'],
			['JR1BSV'],
			['JI5DDB'],
			['7N4TZJ'],
			['JM1ZOR'],
			['7N4MSA'],
			['7L2DTJ'],
			['JA1IHD'],
			['JO1NLN'],
			['JR1UFJ'],
			['JM1JIV'],
			['JL2LFK'],
			['JI1TYY'],
			['JO1UOE'],
			['JF1OKX'],
			['JA1YPZ'],
			['7N4XOR'],
			['JO1VVT'],
			['7K1NAQ'],
			['JJ4ENK'],
			['JE1SLP'],
			['JA0HNN'],
			['JN1ALL'],
			['JI2YUF'],
			['JA3OEA'],
			['7N1BHO'],
			['JR1ZTI'],
			['JA1FFB'],
			['JO1TWT'],
			['JA1II/1'],
			['JH1SZO'],
			['JG1VJR'],
			['JN1IEJ'],
			['JR1CAB'],
			['JM4XTK'],
			['JA1YCX'],
			['JA0YAB'],
			['JI3ACK/1'],
			['JA0EOK/1'],
			['7L4SAM/1'],
			['7M2HCK/1'],
			['7L1ETP/1'],
			['JQ1BNL/1'],
			['7K1PEO/1'],
			['JR1CCP/1'],
			['JO1ZRT'],
			['JA1KVT'],
			['JJ3BTI'],
			['JJ1XNF'],
			['JA1PX'],
			['JM1LKI'],
			['JA1IJX'],
			['JA1CTX'],
			['7M1WCU'],
			['JA1YEW'],
			['JR1ZTI'],
			['JH1OHZ'],
			['JA1YAX'],
			['JO1VVT'],
			['JS1FWM'],
			['JG6LXI'],
			['JA1OYB'],
			['JF1DMQ'],
			['JL1VVY'],
			['JA8YCZ'],
			['JA1WNZ'],
			['JA0BBM'],
			['JA1YLB'],
			['JH6WKF'],
			['JE1LGY'],
			['JA1YNX'],
			['7N4VZO/1'],
			['JN3OJR/1'],
			['JE1QHP/1'],
			['JH4RCK/1'],
			['JH8IZA/8'],
			['7N4JWZ/1'],
			['JI2ZNP/2'],
			['JA1ZGO'],
			['JM1GII'],
			['JR1SLM'],
			['JA1YGX'],
			['JH0YPZ'],
			['JJ1MUM'],
			['7N4LNK'],
			['JA1YAX'],
			['JA1CDX'],
			['JP1LRT'],
			['JO6FHL'],
			['JR1ZTT'],
			['7N4JXR'],
			['JQ6BNE'],
			['JR1EHL'],
			['JL1EJO'],
			['JA1QNV'],
			['JF1QZW'],
			['7L3NOO'],
			['JA1YFG'],
			['JA1PYP'],
			['JH5FXP'],
			['JS2WKZ'],
			['JA1XUY'],
			['JA1GSQ'],
			['JA1YXP'],
			['JN1IEJ'],
			['7L4RAY'],
			['JH1GTV'],
			['JO1ZYI'],
			['JO1NLN'],
			['JA8IBU'],
			['JE7MSU'],
			['JA1YCG'],
			['JN4JQJ'],
			['JN1LQH'],
			['JQ2EHG'],
			['JA1BJK'],
			['JI1QIE'],
			['JA3ZKK'],
			['JA1YGX'],
			['JL1IVL'],
			['JH4RCK/1'],
			['JG8NQJ/1'],
			['JE1QHP/1'],
			['JN1JQW/1'],
			['JD1BKW/1'],
			['JA0BHH/1'],
			['JA1DTS'],
			['JM1GII'],
			['JO1LVZ'],
			['JA1YDH'],
			['JR1ZTT'],
			['JN1DIF'],
			['JM1AHX'],
			['JA1DXF'],
			['JA1LOG/1'],
			['JA1YFA'],
			['JA1YAD'],
			['7M3DZI'],
			['JQ6MXW'],
			['JH1WFK'],
			['JA1YAX'],
			['JH1YDT'],
			['JK1FBA'],
			['JA1YXP'],
			['7K2GUB'],
			['JA1IQK'],
			['7L3IUE'],
			['JA1PTO'],
			['JA1YJF'],
			['7K3HAJ'],
			['JA0LDB'],
			['JH1LYY'],
			['JJ1KZZ'],
			['JG1GFU'],
			['JA1YJF'],
			['JL1GHM'],
			['JN1SPR'],
			['JA5YAP'],
			['7N1NAI'],
			['JJ1YAF'],
			['7M4JUO'],
			['7K4OVF'],
			['JR1SLM'],
			['JR1EEU'],
			['JF2FIU'],
			['JL1DLX'],
			['JE6URC'],
			['JR1ZTI'],
			['JA1LVG'],
			['JQ1NGT'],
			['7N4RSU'],
			['JK1OTP'],
			['JN1IIH'],
			['JA1LLG'],
			['JN1BJX'],
			['JA1YEW'],
			['JA1YJU'],
			['JE1LFR'],
			['JA1OVD'],
			['7L3IUE'],
			['7M1MCU'],
			['7L4RAY'],
			['JA4XY'],
			['JA1YCX'],
			['7N4UWM'],
			['JK1XDB'],
			['JL7NYX'],
			['JA1YGX'],
			['JN1JFO'],
			['JG8XTU'],
			['JA1YDU'],
			['JA1IQK'],
			['JO1GJB'],
			['JA1YFG'],
			['JA5CPO'],
			['JA7AOV'],
			['JA1ZGP'],
			['JH1ACA'],
			['JR2NTC/2'],
			['JK1JHU/1'],
			['JR1ERU/1'],
			['JN1AEQ/1'],
			['JA7BTA/1'],
			['JK1OLT/1'],
			['JI1CPN/1'],
			['JH1HTQ/2'],
			['JP1LMU/1'],
			['JE1CKA/1'],
			['JE1RRK/1'],
			['JP1JFG/1'],
			['JN1ZMS/1'],
			['JQ1AHZ/2'],
			['JE1CMO/1'],
			['JJ0ACA/0'],
			['JH7PKU/1'],
			['JA1EGP/1'],
			['JJ0FTY/1'],
			['JK1FLJ/1'],
			['7N4TNU/1'],
			['7M1IHV/1'],
			['JN1ZBH/1'],
			['7N3CNW'],
			['JA1YGC'],
			['JA1IRC'],
			['JA1BRN'],
			['7M4ATR'],
			['JM1PWX'],
			['JN1SPR'],
			['JG7LQU'],
			['JA1YGA'],
			['JA1YAX'],
			['JK1LCB'],
			['7K1NAQ'],
			['JA1YGM'],
			['7L2CRG'],
			['JA1II/1'],
			['JH3LFL/1'],
			['JN1ALL'],
			['JA1YLR'],
			['JA1ZGO'],
			['JH4UYB'],
			['JH7CJM'],
			['JA3RSJ'],
			['JA4XY'],
			['7N4XCA'],
			['JA1YXX'],
			['7M4IZH'],
			['JH7HGK'],
			['JA3LEB'],
			['JM7TKK'],
			['JF4CZL/1'],
			['JJ3TAE/3'],
			['JQ1KDM/1'],
			['7K1CPT/1'],
			['JH1YDT'],
			['JA1YNX'],
			['JJ1JJD'],
			['7N4WZN/1'],
			['JH1QXP'],
			['JE7DMH'],
			['JL3HHV/3'],
			['7M4GOM'],
			['JL1TYY/1'],
			['JI3OQO/3'],
			['JA1ALO/1'],
			['JE3PUG/1'],
			['JA0SVO/1'],
			['JA8NNT/1'],
			['JA1YXP'],
			['JK1AFI'],
			['7N4XCA'],
			['JH3TCM'],
			['JA1YEW'],
			['7N1CMX'],
			['JA1DIC'],
			['JI1OJZ'],
			['JR3XTO'],
			['JK1FBA'],
			['JA1BZM'],
			['JM1TDG/1'],
			['7K1PEO/1'],
			['7M4NQS/1'],
			['JQ1BTP/9'],
			['7N4INO/1'],
			['JQ6PNK/6'],
			['JG1LWG/1'],
			['JN1TIO'],
			['JA1AZY'],
			['JE1LFR'],
			['JN1BJX'],
			['JA1JQY'],
			['JA6HXW'],
			['JA1QOI'],
			['JA1COH'],
			['JI2ZLX/7'],
			['JN1GQQ/1'],
			['JH1LSP/1'],
			['JH8PHT/1'],
			['JH4JUK'],
			['JA1CLI'],
			['JA1YGC'],
			['JO1NLN'],
			['JA3AA'],
			['JP2RDH'],
			['JA1OBF'],
			['JR1XQF'],
			['JA6CM'],
			['JH1DGY'],
			['JA1YXP'],
			['JO1ZRT'],
			['JA1ZGP'],
			['JR1CQZ'],
			['JA2DZF'],
			['JI1TYY'],
			['JA1VNS'],
			['JQ1UXN'],
			['JA3UWB'],
			['JO1UOE'],
			['JF0OAJ'],
			['JO1QGK'],
			['JA1XUY'],
			['JR1UMO'],
			['JI1NWG'],
			['JA6LJN'],
			['JH1JGZ'],
			['JG2TSL'],
			['JA1BRN'],
			['JA1BML'],
			['JA1OQ'],
			['JH1XUZ'],
			['JA3CG/1'],
			['JH2HUQ'],
			['7N4MSA'],
			['JA7LLL'],
			['JA1TNL'],
			['JA1CRX'],
			['7M3IKJ'],
			['JF1NPO'],
			['JA1HAR'],
			['JA1RDT'],
			['JA0FVU'],
			['JG2TSL'],
			['7N2SPK'],
			['7M4GND'],
			['JG1ZOO'],
			['JJ4PPK'],
			['JM1DUI'],
			['JI1HFJ'],
			['JA1PTO'],
			['JA1FDK'],
			['JA2VQF'],
			['JA1BAN'],
			['7L3MNM'],
			['JR1GMK'],
			['JO3JYE'],
			['JF1SQC'],
			['JA3AA'],
			['JA1CP'],
			['JR1JLA'],
			['JH8CBH'],
			['JE1SGH'],
			['7M4BZX'],
			['JA1GSG'],
			['JR1SLM'],
			['JF1WUV'],
			['JN1MET'],
			['JG1GFU'],
			['JF2ION'],
			['7N4VIH'],
			['7L4XSG'],
			['JE6MYI'],
			['7L4HFV'],
			['JK1LCB'],
			['JH1CRL'],
			['JG1ZOO'],
			['JH1BTS'],
			['JN1YQU'],
			['7L4RZL'],
			['JR3XTO'],
			['JM1JIV'],
			['JO1FWF'],
			['JR1UJX'],
			['JR8NOD'],
			['7N2ODM'],
			['JS1JNT'],
			['JH6SCA'],
			['JP1ILT'],
			['JG1KYL'],
			['JN1BJX'],
			['JA1YXP'],
			['7K1PEO/1'],
			['JN1AEQ/1'],
			['JF0BPT/0'],
			['JR1YYT/1'],
			['JK1SPQ/1'],
			['JF2OZH/1'],
			['JH4RCK/1'],
			['JH0NVX/1'],
			['JR2BJV/2'],
			['JH1MTR/4'],
			['JG1IEB/1'],
			['JO1ZZZ/0'],
			['JJ1VEX/1'],
			['7N4VZO/1'],
			['JA1EGP/1'],
			['JI6TJL/1'],
			['JS1SDO/2'],
			['JJ1BDX/3'],
			['JI3ACK/1'],
			['JR4PMX/1'],
			['JA1EGP/1'],
			['JN1ATL/1'],
			['JI2ZLX/7'],
			['JP1GAC/1'],
			['JE0DKR/1'],
			['JH7VVR/1'],
			['JA0EOK/1'],
			['JR1CJD/1'],
			['JN1ZBH/1'],
			['JA7DLE'],
			['JO1VAP'],
			['JE1COB'],
			['JH1EMH'],
			['JG0AXT'],
			['JN1VNW'],
			['7N4VQG'],
			['7M2ALP'],
			['JO1ZYI'],
			['7K1NEV'],
			['7N4MRW'],
			['JQ1XBY'],
			['JH1XUZ'],
			['JF1SLI'],
			['JS1WFG'],
			['JH1DLJ'],
			['JG1ZOO'],
			['JH9UDI'],
			['7N4XCA'],
			['JE1SGH'],
			['JM1ZOR'],
			['7L2RAC'],
			['JE1DRU'],
			['JR1TRE'],
			['JA1YGX'],
			['JA1PTO'],
			['JF1OIJ'],
			['7K1NAQ'],
			['JR1CAB'],
			['JH1WFK'],
			['JA1PYP'],
			['JJ1TZB'],
			['JA1YDU'],
			['JA1ZGP'],
			['JR1ZTT'],
			['JM2HAV'],
			['JN1BJX'],
			['JA1OYB'],
			['7L2BEI'],
			['JH0SGG'],
			['JA1II/1'],
			['JA1DOQ'],
			['JA1TGC'],
			['JE1SLP'],
			['JR1HRL'],
			['JF1XFX'],
			['JA1YCR'],
			['JH1UUT'],
			['JA1IZZ'],
			['JA1ZV'],
			['JA1RTS'],
			['JO1UYJ'],
			['JA1CRP'],
			['JA6CM'],
			['JA1YCR'],
			['JI2LFL'],
			['JG2KKG'],
			['JH4JUK'],
			['JO1QYI'],
			['JM1ZOR'],
			['JA5DIM'],
			['JA9AJU'],
			['JQ2EHG'],
			['JA1YCX'],
			['JG1SYY'],
			['JA1YDH'],
			['JR1CQZ'],
			['JA1EHV'],
			['JO1ATK'],
			['JG8SIS/8'],
			['JN1ATL/1'],
			['7M4FKN/2'],
			['JF2IGP/1'],
			['JA1OTT/1'],
			['JG3NKP/1'],
			['7N4VZO/1'],
			['JN1ZQW/1'],
			['JA2MAX/1'],
			['JA1FCX/1'],
			['JS1FVG/1'],
			['JP1JFG/1'],
			['JP6KMB/1'],
			['JA3ATK/5'],
			['JF1PQT/7'],
			['JA6CYL/6'],
			['JE6EKC/3'],
			['JH7PKU/1'],
			['JA1LOG/1'],
			['JA7BVS/1'],
			['JA2NKD/1'],
			['JQ6PNK/6'],
			['7N3OJR/1'],
			['7M4GRG/1'],
			['JH1QXP'],
			['JN1GKZ'],
			['JA1RRA'],
			['JA1YXP'],
			['JA1JQY'],
			['JA6RIL'],
			['JI5SKS'],
			['JA1IJX'],
			['7M1MCU'],
			['JH1YDT'],
			['JM1THS'],
			['JR1LGE'],
			['JJ1KZZ'],
			['7L1PNG'],
			['JE1SGH'],
			['JH2XTV'],
			['JA1IX'],
			['JA0XD'],
			['JN1IEJ'],
			['JA2CXF'],
			['JA1CP'],
			['JG4UWS'],
			['7L1ETP/1'],
			['JL7GUD/7'],
			['JH0MUC/0'],
			['JR1CCP/1'],
			['JM3CRK/1'],
			['JA1LOG/1'],
			['JN1GQQ/1'],
			['7K3PFS/1'],
			['JM1JIV'],
			['JA1FHP'],
			['7L3EMP'],
			['JR8NOD'],
			['JA1MSS'],
			['7N4TEN'],
			['JA1LVG'],
			['JE1COB'],
			['JS1LCB'],
			['JR1ZTI'],
			['7N4LZD'],
			['JO1KXP'],
			['JE1UKM'],
			['JA6CM'],
			['7N4VFW'],
			['JA1KVT'],
			['JA1FWJ'],
			['JA1JQY'],
			['JA1ZGO'],
			['JA1YAD'],
			['JA1BZM'],
			['JN1YFS'],
			['JJ1KZZ'],
			['JA6FN/1'],
			['JA9CD'],
			['JM3CRK/1'],
			['7M1CFF/1'],
			['JM3CRK/1'],
			['JA7BTA/1'],
			['JH1YWJ'],
			['JA1IHD'],
			['JE1KUP'],
			['JQ1XBY'],
			['7N2ODM'],
			['JR1ZTT'],
			['JH1VGQ'],
			['JH1YWJ'],
			['JK1LCB'],
			['JA2YEF'],
			['JA1IQK'],
			['JN1SPR'],
			['JH1KPT'],
			['JK1XDB'],
			['JN2CHJ'],
			['JL7IFR'],
			['JR1CKU'],
			['JH1OHZ'],
			['JA1QEU'],
			['JI1ALP'],
			['JA5DIM'],
			['JR1CQZ'],
			['JH1LEM'],
			['JA1YEW'],
			['JA2BZA'],
			['JM1LAW'],
			['7N4JQJ'],
			['JH2QEE'],
			['JO1ZRT'],
			['7L3NOO'],
			['JR1SGU'],
			['JN1LQH'],
			['JR1ZTI'],
			['JA1XPU'],
			['JH1YDT'],
			['JK1USO'],
			['JH2CMH'],
			['7L3IUE'],
			['JA1YLR'],
			['JA1XUY'],
			['JA1UZG'],
			['JH2NWP'],
			['JG1ZOO'],
			['7L1ETP/1'],
			['JH0NVX/1'],
			['JO1ZZZ/0'],
			['JM3CRK/1'],
			['7N3LRM/1'],
			['JI2ZLX/7'],
			['JA6CYL/6'],
			['JA0EOK/1'],
			['JI3DNN/3'],
			['7N4PKO/1'],
			['JN2UIY/2'],
			['JM3CRK/1'],
			['JM1GCJ/1'],
			['JJ6TWQ/6'],
			['JL1OKJ/1'],
			['7K2JEM/1'],
			['JK3HLP/3'],
			['JM3CRK/1'],
			['JA2ZN/1'],
			['JH0KWZ'],
			['JA3YDS'],
			['JN1DIF'],
			['JA1YLB'],
			['JK6SEW'],
			['JA1IQK'],
			['JR1PCY'],
			['JH8BDA'],
			['JA1TCF'],
			['JG1ZOO'],
			['JA1YAD'],
			['JA3RK'],
			['JH1YDT'],
			['JA1YGX'],
			['JA1YDH'],
			['7N4NJE'],
			['JA1YDH'],
			['JM1LAW'],
			['JJ8FHY'],
			['JA1IRT'],
			['JH1LFP'],
			['JA1RRA'],
			['JA1MVD'],
			['JJ1BWG'],
			['7N2TNI'],
			['JQ2EHG'],
			['JA1YOT'],
			['JA1BZM'],
			['JA1YGX'],
			['JF1XJO'],
			['JM2CAN'],
			['JN1ALL'],
			['JJ1YAF'],
			['JG1KYL'],
			['JH4FUF'],
			['JJ1YAF'],
			['JN1DIF'],
			['JK8NQW'],
			['JA1CRP'],
			['JA1WNZ'],
			['JR4CXE'],
			['JO1ZRT'],
			['7N4JQJ'],
			['JH1DGY'],
			['JA1UDW'],
			['JF2ION'],
			['JN7WPD'],
			['JJ1GIC'],
			['JO1NLN'],
			['JA1XGI'],
			['JA1ECN'],
			['JA1BNW'],
			['7L2RAC'],
			['JA2NDQ'],
			['JM1THS'],
			['JM2CAN'],
			['JA1YGX'],
			['JQ1XBY'],
			['JA1XUY'],
			['JE4IBA'],
			['JA1YAX'],
			['JE1AMR'],
			['JH8BDA'],
			['JR1MRG'],
			['7N2SPK'],
			['7N2ODM'],
			['7K4TSJ'],
			['JA1DMW'],
			['JA4MMO'],
			['JA1XRH'],
			['JI2ZNP/2'],
			['7M4PEQ/1'],
			['JI2ZNP/2'],
			['JA1FRQ/1'],
			['JO1ZUS/1'],
			['JA7BVS/1'],
			['JM3CRK/1'],
			['7K1PEO/1'],
			['JF2OZH/1'],
			['JN1ZQQ/1'],
			['JH1GVY/2'],
			['JG6JRH/1'],
			['JA1OTT/1'],
			['JG1LWG/1'],
			['JK2EIJ/0'],
			['7N3OJR/1'],
			['JP6KMB/1'],
			['JJ1JJD'],
			['JA1YLR'],
			['JO1HAW'],
			['JA1BAN'],
			['JM1LQW'],
			['JS1VWU'],
			['JN1VNW'],
			['JA5DEU'],
			['JA1YPF'],
			['JG1KYL'],
			['JN1GKZ'],
			['JL1ILB'],
			['7L1UVB'],
			['7M1MCU'],
			['JA1ZGP'],
			['7N4WPJ'],
			['JA1IZZ'],
			['JA7BME'],
			['JA2QVP'],
			['JA1CDX'],
			['JF1OIJ'],
			['JA1PTO'],
			['JJ1JGI'],
			['JO1ZYI'],
			['JK1SDQ'],
			['JN1GQG'],
			['JA1OBF'],
			['JA9CHG'],
			['JA1YLB'],
			['JA1MVD'],
			['7L4XSG'],
			['7K3HAJ'],
			['JA0FVU'],
			['JA1YGM'],
			['JL7AIA'],
			['JH1QXP'],
			['JA7EU'],
			['JA1UZG'],
			['JR1ZTT'],
			['JA1YGA'],
			['JE1HMC'],
			['JA0QWO'],
			['7L1TTH'],
			['JA1IJX'],
			['JL6ARC'],
			['JS1CYI'],
			['JA1YAX'],
			['JR1ZTI'],
			['JJ1LGO'],
			['JH3AIU'],
			['JK1XDB'],
			['7K4XVK'],
			['JA1ZGO'],
			['JA1YLB'],
			['7N4TML'],
			['JA9VOK'],
			['JH1XUZ'],
			['7N4DTF'],
			['JO1RBT'],
			['JP1DSQ'],
			['7M3IRK'],
			['JH1YHS'],
			['JS1VCM'],
			['JH1YHS'],
			['JI1ACI'],
			['JA1EJD'],
			['JF1JDG'],
			['JA1DXA'],
			['JA1ZGO'],
			['JA5MAJ'],
			['JA1YGX'],
			['JJ1GQH'],
			['JA1YXP'],
			['JI1HFJ'],
			['JE1BMJ'],
			['JJ1LBJ'],
			['JH1FVE'],
			['7L4RAY'],
			['JH4UYB'],
			['7L4RZL'],
			['JF2FIU'],
			['JO1ZYI'],
			['JA1FBH'],
			['7N3CCU'],
			['JH1XUZ'],
			['JA1YLR'],
			['JO1RBT'],
			['JO1ERV'],
			['JI1HFJ'],
			['JA1YDU'],
			['JF2IKJ'],
			['7K1NAQ'],
			['JA1ZGP'],
			['JA1SCE'],
			['JK1OTP'],
			['JH1CRL'],
			['7L1TTH'],
			['JH1AZO'],
			['JA1YEW'],
			['JN1DIF'],
			['JM1JIV'],
			['JK1OTP'],
			['JF1OIJ'],
			['7N2ELH'],
			['7N4THG'],
			['JJ1JJD'],
			['JI1VVW'],
			['JR3NDM'],
			['JA1YEW'],
			['JJ1KZZ'],
			['JH1BTS'],
			['JA1YPZ'],
			['JK1AII'],
			['7N3ILC'],
			['JR3NZC'],
			['JO1KXP'],
			['JG1MNO'],
			['JH3LXM'],
			['JA7ODY'],
			['JE1SGH'],
			['JA1PTO'],
			['JE1KUP'],
			['JA7YFB'],
			['JF1OIJ'],
			['JI1HCD'],
			['JJ1LBJ'],
			['JR1GMK'],
			['JM4WUZ'],
			['JH1XUZ'],
			['JH6WDG'],
			['JA5DEU'],
			['JA7BEW'],
			['JJ1YAF'],
			['JA1CP'],
			['JA1GQV'],
			['JR9TUG'],
			['JI3KZD'],
			['JQ1XBY'],
			['JA1YPZ'],
			['JA1WNZ'],
			['JI3LYR'],
			['JA1BAS'],
			['JA8BIH'],
			['JL1EJO'],
			['JK1OTP'],
			['JK3YRS'],
			['7M1MCU'],
			['JA1FBH'],
			['JA1TGC'],
			['JH3AIU'],
			['JK2VOC'],
			['JA1YNX'],
			['JA1PTO'],
			['JL1EYB'],
			['JA3RK'],
			['JN1IKR'],
			['JG2ZHJ'],
			['JE1HMC'],
			['JA1IZZ'],
			['JE7CWH/7'],
			['JE1QHP/1'],
			['JR8YIK/8'],
			['JH8PHT/1'],
			['JE7ENK/7'],
			['JH8PHT/1'],
			['JP6KMB/1'],
			['JG1NDM/1'],
			['JH8PHT/1'],
			['JA1EGP/1'],
			['JR8LRQ/8'],
			['JH9UJB/1'],
			['JK1JHU/1'],
			['JG1IEB/1'],
			['JN1VEO/1'],
			['JA1LOG/1'],
			['JI2ZLX/7'],
			['JI3ACK/1'],
			['JL1XYU/1'],
			['JR8OFE/1'],
			['JE1QHP/1'],
			['JF1NHD/8'],
			['7N4TNU/1'],
			['JK2EIJ/0'],
			['JH7VVR/1'],
			['JP1JFG/1'],
			['JA7LMU/1'],
			['JH0NVX/1'],
			['JJ2JQF/1'],
			['JA1OTT/1'],
			['8J2NWK/2'],
			['JJ1VOM/1'],
			['JO1HOS/1'],
			['JJ1SFP/1'],
			['JA6FXT/1'],
			['JA0EOK/1'],
			['JF3IYW/3'],
			['JR7HOD/1'],
			['JA7BTA/1'],
			['JI3ACK/1'],
			['JL2PNA/1'],
			['JP1GAC/1'],
			['JD1BKW/1'],
			['JK2BAP/2'],
			['JH0MUC/0'],
			['JF2OZH/1'],
			['JI6TJL/1'],
			['JK1JHU/1'],
			['JR0EYF/0'],
			['JA1EGP/1'],
			['JH7VVR/1'],
			['JR1DLX/1'],
			['JA4OEY/1'],
			['JH0MUC/0'],
			['JH7PKU/1'],
			['JA7BVS/1'],
			['JA1ECG/1'],
			['JP1JFG/1'],
			['JA1FTH/1'],
			['JK2EIJ/0'],
			['JJ1PSM/1'],
			['JN1ILK/1'],
			['JN1ZBH/1'],
			['JL2PCI/3'],
			['7N3LRM/1'],
			['JH8PHT/1'],
			['7K4XNN'],
			['JM2VYA'],
			['JF1DMQ'],
			['JA1ZGO'],
			['JO1ZRT'],
			['7N2TNI'],
			['JS1VWU'],
			['JG1ZOO'],
			['JA1CP'],
			['JE1RAC'],
			['JM1JIV'],
			['JE1SGH'],
			['JF1XJO'],
			['JO1HOS/1'],
			['JE5JHZ/5'],
			['JI6TJL/1'],
			['JF4CZL/1'],
			['JJ1PSM/1'],
			['JE1CKA/1'],
			['JE1QHP/1'],
			['JP6KMB/1'],
			['JE1MPR/1'],
			['JH2OJS/2'],
			['7L1FFH/1'],
			['JN1GQQ/1'],
			['7L3NOO'],
			['JA1YGC'],
			['JK1GPD'],
			['JH0RNN'],
			['JF1YIK'],
			['JA1UZG'],
			['JA1ZGP'],
			['JH1YHS'],
			['JE1FTN'],
			['7L4SCQ'],
			['JK1XDB'],
			['JK6SEW'],
			['JL1TBP'],
			['JA1OQ'],
			['7N4TNU/1'],
			['JH1LSP/1'],
			['JK2EIJ/0'],
			['JG1IEB/1'],
			['7L1ETP/1'],
			['JL1TYY/1'],
			['JN1GQQ/1'],
			['JE1SCJ/1'],
			['JE6EKC/3'],
			['JG0LGQ/0'],
			['JA1OTT/1'],
			['JF2OZH/1'],
			['JF2UED'],
			['JK1OTP'],
			['JA1KVT'],
			['JR5PPN'],
			['JH1XUZ'],
			['JM1FUW'],
			['JK1OTP'],
			['JF1FHM/1'],
			['JK1JHU/1'],
			['7L1ICV/1'],
			['JF6KKC/1'],
			['JP1JFG/1'],
			['JI6TJL/1'],
			['JN1VEO/1'],
			['JN1GKZ'],
			['7N4TML'],
			['JR1ZTT'],
			['JA1OQ'],
			['JA1IHD'],
			['JI1HFJ'],
			['JJ1JGI'],
			['JA1UZG'],
			['JF1OIJ'],
			['JH1YDT'],
			['JA7NPV'],
			['JF1OLX'],
			['JA1XUY'],
			['JA1FKP'],
			['JG2TSL'],
			['JF1LEQ'],
			['7K2AMG'],
			['JO1ZRT'],
			['JN1YFS'],
			['JO1ZYI'],
			['JR1CQZ'],
			['JH1QXP'],
			['JH8SLS'],
			['JA0MRW'],
			['JA6GCE'],
			['JA1BAS'],
			['JH1YHS'],
			['JE2WYA'],
			['JF1ZFU'],
			['JF6EZY'],
			['JK1XDB'],
			['JG2TSL'],
			['JH2QEE'],
			['JJ1JJD'],
			['JA1YAD'],
			['JH1YHS'],
			['JK1PIU'],
			['7M4BZX'],
			['JE0DDK'],
			['JE5JHZ/5'],
			['JL1HHN/1'],
			['JJ0FTY/1'],
			['7K1CPT/1'],
			['7M2IBO/1'],
			['7L1FFH/1'],
			['7L1ICV/1'],
			['JH7PKU/1'],
			['JA0BHH/1'],
			['7L1FFH/1'],
			['JJ6TWQ/6'],
			['JI6TJL/1'],
			['JA0EOK/1'],
			['JM2KKU/2'],
			['7L1ETP/1'],
			['JG4DDN/1'],
			['7L1ICV/1'],
			['JS1FVG/1'],
			['JI2ZLX/7'],
			['JE1NZZ/1'],
			['JA0EOK/1'],
			['7K1PEO/1'],
			['JA1OTT/1'],
			['JR8OFE/1'],
			['JF1NHD/8'],
			['JA1YCR'],
			['JG0OXL'],
			['JH6WDG'],
			['JK1HWQ'],
			['JA0MRW'],
			['JH8SLS'],
			['JA8KXA'],
			['JH8SLS'],
			['JA1YFG'],
			['JR1CQZ'],
			['JA1YLR'],
			['JH0RNN'],
			['JR3BVX'],
			['JH1QXP'],
			['JA1XRH'],
			['7N2TNI'],
			['JF1ZFU'],
			['JA6GCE'],
			['JE1SLP'],
			['JF1OIJ'],
			['JA7NPV'],
			['JA1YAX'],
			['JH1YHS'],
			['JA1CGN'],
			['JA8JCR'],
			['7N4RQX'],
			['JJ1EMC'],
			['JE2QEN'],
			['7K2NBL'],
			['JN1YFS'],
			['JM1JIV'],
			['JA3RAY'],
			['JK2VOC'],
			['JH6WHN'],
			['JQ2EHG'],
			['JR1GMK'],
			['JJ1UDO'],
			['7M1MCU'],
			['JA1PYP'],
			['JA7ARW'],
			['JQ2EHG'],
			['JA7LRR'],
			['JA4GWE'],
			['JL1LNC'],
			['JH4JPO'],
			['JA1XRH'],
			['JF2FIU'],
			['JR1RFH'],
			['JA8YDO'],
			['JN6WHW'],
			['JE1KNT'],
			['JM2LEI'],
			['JA3YDS'],
			['JA4RL/4'],
			['7N4XNF'],
			['JL1LNC'],
			['JJ1NNH'],
			['JJ1JJD'],
			['JR8OFE/1'],
			['JE1SCJ/1'],
			['JM1DSC/1'],
			['JR8OFE/1'],
			['JK1JHU/1'],
			['JR8YIK/8'],
			['7L1FFH/1'],
			['JH3CHV/3'],
			['JG5UXT/1'],
			['JE1CKA/1'],
			['JE0DKR/1'],
			['JN1ILK/1'],
			['JH0NVX/1'],
			['JG4DDN/1'],
			['7L1ICV/1'],
			['JE1CKA/1'],
			['JI2ZNP/2'],
			['JA1EGP/1'],
			['JR1DLX/1'],
			['JE8NRE/8'],
			['JF4CZL/1'],
			['JA1FTH/1'],
			['JN1GQQ/1'],
			['JH3GBD/1'],
			['JA1ELE'],
			['JA1YDU'],
			['JJ1NNH'],
			['7M4BZX'],
			['JA1YOT'],
			['7N4UOH'],
			['JA6DNV'],
			['JA1XRH'],
			['JF1YIK'],
			['JH4UYB'],
			['JK3HLP/3'],
			['JF4CZL/1'],
			['7L1FFH/1'],
			['JR1GMK'],
			['JA6NWC'],
			['JA1YOT'],
			['JA1GTF'],
			['JA7YAF'],
			['JA1YGC'],
			['JH1YWJ'],
			['7N4TNU/1'],
			['7M1IHV/1'],
			['JA2YEF'],
			['JO1ZUS/1'],
			['JA1OTT/1'],
			['JH1LSP/1'],
			['JF3XWM/3'],
			['JH1MBQ/1'],
			['JM1DSC/1'],
			['JP1JFG/1'],
			['JH7PKU/1'],
			['7N3LRM/1'],
			['JA8RHU'],
			['JG1ZOO'],
			['JA1TGC'],
			['JA6DNV'],
			['JJ1JGI'],
			['JN1VNW'],
			['JA7QPG'],
			['JJ0JDK'],
			['JR3RCM'],
			['JA1YDH'],
			['JI1SRZ'],
			['JA1YGC'],
			['JI3LYR'],
			['JG8QXY'],
			['JA1NVF'],
			['JA2PEI'],
			['JG0IPW'],
			['JH9QBI'],
			['JA0YAB'],
			['JL1UNE'],
			['JA3YJE'],
			['JA7ASI'],
			['JM3JFW'],
			['JM1JIV'],
			['JH1UUT'],
			['JR3MCV'],
			['JA2KGQ'],
			['JA1IZZ'],
			['JG6TXW'],
			['7M4QNP'],
			['JF3CCN'],
			['JD1BIA'],
			['JH1DGY'],
			['JR7LVK'],
			['JJ0JZH'],
			['JR3RCM'],
			['JR4PMX/1'],
			['JJ1VEX/1'],
			['JA7LMU/1'],
			['JO1ZUS/1'],
			['7L1ETP/1'],
			['7N3OJR/1'],
			['JQ1DSK/1'],
			['JA1LOG/1'],
			['JM1DSC/1'],
			['JA2YDE/2'],
			['JL7XVL'],
			['JE1YEM'],
			['JR1MRJ'],
			['JF3CCN'],
			['JA3ZKK'],
			['JA1YLR'],
			['JA5YAP'],
			['JA0RL/0'],
			['JA7BEW'],
			['JI8PDN'],
			['JN1VNW'],
			['JS1LCB'],
			['JH5CGS'],
			['JJ1YAF'],
			['JH1MVY'],
			['JL6ARC'],
			['JK1GPD'],
			['JE3HAT'],
			['JA1DIG'],
			['JR8QNR'],
			['JA1IRH'],
			['JH3JYS'],
			['JM1AHX'],
			['JK1LFP'],
			['JI1FOK'],
			['JA7GBS'],
			['JI2YUF'],
			['JE1YEM'],
			['JA7WEP'],
			['JA1ODE'],
			['JA2YMD'],
			['JK1KVK'],
			['7M1ELX'],
			['JK1FEM'],
			['JA8ABK'],
			['JH3KSS'],
			['JG2KUT'],
			['JO6SNH/6'],
			['JJ1PSM/1'],
			['JA1FXT/0'],
			['JR2FWN/2'],
			['JA0BHH/1'],
			['JH4VCQ/4'],
			['JG1LWG/1'],
			['JE1YEM'],
			['JJ0HPL'],
			['JA1BSG'],
			['JA1CP'],
			['JA1YXX'],
			['JH1BPR'],
			['JA3QVV'],
			['JH1CRL'],
			['JH1YHS'],
			['JA2YMD'],
			['JE9HXD'],
			['JA1YGX'],
			['JF1WQO'],
			['JR1MRG'],
			['JG2TSL'],
			['JA8RAT'],
			['JI0VWL'],
			['JA1PCM'],
			['JH1DHV/1'],
			['JA7SUR/1'],
			['7M2HCK/1'],
			['JA9FCS/9'],
			['JE1CKA/1'],
			['JG8SIS/8'],
			['JJ2GOB/2'],
			['7M1VUE/1'],
			['JE8DBO'],
			['JG1KVV'],
			['JA1WNZ'],
			['JH3AIV'],
			['JA7FKF'],
			['JA2UDU'],
			['JL6JPU'],
			['JM1GII'],
			['JH1CRL'],
			['JS1LCB'],
			['JA6GCE'],
			['JI6BFF'],
			['JQ2CRT'],
			['JA7DLE'],
			['JA5YAU'],
			['7N4XEC'],
			['JO7DTT'],
			['JR9SLB'],
			['JL1VWL'],
			['JK6SEW'],
			['JA1HG'],
			['JH8NEJ'],
			['JE7YND'],
			['JA2FAS'],
			['JA4NQD'],
			['JF1VAE'],
			['JH2AMH'],
			['JL1EJO'],
			['JH1TID'],
			['JH7CJM'],
			['JA1YCX'],
			['JE2HVC'],
			['JA1OBF'],
			['JL3VUL/3'],
			['JR1YYT/1'],
			['JG1IEB/1'],
			['JH0NVX/1'],
			['JP2MLS/2'],
			['7N4XTA/1'],
			['JH7VVR/1'],
			['JR8QMO/8'],
			['JF6CHA/6'],
			['JP6KMB/1'],
			['JF1NHD/8'],
			['JN1ATL/1'],
			['JG1TCV/1'],
			['JR4PMX/1'],
			['JR8YIK/8'],
			['JR8QHS/8'],
			['JI2ZNP/2'],
			['JN2WZN/2'],
			['7K1PEO/1'],
			['JI2ZNP/2'],
			['JJ0ACA/0'],
			['7M1MCU'],
			['JH2KQR'],
			['JA1TGC'],
			['JA3HZR'],
			['JS1MVH'],
			['JA0BBM'],
			['JA0YAB'],
			['JA1VVH'],
			['JH9VJW'],
			['JA3RK'],
			['7M4VDY'],
			['JA2KKA'],
			['JN3WPH'],
			['JM7OHL'],
			['JA1YNX'],
			['7N3GJR'],
			['JA1BCU'],
			['JA9ALR'],
			['JG0OXL'],
			['JA3YDS'],
			['JH1TID'],
			['JA7ASI'],
			['JI1YED'],
			['7K1NEV'],
			['JA0FVU'],
			['JJ1CBY'],
			['JA7YAF'],
			['JH5GEN'],
			['JI2YUF'],
			['JF3EPU'],
			['JA1BCP'],
			['JA1OQ'],
			['JA1GRH'],
			['JO2VYX'],
			['JJ1JGI'],
			['7N1CGD'],
			['JR1GMK'],
			['JM2CAN'],
			['JG1WNM'],
			['JR1TRE'],
			['JA1HG'],
			['JN1SPR'],
			['JG1ZOO'],
			['JL1OXB'],
			['JA2EPW'],
			['JH6HZE'],
			['JA2ACF'],
			['JH8BKW'],
			['JG2YIV'],
			['JA1II/1'],
			['JA2EJ'],
			['JA1OBG'],
			['JF2WME'],
			['JA1FBH'],
			['JR3KQJ'],
			['JA1CRX'],
			['JA6LAD'],
			['JR1TRE'],
			['JE1HAT'],
			['JA4AQZ'],
			['JA0EPV'],
			['JK6SEW'],
			['JA5KWI'],
			['JA1ZQI'],
			['JA2MZ'],
			['JL1VWL'],
			['JG2YIV'],
			['JJ2FHT'],
			['JA4EZP'],
			['JR5GWR'],
			['JM1JIV'],
			['JA3KYS'],
			['JA5IVG'],
			['JE8NRE/8'],
			['JI2ZKW/2'],
			['JA0GEY/0'],
			['JH2JTW/2'],
			['JG1HTA/1'],
			['JS2KDD/2'],
			['JA2JTN/2'],
			['JI2ZKW/2'],
			['JR4PMX/1'],
			['JG1NDM/1'],
			['7M3BQN/1'],
			['JE7CWH/7'],
			['JA2YAF/2'],
			['JE1QHP/1'],
			['JR7HOD/1'],
			['JH0TIS/0'],
			['JH3FYC/3'],
			['JA0LKK/0'],
			['JA2PEI'],
			['JI0NNM'],
			['JN1GQG'],
			['JA8JCR'],
			['JA1KK'],
			['JA2HOL'],
			['JA1XPU'],
			['JS1VWU'],
			['JS1QAP'],
			['JA1ZQI'],
			['JS1LCB'],
			['JG2TSL'],
			['7L1TTH'],
			['JH1DGY'],
			['JA1CKE'],
			['JR1GMK'],
			['JA1XUY'],
			['JA7YAF'],
			['7M2GDL'],
			['JF6YME'],
			['JH2HOI'],
			['JA8JCR'],
			['JS3VSD'],
			['JR6EKE'],
			['JA6GCE'],
			['JA1BWY'],
			['JA1IKJ'],
			['JI7UGG'],
			['JR6QJR'],
			['7L3NOO'],
			['JP6SPZ'],
			['JQ6XXA'],
			['JR0GOG'],
			['7L4WVU'],
			['JE3WOM'],
			['JM1EZX'],
			['JA0LHG'],
			['JA0IOF'],
			['JA3ZKK'],
			['JG1MNO'],
			['JA8APN'],
			['7N4TML'],
			['JH6FTJ'],
			['JA0IMK'],
			['JG7MYI'],
			['JM1HUX'],
			['7L3IUE'],
			['JR5NMD'],
			['JO3MKL'],
			['JA1CP'],
			['JA1HG'],
			['JA2PFZ'],
			['JH0NVX/1'],
			['JA1YGM'],
			['JA4YHX'],
			['JE1SCJ/1'],
			['JL1HHN/1'],
			['JN1NOP/6'],
			['JA1XRH'],
			['JN1NDK'],
			['JK1QAY'],
			['JN1VNW'],
			['JA1XPU'],
			['JH0SNZ'],
			['7M1MCU'],
			['JR2GDK'],
			['JA2BCQ'],
			['JH2BTM'],
			['JA3AOP'],
			['JH1DJD'],
			['JM4WUZ'],
			['7N2TNI'],
			['JA1BML'],
			['JA1ZQI'],
			['JG1GFU'],
			['JH3AIU'],
			['JA1DIG'],
			['JF1VDI'],
			['JH7PKU/1'],
			['JK3HLP/3'],
			['JR7HOD/1'],
			['JN1ILK/1'],
			['JJ1BDX/3'],
			['JH1VGB/2'],
			['JE6EKC/3'],
			['JA2LOA'],
			['JA1BNW'],
			['JL2VZJ'],
			['JK1OPM'],
			['JA1ZGO'],
			['JJ1KZZ'],
			['7N4PQT'],
			['JQ6XXA'],
			['7N2ECX'],
			['JA1KK'],
			['JH6WDG'],
			['JA1ZBW'],
			['JJ1CBY'],
			['JH9BWC'],
			['JE2GWO'],
			['7N2SPK'],
			['JA1HAP'],
			['JA1IRH'],
			['7K4XVK'],
			['JA2YBG'],
			['7N4TEN'],
			['JH2CMH'],
			['JR1TLA'],
			['JA1DXI'],
			['JF1XQL'],
			['JN1MGC'],
			['JR7GLV'],
			['JH1KSB'],
			['JK1NSR'],
			['JA1KVT'],
			['JK2VOC'],
			['JK3HLP/3'],
			['JA4BEV/1'],
			['JH0MUC/0'],
			['7N4MXU/3'],
			['7K1CPT/1'],
			['JR8YIK/8'],
			['JR0ETA/0'],
			['JO1ZZZ/0'],
			['JH8CXW/8'],
			['JA2JTN/2'],
			['JA7LMU/1'],
			['JF1CPM/1'],
			['JH7PKU/1'],
			['7N4TNU/1'],
			['JK2EIJ/0'],
			['JL1TYY/1'],
			['7K1PEO/1'],
			['JF1VVU/1'],
			['JF2WOW/2'],
			['JI6TJL/1'],
			['7K2DOA/0'],
			['JN1ZBH/1'],
			['JH0EHQ/0'],
			['JA7LMU/1'],
			['JI2ZLX/7'],
			['JF1FHM/1'],
			['JJ0JMT/0'],
			['JF1PQT/7'],
			['JH8EBI/1'],
			['JF8RNL/8'],
			['JK3HLP/3'],
			['JA9IAX/1'],
			['JA0SVO/1'],
			['JA1IHD'],
			['JH7CJM'],
			['JH8SLS'],
			['JA9NIL'],
			['JA1GRH'],
			['JH1VIG'],
			['JA1CC'],
			['JH7VOT'],
			['JQ1HYB'],
			['JK2VOC'],
			['JE1SGH'],
			['JN1PUO'],
			['JA0FVU'],
			['JR4GPA'],
			['JE2WLD'],
			['JA1IE'],
			['JR1MXX'],
			['JI3ACL'],
			['JE8NTJ'],
			['7K2GMJ'],
			['JG0OXL'],
			['JR8NOD'],
			['JH2NWP'],
			['JO1ZYI'],
			['JR8QNR'],
			['JF1VDI'],
			['JA0KJD'],
			['JH3AIU'],
			['JA4YHX'],
			['7K4NBV'],
			['JH3LSS'],
			['JA1YML'],
			['7L2NOJ'],
			['JA1YAX'],
			['JE1WKI'],
			['JK3GWT'],
			['JA7NPV'],
			['JA3EGE'],
			['JA6UKR'],
			['7K4QJF'],
			['JA1ZQI'],
			['JM4UJY'],
			['JI0NXA'],
			['JH2AMH'],
			['JL1KPM'],
			['JA1EJD'],
			['JA2YBG'],
			['JA1CP'],
			['JA1NUD'],
			['7M2MZT'],
			['7N1IAO'],
			['JF7HXA'],
			['7N4UOJ'],
			['JA1KVT'],
			['JH2BTM'],
			['7M2WNR']
			['JA2KSJ']
		];
}
if (call_type == 'DX') {
	g_calldata = [
		['EI1JK'],
		['KD7RFZ'],
		['FR5DZ'],
		['W6TK'],
		['JR1NKN'],
		['YB3IZK'],
		['K7SS'],
		['JA1BJI'],
		['K6GFJ'] ,
		['K7ZA'],
		['T88DT'],
		['YC2VOC'],
		['K7QA'],
		['K6LL'],
		['W6DR'],
		['K0DTJ'],
		['N0KQ'],
		['JA1BJI'],
		['JR1AQI'],
		['K7JZ'],
		['K6LL'],
		['K6YK'],
		['DS1AFL'],
		['JH1GTY'],
		['BG8SRQ'],
		['K7AHF'],
		['BH4JBB'],
		['JA1UHJ'],
		['9V1KG'],
		['UA0CID'],
		['W7NT'],
		['VR2CO'],
		['BH4AYG'],
		['RU0LL'],
		['BG3GEF'],
		['VE7ACN'],
		['UA0DBX'],
		['YB1AR'],
		['BH1RWJ'],
		['K6XX'],
		['JN1THL'],
		['VK6DW'],
		['N0KE'],
		['BD4QA'],
		['W6XB'],
		['VK6AJ'],
		['VK6DW'],
		['AJ6V'],
		['BY3GA'],
		['HS0ZIA'],
		['YE1C'],
		['HS1JZT'],
		['BG2QMO'],
		['ZW5B'],
		['YC1LZT'],
		['NX1P'],
		['BI7OEZ'],
		['BH6KOK'],
		['BD7BW'],
		['BH4TYL'],
		['K6NA'],
		['BG7NKX'],
		['LT1F'],
		['LU4OC'],
		['T88DT'],
		['KH6LC'],
		['BH6KOK'],
		['YC1ZAZ'],
		['W7RM'],
		['KH6J'],
		['BH4DQS'],
		['JE1HRC'],
		['VE7FE'],
		['FK8DD'],
		['BA3QZ'],
		['BG3IYX'],
		['AH0K'],
		['HS0ZAR'],
		['CW4MAX'],
		['BV1EL'],
		['BD7LNI'],
		['HS0AC'],
		['BI4WXD'] ,
		['JA9TOZ/1']
		['KZ5B'],
		['KH5G'],
		['RT4M'],
		['K0MD'],
		['R4SA'],
		['W7RM'],
		['K6LL'],
		['RW0AB'],
		['WA8A'],
		['KA5M'],
		['BD7BW'],
		['W5GN'],
		['UA0DX'],
		['K0FX'],
		['BD3QA'],
		['NR5M'],
		['K7AZT'],
		['K6KB'],
		['W7OM'],
		['BA7NQ'],
		['K6KR'],
		['K0KX'],
		['W7SW'],
		['AC4CA'],
		['K7SCX'],
		['W8KA'],
		['DL9UO'],
		['BD8SRK'],
		['N6BIZ'],
		['WN6K'],
		['W7MBR'],
		['W5DT'],
		['K3RR'],
		['K4OY'],
		['N7AT'],
		['UA0SDX'],
		['NT6X'],
		['K5FP'],
		['W5ZR'],
		['VE6WZ'],
		['UA3A'],
		['RA9Y'],
		['W0AIH'],
		['N6JV'],
		['N6CW'],
		['N6GEO'],
		['W4UAT'],
		['K5TR'],
		['BD7JNA'],
		['WA7AN'],
		['JP1LRT'],
		['WD5K'],
		['KI0I'],
		['JH0ROS/1'],
		['NA6O'],
		['K7JPF'],
		['K7JR'],
		['K6XX'],
		['N0KV'],
		['DU1EV'],
		['JA1YXP'],
		['YE1R'],
		['K7JQ'],
		['S52AU'],
		['R0CAF'],
		['W6TK'],
		['W0ETT'],
		['N6NC'],
		['N6WIN'],
		['W8ZR'],
		['RQ9O'],
		['UP9L'],
		['ZM4T'],
		['LZ5R'],
		['W3AS'],
		['K7TQ'],
		['RT0O'],
		['UA6K'],
		['UA6CC'],
		['BY1OK'],
		['W7GF'],
		['W2FV'],
		['W6FA'],
		['K6AR'],
		['VE5MX'],
		['K6YK'],
		['RL9O'],
		['W6AYC'],
		['KG7CW'],
		['BH4DNQ'],
		['KO6PS'],
		['RK0UT'],
		['W7WA'],
		['W2FV'],
		['VE7VR'],
		['N7EPD'],
		['K7QA'],
		['N6CA'],
		['N7JI'],
		['R7AB'],
		['N7NG'],
		['KA9A'],
		['K9JF/7'],
		['KI7N'],
		['YO8NR'],
		['UA7K'],
		['K7SS'],
		['JJ1XBQ'],
		['NX1P'],
		['VA7DZ'],
		['AD7J'],
		['VE7FE'],
		['VE7AX'],
		['W6IJ'],
		['UA0UY'],
		['RK0S'],
		['RL6M'],
		['RT6A'],
		['US8UA'],
		['EW8W'],
		['RA9YE'],
		['UT6UD'],
		['RZ4AG'],
		['ZL3X'],
		['OE5OHO'],
		['RN0CW'],
		['LZ9W'],
		['UZ3A'],
		['RT3F'],
		['BH1RGL'],
		['UA0WF'],
		['SN8N'],
		['HL2UXK'],
		['YT5HA'],
		['PP5BI'],
		['9A7A'],
		['SN8B'],
		['BV1EL'],
		['DL4A'],
		['CE3CT'],
		['N5AW'],
		['N5CR'],
		['W2FU'],
		['WJ9B'],
		['N4NO'],
		['N7AT'],
		['N7QS'],
		['N4BP'],
		['KO7SS'],
		['W7NT'],
		['K9CT'],
		['K6UM'],
		['K7UA'],
		['K6WSC'],
		['KM6Z'],
		['JA1YXP'],
		['N6LL'],
		['N7VS'],
		['W6JTI'],
		['NT6X'],
		['VE7BGP'],
		['JA1IAZ'],
		['W7TX'],
		['WA7AN'],
		['WA5SOG'],
		['N6WIN'],
		['W5SWV'],
		['K5OA'],
		['W5WZ'],
		['KQ5U'],
		['W8KA'],
		['K6MM'],
		['NG7M'],
		['K0KX'],
		['KD5M'],
		['WX4G'],
		['WA6KHK'],
		['N6JV'],
		['PU2WDF'],
		['W7OM'],
		['K5NB'],
		['N6AR'],
		['N5KWN'],
		['PY2FUL'],
		['N7RVD'],
		['WJ7R'],
		['K3LR'],
		['AD1C'],
		['K6RIM'],
		['N5WNG'],
		['K5UA'],
		['KZ5D'],
		['AG6JA'],
		['W5GN'],
		['WA8ZBT'],
		['WO7V'],
		['W4UAT'],
		['PY2FRQ'],
		['N7NG'],
		['W3LL'],
		['W5PF'],
		['N6PN'],
		['W0AIH'],
		['K5WA'],
		['VK5GR'],
		['K7HBN'],
		['W0BV'],
		['BA4EO'],
		['RD0CD'],
		['OH6R'],
		['OH6RE'],
		['OH5UQ'],
		['BA5DX'],
		['LY2W']
	];
}
}
const delcall = () => {
	g_calldata.splice(g_calldata.length - 1, g_calldata);
}
const keyboardButtonCheck = (e) => {
	const target = e.target;
	if(target.value != ""){
		if (target.value == "del") {
			ClickOnDel();
		} else {
			ClickOn(target.value);
		}
	}
}
const ClickOn = (key) => {
	let Enter_Call = new Array(document.getElementById("Box").value);
	if ( Enter_Call[0] == '' ){
		Enter_Call[0] = key;
	} else {
		Enter_Call.push(key);
	}
	document.getElementById("Box").value = Enter_Call.join('');
}
const ClickOnDel = () => {
	let Enter_Call = document.getElementById("Box").value.split('');
	Enter_Call.pop();
	document.getElementById("Box").value = Enter_Call.join('');
}
const selectCallsign = () => {
	document.getElementById('PlayButton').disabled = true;

	if(g_repeat_wrong_signal) {
		const preans = document.getElementById('Result_Now').value;
		if( preans.charAt(0) == 'R') { // 直前の符号を聞き取れているならば
			const row = Math.floor(Math.random() * (g_calldata.length));
			g_anscall = String(g_calldata[row]);
		}
	} else {
		const row = Math.floor(Math.random() * (g_calldata.length));
		g_anscall = String(g_calldata[row]);
	}

	// add DE
	g_anscall = g_anscall.replace(/^DE /y, '$`');
	if( g_addDe ) {
		g_anscall = String('DE ' + g_anscall);
	}

	const time = cw_start(g_anscall);

	setTimeout(() => { document.getElementById('AnswerButton').disabled = false; }, time * 1000);
}
const answerCheck = () => {
	const urAns = new String(document.getElementById("Box").value.toUpperCase());
	const ans = g_anscall.replace(/^DE /y, '$`');

	let match_result = ans.length;
	let result_dif = new Array();
	for (let i = 0; i <= ans.length - 1 && i <= urAns.length - 1; i++) {
		//check answer
		if (ans.charAt(i) == urAns.charAt(i)) {
			result_dif[i] = '〇';
			match_result--;
		} else {
			result_dif[i] = '×';
		}
	}

	if (match_result == 0) {
		document.getElementById("Result_Now").value = 'R_' + result_dif;
		const right_counter = parseInt(document.getElementById("RightCount").value);
		document.getElementById("RightCount").value = right_counter + 1;
	}
	if (match_result != 0) {
		document.getElementById("Result_Now").value = 'W_' + result_dif;
		const wrong_counter = parseInt(document.getElementById("WrongCount").value);
		document.getElementById("WrongCount").value = wrong_counter + 1;
	}
	document.getElementById('Box').value = '';

	document.getElementById('History').value += '\n' + ans + '-' + urAns;
	document.getElementById('PlayButton').disabled = false;
	document.getElementById('AnswerButton').disabled = true;
}
// if you use pc, register to event listener.
const keyDown = (e) => {
	const keyCode = e.keyCode;
	if ( keyCode == 13 ) { // Enter key
		document.getElementById('AnswerButton').click();
		document.getElementById('PlayButton').click();
		document.getElementById('Box').focus();
	}
	if( keyCode == 27 ) { // ESC key
		cw_stop();
		document.getElementById('Box').value = "";
		document.getElementById('Result_Now').value = "_";
		document.getElementById('PlayButton').disabled = false;
		document.getElementById('AnswerButton').disabled = true;
	}
}

//イベントリスナーに関数を登録する。
const initAddEvent = () => {
	document.getElementById('PlayButton').addEventListener('click', selectCallsign, false);
	document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
	document.getElementById('radioButton_log').addEventListener('click', (e) =>{ loadText(e.target.value); }, false);
	document.getElementById('checkbox_addDe').addEventListener('click', () => { g_addDe = !g_addDe; }, false);
	document.getElementById('checkbox_rws').addEventListener('click', () => { g_repeat_wrong_signal = !g_repeat_wrong_signal; }, false);
	document.getElementById('AnswerButton').addEventListener('click', answerCheck);

	if(
		navigator.userAgent.indexOf('iPhone') > 0 ||
		navigator.userAgent.indexOf('iPad') > 0 ||
		navigator.userAgent.indexOf('iPod') > 0 ||
		navigator.userAgent.indexOf('Android') > 0 )
	{
		// if you use tablet,
	} else
	{
		// if you use pc,
		document.addEventListener('keydown', keyDown);
	}

	document.getElementById('AnswerButton').disabled = true;
}
const initData = () => {
	loadText('Ja');
}
let g_calldata = new Array;
let g_anscall = new String;
let g_addDe = false;
let g_repeat_wrong_signal = true;
initAddEvent();
initData();
